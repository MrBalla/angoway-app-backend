export type AlertNotification = {
    type: string;
    driverId: number;
    message: string;
    loc: { lat: number, lng: number };
    timestamp: number
}