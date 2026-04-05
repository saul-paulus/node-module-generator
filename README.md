<div align="center">
  <h1>🚀 Node Module Generator</h1>
  <p>A robust CLI tool for scaffolding Express.js projects using Clean Architecture & Dependency Injection.</p>
</div>

---

## 📖 Overview

**Node Module Generator** provides a world-class Developer Experience (DX) equivalent to the robust CLIs found in ecosystems like NestJS or Angular, but designed specifically for pure Node.js environments utilizing **Express.js** and **Clean Architecture**.

It instantly scaffolds fully-tested, decoupled, and highly cohesive module structures with built-in Dependency Injection using **Awilix**.

## ✨ Features

- 🏗️ **Clean Architecture by Default**: Automatically separates concerns into Domain, Application, Infrastructure, and Interface layers.
- 💉 **Dependency Injection Ready**: Auto-generates Awilix configurations mapped correctly across use cases, controllers, and repositories.
- 🧪 **Test-Driven Design**: Scaffolds adjoining `*.test.js` files containing boilerplates for Jest to promote TDD.
- ⚡ **Rapid Development**: Generates complete boilerplate files (DTOs, Repositories, Domain Entities, Routes) saving you hours of tedious setup.

## 📦 Installation

To use this CLI tool locally or globally on your machine, first clone this repository and link it.

```bash
# Clone the repository
git clone https://github.com/saul-paulus/node-module-generator.git
cd node-module-generator

# Install dependencies
npm install

# Link package globally (creates the 'nmg' command)
npm link
```

## 🚀 Usage

Once installed or linked globally, you can execute the CLI commands from any of your Node.js project directories.

```bash
# Create a completely robust module with Awilix & Clean Architecture
nmg module <module-name>

# Example:
nmg module user-profile
```

_(Note: If you haven't linked the package, you can also run it locally via `node /path/to/node-module-generator/bin/cli.js module <name>`)_

## 📂 Generated Structure

Running `nmg module user` generates the following structural blueprint within your project's `src/modules` directory:

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
│       └── create-user.schema.js       # Auto-stubbed for Joi or Zod
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

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
