# peloton-web-api
A web app built to pull some information from the public Peloton API

# Demo
Can be seen on [here](https://infallible-raman-c574a0.netlify.app)
If you do not have an account, feel free to try my username: sjarquedeakin or any of the Peloton instructors!

# What is it?
A react app built initially for use during Pelothon 2020. This was used to add a username in and pull some data from the Peloton public API.

As you will see with the OldApp.js component, this initially was written as a Stateful component, before I switched to building the component with React Hooks.

# How is it built?
- It is built initally with Create React App.
- In order to access the Peloton APi it uses a Cors-anywhere server hosted on Heroku [https://github.com/Isoaxe/cors-server]
- It has been deployed via Netlify

# Why?
This was both an experiment in updating an app with React Hooks and upgrading an app to improve it.

# Next Steps
- I plan on including useReducer as a better dev experience. 
- I am aware the code/css needs cleaning up.
- I need to add in an error case if no user is found
- ~~This is not a stable API, so I will be working to access the data in a better way.~~ This was remedied by creating my own cors-server using the above.

Peloton publically does not allow for further information without authentication, so it would be cool to explore this further.

