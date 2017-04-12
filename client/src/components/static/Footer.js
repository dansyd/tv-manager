import React from 'react';
import './css/Footer.css'

const Footer = (props) => {
  return (
    <footer>
        {'\u00A9'} 2017 Daniele Peviani. <img src="/images/tmdb.png" alt=""/> This product uses the TMDb API but is not endorsed or certified by TMDb.
    </footer>
  )
}

export default Footer;
