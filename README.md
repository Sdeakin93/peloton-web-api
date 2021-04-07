# Peloton API Tool

A tool designed to pull some information from Peloton's public API. This tool requires the user to enter their username, and then we pull through some select information regarding their account. 

This tool currently displays:
- Profile picture
- Username
- Location
- Total workouts
- First tagged team

# Why?

This app was initially created during the Pelothon challenge of 2020, in order to display my team choice. Since this challenge has finished, it is a quick way to search through usernames outside of the app.

# Building

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It also uses [CORS-Anywhere by HerokuAPP}(https://cors-anywhere.herokuapp.com)

To build locally, ensure you have:
- node
- npm

Then cd into the folder, and run npm start! It will build at a localhost and you will be able to view the site!

# Next Steps

- Provide more data from the public API:
    - Update specific workout amounts (including icon, count, and a reference to when a user will hit century club)
- Optimise for mobile devices

- This code can be cleaned up, and I have plans to rewrite it using React Hooks rather than setting all of the individual states.
