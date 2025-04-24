export type busDetails = {
    data:{
        status: string,
        capacity: number,
        currentLoad: number,
        route: {
            origin: string,
            destination: string,
            estimatedTime: number,
            stops: string[]
        },
        origin: string,
        destination: string,
        estimatedTime: number,
        numberOfStops: number
    }
}