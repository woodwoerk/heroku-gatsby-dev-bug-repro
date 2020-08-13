# [Heroku Gatsby Dev Bug Repro](https://github.com/gatsbyjs/gatsby/issues/21392)

When running `gatsby develop` on a custom preview instance (on Heroku in this case), it fails with:

```
Error: The result of this StaticQuery could not be fetched.
```

This approach is recommended in the [Gatsby docs on how to run a custom preview instance on Heroku](https://www.gatsbyjs.org/docs/running-a-gatsby-preview-server/).

## Prerequisites

- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Steps to reproduce

1. Clone this repo and jump in:

```
  git clone https://github.com/woodwoerk/heroku-gatsby-dev-bug-repro.git
  cd heroku-gatsby-dev-bug-repro
```

2. Create a new Heroku site via the heroku cli:

```
  heroku create
```

3. Set Heroku env variables:

```
  heroku config:set NODE_ENV=development
  heroku config:set NPM_CONFIG_PRODUCTION=false
  heroku config:set ENABLE_GATSBY_REFRESH_ENDPOINT=true
```

4. Deploy to Heroku:

```
  git push heroku master
```

5. After deployment, open the app url which is now running `gatsby develop` at \<heroku-app-name>.herokuapp.com
