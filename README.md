# Eflow

## What is inside?

- [Next.js](https://nextjs.org/)
- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Run with Docker

**Prerequisites**

- You need to have [docker-compose](https://docs.docker.com/compose/install/) installed.

**Commands**

- Run `docker-compose up`. You can force rebuild the image using `docker-compose up --build`

## Run without Docker

**Commands**

- Run `yarn` or `npm install`.
- Run `yarn dev` or `npm run dev`

> Access [http://localhost:3000](http://localhost:3000) to see the project

## Structure

```
└── src
    ├── assets
    ├── client
    ├── pages
    ├── types
    └── ui
```

| Folder     | Description                                 |
| ---------- | ------------------------------------------- |
| **assets** | Images, icons and fonts.                    |
| **client** | Fetcher, QueryClient and Store              |
| **pages**  | Page components                             |
| **types**  | Shared types, type definitions (.d.ts), etc |
| **ui**     | Shared and reusable components              |

## Conventions

### Components

```
└── <MyComponent>
    ├── <MyComponent>.tsx
    ├── <MyComponent>.test.tsx
    ├── <MyComponent>.styled.ts
    ├── <MyComponent>.stories.ts
    └── index.ts

```

| Files           | Description                                    |
| --------------- | ---------------------------------------------- |
| **.tsx**        | Component implementation                       |
| **.test.tsx**   | Component tests                                |
| **.styled.ts**  | Component stylesheet using `styled-components` |
| **.stories.ts** | Component documentation usign `storybook`      |
| **index.ts**    | File to export the component                   |

## Environment variables

| Variable Name             | Description                   |
| ------------------------- | ----------------------------- |
| NEXT_PUBLIC_API_URL       | API url                       |
| NEXT_PUBLIC_CLOUD_API_URL | Cloud API url                 |
| CLOUD_SECRET_TOKEN        | Secret token to use Cloud API |

## Commands

- `dev`: run development server
- `build`: creates the production build version
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## Tools

- [react-query](https://react-query.tanstack.com/overview): Used for data tratative received from api
- [react-multi-carousel](https://github.com/YIZHUANG/react-multi-carousel): Used for creation of carousel with multi items
- [recharts](https://recharts.org/en-US/): Used for creation of charts
