import {Gym, Prisma} from "@prisma/client";

export interface GymsRepository{
    findById(id:string):Promise< Gym | null >
    searchMany(title:string,page:number):Promise<Gym[]>
    create(data: Prisma.GymCreateInput):Promise<Gym>
}