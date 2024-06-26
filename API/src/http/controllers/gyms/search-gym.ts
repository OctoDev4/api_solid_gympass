import {FastifyReply, FastifyRequest} from "fastify";
import {z} from "zod";
import {makeCreateGymUseCase} from "@/use-cases/factories/make-create-gym-use-case";
import {makeSearchGymsUseCase} from "@/use-cases/factories/make-search-gyms-use-case";

export async function searchGym(request:FastifyRequest,reply:FastifyReply)
{
    const searchGymsQuerySchema = z.object({
        query: z.string(),
        page: z.coerce.number().min(1).default(1)

    });

    const {query,page} = searchGymsQuerySchema.parse(request.query)


    const searchGymsUseCase = makeSearchGymsUseCase()

   const {gyms} =  await  searchGymsUseCase.execute({
        query,
        page
    })

    return reply.status(200).send({
        gyms: gyms
    })

}