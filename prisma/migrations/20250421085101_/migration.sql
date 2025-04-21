/*
  Warnings:

  - Added the required column `estimatedTime` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Route" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "departureTime" TEXT NOT NULL,
    "estimatedTime" TEXT NOT NULL,
    "arrivalTime" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active'
);
INSERT INTO "new_Route" ("arrivalTime", "departureTime", "destination", "id", "name", "origin", "status") SELECT "arrivalTime", "departureTime", "destination", "id", "name", "origin", "status" FROM "Route";
DROP TABLE "Route";
ALTER TABLE "new_Route" RENAME TO "Route";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
