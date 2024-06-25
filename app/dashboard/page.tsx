"use client"

import React, { useEffect } from 'react'

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const DashboardPage = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      redirect('/sign-in');
    }
  }, [session, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-[80px] wrapper'>
      TEST
    </div>
  );
};

export default DashboardPage