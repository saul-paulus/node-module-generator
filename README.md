<div align="center">
  <h1>🚀 Node Module Generator</h1>
  <p>A robust CLI tool for scaffolding Express.js projects using Clean Architecture & Dependency Injection.</p>
  <p>
    <a href="https://github.com/saul-paulus/node-module-generator/actions/workflows/ci.yml">
      <img src="https://github.com/saul-paulus/node-module-generator/actions/workflows/ci.yml/badge.svg" alt="CI Status">
    </a>
    <a href="https://www.npmjs.com/package/@saulpaulus17/node-module-generator">
      <img src="https://img.shields.io/npm/v/@saulpaulus17/node-module-generator.svg" alt="NPM Version" />
    </a>
    <a href="https://www.npmjs.com/package/@saulpaulus17/node-module-generator">
      <img src="https://img.shields.io/npm/dt/@saulpaulus17/node-module-generator.svg" alt="NPM Downloads" />
    </a>
    <a href="https://github.com/saul-paulus/node-module-generator/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/@saulpaulus17/node-module-generator.svg" alt="License" />
    </a>
  </p>
</div>

---

## 📖 Overview

**Node Module Generator** provides a world-class Developer Experience (DX) equivalent to the robust CLIs found in ecosystems like NestJS or Angular, but designed specifically for pure Node.js environments utilizing **Express.js** and **Clean Architecture**.

It instantly scaffolds fully-tested, decoupled, and highly cohesive module structures with built-in Dependency Injection using **Awilix**.

## ✨ Features

- 🏗️ **Clean Architecture by Default**: Automatically separates concerns into Domain, Application, Infrastructure, and Interface layers.
- 💉 **Dependency Injection Ready**: Auto-generates Awilix configurations mapped correctly across use cases, controllers, and repositories.
- 🧪 **Test-Driven Design**: Scaffolds adjoining `*.test.js` files containing boilerplates for Jest to promote TDD.
- 🤖 **Continuous Integration**: Codebase natively incorporates GitHub Actions for automated unit testing checks.
- 🧩 **Granular Scaffolding**: Generate specific components (UseCases, Repositories, DTOs) dynamically on demand without overriding existing folders!

## 📦 Installation

### Prerequisites
- **Node.js**: v18.0.0 or higher.
- **NPM** or **Yarn**.

To use this CLI tool locally or globally on your machine, you can install it directly from NPM.

```bash
# Install globally via NPM
npm install -g @saulpaulus17/node-module-generator
```

## 🚀 Usage

Once installed globally, you can execute the CLI commands from any of your Node.js project directories using the `nmg` command keyword.

### Granular CLI Commands
Scaffold specifically what you need, exactly how you do it in NestJS:

```bash
# 1. Scaffolds a new module architecture and empty DI registry
nmg module product

# 2. Creates a specific Use Case and its Test inside an existing module
nmg usecase updateProduct --module=product

# 3. Creates Domain Entity and Repository Interfaces/Implementations
nmg repository product

# 4. Scaffolds a DTO validation schema
nmg dto getProduct --module=product

# 5. Generates an entire full-stack CRUD Resource (Controller, Entity, Repos, DI, etc.)
nmg resource order
```

_(Note: If you haven't installed the package globally, you can run it via `npx @saulpaulus17/node-module-generator <command> <name>`)_

## 📂 Full Resource Structure

Running the powerhouse command `nmg resource user` instantly generates the following decoupled blueprint within your project's `src/modules` directory:

```text
src/modules/user/
├── application/                 # Orchestration & Use Cases
│   ├── dtos/                    # (Generated schema references)
│   └── usecases/
│       ├── create-user.usecase.js      # Business logically perfectly isolated
│       └── create-user.usecase.test.js # Scaffolded test harness
├── domain/                      # Blueprints & Business Rules (Pure Logic)
│   ├── entities/
│   │   └── user.entity.js
│   └── repositories/            # Repository Interfaces (Contracts)
│       └── user.repository.interface.js
├── infrastructure/              # Technical Details & Implementation
│   ├── repositories/            # Implementations (mocked to replace with Prisma/TypeORM)
│   │   └── user.repository.impl.js
│   └── validation/              # Input validation schemas
│       └── create-user.schema.js       # Auto-stubbed validation schema
├── interfaces/                  # Entry Points (Web/API)
│   ├── controllers/
│   │   ├── user.controller.js          # Express.js class handlers
│   │   └── user.controller.test.js
│   └── routes/
│       └── user.routes.js              # Express routers integrating the controller
└── user.module.js               # Centralised Awilix Dependency Injection bindings
```

## 🛠️ Technological Footprint

The scaffolded code integrates perfectly if you are using the following libraries in your Express application:

- **[Express.js](https://expressjs.com/)** - Web Framework
- **[Awilix](https://github.com/jeffijoe/awilix)** - Powerful Dependency Injection container
- **[Jest](https://jestjs.io/)** - For the colocated testing environments
- **[Joi](https://joi.dev/)** - For infrastructure schema validations

## 🤝 Contributing

Contributions are always welcome! Feel free to open issues or submit Pull Requests.
1. Fork the repo and create your branch (`git checkout -b feature/amazing-feature`).
2. Commit your changes (`git commit -m 'feat: add amazing feature'`).
3. Push to the branch (`git push origin feature/amazing-feature`).
4. Open a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
