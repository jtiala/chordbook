# Chordbook

Chords, tabs and lyrics viewer ideal for band practices.

## Config

    cp .env.sample .env
    # insert your firebase details

## Dev

    yarn
    yarn start

## Prod

    yarn
    yarn build

## Data import/export

1. Visit the [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to Project Settings
4. Navigate to Service Accounts
5. Click Generate New Private Key
6. Save the generated data as `data/credentials.json`

`data/songs.json.sample` contains example song data.
