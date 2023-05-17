/*
  Warnings:

  - Added the required column `joinEvents` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "joinEvents",
ADD COLUMN     "joinEvents" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_joinEvents_fkey" FOREIGN KEY ("joinEvents") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
