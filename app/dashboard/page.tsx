"use client"

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getUserByEmail, getUserReservationByName } from '@/actions/dashboard-actions';
import { reservationSchema } from '@/lib/schema';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const [name, setName] = useState<string | null>('');
  const [reservations, setReservations] = useState<typeof reservationSchema['_output'][] | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (status === 'loading') return;
      if (!session) {
        redirect('/sign-in');
      }

      const email = session?.user?.email;
      if (typeof email === 'string') {
        try {
          const user = await getUserByEmail(email); 
          console.log('User data:', user);
          
          if (user) {
            setName(user.fullName); 
          } else {
            console.error('User not found');
          }

          if (user && user.fullName) {
            const userReservations = await getUserReservationByName(user.fullName);
            
            const transformedReservations = userReservations.map(reservation => ({
              name: reservation.name,
              phoneNumber: reservation.phoneNumber,
              serviceType: reservation.serviceType,
              date: new Date(reservation.date),
              time: reservation.time,
            }));

            setReservations(transformedReservations);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        console.error('Invalid email:', email);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className='mt-[80px] wrapper min-h-[400px] mb-20'>
      <div className='h-[300px] flex text-center w-full items-center flex-col gap-y-4 justify-center text-gold'>
        <h1 className='text-3xl md:text-4xl'>
          Welcome, {name}
        </h1>
        <Link href="/reserve">
          <Button className='bg-gold rounded-full flex gap-x-4 hover:gap-x-6 hover:bg-orange-300'>
            Create a Reservations <Plus />
          </Button>
        </Link>
        <p className='text-black/70 text-center'>These are your past reservations</p>
      </div>
      <div>
        {reservations ? (
          <ul>
            {reservations.map((reservation, index) => (
              <li key={index} className='bg-white p-6 my-4 shadow-md rounded-lg border-2 border-gold flex justify-between w-full'>
                <div className='flex flex-col gap-y-6'>
                  <div>
                    <p className='text-xl '>{reservation.name}</p>
                    <p className='text-black/70'>{reservation.phoneNumber}</p>
                  </div>
                  <div>   
                    <p>Date : {reservation.date.toLocaleDateString()}</p>
                    <p>Time : {reservation.time}</p>
                  </div>
                </div>
                <div>
                  <p className='font-alta text-gold text-2xl font-bold'>{reservation.serviceType}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className='flex flex-col gap-y-4 items-center'>
            <p className='w-full text-center'>No reservations found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
