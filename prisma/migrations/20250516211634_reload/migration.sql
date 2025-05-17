/*
  Warnings:

  - You are about to drop the column `nia` on the `Driver` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Driver" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "licenseNumber" TEXT NOT NULL,
    "url_foto_de_perfil" TEXT,
    "experienceTime" INTEGER NOT NULL,
    "effectiveDate" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'AVAILABLE',
    "currentLatitude" REAL,
    "currentLongitude" REAL,
    "lastLogin" DATETIME,
    "deviceToken" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "rating" REAL NOT NULL DEFAULT 0,
    "assignedBusNia" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Driver" ("assignedBusNia", "createdAt", "currentLatitude", "currentLongitude", "deviceToken", "effectiveDate", "email", "experienceTime", "id", "isVerified", "lastLogin", "licenseNumber", "name", "password", "phone", "rating", "status", "updatedAt", "url_foto_de_perfil") SELECT "assignedBusNia", "createdAt", "currentLatitude", "currentLongitude", "deviceToken", "effectiveDate", "email", "experienceTime", "id", "isVerified", "lastLogin", "licenseNumber", "name", "password", "phone", "rating", "status", "updatedAt", "url_foto_de_perfil" FROM "Driver";
DROP TABLE "Driver";
ALTER TABLE "new_Driver" RENAME TO "Driver";
CREATE UNIQUE INDEX "Driver_email_key" ON "Driver"("email");
CREATE UNIQUE INDEX "Driver_phone_key" ON "Driver"("phone");
CREATE UNIQUE INDEX "Driver_licenseNumber_key" ON "Driver"("licenseNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
