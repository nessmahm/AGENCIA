import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
function Footer() {
  return (
    <footer>
        <h4 >AGENCIA</h4>
        <div class='icons'>
        <li ><IoLogoWhatsapp/></li>
        <li><AiFillInstagram/></li>
        <li><BsFacebook/></li>
        </div>
    </footer>
  )
}

export default Footer