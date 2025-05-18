/*
  Warnings:

  - You are about to drop the column `routeId` on the `Stop` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "RouteStop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "routeId" INTEGER NOT NULL,
    "stopId" INTEGER NOT NULL,
    "order" INTEGER,
    CONSTRAINT "RouteStop_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RouteStop_stopId_fkey" FOREIGN KEY ("stopId") REFERENCES "Stop" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Stop" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "latitude" REAL,
    "longitude" REAL
);
INSERT INTO "new_Stop" ("id", "name") SELECT "id", "name" FROM "Stop";
DROP TABLE "Stop";
ALTER TABLE "new_Stop" RENAME TO "Stop";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "RouteStop_routeId_stopId_key" ON "RouteStop"("routeId", "stopId");
