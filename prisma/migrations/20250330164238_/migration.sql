-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "disability" TEXT,
    "url_foto_de_perfil" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "disability", "email", "id", "name", "number", "password", "role", "updatedAt", "url_foto_de_perfil") SELECT "createdAt", "disability", "email", "id", "name", "number", "password", "role", "updatedAt", "url_foto_de_perfil" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_number_key" ON "User"("number");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
