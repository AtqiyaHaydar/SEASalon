-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "serviceType" TEXT NOT NULL DEFAULT 'Haircuts and Styling',
    "dateAndTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerReview" (
    "id" SERIAL NOT NULL,
    "customerName" TEXT NOT NULL,
    "starRating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "CustomerReview_pkey" PRIMARY KEY ("id")
);
