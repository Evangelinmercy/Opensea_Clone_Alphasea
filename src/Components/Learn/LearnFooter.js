import { Box, Grid } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const LearnFooter = () => {
  return (
    <div className="Learn-footer">
      <Box container>
        <div className="footer-main-two">
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="footer-title-two">
                <div className="footer-image">
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
              <div className="footer-ul">
                <Typography sx={{ mt: 1, mb: 1 }} variant="h6" className="h6">
                  Marketplace
                </Typography>
                <List>
                  <ListItem className="footer-list">
                    <ListItemText primary="Drops" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Stats" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Art" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Gaming" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Memberships" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="PFPs" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Photography" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Music" />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
              <div className="footer-ul">
                <Typography sx={{ mt: 1, mb: 1 }} variant="h6" className="h6">
                  My account
                </Typography>
                <List>
                  <ListItem className="footer-list">
                    <ListItemText primary="Profile" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Make a deal" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Create" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Watchlist" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="My Collections" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Settings" />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
              <div className="footer-ul">
                <Typography sx={{ mt: 1, mb: 1 }} variant="h6" className="h6">
                  Resources
                </Typography>
                <List>
                  <ListItem className="footer-list">
                    <ListItemText primary="Blog" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Learn center" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Help center" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Community standards" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Platform status" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Partners" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Taxes" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Blog" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Docs" />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
              <div className="footer-ul">
                <Typography sx={{ mt: 1, mb: 1 }} variant="h6" className="h6">
                  Learn
                </Typography>
                <List>
                  <ListItem className="footer-list">
                    <ListItemText primary="What is an NFT" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="How to buy an NFT" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="How to sell an NFT" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="How to create an NFT" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="What are NFT drops" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="What is a crypto wallet" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="How to mint an NFT" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="How to stay protected" />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
              <div className="footer-ul">
                <Typography sx={{ mt: 1, mb: 1 }} variant="h6" className="h6">
                  Community
                </Typography>
                <List>
                  <ListItem className="footer-list">
                    <ListItemText primary="X" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Instagram" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Threads" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Discord" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="YouTube" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Reddit" />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
              <div className="footer-ul">
                <Typography sx={{ mt: 1, mb: 1 }} variant="h6" className="h6">
                  Company
                </Typography>
                <List>
                  <ListItem className="footer-list">
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Careers" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Ventures" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Privacy policy" />
                  </ListItem>
                  <ListItem className="footer-list">
                    <ListItemText primary="Terms of service" />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="footer-copy">
                <p>
                  The world’s first and largest digital marketplace for crypto
                  collectibles and non-fungible tokens (NFTs). Buy, sell, and
                  discover exclusive digital items.
                </p>
                <p>© 2018 - 2023 Ozone Networks, Inc</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
};
export default LearnFooter;
