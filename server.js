const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const api_key = require('./config');
const ROOT_URL = 'https://api.themoviedb.org/3/';

// App Setup
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
const router = express.Router();
app.use('/api', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// // Serve static assets
// app.use(express.static(path.resolve(__dirname, 'build')));
//
// // Always return the main index.html, so react-router render the route in the client
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// });

// Routes
router.get('/discover', function(req, res) {
  const url = ROOT_URL + 'discover/tv?api_key=' + api_key + '&sort_by=popularity.desc&first_air_date_year=2016&with_original_language=en&page=1';
    axios.get(url)
      .then( function(response) {
        res.send(response.data.results);
      }).catch(function(error) {
        throw error;
      });
});

router.get('/config', function(req, res) {
  const url_config = ROOT_URL + 'configuration?api_key=' + api_key;
    axios.get(url_config)
      .then( function(config) {
        res.send(config.data);
      }).catch(function(error) {
        throw error;
      });
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
