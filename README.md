# Jedi Data Missions
A project to help Jedi High Council with useful data.

## Introduction
The inspiration for this project was a mission assigned to me as a Jedi with development skills to find out about an attack that Dark Vader was planning on planet Alderaan with the Dark Star. The Jedi High Council also guessed that Princess Leia may be there and all of us were wondering what to do?!
The Jedi High Council introduced a data provider that I could use to get the required data. I decided to design a simple architecture and develop it to be used for this mission. Also, I foresaw some extra foundation for later uses and upcoming missions.

## Architecture, Platforms, and Languages
I started this project with JavaScript and used the Express platform to create my API. Express is a Node.js web application platform. I also acquired the benefits of the MVC design pattern to help my project be developed more easily in the future. So I developed a data provider layer (I used [swapi.dev](https://swapi.dev) in this stage but other data providers and even spies can be added later), a data model layer, and a view (actually query which is the output) layer for the Council to see the results (The Council progressed these years and can understand JSON at a glance. I am proud of them, especially Master Yoda).

## Prerequisites
To use this API you need to prepare some software weapons. So please follow this instruction to the end and don't miss the steps.

First of all, you need to have node.js installed on your system. To do so you can visit [node.js website](https://nodejs.org/en/download/) and find the right version for your platform and install it. The `npm` package manager will be installed as well which we will use later for installing additional required packages.

You need to clone this project via Git or download a copy of the project to your system. Now open your terminal and change the directory to the path of the project. E.g. in Linux systems, if you download the project:
```
$ cd ~/Downloads/jedi-data-missions/js
```

To install the required packages run the following commands:
```
npm install
```

Axios is a package I used for developing my data provider and getting data from [swapi.dev](https://swapi.dev).

Now you are all set to run the API and see the results for the current mission.

## Running the API and Viewing the Results
If you are still on the path of the project, you can run the following commands and follow the instructions. If you are not, change your terminal directory to the js folder inside the project and run:
```
node app.js
```
You should see some information about the mission in the console. Let's move on to see the results. There's a port number printed in the console at the bottom line. Please keep that in mind. Open your browser and in the address bar type:
```
localhost:<port>/information
```
E.g. if the port is 3000, try:
```
localhost:3000/information
```