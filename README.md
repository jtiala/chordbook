# 🎵 Chordbook

[![Actions Status][actions-status-badge]][actions-status]
[![Dependencies Status][dependencies-status-badge]][dependencies-status]
[![Dev Dependencies Status][devdependencies-status-badge]][devdependencies-status]
[![PRs Welcome][prs-badge]][contributing]
[![License][license-badge]](license)

[Chordbook][chordbook] is a progressive web app (PWA) for viewing and editing chordsheets.

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

[actions-status]: https://github.com/jtiala/chordbook/actions
[actions-status-badge]: https://github.com/jtiala/chordbook/workflows/CI/CD/badge.svg
[dependencies-status]: https://david-dm.org/jtiala/chordbook
[dependencies-status-badge]: https://img.shields.io/david/jtiala/chordbook.svg
[devdependencies-status]: https://david-dm.org/jtiala/chordbook?type=dev
[devdependencies-status-badge]: https://img.shields.io/david/dev/jtiala/chordbook.svg
[contributing]: #contributing
[prs-badge]: https://img.shields.io/badge/prs-welcome-blue.svg
[license]: https://github.com/jtiala/chordbook/blob/master/LICENSE
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[git]: https://git-scm.com/
[node]: https://nodejs.org/
[issues]: https://github.com/jtiala/chordbook/issues
[chordbook]: https://chordbook.jtia.la
[firebase]: https://console.firebase.google.com/
