This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## SpaceX Program

Front-end application which would help users list and browse all launches by SpaceX program

## Pre-Requisties

API Information:
[mockApi](https://api.spaceXdata.com/v3/launches?limit=100) should be running on page load.
[LaunchSuccessFilter](https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true)
[LaunchLandFilter](https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true)
[All](https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014)

## Steps to run app

```
npm install
npm start

```
Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

## Tests 
Run `npm test` to run the tests (Not implemented)
