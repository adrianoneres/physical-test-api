/*
  Warnings:

  - You are about to drop the column `agility_evaluator` on the `physical_tests` table. All the data in the column will be lost.
  - You are about to drop the column `flexibility_evaluator` on the `physical_tests` table. All the data in the column will be lost.
  - You are about to drop the column `general_resistance_evaluator` on the `physical_tests` table. All the data in the column will be lost.
  - You are about to drop the column `lower_limb_strength_evaluator` on the `physical_tests` table. All the data in the column will be lost.
  - You are about to drop the column `muscular_endurance_evaluator` on the `physical_tests` table. All the data in the column will be lost.
  - You are about to drop the column `speed_evaluator` on the `physical_tests` table. All the data in the column will be lost.
  - You are about to drop the column `strength_resistance_evaluator` on the `physical_tests` table. All the data in the column will be lost.
  - You are about to drop the column `upper_limb_strength_evaluator` on the `physical_tests` table. All the data in the column will be lost.
  - You are about to drop the column `wingspan_evaluator` on the `physical_tests` table. All the data in the column will be lost.
  - Added the required column `institution_id` to the `physical_tests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_active` to the `physical_tests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professional_id` to the `physical_tests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "physical_tests" DROP COLUMN "agility_evaluator",
DROP COLUMN "flexibility_evaluator",
DROP COLUMN "general_resistance_evaluator",
DROP COLUMN "lower_limb_strength_evaluator",
DROP COLUMN "muscular_endurance_evaluator",
DROP COLUMN "speed_evaluator",
DROP COLUMN "strength_resistance_evaluator",
DROP COLUMN "upper_limb_strength_evaluator",
DROP COLUMN "wingspan_evaluator",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "institution_id" TEXT NOT NULL,
ADD COLUMN     "is_active" BOOLEAN NOT NULL,
ADD COLUMN     "professional_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "physical_tests" ADD CONSTRAINT "physical_tests_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "institutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "physical_tests" ADD CONSTRAINT "physical_tests_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "professionals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
