import React from 'react'
import './Footer.css'
import { Box, Container, Grid } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import OutletIcon from '@mui/icons-material/Outlet';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
// import Payment from '../Payment/Payment';

  
const foorter = () => {
  return (
    <div className="footer-section-main">
      <div className="footer-section">
        {/* <Container> */}
        {/* <div>
          <Payment />
        </div> */}
        <Box Container>
          <div className="footer-main">
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className="footer-title">
                  <h4>Stay in the loop </h4>
                  <p>
                    Join our mailing list to stay in the loop with our newest
                    feature releases, NFT drops, and tips and tricks for
                    navigating Our Firm.
                  </p>
                </div>
                <div className="footer-form">
                  <form noValidate autoComplete="off">
                    <Grid container>
                      <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                        <FormControl spacing={2} className="email-input-main">
                          <OutlinedInput
                            placeholder="You email address"
                            className="email-input"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                        <Button variant="contained" className="footer-button">
                          sign up
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className="">
                  <div>
                    <h4>Join the community</h4>
                  </div>
                  <div className="footer-icon-main">
                    <div className="footer-icon">
                      <TwitterIcon />
                    </div>
                    <div className="footer-icon">
                      <InstagramIcon />
                    </div>
                    <div className="footer-icon">
                      <SmartToyIcon />
                    </div>
                    <div className="footer-icon">
                      <OutletIcon />
                    </div>
                    <div className="footer-icon">
                      <YouTubeIcon />
                    </div>
                    <div className="footer-icon">
                      <LibraryMusicIcon />
                    </div>
                    <div className="footer-icon">
                      <EmailIcon />
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Box>
        <hr />
        {/* </Container> */}
        <div className="footer-section-two">
          <Box container>
            <div className="footer-main-two">
              <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <div className="footer-title-two">
                    {/* <div className='footer-image'>
                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
                </div> */}
                    <div className="footer-title">
                      <h4>Our Firm</h4>
                      <p>
                        The world’s first and largest digital marketplace for
                        crypto collectibles and non-fungible tokens (NFTs). Buy,
                        sell, and discover exclusive digital items.
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
                  <div className="footer-ul">
                    <Typography
                      sx={{ mt: 1, mb: 1 }}
                      variant="h6"
                      className="h6"
                    >
                      Marketplace
                    </Typography>
                    <List>
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
                    <Typography
                      sx={{ mt: 1, mb: 1 }}
                      variant="h6"
                      className="h6"
                    >
                      My Account
                    </Typography>
                    <List>
                      <ListItem className="footer-list">
                      <Link to={"/profile"}>
                        <ListItemText primary="Profile" />
                        </Link>
                      </ListItem>
                      
                      <ListItem className="footer-list">
                      <Link to={"/favourites"}>
                        <ListItemText primary="Favourites" />
                        </Link>
                      </ListItem>
                      <ListItem className="footer-list">
                      <Link to={"/watchlist"}>
                        <ListItemText primary="Watchlist" />
                        </Link>
                      </ListItem>
                      <ListItem className="footer-list">
                      <Link to={"/header-studio-Collections"}>
                        <ListItemText primary="Studio" />
                        </Link>
                      </ListItem>
                      {/* <ListItem className="footer-list">
                        <ListItemText primary="OpenSea Pro" />
                      </ListItem> */}
                      <ListItem className="footer-list">
                      <Link to={"/profilesettings"}>
                        <ListItemText primary="Settings" />
                        </Link>
                      </ListItem>
                    </List>

                    <div>
                      <Typography
                        sx={{ paddingTop: "20px" }}
                        variant="h6"
                        className="h6"
                      >
                        Stats
                      </Typography>
                      <List>
                        <ListItem className="footer-list">
                          <ListItemText primary="Rankings" />
                        </ListItem>
                        <ListItem className="footer-list">
                          <ListItemText primary="Favorites" />
                        </ListItem>
                      </List>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
                  <div className="footer-ul">
                    <Typography
                      sx={{ mt: 1, mb: 1 }}
                      variant="h6"
                      className="h6"
                    >
                      Resources
                    </Typography>
                    <List>
                      <ListItem className="footer-list">
                      <Link to={"/blog"}>
                        <ListItemText primary="Blog" />
                        </Link>
                      </ListItem>
                      <ListItem className="footer-list">
                      <Link to={"/learn-homepage"}>
                        <ListItemText primary="Learn" />
                        </Link>
                      </ListItem>
                      <ListItem className="footer-list">
                      <Link to={"/helpcenter"}>
                        <ListItemText primary="Help center" />
                        </Link>
                      </ListItem>
                      <ListItem className="footer-list">
                        <ListItemText primary="Community standards" />
                      </ListItem>
                      <ListItem className="footer-list">
                        <ListItemText primary="Taxes" />
                      </ListItem>
                      <ListItem className="footer-list">
                        <ListItemText primary="Partners" />
                      </ListItem>
                      <ListItem className="footer-list">
                        <ListItemText primary="Developer platform" />
                      </ListItem>
                      <ListItem className="footer-list">
                        <ListItemText primary="Platform status" />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
                  <div className="footer-ul">
                    <Typography
                      sx={{ mt: 1, mb: 1 }}
                      variant="h6"
                      className="h6"
                    >
                      Company
                    </Typography>
                    <List>
                      <ListItem className="footer-list">
                        <Link to={"/about"}>
                          <ListItemText primary="About" />
                        </Link>
                      </ListItem>
                      <ListItem className="footer-list">
                        <Link to={"/careers"}>
                          <ListItemText primary="Careers" />
                        </Link>
                      </ListItem>
                      <ListItem className="footer-list">
                        <Link to={"/ventures"}>
                          <ListItemText primary="Ventures" />
                        </Link>
                      </ListItem>
                    </List>

                    <div>
                      <Typography
                        sx={{ paddingTop: "20px" }}
                        variant="h6"
                        className="h6"
                      >
                        Learn
                      </Typography>
                      <List>
                        <ListItem className="footer-list">
                        <Link to="/what-are-nfts">
                          <ListItemText primary="What is an NFT?" />
                        </Link>
                        </ListItem>
                        <ListItem className="footer-list">
                        <Link to="/what-are-nfts">
                          <ListItemText primary="How to buy an NFT" />
                        </Link>
                        </ListItem>
                        <ListItem className="footer-list">
                        <Link to="/what-are-nfts">
                          <ListItemText primary="How to sell an NFT using Our Firm" />
                        </Link>
                        </ListItem>
                        <ListItem className="footer-list">
                        <Link to="/what-are-nfts">
                          <ListItemText primary="How to create an NFT on Our Firm" />
                        </Link>
                        </ListItem>
                        <ListItem className="footer-list">
                        <Link to="/what-are-nfts">
                          <ListItemText primary="What is a crypto wallet?" />
                        </Link>
                        </ListItem>
                        <ListItem className="footer-list">
                        <Link to="/what-are-nfts">
                          <ListItemText primary="What is cryptocurrency?" />
                        </Link>
                        </ListItem>
                        <ListItem className="footer-list">
                        <Link to="/what-are-nfts">
                          <ListItemText primary="What are blockchain gas fees?" />
                        </Link>
                        </ListItem>
                        <ListItem className="footer-list">
                        <Link to="/what-are-nfts">
                          <ListItemText primary="What is a blockchain?" />
                        </Link>
                        </ListItem>
                        <ListItem className="footer-list">
                        <Link to="/what-are-nfts">
                          <ListItemText primary="What is web3?" />
                        </Link>
                        </ListItem>
                        <ListItem className="footer-list">
                        <Link to="/what-are-nfts">
                          <ListItemText primary="How to stay protected in web3" />
                        </Link>
                        </ListItem>
                      </List>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <hr />
          </Box>
        </div>
        <div className="footer-section-three">
          <Box container>
            <div className="footer-main-three">
              <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <div className="footer-copy-main">
                    <p>© 2018 - 2023 Ozone Networks, Inc</p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <div className="footer-copy">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default foorter