# TableApp React TS App


Welcome to TrioTables, a React TypeScript application designed for seamless management of user accounts, profiles, and campaigns. This project leverages modern web development tools and libraries to provide an efficient and user-friendly experience. Below, you'll find instructions on how to set up the project, run it locally, and build for production.

## Project Structure
TrioTables is organized into three main sections:

### Account Table:

Displays a paginated list of user accounts.
Allows sorting and filtering based on account details.
Clicking on an account navigates to the corresponding profile.
### Profile Table:

Shows a paginated view of user profiles.
Supports sorting and filtering based on profile information.
Clicking on a profile leads to the associated campaign details.
### Campaign Table:

Exhibits a paginated list of campaigns.
Permits sorting and filtering based on campaign attributes.
Back navigation is available to return to the respective profile or account.

### Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites
- Node.js (v14 or later)
- Yarn

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/kostikroverist/react-vite-ts-webapp.git
    ```

2. Install dependencies:
    ```bash
    yarn
    ```

## Scripts
- `yarn dev`: Start the development server using Vite.
- `yarn build`: Build the project for production using TypeScript and Vite.
- `yarn lint`: Run ESLint to check and fix TypeScript and React code.
- `yarn preview`: Preview the production build locally.
- `yarn start`: Start the JSON server with the sample data.

## Dependencies

### Production Dependencies
- axios: Promise-based HTTP client for the browser and Node.js.
- json-server: Fake REST API for prototyping and testing.
- react: JavaScript library for building user interfaces.
- react-dom: React package for working with the DOM.
- react-router-dom: Declarative routing for React.

### Development Dependencies
- @types/react: TypeScript definitions for React.
- @types/react-dom: TypeScript definitions for ReactDOM.
- @typescript-eslint/eslint-plugin: ESLint plugin for TypeScript.
- @typescript-eslint/parser: TypeScript parser for ESLint.
- @vitejs/plugin-react: Vite plugin for React.
- autoprefixer: PostCSS plugin to parse CSS and add vendor prefixes.
- eslint: Linter for identifying and fixing problems in JavaScript code.
- eslint-plugin-react-hooks: ESLint plugin for React hooks.
- eslint-plugin-react-refresh: ESLint plugin for React Refresh.
- postcss: Tool for transforming styles with JS plugins.
- typescript: Superset of JavaScript that adds static types.
- vite: Next-generation frontend tooling for modern web development.
