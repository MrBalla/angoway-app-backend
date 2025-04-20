/*
  Warnings:

  - A unique constraint covering the columns `[matricula]` on the table `Bus` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Route" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "estimatedTime" TEXT NOT NULL
);
INSERT INTO "new_Route" ("destination", "estimatedTime", "id", "origin") SELECT "destination", "estimatedTime", "id", "origin" FROM "Route";
DROP TABLE "Route";
ALTER TABLE "new_Route" RENAME TO "Route";
CREATE UNIQUE INDEX "Route_name_key" ON "Route"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Bus_matricula_key" ON "Bus"("matricula");
