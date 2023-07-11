# Overview of the hummer-systems project.

This project implements the requirements of the test assignment, Part 1 and Part 2.
## Part 1: Clients Section
![ScreenShot61](/screenshots/Screenshot_61.png)

User data is fetched from the API https://jsonplaceholder.typicode.com/users.
A loader is displayed on the screen while the data is being fetched.
Clicking on a user opens the Edit Profile page with the corresponding user data.
Clicking on Save Changes simulates sending the data to the server and displays a loader.
## Part 2: Scheduler Section
![ScreenShot62](/screenshots/Screenshot_62.png)

A board is implemented where elements can be added.
It is possible to save the board layout to a .txt file.
It is possible to import a .txt file with a board layout.
## Dev
```bash
yarn install
```
## Build
```bash
yarn build
```

## Stack

This project was bootstrapped with Create React App.
* React JS
* Redux-saga
* React Router Dom 5
* React DnD
* Ant Design 4
# [View a demo](https://hummer-systems.web.app)