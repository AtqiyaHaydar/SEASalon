/*
  Warnings:

  - You are about to drop the column `dateAndTime` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `date` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "dateAndTime",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL;
