import React from 'react';
import { IconButton, TextField } from '@material-ui/core';
import { Facebook, Twitter, Instagram, Pinterest, Smartphone } from '@material-ui/icons';


const Footer = () => {
  return (
    <div className="db_footerContainer">
      <div className="db_footer-bar">
        <div className="db_footerBarContents">
          <div>Get the latest deals and more.</div>
          <div id="db_email_input">
            <TextField className="db_emailInput" type="text" placeholder="Enter email address" variant="outlined" size="small" style={{
              backgroundColor: "white",
            }} />
            <button id="db_signup" >Sign Up</button>
          </div>
          <div className="db_mobileApp">
            <IconButton >
              <Smartphone />
            Best Buy app</IconButton>
          </div>
        </div>
      </div>
      <div className="db_lowerCenterFooter">
        <div className="db_lowerCenterFooterContents">
          <div className="db_footerLists">
            <div className="db_col1">
              <div className="db_col1_row1">
                <h3 className="db_colHeading
                ">My Best Buy</h3>
                <ul className="db_footerList">
                  <li>View Points & Certifications</li>
                  <li>Member Offers</li>
                  <li>Sign in or Create Account</li>
                </ul>
              </div>
              <div className="db_col1_row2">
                <h3 className="db_colHeading
                ">Credit Cards</h3>
                <ul className="db_footerList">
                  <li>Make a Payment at Citibank</li>
                  <li>Check Balance at Citibank</li>
                  <li>Credit Card Offers</li>
                  <li>Apply Now</li>
                </ul>
              </div>
            </div>
            <div className="db_col2">
              <div className="db_col2_row1">
                <h3 className="db_colHeading
                ">Orders & Returns</h3>
                <ul className="db_footerList">
                  <li>Order Status</li>
                  <li>Shipping, Delivery & Store Pickup</li>
                  <li>Return & Exchange Promise</li>
                  <li>Price Match Guarantee</li>
                </ul>
              </div>
              <div className="db_col2_row2">
                <h3 className="db_colHeading
                ">Lease to Own</h3>
                <ul className="db_footerList">
                  <li>Apply Now</li>
                </ul>
              </div>
            </div>
            <div className="db_col3">
              <div className="db_col3_row1">
                <h3 className="db_colHeading">Support & Services </h3>
                <ul className="db_footerList">
                  <li>Customer Service</li>
                  <li>Protection Plans</li>
                  <li>Schedule a Service</li>
                  <li>Trade-In Program</li>
                  <li>Product Recalls</li>
                </ul>
              </div>
            </div>
            <div className="db_col4">
              <div className="db_col4_row1">
                <h3 className="db_colHeading
                ">Partnership</h3>
                <ul className="db_footerList">
                  <li>Affiliate Program</li>
                  <li>Developers</li>
                  <li>Best Buy Education</li>
                  <li>Best Buy for Business</li>
                  <li>Advertise with Us</li>
                </ul>
              </div>
              <div className="db_col4_row2">
                <h3 className="db_colHeading
                ">International Sites</h3>
                <ul className="db_footerList">
                  <li>Best Buy Mexico</li>
                  <li>Best Buy Canada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="db_row1">
          <p>Corporate Information | Forums, Blog & More | Careers | Accessibility | Terms & Conditions | Privacy | Interest-Based Ads | California Privacy Rights | Do Not Sell My Personal Information | California Supply Chain Transparency Act</p>
        </div>
        <div className="db_socialMediaIcons">
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
        <div className="db_row2">
          <p>Prices and offers are subject to change. © 2020 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the tag design, MY BEST BUY, and BESTBUY.COM are trademarks of Best Buy and its affiliated companies.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;