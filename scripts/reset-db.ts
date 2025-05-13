import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function resetDatabase() {
  try {
    // Delete records in the correct order to avoid foreign key constraint issues
    await prisma.notification.deleteMany({});
    await prisma.feedback.deleteMany({});
    await prisma.stop.deleteMany({});
    await prisma.bus.deleteMany({});
    await prisma.route.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.driver.deleteMany({});

    // Reset SQLite auto-increment sequences
    await prisma.$executeRaw`DELETE FROM sqlite_sequence;`;

    console.log('Database reset successfully.');
  } catch (error) {
    console.error('Error resetting database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

resetDatabase().catch((error) => {
  console.error(error);
  process.exit(1);
});
