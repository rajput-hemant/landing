<div align=center>

![views] ![stars] ![forks] ![issues] ![license] ![repo-size]

<img src="public/favicon.svg" alt="Qwik Logo" style="width:150px; height:150px"/>

# Qwik Starter Template ⚡️

### A Minimal Qwik City Starter Template with TypeScript, Tailwind CSS, and pre-configured with ESLint, Prettier, and Husky.

</div>

## Features

- ⚡ **[Qwik](https://qwik.builder.io/)** - Deliver instant apps at scale, Build instantly-interactive web apps without effort.
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** - A Utility-First CSS Framework for Rapid UI Development
- 📦 **[TypeScript](https://www.typescriptlang.org/)** - A typed superset of JavaScript that compiles to plain JavaScript
- 📝 **[ESLint](https://eslint.org/)** - The pluggable linting utility for JavaScript and JSX
- 🛠 **[Prettier](https://prettier.io/)** - An opinionated code formatter
- 🐶 **[Husky](https://typicode.github.io/husky/#/)** - A tool that makes Git hooks easy
- 🚫 **[lint-staged](https://github.com/okonet/lint-staged)** - Run linters against staged git files
- 📄 **[commitlint](https://commitlint.js.org/#/)** - Lint commit messages
- 📦 **[bun](https://bun.sh)** - A JavaScript runtime w/ Fast, disk space efficient package manager

## Getting Started

**Install `degit` globally**

```bash
bun i -g degit || pnpm i -g degit || yarn global add degit || npm i -g degit
```

**Create a new project from this template**

```bash
degit rajput-hemant/qwik-template <project-name>
cd <project-name>
```

**Install dependencies**

```bash
bun i || pnpm i || yarn || npm i
```

**Initialize a new git repository _(Optional)_:**

```bash
git init
git add .
git commit --no-verify -m "init"
```

## Available Scripts

Check out the [package.json](package.json) for all available scripts.

## After Installation Checklist

- [ ] Update `package.json` with your project details.
- [ ] Update `README.md` with your project details.
- [ ] Update `LICENSE` with your name and year.

## Switching Package Manager

This template uses [bun](https://bun.sh/docs/cli/install) as the default package manager. If you want to use `pnpm`, `npm` or `yarn`, you need to remove the `bun.lockb` file and run `pnpm i`, `npm i` or `yarn` to generate the lock file for the respective package manager.

## Deployments

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/rajput-hemant/qwik-template)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rajput-hemant/qwik-template)

You can also check out other deployment options, run

```
bun qwik add
```

[Read more](https://qwik.builder.io/docs/deployments)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributors:

<div align=center>

[![][contributors]][contributors-graph]

_Note: It may take up to 24h for the [contrib.rocks][contrib-rocks] plugin to update because it's refreshed once a day._

</div>

<!----------------------------------{ Labels }--------------------------------->

[views]: https://komarev.com/ghpvc/?username=qwik-template&label=view%20counter&color=red&style=flat
[repo-size]: https://img.shields.io/github/repo-size/rajput-hemant/qwik-template
[issues]: https://img.shields.io/github/issues-raw/rajput-hemant/qwik-template
[license]: https://img.shields.io/github/license/rajput-hemant/qwik-template
[forks]: https://img.shields.io/github/forks/rajput-hemant/qwik-template?style=flat
[stars]: https://img.shields.io/github/stars/rajput-hemant/qwik-template
[contributors]: https://contrib.rocks/image?repo=rajput-hemant/qwik-template&max=500
[contributors-graph]: https://github.com/rajput-hemant/qwik-template/graphs/contributors
[contrib-rocks]: https://contrib.rocks/preview?repo=rajput-hemant%qwik-template
