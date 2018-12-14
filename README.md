1. Setup Server
2. Setup Google OAuth
3. Push to Heroku
4. Setup Mongo:
   a) Connect to mongoose
   b) Create schema, with googleID. mongoose.model to load it into mongoose (2 params)
   c) When login, checks to see if google user id is equal to anything in the database. If yes, then it logs user in, won't create new user. If no, creates new user and logs user in. (this is done in passport section, using mongoose and creating and saving new User class) mongoose.model to pull it from mongoose (1 param). prompt: 'select_account' to get login screen
   d) Cookies part: After use has been logged in, must call serializeUser to generate identifying piece of info, stuffs it into cookie. user.id is the cookie. install cookie-session. Require library in server. app.use({cookieSession}) then add maxAge, and keys array
   e) app.use(passport.initialize()) and app.use(passport.session()) tells passport to use cookies to initialize.

5. Setup Dev and Prod (Google Oauth 2nd one, Mongo 2nd one). Right now, one set of keys. create dev, and prod.js in config. prod has just process.env and dev is now gitignored. the keys contains the logic. setup new Heroku config, with Google Developer client secret and id, and new mongodb url. Will get redirect error, is going to http instead of https. Will need to add proxy into package.json. and proxy: true into the passport.js

6. Setup Client with concurrently and homepage that links to Google Oauth flow. Must setup setupProxy.js and inside of it, npm install http-proxy-middleware into client, require http-proxy-middleware then proxy /auth/google with target: localhost:5000
