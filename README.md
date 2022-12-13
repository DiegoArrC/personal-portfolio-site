# Overview

I have written a personal portfolio website using ReactJS, a frontend framework that is built on JavaScript. It uses NodeJS as the backend for package development and has a local test server run through the command “npm start”. This will open up a local development server at http://localhost:3000/, along with a network version of the development build based on the IP Address.  
My intention for creating this small web app was to both create a website that can showcase a portion of my knowledge with software and web app development, along with learning how to interact with an external API within React.

[Software Demo Video](http://youtube.link.goes.here)  
[Website Page](https://diegoarrc.github.io/personal-portfolio-site/)

# Web Pages

This web app contains only a singular page that has both static and dynamically populated data. The first portion of the site includes fetching a particular users generated repositories, with the default being a population of my personal list of repositories. The fetch makes a call to GitHub’s API services, which includes being able to access a list of repositories from any particular user and maps them into individual cards with some of the general data about each individual repository. This includes data such as the owner of the repository and their profile image, the name of the repository, which language it mainly uses, and any associated topics put onto the project. This was adjusted to allow calls to any user’s repositories, with certain edge cases handled, such as no user being specified or a user not existing.
After the GitHub Cards section, there is a personal resume which has been embedded in for download, with some animation styling in the background.
# Development Environment
* ReactJS 18.2.0
* NodeJS 16.14.2
* NPM 8.19.2
* Visual Studio Code 1.74.0
* React Hooks
* React DOM
* GitHub REST API
* Gitub Pages
* GH-Pages NPM Package
* JavaScript
* CSS

# Useful Websites
* [GitHub REST API]( https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user)
* [React GH-Pages Setup] (https://github.com/gitname/react-gh-pages)
* [React Hooks (useEffect)]( https://reactjs.org/docs/hooks-effect.html)

# Future Work

* Expand the amount of content present on the site
* Improve styling of elements within the site
* Fix certain styling edge cases
