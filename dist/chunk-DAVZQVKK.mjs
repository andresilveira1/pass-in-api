import {
  BadRequest
} from "./chunk-HVGVINQE.mjs";

// src/ErrorHandler.ts
import { ZodError } from "zod";
var ErrorHandler = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Error during validation",
      errors: error.flatten().fieldErrors
    });
  }
  if (error instanceof BadRequest) {
    return reply.status(400).send({ message: error.message });
  }
  return reply.status(500).send({ message: "Internal server error!" });
};

export {
  ErrorHandler
};
