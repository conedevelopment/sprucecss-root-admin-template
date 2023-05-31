<p>
  <a href="https://sprucecss.com/#gh-light-mode-only">
    <br/>
    <img src="./.github/spruce-logo-dark.svg" alt="Spruce CSS" width="160">
    <br/>
  </a>
  <a href="https://sprucecss.com/#gh-dark-mode-only">
    <br/>
    <img src="./.github/spruce-logo-light.svg" alt="Spruce CSS" width="160">
    <br/>
  </a>
</p>

**The “Spruce CSS Eleventy Starter” repository contains a simple boilerplate for starting your next project with Eleventy x Spruce CSS.**

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Get Up and Running](#get-up-and-running)
- [SCSS](#scss)
- [Other Scripts](#other-scripts)
- [License](#license)

## Get Up and Running

We use `eleventy --serve` and compile Sass with sass-cli with npm scripts.

1. **Clone the repository.**

2. **Install the dependencies.**

    In the `package.json` file, you will find all of the dependencies (and scripts) to install them using the following command:

    ```shell
    npm install
    ```

3. **Run the development mode**

    To run the development mode, use the `npm script`.   This script will also watch for changes.

    ```shell
    npm start
    ```

4. **Run the production mode**

    Before you go live, you should use the production script to compress the Sass files.

    ```shell
    npm run prod
    ```

## SCSS

The project compiles the SCSS files from the `./src/scss` folder into the `./src/css` folder. The project includes [Spruce CSS](https://sprucecss.com/), which gives the styling with some [Spruce UI](https://sprucecss.com/ui/getting-started/introduction/) components.

## Other Scripts

- **sass:lint/sass:lint:fix** You can lint your SCSS files with [Stylelint](https://stylelint.io/) and [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines) preset with the `npm run sass:lint` command. Use the `npm run sass:lint:fix` command if you want automatic fixes.

- **js:lint/js:lint:fix** You can also lint your JS like with Sass. For the rules, we use the Airbnb preset.

## License

The code is licensed under the [MIT](LICENSE).
