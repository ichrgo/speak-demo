# Speak Demo

## Setup
  * Install [Angular CLI](https://cli.angular.io/) on your local machine.
  * Clone repo and `cd` into directory.
  * Run `ng serve -o` from the command line.  Navigate to `http://localhost:4200/`.

## Developer Notes:

  * There a couple things I would refactor if I had more time:
      1. I would use a Angular service instead of a simple import to load the json data.
          - In the interests of time I went the quicker route.  But a service is probably a better way.
      2. In terms of UI, I would have used ng bootstrap:
          - I opted to use vanilla Bootstrap 4, because I wanted to refamiliarize with all the bootstrap classes.  While it was effective to refamiliarize, I could have leveraged ngx bootstrap really well here.
      3. I ran out of time before I could figure out how to load the "child" objects.  I may sneak a update in, if I get the chance.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


