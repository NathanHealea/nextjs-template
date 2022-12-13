<p align="center">
  <a href="https://nextjs.org/">
    <img alt="NextJs" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" width="60" />
  </a>
</p>
<h1 align="center">
  NextJs Template
</h1>
<h3 align="center">NextJs template for building applications</h3>
<p align="center">Technologies</p>
<p align="center">
  <img src="https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=ffffff&style=for-the-badge&labelColor=3178C6" />
  <img src="https://img.shields.io/badge/-Nextjs-000000?logo=Next.js&logoColor=ffffff&style=for-the-badge&labelColor=000000" />
  <img src="https://img.shields.io/badge/-MaterialUi-007FFF?logo=MUI&logoColor=ffffff&style=for-the-badge&labelColor=007FFF" />
</p>

## Table of Contents

1. [Getting Started](#getting-started)
2. [Commands](#commands)
3. [Notable Packages](#notable-packages)

## Getting Started

Instructions for getting started with NextJS Template.

### Installation

1. clone the repository.

```
git clone https://github.com/NathanHealea/nextjs-template.git
```

2. Install NPM Packages.

```
npm install
```

3. Run application.

```
npm run dev
```

### Build

1. Clean directory.

```
npm run clean
```

2. Build application.

```
npm run build
```

3. Run the application.

```
npm run start
```

#### Alternative Build

1. Run the `Prod` command.

```
npm run prod
```

## Commands

Description of project commands.

### `build`

Create an optimized production build of the application.
**Output Directory:** `.next/`

```
npm run build
```

Additional Next CLI build information - [https://nextjs.org/docs/api-reference/cli#build](https://nextjs.org/docs/api-reference/cli#build)

### `clean`

Removes the `.next/` directory.

```
npm run clean
```

### `dev`

Starts the application in development mode with hot-code reloading, error reporting, and more.

```
npm run dev
```

Additional Next CLI development information - [https://nextjs.org/docs/api-reference/cli#development](https://nextjs.org/docs/api-reference/cli#development)

### `lint`

Rune ESLint for all fields in the `pages/`, `components/`, and `modules/` directories.

```
npm run lint
```

Additional Next CLI lint information - [https://nextjs.org/docs/api-reference/cli#lint](https://nextjs.org/docs/api-reference/cli#lint)

### `prod`

Deletes the `.next/` directory, creates an optimized production build, and starts the application.

```
npm run prod
```

### `start`

Starts the production build of the application.

**Note:** Application needs to be compiled with the `build` command.

```
npm run start
```

Additional Next CLI production information - [https://nextjs.org/docs/api-reference/cli#production](https://nextjs.org/docs/api-reference/cli#production)

## 📦 Notable Packages

- [Redux-Toolkit](https://redux-toolkit.js.org/) - Opinionated, batteries-included toolset for efficient Redux development.
