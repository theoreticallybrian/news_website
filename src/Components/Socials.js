import React from 'react';
import "./Socials.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Socials() {
  return (
    <div className='socials'>
<div className='socials_title'>Follow Us on Our Social Handles</div>
        <div className='socials_container'>
<FacebookIcon className='social_icon' fontSize="large"/>
<LinkedInIcon className='social_icon' fontSize="large"/>
<InstagramIcon className='social_icon' fontSize="large"/>
<YouTubeIcon className='social_icon' fontSize="large"/>
<TwitterIcon className='social_icon' fontSize="large"/>
        </div>
    </div>
  )
}

export default Socials