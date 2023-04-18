![Logo](banner-readme.png)


# Vue 3 + TailwindCSS & API (Backend) Boilerplate

A minimal Vue-Tailwind boilerplate with all the best practices

## Tech Stack

**Client:** Vue3, Vite, Vue Router, TailwindCSS, Axios

**Server:** Express


## Run Locally

*Node v14.19.1* or higher recommanded

Clone the project

```bash
  git clone https://github.com/corentinmace/vue3-tailwind-api-boilerplate
```

Go to the project directory

```bash
  cd vue3-tailwind-api-boilerplate
```

Install backend dependencies 

```bash
  cd backend
```

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Install frontend dependencies 

```bash
  cd frontend
```

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Building

To build this project run

```bash
  cd frontend && npm run build
```

The output of the build will be in **/dist**

If you want to deploy the project on **Github Pages**, go in the `vite.config.js` file, and uncomment the `outDir` config used on the configuration of your page (either */docs* or */ (root)*.)


## Authors

- [@corentinmace](https://www.github.com/corentinmace)


## License

[MIT](https://choosealicense.com/licenses/mit/)

