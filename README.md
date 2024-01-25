# 🎵 Chordbook

Chordbook is a progressive web app (PWA) for viewing and editing chordsheets.

## Pre-requisites

- [Git][git]
- [Node][node]

## Development

Duplicate `.env.example` as `.env` and edit in your details

    cp .env.example .env

Install dependencies

    npm install

Start the development environment

    npm run start

Start interactive test runner

    npm run test

## Production

Duplicate `.env.example` as `.env` and edit in your details

    cp .env.example .env

Install dependencies

    npm install

Build the production bundle

    npm run build

## Data import/export

1. Visit the [Firebase console][firebase]
2. Select your project
3. Navigate to Project Settings
4. Navigate to Service Accounts
5. Click Generate New Private Key
6. Save the generated data as `data/credentials.json`

`data/songs.json.example` contains example song data.

## Contributing

Contributions are most welcome! If you would like to contribute to this project, please discuss the changes you want to make in the [project's issues][issues] first!

## License

This project is open source software licensed under the MIT license. For more information see [LICENSE][license].

[git]: https://git-scm.com/
[node]: https://nodejs.org/
[issues]: https://github.com/jtiala/chordbook/issues
[firebase]: https://console.firebase.google.com/
[license]: https://github.com/jtiala/chordbook/blob/master/LICENSE
