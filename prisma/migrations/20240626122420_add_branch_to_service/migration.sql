-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "branchId" INTEGER;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("branchId") ON DELETE SET NULL ON UPDATE CASCADE;
