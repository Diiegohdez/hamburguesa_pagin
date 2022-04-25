import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className="Footer">
      <div className="SocialFooter">
         <Facebook/> <Twitter/> <Instagram/>
      </div>
      <p>&copy;2022 Burguer Sinu</p>
    </div>
  )
}

export default Footer