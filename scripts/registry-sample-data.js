"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var bcrypt = require("bcrypt");
var luandaStopsJson = require("../data/luanda-stops.json");
var prisma = new client_1.PrismaClient();
function generateRandomDate(monthOffset) {
    var today = new Date();
    var randomDay = Math.floor(Math.random() * 28) + 1; // Para garantir que o dia seja válido (1-28)
    today.setMonth(today.getMonth() + monthOffset);
    today.setDate(randomDay);
    return today;
}
function createSampleData() {
    return __awaiter(this, void 0, void 0, function () {
        var password, hashedPassword, users, drivers, orlando, laurentino, routes, routeSchedules, luandaStops, _i, luandaStops_1, luandaStop, name_1, stops, stopCout, validStopIds, validRouteIds, stopIds, buses, driversIDs, busesIDs, routesIDs, profits, i, monthOffset, createdAt, routeId, driverId, busId, profit, departureTime, arrivalTime, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 21, 22, 24]);
                    password = '108449123Dss';
                    return [4 /*yield*/, bcrypt.hash(password, 10)];
                case 1:
                    hashedPassword = _a.sent();
                    return [4 /*yield*/, prisma.user.createMany({
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
                        })];
                case 2:
                    users = _a.sent();
                    return [4 /*yield*/, prisma.driver.createMany({
                            data: [
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
                        })];
                case 3:
                    drivers = _a.sent();
                    console.log('Users created:', users.count);
                    console.log('Drivers created', drivers.count);
                    return [4 /*yield*/, prisma.driver.findUnique({ where: { email: 'orlando@gmail.com' } })];
                case 4:
                    orlando = _a.sent();
                    return [4 /*yield*/, prisma.driver.findUnique({ where: { email: 'laurentino@gmail.com' } })];
                case 5:
                    laurentino = _a.sent();
                    if (!orlando || !laurentino) {
                        throw new Error('Failed to find driver users.');
                    }
                    return [4 /*yield*/, prisma.route.createMany({
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
                        })];
                case 6:
                    routes = _a.sent();
                    return [4 /*yield*/, prisma.routeSchedule.createMany({
                            data: [
                                {
                                    routeId: 1,
                                    departureLocation: 'Luanda Central',
                                    arrivalLocation: 'Cacuaco Park',
                                    departureTime: '2025-12-05T14:30:00Z',
                                    arrivalTime: '2025-12-05T15:25:00Z',
                                    estimatedDurationMinutes: 55,
                                    status: 'active',
                                    distanceKM: 56.0,
                                },
                                {
                                    routeId: 2,
                                    departureLocation: 'Luanda Sul',
                                    arrivalLocation: 'Cacuaco',
                                    departureTime: '2025-12-05T14:30:00Z',
                                    arrivalTime: '2025-12-05T15:25:00Z',
                                    estimatedDurationMinutes: 55,
                                    status: 'active',
                                    distanceKM: 56.0,
                                },
                                {
                                    routeId: 3,
                                    departureLocation: 'Luanda Central',
                                    arrivalLocation: 'Talatona',
                                    departureTime: '2025-12-05T07:30:00Z',
                                    arrivalTime: '2025-12-05T07:55:00Z',
                                    estimatedDurationMinutes: 25,
                                    status: 'active',
                                    distanceKM: 54.0,
                                },
                                {
                                    routeId: 4,
                                    departureLocation: 'Luanda Central',
                                    arrivalLocation: 'Kilamba',
                                    departureTime: '2025-12-05T14:30:00Z',
                                    arrivalTime: '2025-12-05T15:25:00Z',
                                    estimatedDurationMinutes: 55,
                                    status: 'active',
                                    distanceKM: 56.0,
                                },
                            ],
                        })];
                case 7:
                    routeSchedules = _a.sent();
                    console.log("Schedules Created", routeSchedules.count);
                    console.log('Routes created:', routes.count);
                    luandaStops = luandaStopsJson.elements;
                    _i = 0, luandaStops_1 = luandaStops;
                    _a.label = 8;
                case 8:
                    if (!(_i < luandaStops_1.length)) return [3 /*break*/, 11];
                    luandaStop = luandaStops_1[_i];
                    name_1 = luandaStop.tags.name || 'N/A';
                    return [4 /*yield*/, prisma.stop.create({
                            data: {
                                name: name_1,
                                latitude: luandaStop.lat,
                                longitude: luandaStop.lon
                            },
                        })];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    _i++;
                    return [3 /*break*/, 8];
                case 11: return [4 /*yield*/, prisma.stop.findMany({})];
                case 12:
                    stops = _a.sent();
                    stopCout = stops.length;
                    return [4 /*yield*/, prisma.stop.findMany({ select: { id: true } })];
                case 13:
                    validStopIds = _a.sent();
                    return [4 /*yield*/, prisma.route.findMany({ select: { id: true } })];
                case 14:
                    validRouteIds = _a.sent();
                    stopIds = validStopIds.map(function (stop) { return stop.id; });
                    return [4 /*yield*/, prisma.routeStop.createMany({
                            data: [
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
                        })];
                case 15:
                    _a.sent();
                    console.log('Stops created:', stops.length);
                    return [4 /*yield*/, prisma.bus.createMany({
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
                        })];
                case 16:
                    buses = _a.sent();
                    console.log('Buses created:', buses.count);
                    driversIDs = [1, 2];
                    busesIDs = [1, 2];
                    routesIDs = [1, 2, 3, 4, 5];
                    profits = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
                    i = 0;
                    _a.label = 17;
                case 17:
                    if (!(i < 20)) return [3 /*break*/, 20];
                    monthOffset = Math.floor(i / 5);
                    createdAt = generateRandomDate(monthOffset);
                    routeId = routesIDs[Math.floor(Math.random() * routesIDs.length)];
                    driverId = driversIDs[Math.floor(Math.random() * driversIDs.length)];
                    busId = busesIDs[Math.floor(Math.random() * busesIDs.length)];
                    profit = profits[Math.floor(Math.random() * profits.length)];
                    departureTime = new Date(createdAt.getTime());
                    departureTime.setHours(departureTime.getHours() + Math.floor(Math.random() * 4));
                    arrivalTime = new Date(departureTime.getTime());
                    arrivalTime.setHours(arrivalTime.getHours() + Math.floor(Math.random() * 4) + 1);
                    return [4 /*yield*/, prisma.travel.create({
                            data: {
                                routeId: routeId,
                                driverId: driverId,
                                busId: busId,
                                profit: profit,
                                departureTime: departureTime,
                                arrivalTime: arrivalTime,
                                createdAt: createdAt
                            },
                        })];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    i++;
                    return [3 /*break*/, 17];
                case 20:
                    console.log('Travel created:', 20);
                    console.log('✅ Sample data created successfully.');
                    return [3 /*break*/, 24];
                case 21:
                    error_1 = _a.sent();
                    console.error('❌ Error creating sample data:', error_1);
                    throw error_1;
                case 22: return [4 /*yield*/, prisma.$disconnect()];
                case 23:
                    _a.sent();
                    return [7 /*endfinally*/];
                case 24: return [2 /*return*/];
            }
        });
    });
}
createSampleData().catch(function (error) {
    console.error(error);
    process.exit(1);
});
