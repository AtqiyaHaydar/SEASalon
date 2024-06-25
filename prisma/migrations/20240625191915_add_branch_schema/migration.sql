-- CreateTable
CREATE TABLE "Branch" (
    "branchId" SERIAL NOT NULL,
    "branchName" TEXT NOT NULL,
    "branchLocation" TEXT NOT NULL,
    "openingTime" TEXT NOT NULL,
    "closingTime" TEXT NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("branchId")
);
