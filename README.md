# peloton-web-api

A web app built to pull some information from the public Peloton API.
![Screenshot 2021-05-05 at 01 08 53](https://user-images.githubusercontent.com/45657911/117084376-fa121a00-ad3e-11eb-8c84-ed42f523bf07.png)
![Screenshot 2021-05-05 at 01 08 59](https://user-images.githubusercontent.com/45657911/117084381-fda5a100-ad3e-11eb-8af8-3f0139eeef47.png)


# Demo

Can be seen on [here](https://infallible-raman-c574a0.netlify.app)
If you do not have an account, feel free to try my username: sjarquedeakin or any of the Peloton instructors!

# What is it?

A react app built initially for use during Pelothon 2020. This was used to add a username in and pull some data from the Peloton public API.

As you will see with the OldApp.js component, this initially was written as a Stateful component, before I switched to building the component with React Hooks.

# How is it built?

- Built with the assistance of @abrad45
- It is built initally with Create React App.
- In order to access the Peloton APi it uses a Cors-anywhere server hosted on (Heroku) [https://github.com/Isoaxe/cors-server]
- It has been deployed via Netlify

# Why?

This was both an experiment in updating an app with React Hooks and upgrading an app to improve it.

Peloton publically does not allow for further information without authentication, so it would be cool to explore this further.

# Updates that have been made (05/05/2021)

- I have now implemented useReducer into my code
- We have now included filters in, initially just filtering workouts, we will add an additional two filters in coming updates.
- ~~This is not a stable API, so I will be working to access the data in a better way.~~ This was remedied by creating my own cors-server using the above.
- I am _still_ aware the code/css needs cleaning up.
- I need to add in an error case if no user is found - as there currently is no update
- Peloton has since removed the icon/location from their public API (I presume for privacy) and I found that many users did not use the tags as much as I did, so have removed this (it may get added back in at points)
