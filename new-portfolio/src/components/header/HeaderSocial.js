import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
const HeaderSocial = () => {
    return (
        <div className='header__social'>
        <a href='https://linkedin.com' target='blank'><FaLinkedin/> </a>
        <a href='https://github.com' target='blank'><FaGithub/> </a>
        <a href='https://facebook.com' target='blank'><FaFacebook/> </a>
        <a href='https://twitter.com' target='blank'><FaTwitter/> </a>
        </div>
    )
}

export default HeaderSocial
