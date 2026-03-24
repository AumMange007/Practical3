import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box className="bg-black text-white pt-16 pb-8">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" className="text-yellow-500 font-bold mb-4">
              TAJ
            </Typography>
            <Typography className="text-gray-400 text-sm">
              Experience world-class hospitality and unforgettable stays at our
              premium destinations.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="text-yellow-500 mb-4">
              Quick Links
            </Typography>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" underline="none" color="inherit">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#" underline="none" color="inherit">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="#" underline="none" color="inherit">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="#" underline="none" color="inherit">
                  Offers
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Support */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="text-yellow-500 mb-4">
              Support
            </Typography>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" underline="none" color="inherit">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" underline="none" color="inherit">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" underline="none" color="inherit">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" underline="none" color="inherit">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Contact + Social */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="text-yellow-500 mb-4">
              Contact
            </Typography>
            <Typography className="text-gray-400 text-sm mb-2">
              Email: support@tajhotels.com
            </Typography>
            <Typography className="text-gray-400 text-sm mb-4">
              Phone: +91 98765 43210
            </Typography>

            <div className="flex gap-3">
              <IconButton className="text-white hover:text-yellow-500">
                <Facebook />
              </IconButton>
              <IconButton className="text-white hover:text-yellow-500">
                <Instagram />
              </IconButton>
              <IconButton className="text-white hover:text-yellow-500">
                <Twitter />
              </IconButton>
            </div>
          </Grid>
        </Grid>

        {/* Bottom */}
        <Box className="border-t border-gray-800 mt-12 pt-6 text-center">
          <Typography className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TAJ Hotels. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
