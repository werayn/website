# Junique Virgile Website
---

## Description

Welcome !
This is the website for my freelance company and his portfolio, built with `Reactjs` and `npm` and the respect of the `ES6`.
Using your phone or the web you can see and get all the information about me and my professional work.

## Getting started

### Prerequisites

#### IDE

You can choose the IDE you whant, but you need to have some packages installed with it like `ESLint` for the live linter, and some `React` packages to get autocompletion.
Here an exemple of the needed packages with Visual Studio Code IDE:

- `Reactjs code snippets`
- `ESLint`

#### Node / Npm

Since it's a JS-Based project, due to ReactJs you need to install some stuff on your computer:

- macOS:
  Install [Homebrew](https://brew.sh) as package manager and install the following dependencies:

```bash
brew install node
brew install npm
```

---

- Windows:
  Note that you can't run iOS app on windows.
  Install [Chocolatey](https://chocolatey.org) as package manager and install the following dependencies:

```bash
choco install -y nodejs.install python2 jdk8 npm
```

---

- Linux:
  Follow the [install instructions for your linux distribution](https://nodejs.org/en/download/package-manager/) to install Node 8 or newer and npm and his little brother `yarn`.

---

### Install the project

First you need to clone the repository:
Do not forget to upload your SSH Key into github and having the right access.

```bash
git clone git@github.com:werayn/draw-my-website
```

After you need to install all the dependencies before trying to run it:

```bash
yarn install
```

or simply

```bash
yarn
```

### Run it

When everything is installed, if you want to run it in local, do the following:

```bash
yarn start:dev
```

### Test it

when everything is installed and run well, if you want to run every unit tests, do the following:

```bash
yarn test
```

## Deployement

You need to install all the dependencies before trying to deploy it:

```bash
yarn install
```

or simply

```bash
yarn
```

When everything is installed, if you want to deploy it, do the following:

```bash
yarn start:prod
```

## Documentation

if you want to know everything about my website just run :

```bash
yarn doc
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

I use nothing for the versioning right now.

## Authors

* **Junique Virgile** - *Initial contributor* - [Junique Virgile](https://github.com/werayn)

## License

This project is no licensed - it's a completely private project.

## Acknowledgments
* Thank's to [Jérémy Marjollet](https://github.com/JeremyMarjollet) for his help into my devOps solution
---
