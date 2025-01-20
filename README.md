# learn-trpc

A simple project demonstrating the usage of tRPC with TypeScript, showcasing end-to-end type safety between the client and server.

## Features

- ⚡️ Full-stack TypeScript with end-to-end type safety
- 🔄 Real-time updates using tRPC subscriptions
- 🚀 Vite for fast development and building
- 📝 Example procedures including queries, mutations, and subscriptions
- ⏱️ Simulated API delays for realistic testing

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm (Package manager)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/learn-trpc.git
cd learn-trpc
```

2. Install dependencies:

```bash
pnpm install
```

### Development

1. Start the tRPC server:

```bash
pnpm tsx src/server/index.ts
```

2. In a separate terminal, start the Vite development server:

```bash
pnpm dev
```

The servers will be available at:

- tRPC Server: http://localhost:3000
- Vite Dev Server: http://localhost:5173

## Project Structure

```
learn-trpc/
├── src/
│   ├── server/         # tRPC server implementation
│   │   ├── index.ts    # Server entry point and router definitions
│   │   └── trpc.ts     # tRPC context and procedure setup
│   ├── main.ts         # Client entry point
│   └── style.css       # Styles
├── package.json
└── tsconfig.json
```

## Available API Endpoints

The project includes several example tRPC procedures:

- `helloToTheWorld`: A simple query that returns "Hello World"
- `helloToWho`: A query that takes a name parameter and returns a personalized greeting
- `helloWithMutation`: A mutation example that processes a greeting
- `incrementCounter`: A mutation that updates a counter with real-time subscription updates

## Built With

- [tRPC](https://trpc.io/) - End-to-end typesafe APIs
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Frontend tooling
- [Zod](https://zod.dev/) - Runtime type validation

## License

This project is open source and available under the MIT License.
