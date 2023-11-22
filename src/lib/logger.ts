import pino from "pino";
import { env } from "~/env.mjs";

// accessing `env` throws `unable to determine transport target for "pino-pretty"`
console.log({ env }); // commenting this out works fine

export const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});
