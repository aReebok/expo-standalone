# Expo Standalone Research App

This small demo application allows you to export an Expo app that has expo dependencies such as expo-google-app-auth. Additionally, it tests PSQL database request through my backend server (see in Project-Friendship-App repo). 

### Set Up for Standalone Android App

1. Clone repository locally. 
1. Change directory into the cloned repository to run `npm i` to install all dependencies.
    Note: I have extra dependencies because this is essentially for the Project Friendship final mobile application deployment.
1. Have the Express backend `pf-server` running using the command `npm run deploy` in the proper direcotry, or just comment out some of the lines in App.js that creates requests for the backend server. 
1. Now to export the app, run `expo build:android`, select apk.
1. Once the build is done, you can click on the link and download this apk file for android. 

Follow more instructions in the link in sources to create your own API key/standaloneAndroidClientId on [Google Cloud Console](https://console.cloud.google.com/apis/credentials?project=project-friendship-344505).

### Source

* [Deploying to a standalone app on Android](https://docs.expo.dev/versions/v43.0.0/sdk/google/#deploying-to-a-standalone-app-on-android).