# Expo App



<a href="apk/todotask.apk" download>Download APK</a>



```sh
npx create-expo-app@latest -e with-router
```

Install for this project

```
npm install
npm install expo
```

```
npm install @react-native-async-storage/async-storage
```

```
npx expo start
```

Tips:

1. First time for start or run project need to take a long time.

## Build

```
npx cross-env NODE_ENV=production eas build --platform android
```

```
npx eas-cli login
npx eas-cli build:configure
npx expo prebuild --clean

or

npx eas-cli build -p android
```

```
Google store install AAB installer in your phone and covert aab file to apk file.
```



## Doctor Build （X don't care it）

```
npx expo doctor@latest
npx expo install @react-native-async-storage/async-storage@1.23.1 react-native@0.76.7 react-native-screens@~4.4.0
npx expo install --check
npm install -g eas-cli
eas build:configure
npx eas-cli build -p android
```

