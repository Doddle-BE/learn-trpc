import type { AppRouter } from "@learn-trpc/server";
import {
  createTRPCClient,
  httpBatchLink,
  splitLink,
  unstable_httpSubscriptionLink,
} from "@trpc/client";
import "./style.css";

// Create regular HTTP client
const trpc = createTRPCClient<AppRouter>({
  links: [
    splitLink({
      condition: (op) => op.type === "subscription",
      true: unstable_httpSubscriptionLink({
        url: "http://localhost:3000",
      }),
      false: httpBatchLink({
        url: "http://localhost:3000",
      }),
    }),
  ],
});

const helloToTheWorld = await trpc.helloToTheWorld.query();
const helloToJack = await trpc.helloToWho.query("Jack");
const helloToJohn = await trpc.helloWWithMutation.mutate("John");

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h3>This is a message from the server:</h3>
    <div class="label-value"><label>Simple query:</label>
    <p>${helloToTheWorld}</p></div>
    <div class="label-value"><label>Query with params:</label>
    <p>${helloToJack}</p></div>
    <div class="label-value"><label>Mutation:</label>
    <p>${helloToJohn}</p></div>
  </div>
  <div>
    <h3>SSE (Server-Sent Events)</h3>
    <p>Current count: <span id="count">0</span></p>
    <button id="increment">Increment</button>
  </div>
`;

// Setup counter subscription
const countElement = document.querySelector<HTMLSpanElement>("#count")!;

// Create SSE subscription
const subscription = trpc.onCount.subscribe(undefined, {
  onStarted: () => {
    console.log("Started listening to count updates");
  },
  onData: (count) => {
    countElement.textContent = count.toString();
  },
  onError: (err) => {
    console.error("Subscription error:", err);
  },
});

// Setup increment button
document
  .querySelector<HTMLButtonElement>("#increment")!
  .addEventListener("click", async () => {
    await trpc.incrementCounter.mutate();
  });
