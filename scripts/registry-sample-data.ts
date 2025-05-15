import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function createSampleData() {
  try {
    const password = '108449123Dss';
    const hashedPassword = await bcrypt.hash(password, 10);

    const users = await prisma.user.createMany({
      data: [
        { name: 'Dario', 
          email: 'dario@gmail.com', 
          number: '945193073', 
          password: hashedPassword, 
          role: 'USER' },
        { name: 'Pedro', 
          email: 'pedro@gmail.com', 
          number: '934945740', 
          password: hashedPassword, 
          role: 'USER' },
        { name: 'Rebeca', 
          email: 'rebeca@gmail.com', 
          number: '912345678', 
          password: hashedPassword, 
          role: 'USER' },
        { name: 'Fernando', 
          email: 'fernando@gmail.com', 
          number: '923456789', 
          password: hashedPassword, 
          role: 'ADMIN' },
        ]
    });
    const drivers = await prisma.driver.createMany({
        data:[
            { 
                name: 'Orlando', 
                email: 'orlando@gmail.com',
                phone: '911223344', 
                password: hashedPassword,
                licenseNumber: 'cb9a8f',
                experienceTime: 1
            },
            {    
                name: 'Laurentino', 
                email: 'laurentino@gmail.com', 
                phone: '922334455', 
                password: hashedPassword,
                licenseNumber: 'a922d0',
                experienceTime: 3
            },
        ],
    });
    console.log('Users created:', users.count);
    console.log('Drivers created', drivers.count);

    const orlando = await prisma.driver.findUnique({ where: { email: 'orlando@gmail.com' } });
    const laurentino = await prisma.driver.findUnique({ where: { email: 'laurentino@gmail.com' } });

    if (!orlando || !laurentino) {
      throw new Error('Failed to find driver users.');
    }

    const routes = await prisma.route.createMany({ 
      data: [
        { name: 'Luanda Central to Viana', 
          origin: 'Luanda Central', 
          destination: 'Viana',
          status: 'active' 
        },
        { name: 'Luanda Sul to Cacuaco', 
          origin: 'Luanda Sul', 
          destination: 'Cacuaco', 
          status: 'active' 
        },
        { name: 'Luanda to Talatona', 
          origin: 'Luanda Central', 
          destination: 'Talatona', 
          status: 'active' 
        },
        { name: 'Luanda to Kilamba', 
          origin: 'Luanda Central', 
          destination: 'Kilamba',
          status: 'active' 
        },
        { name: 'Luanda to Benfica', 
          origin: 'Luanda Central', 
          destination: 'Benfica',
          status: 'active' 
        },
      ],
    });
    const routeSchedules = await prisma.routeSchedule.createMany({
        data: [
            {
                routeId: 1,
                departureLocation: 'Luanda Central',
                arrivalLocation: 'Cacuaco Park',
                departureTime: '2025-12-05T14:30:00Z',
                arrivalTime: '2025-12-05T15:25:00Z',
                estimatedDurationMinutes: 55,
                status: 'active',
                distanceKM: 56.00
            }
        ]  
    });
    console.log('Routes created:', routes.count);

    const stops = await prisma.stop.createMany({
      data: [
        { name: 'Mutamba', routeId: 1 },
        { name: 'Rocha Pinto', routeId: 1 },
        { name: 'Vila de Viana', routeId: 1 },
        { name: 'Calemba', routeId: 2 },
        { name: 'Kikolo', routeId: 2 },
        { name: 'Cacuaco Centro', routeId: 2 },
        { name: 'Talatona Centro', routeId: 3 },
        { name: 'Kilamba Central', routeId: 4 },
        { name: 'Benfica Praia', routeId: 5 },
        { name: 'Cidade do Kilamba', routeId: 4 },
      ],
    });
    console.log('Stops created:', stops.count);
    const buses = await prisma.bus.createMany({
      data: [
        {
          nia: 'BUS001',
          matricula: 'LDA-123-45',
          driverId: orlando.id,
          routeId: 1,
          status: 'IN_TRANSIT',
          capacity: 50,
          currentLoad: 30,
        },
        {
          nia: 'BUS002',
          matricula: 'LDA-678-90',
          driverId: laurentino.id,
          routeId: 2,
          status: 'IN_TRANSIT',
          capacity: 40,
          currentLoad: 25,
        },
      ],
    });

      

    console.log('Buses created:', buses.count);

    console.log('✅ Sample data created successfully.');
  } catch (error) {
    console.error('❌ Error creating sample data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

createSampleData().catch((error) => {
  console.error(error);
  process.exit(1);
});
