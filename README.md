#Library
A React app for searching any type of books you want easily.

## TECH STACK
- REACT JS
- Libraries -react-paginate 
- Tailwind CSS
- Netlify

### Setting Up react app
Can use any IDE comfortable for creating this application , Currently i have used VS code for my development . 
```
npx create-react-app my-app
cd my-app
npm start
==== starts the development server ===
```


### Setting Up Tailwind:-For adding Styling to your application , it is type of inline css .
1. Install Tailwind CSS
Install tailwindcss via npm, and create your tailwind.config.js file.

```npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

2. Add Tailwind to your PostCSS configuration
Add tailwindcss and autoprefixer to your postcss.config.js file, or wherever PostCSS is configured in your project
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
3.Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
```@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Deployed on Netlify
1. Authorize your Github account with Netlify.
2. Select the repo to be deplyed
3. Add the Environment variables 
4. Select a custom domain
5. Deploy your site after the build is successful !

### REACT HOOKS USED:-
1.useEffect
2.useContext
3.useState
4.Custom hook :- useGlobalContext
