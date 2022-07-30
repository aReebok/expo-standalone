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

### Built APK files for test on Google Drive

1. Expo Google OAuth exporting test
    * File: [myoauth-WITHOUTBackendRequest](https://drive.google.com/file/d/1J9mlqBuYh45ffjRoS_A3kjLe5JR_imNc/view?usp=sharing)


1. Expo Google OAuth with PSQL database request test
    * This one will send a simple request to check if logged in email is in the `pf-server` (requires a running server with express API).
    * File: [myoauth-WITHBackendRequest.apk](https://drive.google.com/file/d/1nZ6pbXsZSd5wRlIFwlbdritrz5hAnCC0/view?usp=sharing)


1. Expo Barcode scanner standalone test
    * File: [TestBarcodeScanner.apk](https://drive.google.com/file/d/1tRxw6VVnWsLTZ9T4oUhXw5ZBPdIb16Wd/view?usp=sharing)

### Source

* [Deploying to a standalone app on Android](https://docs.expo.dev/versions/v43.0.0/sdk/google/#deploying-to-a-standalone-app-on-android).