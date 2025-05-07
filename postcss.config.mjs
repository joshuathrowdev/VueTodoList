import autoprefixer from 'autoprefixer';
import tailwindcssPostcss from '@tailwindcss/postcss';  // This is the new plugin



export default {
  plugins: [
    tailwindcssPostcss,
    autoprefixer,
  ],
};

// this has to be formatted like this to not conflict with the package.json and postcss
// The other way of doing this uses ES modules which causes conflicts

// The error occurs because "type": "module" is set in your package.json, which makes .js 
// files ES modules by default. ES modules use import and export instead of require and module.exports.

// The postcss.config.js file uses module.exports, which is not valid in ES modules. 
// To resolve this, you need to use export default and require() for importing packages.