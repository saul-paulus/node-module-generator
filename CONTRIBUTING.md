# Contributing to Node Module Generator

First off, thank you for considering contributing to **Node Module Generator (NMG)**! It is people like you who make this tool a better resource for the entire Node.js community.

Please take a moment to review this document to understand the contribution process.

---

## ⚖️ Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. We expect all contributors to maintain a respectful, inclusive, and professional environment.

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **NPM**, **Yarn**, or **PNPM**

### Development Setup
1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/node-module-generator.git
   cd node-module-generator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### 🧪 Local Testing
To test your changes locally, you can run the CLI directly from the source:
```bash
node bin/cli.js <command> <name>
```

Alternatively, link it globally for local development:
```bash
npm link
# Now you can use 'nmg' command locally
```

---

## 📈 How to Contribute

### Reporting Bugs
- Check the **Issues** tab to see if the bug has already been reported.
- If not, open a new issue. Include a clear title, a description of the bug, steps to reproduce, and the expected vs. actual behavior.

### Proposing Features
- Open an issue titled `feat: <Description>` to discuss the proposal before starting any implementation.

### Pull Request Process
1. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feat/your-feature-name
   # OR
   git checkout -b fix/your-bug-name
   ```
2. Implement your changes. Ensure you adhere to **Clean Architecture** patterns.
3. **Write Tests**: If you add a new feature or fix a bug, please include a test case.
4. Run the full test suite:
   ```bash
   npm test
   ```
5. Commit your changes using **Conventional Commits** (see below).
6. Push to your fork and submit a Pull Request to the `main` branch.

---

## 📝 Coding Standards

- **Clean Architecture**: Maintain strict separation between Domain, Application, Infrastructure, and Interface layers.
- **ESM/CJS**: New modules should follow the latest ESM templates.
- **DRY & SOLID**: Write clean, modular, and reusable code.

---

## 🏷️ Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for our commit messages:

- `feat:`: A new feature for the user.
- `fix:`: A bug fix for the user.
- `docs:`: Documentation only changes.
- `refactor:`: A code change that neither fixes a bug nor adds a feature.
- `test:`: Adding missing tests or correcting existing tests.
- `chore:`: Changes to the build process or auxiliary tools.

Example:
```text
feat(generator): add support for Zod schemas
```

---

## ✅ Pull Request Checklist

Before submitting your PR, please ensure:
1. [ ] The code follows the project's architecture and style.
2. [ ] All tests pass locally (`npm test`).
3. [ ] All status checks on GitHub (CI) pass.
4. [ ] Documentation is updated if necessary.
5. [ ] Commit messages follow the Conventional Commits standard.

---
Thank you for your contribution! 🚀
