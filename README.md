# oden-test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Tech stack 
- React
- Typescript
- Material-ui

# Local Installation

1. Confirm that the node version is being set correctly, as per the `.nvmrc` file (node v15.14.0)

2. If not, in the root folder, run:

#### `nvm use`

## To Run on local machine.

1. cd to the `oden-test` directory:
2. Run the following to install:

#### `npm install`
#### `npm start`

Runs the react-app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Answers

1. How long did you spend on the coding test? What would you add to your solution if you had more time and expected it to be used in a production setting?

3 hours, I would add proper types, due to time i had to use any at a couple of places. Also I would Style the graphs better, and formate the date used in xAxis. I would do some research on different graph types as well. 

2. Why did you use the libraries you did?
   I have used React, since it is a light weight library and quicker on implent. I'v used this considering the time frame. Also you have more freedom in project structure. 
   Typescript, To make debugging easier. 
   Material-ui, To use build in components for quick styles. 

3. What was the reasoning behind the type(s) of graph you used
   I have used HighCharts line graph for this, and displayed the data using line graph in 3 different series So that user can have a freedom to view these 3 matrics together and also one by one by clicking on each matric. 

4. How would you improve the timeseries API that you just used?
   Ideally it should be handles with socket.io or somthing similar to get the events, so that on frontend we would just subcribes to events and get the updated values from the API, as soon as something changes. Instead of making calls every second to get the updated data.

