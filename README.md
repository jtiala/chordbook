# 🎵 Chordbook

[![Build Status][build-status-badge]][build-status]
[![License][license-badge]](license)

Chords, tabs and lyrics viewer ideal for band practices.

## Config

    cp .env.sample .env

Edit `.env`. If your app is not running in the root of the url, add the path to `PUBLIC_PATH`, f.ex `PUBLIC_PATH=/chordbook/`. Also insert your Firebase details, found in the [Firebase project settings](https://console.firebase.google.com/).

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

[build-status]: https://travis-ci.com/jtiala/chordbook
[build-status-badge]: https://travis-ci.com/jtiala/chordbook.svg?branch=master
[license]: https://github.com/jtiala/chordbook/blob/master/LICENSE
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
