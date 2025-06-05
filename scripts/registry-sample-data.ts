import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as luandaStopsJson from '../data/luanda-stops.json';

const prisma = new PrismaClient();

function generateRandomDate(monthOffset: number) {
  const today = new Date();
  const randomDay = Math.floor(Math.random() * 28) + 1; // Para garantir que o dia seja válido (1-28)
  today.setMonth(today.getMonth() + monthOffset);
  today.setDate(randomDay);
  return today;
}

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
    
    const luandaStops = luandaStopsJson.elements;
    for (const luandaStop of luandaStops) {
      const name = luandaStop.tags.name || 'N/A';
      await prisma.stop.create({
        data: {
          name,
          latitude: luandaStop.lat,
          longitude: luandaStop.lon
        },
      });
    }
    
    const stops = await prisma.stop.findMany({});
    const stopCout = stops.length;
    //const stopMap = Object.fromEntries(createdStops.map(stop => [stop.name, stop.id]))
    const validStopIds = await prisma.stop.findMany({ select: { id: true } });
    const validRouteIds = await prisma.route.findMany({ select: { id: true } });
    const stopIds = validStopIds.map((stop) => stop.id);

    await prisma.routeStop.createMany({
      data:[
        { routeId: 1, stopId: stopIds[Math.floor(Math.random() * stopIds.length)] },
        { routeId: 1, stopId: stopIds[Math.floor(Math.random() * stopIds.length)] },
        { routeId: 2, stopId: stopIds[Math.floor(Math.random() * stopIds.length)] },
        { routeId: 2, stopId: stopIds[Math.floor(Math.random() * stopIds.length)] },
        { routeId: 2, stopId: stopIds[Math.floor(Math.random() * stopIds.length)] },
        { routeId: 3, stopId: stopIds[Math.floor(Math.random() * stopIds.length)] },
        { routeId: 4, stopId: stopIds[Math.floor(Math.random() * stopIds.length)] },
        { routeId: 4, stopId: stopIds[Math.floor(Math.random() * stopIds.length)] },
        { routeId: 5, stopId: stopIds[Math.floor(Math.random() * stopIds.length)] },
        { routeId: 1, stopId: stopIds[Math.floor(Math.random() * stopIds.length)] },
      ]
    })

    console.log('Stops created:', stops.length);
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
    
    const driversIDs = [1, 2]; // IDs dos 2 drivers
    const busesIDs = [1, 2];   // IDs dos 2 buses
    const routesIDs = [1, 2, 3, 4, 5]; // IDs das 5 rotas
    const profits = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    for (let i = 0; i < 20; i++) {
        const monthOffset = Math.floor(i / 10);
        const createdAt = generateRandomDate(monthOffset); 

        const routeId = routesIDs[Math.floor(Math.random() * routesIDs.length)];
        const driverId = driversIDs[Math.floor(Math.random() * driversIDs.length)];
        const busId = busesIDs[Math.floor(Math.random() * busesIDs.length)];
        const profit = profits[Math.floor(Math.random() * profits.length)];

        const departureTime = new Date(createdAt.getTime());
        departureTime.setHours(departureTime.getHours() + Math.floor(Math.random() * 4));
        const arrivalTime = new Date(departureTime.getTime());
        arrivalTime.setHours(arrivalTime.getHours() + Math.floor(Math.random() * 4) + 1);

        await prisma.travel.create({
                data: {
                routeId,
                driverId,
                busId,
                profit,
                departureTime,
                arrivalTime,
                createdAt
            },
        });
    }

    console.log('Travel created:', 20);
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
