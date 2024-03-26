import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";
import {AuthenticateRoute} from "@/http/controllers/authenticate";
import {Profile} from "@/http/controllers/profile";


export async function appRoutes(app:FastifyInstance){
  app.post('/user', register)

  app.post('/login', AuthenticateRoute)


  /* authenticated */
  app.get('/me',Profile)
}