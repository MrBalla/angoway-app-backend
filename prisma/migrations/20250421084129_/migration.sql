/*
  Warnings:

  - You are about to drop the column `latitude` on the `Bus` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Bus` table. All the data in the column will be lost.
  - Added the required column `location` to the `Bus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "matricula" TEXT NOT NULL,
    "driverId" INTEGER NOT NULL,
    "routeId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'IN_TRANSIT',
    "capacity" INTEGER NOT NULL,
    "currentLoad" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Bus_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bus_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bus" ("capacity", "currentLoad", "driverId", "id", "matricula", "routeId", "status", "updatedAt") SELECT "capacity", "currentLoad", "driverId", "id", "matricula", "routeId", "status", "updatedAt" FROM "Bus";
DROP TABLE "Bus";
ALTER TABLE "new_Bus" RENAME TO "Bus";
CREATE UNIQUE INDEX "Bus_matricula_key" ON "Bus"("matricula");
CREATE TABLE "new_Route" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "departureTime" TEXT NOT NULL,
    "arrivalTime" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active'
);
INSERT INTO "new_Route" ("arrivalTime", "departureTime", "destination", "id", "origin", "status") SELECT "arrivalTime", "departureTime", "destination", "id", "origin", "status" FROM "Route";
DROP TABLE "Route";
ALTER TABLE "new_Route" RENAME TO "Route";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
