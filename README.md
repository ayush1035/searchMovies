Steps To run this web app

1. Take a clone of my repository on to your system.
2. Open the folder in command prompt.
3. Type : npm install
4. Type : npm start , the app will open on http://localhost:3000 .
5. If you want to run the test cases type : npm test , test suites and test cases will run on the command prompt in watch mode.



Main Features:

1. The Home page will render few movies which are brought through the omdb API.
2. Clicking on more details option of any movie will take you to movie detail page where one can see the detailed view of the movie.
3. The Search tab on top will lead you to Search movies page where you can search any movie of your choice by name .
4. This application is implemented with a redux store.
5. Saga middleware is also used for making the asynchronous calls to the API
6. Few unit test cases are written in jest to test the working of actions and reducers.