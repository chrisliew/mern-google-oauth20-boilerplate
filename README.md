BACK END:

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

6. Setup Client with concurrently and homepage that links to Google Oauth flow. npm install http-proxy-middleware into client, Must setup setupProxy.js and inside of it, require http-proxy-middleware then proxy /auth/google with target: localhost:5000

7. Setup Heroku Post Build scripts. Remove serviceworker from index.js.

8. Add into server:

```
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static('client/build'));

  // Express will serve up index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
```

FRONT END:

1. Go to client folder. npm install redux, react-redux. npm install materialize css and then import it into App.js

REDUX:

1. create store. takes rootreducers as argument. Wrap app in Provider store={store}
2. create reducers index file, and seperate auth file. use combinereducers function in index file, then import reducers from the reducers folder into the store first argument.
3. create actions
4. npm install axios and redux-thunk

5. Fix proxy to add api (see example)
   app.use(proxy('/api/\*', { target: 'http://localhost:5000' }));

6. Refactor action to accomodate for the redux-thunk (watch video again). REDUX THUNK is not very clear.

7. In App file, connect to the store at bottom of page.

8. Header, setup auth flow. redirect to dashboard.

9. Logout is tricky: Full http request vs ajax request.

10. Link vs a tag: Link does not pull up new html doc, a does. So use a for login and
