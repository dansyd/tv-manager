const express = require('express');
const apicache = require('apicache');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const ROOT_URL = 'https://api.themoviedb.org/3/';
const api_key = process.env.TMDB_API_KEY;

// App Setup
const app = express();
const cache = apicache.middleware;
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// // Serve static assets
// app.use(express.static(path.resolve(__dirname, 'build')));
//



// Routes
app.get('/api/discover', cache('1 day'), function(req, res) {
  const url = ROOT_URL + 'discover/tv?api_key=' + api_key + '&sort_by=popularity.desc&first_air_date_year=2016&with_original_language=en&page=1';
    axios.get(url)
      .then( function(response) {
        res.send(response.data.results);
      }).catch(function(error) {
        throw error;
      });
});

app.get('/api/config', cache('3 days'), function(req, res) {
  const url_config = ROOT_URL + 'configuration?api_key=' + api_key;
    axios.get(url_config)
      .then( function(config) {
        res.send(config.data);
      }).catch(function(error) {
        throw error;
      });
});

app.get('/api/search', function(req, res) {
  const url = ROOT_URL + 'search/tv?api_key=' + api_key + '&query=' + req.query.q + '&page=1';
    axios.get(url)
      .then(function(response) {
        res.send(response.data);
      }).catch(function(error) {
        throw error;
      });
});

app.get('/api/show/:id', cache('1 hour'), function(req, res) {
  const url = ROOT_URL + 'tv/' + req.params.id + '?api_key=' + api_key;
    axios.get(url)
      .then(function(response) {
        res.send(response.data);
      }).catch(function(error) {
        throw error;
      });
});

app.get('/api/show/:id/cast', cache('1 hour'), function(req, res) {
  const url = ROOT_URL + 'tv/' + req.params.id + '/credits?api_key=' + api_key;
    axios.get(url)
      .then(function(response) {
        res.send(response.data);
      }).catch(function(error) {
        throw error;
      });
});


// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// Server setup
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
});


function buildImageUrl(shows, config) {
  shows.forEach(function(show) {
    show.thumbnail = config.images.base_url + config.images.poster_sizes[3] + show.poster_path;
  });
  return shows;
}
