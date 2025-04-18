/*
  Warnings:

  - You are about to drop the column `location` on the `Bus` table. All the data in the column will be lost.

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
    "latitude" REAL,
    "longitude" REAL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Bus_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bus_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bus" ("capacity", "currentLoad", "driverId", "id", "matricula", "routeId", "status", "updatedAt") SELECT "capacity", "currentLoad", "driverId", "id", "matricula", "routeId", "status", "updatedAt" FROM "Bus";
DROP TABLE "Bus";
ALTER TABLE "new_Bus" RENAME TO "Bus";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
