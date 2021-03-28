# Earthquake Zen Garden

## Table of contents

- [Overview](#verview)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)

## Overview

This app was created for [Realtor.com](Realtor.com) to display earthquake data. The data for the earthquake reports comes from [data.js](src/static/data/data.js).

## Features

- The navbar allows you to navigate `home` by clicking on the logo and to the `profile` page by clicking on the welcome message, from any page

- The data on the `home` page is displayed in a table, and the columns can be sorted by successively clicking on the headings

- The titles of the earthquake can be clicked on to navigate to
  a `detail` view

- the `detail` view displays a table with more information on the earthquake

- the `profile` view displays the user's profile picture as well as a table view of the user's details

## Technologies

- Project was created with:

  - npm version: `6.14.11`
  - node version: `v15.7.0`

- Add-on packages include:

  - [moment-timezone](https://www.npmjs.com/package/moment-timezone)
  - [react-router](https://www.npmjs.com/package/react-router)
  - [webpack](https://www.npmjs.com/package/webpack)
  - [babel](https://www.npmjs.com/package/@babel/core)

## Setup

### Running this project locally using npm:

1. Clone this project locally
2. Run `npm install` in your bash/command line
3. Run `npm start` in your bash/command line
4. The app should open on your default browser on an open port
