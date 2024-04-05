import fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'
import fastifyCors from '@fastify/cors'

import { CreateEvent } from './routes/CreateEvent'
import { RegisterForEvent } from './routes/RegisterForEvent'
import { GetEvent } from './routes/GetEvent'
import { GetAttendeeBadge } from './routes/GetAttendeeBadge'
import { CheckIn } from './routes/CheckIn'
import { GetEventAttendess } from './routes/GetEventAttendees'
import { ErrorHandler } from './ErrorHandler'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.register(fastifySwagger, {
  swagger: {
    consumes: ['application/json'],
    produces: ['application/json'],
    info: {
      title: 'pass.in',
      description:
        'Back-end API specifications for the pass.in application builded during the event NLW Unite from Rocketseat.',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(CreateEvent)
app.register(RegisterForEvent)
app.register(GetEvent)
app.register(GetAttendeeBadge)
app.register(CheckIn)
app.register(GetEventAttendess)

app.setErrorHandler(ErrorHandler)

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('HTTP server running!')
})
