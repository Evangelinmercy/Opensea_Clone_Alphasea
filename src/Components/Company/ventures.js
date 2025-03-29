import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Company.css";
import GroupSharpIcon from "@mui/icons-material/GroupSharp";
import Image1 from "../../img/About/lightbulb.svg"
import ImageList1 from "../../img/About/multichain-1.svg"
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import MessageIcon from "@mui/icons-material/Message";
import SecurityIcon from "@mui/icons-material/Security";
import LanguageIcon from "@mui/icons-material/Language";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ventures = () => {
    return (
        <div className="ventures">
            <Header/>
        <Box Container>
          <Container>
            <section className="section-ventures-one">
              <Grid container className="ventures-mobile-responsive">
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="ventures-main-section-one">
                    <Typography variant="h1" component="h1">
                      Introducing OpenSea Ventures
                    </Typography>
                    <Typography variant="p" component="p">
                      OpenSea Ventures is our brand new investment arm,
                      supporting the founders who will define the future of open
                      Web3 economies.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="ventures-main-section-one-image">
                    <img src={Image1} alt="collection3" />
                  </div>
                </Grid>
              </Grid>
            </section>
          </Container>

          <section className="section-ventures-two">
            <Container>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="ventures-main-section-two">
                    <Typography variant="h3" component="h3">
                      OpenSea Ventures will focus investments
                    </Typography>
                    <Typography variant="h3" component="h3">
                      across four main themes
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="ventures-main-section-two-box">
                    <div className="ventures-main-section-two-card">
                      <img src={ImageList1} alt="collection3" />
                      <Typography variant="p" component="p">
                        The continued shift to a multichain world, both for
                        fungible and non-fungible assets.
                      </Typography>
                    </div>
                    <div className="ventures-main-section-two-card">
                      <img src={ImageList1} alt="collection3" />
                      <Typography variant="p" component="p">
                        Creating and supporting NFT-related protocols and other
                        crypto-native infrastructure.
                      </Typography>
                    </div>
                    <div className="ventures-main-section-two-card">
                      <img src={ImageList1} alt="collection3" />
                      <Typography variant="p" component="p">
                        Social and gaming projects serving as distribution
                        mechanisms for crypto and NFT elements.
                      </Typography>
                    </div>
                    <div className="ventures-main-section-two-card">
                      <img src={ImageList1} alt="collection3" />
                      <Typography variant="p" component="p">
                        The emergence of NFT aggregators and analytics
                        supporting activity on OpenSea and other NFT marketplace
                        platforms.
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </section>

          <Container>
            <section className="section-ventures-three">
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="ventures-main-section-three">
                    <Typography variant="h3" component="h3">
                      What Teams Will Get
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="ventures-main-section-three-card">
                    <div className="ventures-main-section-three-box">
                      <div className="ventures-icon">
                        <GroupSharpIcon />
                      </div>
                      <div className="ventures-text">
                        <Typography variant="p" component="p">
                          Direct access to OpenSea leadership.
                        </Typography>
                      </div>
                    </div>
                    <div className="ventures-main-section-three-box">
                      <div className="ventures-icon">
                        <MenuBookTwoToneIcon />
                      </div>
                      <div className="ventures-text">
                        <Typography variant="p" component="p">
                          Integration with docs.opensea.io where appropriate.
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <div className="ventures-main-section-three-card">
                    <div className="ventures-main-section-three-box">
                      <div className="ventures-icon">
                        <CardTravelIcon />
                      </div>
                      <div className="ventures-text">
                        <Typography variant="p" component="p">
                          Access to OpenSea's strategic and venture partners.
                        </Typography>
                      </div>
                    </div>
                    <div className="ventures-main-section-three-box">
                      <div className="ventures-icon">
                        <MessageIcon />
                      </div>
                      <div className="ventures-text">
                        <Typography variant="p" component="p">
                          Guest blog posts on opensea.io/blog where appropriate.
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <div className="ventures-main-section-three-card">
                    <div className="ventures-main-section-three-box">
                      <div className="ventures-icon">
                        <SecurityIcon />
                      </div>
                      <div className="ventures-text">
                        <Typography variant="p" component="p">
                          Assistance with NFT security and improving NFT
                          standards.
                        </Typography>
                      </div>
                    </div>
                    <div className="ventures-main-section-three-box">
                      <div className="ventures-icon">
                        <LanguageIcon />
                      </div>
                      <div className="ventures-text">
                        <Typography variant="p" component="p">
                          Connections with leading NFT creators and OpenSea
                          Ecosystem Grant recipients.
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </section>
          </Container>
            </Box>
            <Footer/>
      </div>
    );

};

export default ventures;
