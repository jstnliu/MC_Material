const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Always require and configure near the top 
require('dotenv').config();
// Connect to the database
require('./config/database');

const usersRouter = require('./routes/api/users');
const postsRouter = require('./routes/api/posts');
const animesRouter = require('./routes/api/animes')

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'))

// Put API routes here, before the "catch all" route
app.use('/api/users', usersRouter);
app.use('/api/users/login', usersRouter)

// Component Routers
const ensureLoggedIn = require('./config/ensureLoggedIn')
app.use('/api/posts', postsRouter)
app.use('/api/animes', animesRouter)


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

 // Configure to use port 3001 instead of 3000 during
 // development to avoid collision with React's dev server
 const port = process.env.PORT || 3001;
	
 app.listen(port, function() {
   console.log(`Express app running on port ${port}`)
 });