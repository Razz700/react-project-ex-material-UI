# React + Vite
Deploying react + vite on github pages
#Follow steps:
1.bash: //setting up vite app
npm init @vitejs/app my-react-app --template react  
cd my-react-app    

2.import { defineConfig } from 'vite';

export default defineConfig({

  base: '/your-repository-name/',

});        

3.npm run build   

4.git init

git add .

git commit -m "Initial commit"

git remote add origin your-repository-url

git push -u origin main 


5.npm install --save-dev gh-pages 

6."scripts": {

  "predeploy": "npm run build",

  "deploy": "gh-pages -d dist",

  "clean": "rm -rf dist"

}        

7.npm run deploy       

8.Configure GitHub Pages settings

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
