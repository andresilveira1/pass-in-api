import {
  RegisterForEvent
} from "./chunk-UJMSVYEJ.mjs";
import {
  ErrorHandler
} from "./chunk-DAVZQVKK.mjs";
import {
  CheckIn
} from "./chunk-PZBKLVDS.mjs";
import {
  CreateEvent
} from "./chunk-7WY7DYMC.mjs";
import "./chunk-I3I5ZEVA.mjs";
import {
  GetAttendeeBadge
} from "./chunk-NMBH22WX.mjs";
import {
  GetEvent
} from "./chunk-QUQI4CEB.mjs";
import "./chunk-HVGVINQE.mjs";
import {
  GetEventAttendess
} from "./chunk-KSUKLQLS.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Back-end API specifications for the pass.in application builded during the event NLW Unite from Rocketseat.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(CreateEvent);
app.register(RegisterForEvent);
app.register(GetEvent);
app.register(GetAttendeeBadge);
app.register(CheckIn);
app.register(GetEventAttendess);
app.setErrorHandler(ErrorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
