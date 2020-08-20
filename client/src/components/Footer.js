import React from 'react';
import { IconButton } from '@material-ui/core';
import { Facebook } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';
import { Pinterest } from '@material-ui/icons';
import { Smartphone } from '@material-ui/icons';


const Footer = (props) => {
  return (
    <div className="footerContainer">
      <div className="footer-bar">
        <div className="footerBarContents">
          <div>Get the latest deals and more.</div>
          <input type="text" placeholder="Enter email address"/>
          <button>Sign Up</button>
          <div className="mobileApp">
            <IconButton >
              <Smartphone />
            Best Buy app</IconButton>
          </div>
        </div>
      </div>
      <div className="lowerCenterFooter">
        <div className="lowerCenterFooterContents">
          <div className="footerLists">
            <div className="col1">
              <h3 className="colHeading
              ">My Best Buy</h3>
              <ul className="footerList">
                <li>View Points & Certifications</li>
                <li>Member Offers</li>
                <li>Sign in or Create Account</li>
              </ul>
              <h3 className="colHeading
              ">Credit Cards</h3>
              <ul className="footerList">
                <li>Make a Payment at Citibank</li>
                <li>Check Balance at Citibank</li>
                <li>Credit Card Offers</li>
                <li>Apply Now</li>
              </ul>
            </div>
            <div className="col2">
              <h3 className="colHeading
              ">Orders & Returns</h3>
                <ul className="footerList">
                  <li>Order Status</li>
                  <li>Shipping, Delivery & Store Pickup</li>
                  <li>Return & Exchange Promise</li>
                  <li>Price Match Guarantee</li>
                </ul>
                <h3 className="colHeading
                ">Lease to Own</h3>
                <ul className="footerList">
                  <li>Apply Now</li>
                </ul>
            </div>
            <div className="col3">
              <h3 className="colHeading">Support & Services </h3>
                <ul className="footerList">
                  <li>Customer Service</li>
                  <li>Protection Plans</li>
                  <li>Schedule a Service</li>
                  <li>Trade-In Program</li>
                  <li>Product Recalls</li>
                </ul>
            </div>
            <div className="col4">
              <h3 className="colHeading
              ">Partnership</h3>
              <ul className="footerList">
                <li>Affiliate Program</li>
                <li>Developers</li>
                <li>Best Buy Education</li>
                <li>Best Buy for Business</li>
                <li>Advertise with Us</li>
              </ul>
              <h3 className="colHeading
              ">International Sites</h3>
              <ul className="footerList">
                <li>Best Buy Mexico</li>
                <li>Best Buy Canada</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="row1">
          <p>Corporate Information | Forums, Blog & More | Careers | Accessibility | Terms & Conditions | Privacy | Interest-Based Ads | California Privacy Rights | Do Not Sell My Personal Information | California Supply Chain Transparency Act</p>
        </div>
        <div className="socialMediaIcons">
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
          <IconButton>
            <Pinterest />
          </IconButton>
        </div>
        <div className="row2">
          <p>Prices and offers are subject to change. © 2020 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the tag design, MY BEST BUY, and BESTBUY.COM are trademarks of Best Buy and its affiliated companies.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;