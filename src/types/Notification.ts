export type Notification = {
  id?: number;
  userId: number;
  driverId: number;
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
};
