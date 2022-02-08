# Just Another Text Editor (JATE) - PWA Edition
![status: stable, version 1.0.0](https://img.shields.io/badge/stable-version%201.0.0-green)

![License: GNU General Publice License v3.0](https://img.shields.io/badge/license-GNU%20General%20Publice%20License%20v3.0-yellowgreen)

## Description
This is a single-page application (SPA) text editor built by Trilogy Education Services, LLC/U2, Inc., using [CodeMirror](https://codemirror.net/). In it, I demonstrate modern web technologies known as Progressive Web App functionality: allowing for caching, content fallback, offline functionality, and installing an app as a stand-alone app on the user's computer.

I use [Express.Js](https://www.npmjs.com/package/express), several [Webpack](https://www.npmjs.com/package/webpack) packages, [Babel](https://www.npmjs.com/package/@babel/core), and [Idb](https://www.npmjs.com/package/idb). I deployed this full-stack application to Heroku where it is now [live](#installation-and-usage).

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Table of Contents
1. [Description](#description)
2. [Installation & Usage](#installation-and-usage)
3. [Deployed](#deployed)
4. [License](#license)
5. [Questions](#questions)

## Installation and Usage

To start using JATE-PWA, first clone [the repo](https://github.com/mjamesd/pwa-jate) to your server. Then run `npm start` to install all the dependent packages, build the files for the `dist` directory, and launch the server. Use your browser to access the website at [localhost](http://localhost:3000)

## Deployed

I have deployed this app live at [https://pwa-jate.herokuapp.com/](https://pwa-jate.herokuapp.com/).

## License

This work is licensed under GNU General Publice License v3.0.

## Questions

Visit [the app's GitHub repo](https://github.com/mjamesd/pwa-jate).

To reach me with additional questions, email me at [mjamesd@gmail.com](mailto:mjamesd@gmail.com).