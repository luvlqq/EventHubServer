/*
  Warnings:

  - You are about to drop the column `availiablePlace` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "availiablePlace",
ADD COLUMN     "availablePlace" INTEGER;
