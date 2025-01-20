# learn-trpc

A simple monorepo project demonstrating the usage of tRPC with TypeScript, showcasing end-to-end type safety between the client and server.

## Features

- ⚡️ Full-stack TypeScript with end-to-end type safety
- 🔄 Real-time updates using tRPC subscriptions
- 🚀 Vite for fast development and building
- 📝 Example procedures including queries, mutations, and subscriptions
- ⏱️ Simulated API delays for realistic testing
- 🏗️ Monorepo setup with Turborepo for efficient build system
- 📦 Workspace management with pnpm

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

Start all packages in development mode:

```bash
pnpm dev
```

This will start both the client and server in development mode using Turborepo's pipeline.

The servers will be available at:

- tRPC Server: http://localhost:3000
- Vite Dev Server: http://localhost:5173

## Project Structure

```
learn-trpc/
├── packages/
│   ├── client/        # Frontend Vite application
│   │   ├── src/       # Client source code
│   │   └── package.json
│   └── server/        # tRPC server implementation
│       ├── src/       # Server source code
│       └── package.json
├── package.json       # Root package.json with Turborepo setup
├── turbo.json        # Turborepo configuration
└── pnpm-workspace.yaml # pnpm workspace configuration
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
- [Turborepo](https://turbo.build/) - High-performance build system
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## License

This project is open source and available under the MIT License.
