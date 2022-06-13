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
$ npm install
```

Axios is a package I used for developing my data provider and getting data from [swapi.dev](https://swapi.dev).

### *Suggestions*
For the Jedi Masters I suggest to use a JSON beautifier add-on installed on their browser. I use [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) and it helps me see a good formatting and colorful output. It is especially good for Master Yoda because the duration of his blinks are long and he may lose where he was i the text.


Now you are all set to run the API and see the results for the current mission.

## Running the API and Viewing the Results
If you are still on the path of the project, you can run the following commands and follow the instructions. If you are not, change your terminal directory to the js folder inside the project and run:
```
$ node app.js
```
You should see some information about the mission in the console. Let's move on to see the results. There's a port number printed in the console at the bottom line. Please keep that in mind. Open your browser and in the address bar type:
```
localhost:<port>/information
```
E.g. if the port is 3000, try:
```
localhost:3000/information
```

## Build and Run Using the Docker
Some Jedis prefer to use a Docker so I added the docker feature to the project. Let's see how to build and run the Docker. The names and ports I am using while building and running the docker are arbitrary. You may prefer to use other names for security and/or convenience. Feel free to read the [`docker build](https://docs.docker.com/engine/reference/commandline/build/), [`docker run`](https://docs.docker.com/engine/reference/commandline/run/), and [`docker ps`](https://docs.docker.com/engine/reference/commandline/ps/) documentation.

Now I explain my way of using the docker.

### Build Docker
You can skip this step if you already built the docker and you are back to see how's things in the world.
To build the docker, change the directory to the \<path-to-the-project\>/jedi-data-missions/js. E.g. if the project is in your Download folder:
```
$ cd ~/Download/jedi-data-missions/js
```

*Note: Almost all docker commands work while running as root/super user/administrator so I add a sudo at the beginning for your convenience if you are using a Unix-based OS like me.*

To build the docker run:
```
sudo docker build . -t yousof/jedi-data-missions-js
```
*Note: `yousof` and `jedi-data-missions-js` are arbitrary names*

If the docker is built successfully you'll see:
```
Successfully built <container id>
Successfully tagged yousof/jedi-data-missions-js:latest
```
Your docker is built and ready to run.

### Run Docker
To run the docker you simply run:
```
sudo docker run --name jedi-data-missions-js -p 3000:3000 -d yousof/jedi-data-missions-js
```
*Quick guide:*

*`--name` is to name your docker making it easier to find and/or stop*

*`-p` to define ports*

*`-d` to run the container in the background*

### Check if the Docker Is Running
Just run:
```
sudo docker ps
```

### Accessing the API
To access the API you can use the same method I explained earlier. Open your browser and in the address bar go to:
```
localhost:3000/information
```

### Stop Docker
Now you are done with the data and it's time to draw swords and save the world. You don't want to run the docker forever. So before you get in your starship stop the docker by running:
```
sudo docker stop jedi-data-missions-js
```

## Suggestions
In the first mission, The Jedi High Council asked me to find out how many crew are on the Death Star, and it was a number. It was easy to parse that integer and present it to them. But, if there happens a mission to find something about a starship like "CR90 corvette", things change. The "crew" field contains "30-165" which seems to be a range. The world is not secure all the time so we can communicate and redefine the mission. I found this issue while exploring the data and I must report. Please take care of it for the next missions especially if my other colleagues are going to do the mission.