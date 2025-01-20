import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { EventEmitter } from "events";
import { observable } from "@trpc/server/observable";
const ee = new EventEmitter();
const currentCount = { value: 0 };

const appRouter = router({
  helloToTheWorld: publicProcedure.query(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return "Hello World";
  }),
  helloToWho: publicProcedure.input(z.string()).query(async ({ input }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return `Hello ${input}`;
  }),
  helloWWithMutation: publicProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return `Hello ${input}`;
    }),
  incrementCounter: publicProcedure.mutation(() => {
    currentCount.value++;
    ee.emit("update", currentCount.value);
    return currentCount.value;
  }),
  onCount: publicProcedure.subscription(() => {
    return observable<number>((emit) => {
      const onUpdate = (data: number) => {
        emit.next(data);
      };

      // Emit current value immediately
      emit.next(currentCount.value);

      // Subscribe to future updates
      ee.on("update", onUpdate);

      // Cleanup function
      return () => {
        ee.off("update", onUpdate);
      };
    });
  }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

server.listen(3000);
console.log("Server is running on port 3000");
