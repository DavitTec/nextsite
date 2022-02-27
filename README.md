## NextSite - Getting Started

![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/davittec/nextsite?label=version&logo=davit&sort=semver)
![node-lts](https://img.shields.io/node/v/next?color=%23750e35&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/davittec/nextsite?color=%23750e35&style=flat-square)

Hosting a Next.js website with GitHub Pages example


First, run the development server:

1. Choose a place to run a local copy and open the terminal
1. Get copy from Github  eg

![Clone](public/img/clone.png)

and copy the following into the terminal. This will create a appropriate location or change to suit your preferences.
```bash
mkdir -p "$HOME/GitHub/DavitTec/"
git clone https://github.com/DavitTec/nextsite.git $HOME/GitHub/DavitTec/nextsite
cd $HOME/GitHub/DavitTec/nextsite
pwd

```


```bash

echo "Check installed versions"
echo -e "VERSIONS\nNode:\t$(node -v)\nNVM:\t$(nvm -v)\nNPM:\t$(npm -v)\n"

```

```bash
npm update # update any missing packages
npm run dev # run the development

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`.
The page auto-updates as you edit the file.


[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Requirements
Node:	v16.14.0
NVM:	0.38.0
NPM:	8.5.1

## References
https://dev.to/jameswallis/deploying-a-next-js-app-to-github-pages-24pn
