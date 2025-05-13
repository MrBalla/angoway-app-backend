/*
  Warnings:

  - You are about to drop the column `arrivalTime` on the `Route` table. All the data in the column will be lost.
  - You are about to drop the column `departureTime` on the `Route` table. All the data in the column will be lost.
  - You are about to drop the column `estimatedTime` on the `Route` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "RouteSchedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "routeId" INTEGER NOT NULL,
    "departureLocation" TEXT NOT NULL,
    "arrivalLocation" TEXT NOT NULL,
    "departureTime" TEXT NOT NULL,
    "arrivalTime" TEXT NOT NULL,
    "estimatedDurationMinutes" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "distanceKM" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Route" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active'
);
INSERT INTO "new_Route" ("destination", "id", "name", "origin", "status") SELECT "destination", "id", "name", "origin", "status" FROM "Route";
DROP TABLE "Route";
ALTER TABLE "new_Route" RENAME TO "Route";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
