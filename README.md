# Kind Veilig Thuis - Risk Assessment App

Below you will find information about the app, how to install and run it, and the progress of making it.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Run or build](#run-or-build)
- [Breakdown of pages](#breakdown-of-pages)
- [My own experience](#my-own-experience)

## Introduction

This decision support tool can be used by care providers to obtain an objective risk indication on a more severe measure based on characteristics of the child, the parents and the household.

## Installation

1. Create a new folder
2. Open terminal
3. Change directory to folder

```bash
cd /~path
```

4. Clone repository in folder (you need [Git](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) installed)

```bash
git clone https://github.com/Mennauu/frontend-applications.git
```

## Run or build

After installation you can start the app (you need [npm](https://www.npmjs.com/get-npm) installed). Open terminal and change directory to project folder.

You can start the app by running:

```bash
npm start
```

It will automtically open http://localhost:3000/ in your browser. If something else is already running on port 3000, type Y in your terminal, press enter, and it will choose a different port to run on.

You can build the app by running:

```bash
npm run build
```

## Breakdown of pages

1. Home: page where visitor will be introduced to the app. More information is find on this page and also contact details.

![Homepage](https://image.ibb.co/j7taJ0/Schermafbeelding-2018-10-19-om-11-06-27.png)

2. Risico: heart of the app. Visitor can give a name to the file and fill in questions. As soon as the questions are filled in the app will make a risk taxation (per category) based on the answers. It will also show you how many questions you have filled in.

![Risico](https://image.ibb.co/gWUXWL/Schermafbeelding-2018-10-19-om-14-40-56.png)

3. Dossiers: After you have created a file on the Risico page, it will be available on the dossier page. You can quickly see what the results currently are and also re-open the file.

![Dossiers](https://image.ibb.co/ecGJ5f/Schermafbeelding-2018-10-19-om-14-44-45.png)

## To-do list

- [ ] Create dossier page where you can find your saved files (taxations)
- [ ] Show risk taxation per category
- [ ] Show amount of questions filled in per category
- [ ] Update list with questions
- [ ] Replace value of option selected in taxation (instead of adding both)
- [ ] Add LocalStorage
- [ ] Make the formule actually work (like it's supposed to)

## My own experience

I made this app as a study assignment for Hogeschool van Amsterdam. I logged my experience.

I heard that we were going to sit at Google digital workplace, cool. We were going to be with a group of 30-40 students, all working on the same project. Once there we got briefly **introducted to the course**, by Titus.

After the **kick off** we got a **pitch from Arjan**. He would explain what we would be creating and why. Turns out that quite some kids (in Amsterdam) get placed out of their house and it costs a fortune to support this (€100k per year/per child). It is Arjan's goal to prevent kids from getting placed out of their house, by using data. Arjan has collected a ton of data and created a formule that goes with this data; that means that he can get an indication (%) of the probability that a kid will get placed out of their house. Caregivers can then use this indication to get an earlier estimation of probability that a kid will get placed out of their house than they normaly would, and change their plan of action accordingly (to prevent them from getting placed out). Caregivers have to fill out a form, about the kid and his/her parent to get the estimation, and for that we need an app.

Cool project! After that we hang out in Amsterdam to get to know eachother.

The next day I had to **choose 3 javascript frameworks**, Titus would choose one of the 3 which I woudld be using. So, I looked into multiple frameworks.

First though, we had 3 speakers about the biggest frameworks: Hay on Vue, Peter on React and Albert on Angular. They explained why you would use the framework they were speaking about, and a little bit about how it works. Hay and Peter loved their frameworks, but Albert was skeptical about Angular, and even said that he prefers the other frameworks.

I loved the idea of getting experience in frameworks like React or Vue, because they used Vue at my front-end internship (they offered me a job) and I had a project coming up with a colleague which we would have to make in React (for Schiphol). So it would be amazing to get some practice in either one of them, so, I chose both.

For my third option I chose Angular, instead of Ember, Preact or Choo. Why, you would ask? I feel bad for saying this, because it's not a real researched explanation, but it's because a friend of mine is always bragging about how good he is with Angular. Honestly, I feel bad about this.

Titus chose **React** for me. I liked that.

The next day Arjan came again to explain more about the project. Then I started working on building the app. First I had to learn about React, so I read through the [getting Started docs](https://reactjs.org/docs/getting-started.html) and followed the [tutorial](https://reactjs.org/tutorial/tutorial.html) on how to make a tic-tac-toe game afterwards.

To setup my project, I used *Create React App*. According to React, Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

The first thing I did was install webpack, because I wanted to use Sass and Babel. Using webpack, that's an easy setup. After that I re-structured most folders, to make it easier (for me atleast) to follow. I also installed Bootstrap, because I didn't want to put much time in writing css.

The first thing I did was set-up some sort of routing, because I knew I was going to have multiple pages. I look at the react-docs but they were hard to follow on this part. I looked at a lot of articles, but every time I thought, this could be done simpler. And so, I found this article: [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf) written by Paul Sherman. A simple way to add routing to your project, I didn't need more.

I setup the pages that I needed and quickly drew out a concept on Paper.

![concept](https://preview.ibb.co/ipAWaf/IMG-1988.jpg)

If you look back up to the breakdown of pages section, you can see that it's quite alike. I added an option to give the file a name (so you can save it) and decided to break down the results per category. I did this, because after a week, we had multiple caretakers give a little talk about how they see the app. They would have loved if they could see results per category, and on what the result is based on. Also they thought it would be amazing if you could save your answers, and later load them back in to make changes.

To not drag this experience on to much I won't talk about all the coding I have done. I learned alot about seperating elements and components, like giving data from child components to parents components and passing that data back to a different child component. Cool!

I also worked with a JSON file to retrieve data for the first time, winning!

Most of all, I learned more about programming with JavaScript. I'm fine with HTMl, CSS and working with different kind of platforms, but my JavaScript is lacking. This project gave it a huge boost.
