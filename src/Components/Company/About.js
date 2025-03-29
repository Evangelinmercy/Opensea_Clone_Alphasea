import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Company.css";
import AllNft from "../../img/About/All-NFT-Categories-Illustration.svg";
import NftIcon1 from '../../img/About/icon-1.svg';
import NftIcon2 from "../../img/About/icon-2.svg";
import NftIcon3 from "../../img/About/icon-3.svg";
import NftIcon4 from "../../img/About/icon-4.svg";
import NftIcon5 from "../../img/About/icon-5.svg";
import Nftpost1 from "../../img/About/founders.webp"
import Nftvc1 from "../../img/About/vc-1.svg"
import man1 from "../../img/About/man-Image-1.webp"

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import collection1 from "../../img/Learn/post-1.png";
import collection2 from "../../img/Learn/post-2.png";
import collection3 from "../../img/Learn/post-3.png";
import collection4 from "../../img/Learn/post-4.png";
import collection5 from "../../img/Learn/post-5.png";
import collection6 from "../../img/Learn/post-6.png";


import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

//Owl Carousel Settings
const options = {
  margin: 15,
  items: 5,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  autoplayTimeout: 5000,
  dots: true,
  loop: true,
  smartSpeed: 100,
  autoHeightClass: "owl-height",
  slideBy: 3,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};


const About = () => {
  return (
    <div>
      <Header />
      <div className="About-main">
        <Box container>
          <section className="section-one">
            <div className="section-one-main">
              <Grid container spacing={5} className="about-mobile-responsive">
                <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
                  <div className="About-main-section-one">
                    <Typography variant="h1" component="h1">
                      Building an open digital economy
                    </Typography>
                    <Typography variant="p" component="p">
                      At OpenSea, we're excited about a brand new type of
                      digital good called a non-fungible token, or NFT. NFTs
                      have exciting new properties: they’re unique, provably
                      scarce, tradeable, and usable across multiple
                      applications. Just like physical goods, you can do
                      whatever you want with them! You could throw them in the
                      trash, gift them to a friend across the world, or go sell
                      them on an open marketplace. But unlike physical goods,
                      they're armed with all the programmability of digital
                      goods.
                    </Typography>
                    <Typography variant="p" component="p">
                      A core part of our vision is that open protocols like
                      Ethereum and interoperable standards like ERC-721 and
                      ERC-1155 will enable vibrant new economies. We're building
                      tools that allow consumers to trade their items freely,
                      creators to launch new digital works, and developers to
                      build rich, integrated marketplaces for their digital
                      items.
                    </Typography>
                    <Typography variant="p" component="p">
                      We're proud to be the first and largest marketplace for
                      NFTs.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
                  <div className="About-main-section-one-image">
                    <img src={AllNft} alt="collection3" />
                  </div>
                </Grid>
              </Grid>
            </div>
          </section>

          <section className="section-one">
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="About-main-section-two">
                  <div className="About-main-section-two-box1">
                    <div className="About-main-section-two-box1-image">
                      <img src={NftIcon1} alt="collection3" />
                    </div>
                    <div className="About-main-section-two-box1-text">
                      <Typography variant="h4" component="h4">
                        2017
                      </Typography>
                      <Typography variant="p" component="p">
                        Founded
                      </Typography>
                    </div>
                  </div>
                  <div className="About-main-section-two-box1">
                    <div className="About-main-section-two-box1-image">
                      <img src={NftIcon2} alt="collection3" />
                    </div>
                    <div className="About-main-section-two-box1-text">
                      <Typography variant="h4" component="h4">
                        200+
                      </Typography>
                      <Typography variant="p" component="p">
                        Employees
                      </Typography>
                    </div>
                  </div>
                  <div className="About-main-section-two-box1">
                    <div className="About-main-section-two-box1-image">
                      <img src={NftIcon3} alt="collection3" />
                    </div>
                    <div className="About-main-section-two-box1-text">
                      <Typography variant="h4" component="h4">
                        2M+
                      </Typography>
                      <Typography variant="p" component="p">
                        Collections
                      </Typography>
                    </div>
                  </div>
                  <div className="About-main-section-two-box1">
                    <div className="About-main-section-two-box1-image">
                      <img src={NftIcon4} alt="collection3" />
                    </div>
                    <div className="About-main-section-two-box1-text">
                      <Typography variant="h4" component="h4">
                        80M+
                      </Typography>
                      <Typography variant="p" component="p">
                        NFTs
                      </Typography>
                    </div>
                  </div>
                  <div className="About-main-section-two-box1">
                    <div className="About-main-section-two-box1-image">
                      <img src={NftIcon5} alt="collection3" />
                    </div>
                    <div className="About-main-section-two-box1-text">
                      <Typography variant="h4" component="h4">
                        $20B+
                      </Typography>
                      <Typography variant="p" component="p">
                        Volume
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </section>

          <section className="section-heading">
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="About-main-section-heading">
                  <Typography variant="h3" component="h3">
                    Our story
                  </Typography>
                  <Typography variant="p" component="p">
                    Navigating the uncharted waters of non-fungible tokens
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </section>
          <section className="section-four">
            <div className="section-four-main">
              <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
                  <div className="About-main-section-four-image">
                    <img src={Nftpost1} alt="collection3" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
                  <div className="About-main-section-four">
                    <Typography variant="p" component="p">
                      In 2017 the world witnessed the birth of CryptoKitties.
                      For the first time, the world experienced a decentralized
                      application built on blockchains but targetted towards a
                      mainstream audience.
                    </Typography>
                    <Typography variant="p" component="p">
                      While CryptoKitties felt like a toy to many, it
                      represented a dramatic shift in how we interact with items
                      in the digital world. While previous digital items lived
                      on company servers, blockchain-native items lived on
                      shared, public blockchains owned by no single party. They
                      could be viewed anywhere, exchanged openly, and truly
                      owned in a way that was never before possible in the
                      digital world.
                    </Typography>
                    <Typography variant="p" component="p">
                      Fascinated by the movement that was forming, Devin Finzer
                      and Alex Atallah joined early adopter communities in
                      Discord and started talking to users. With the OpenSea
                      beta launch in December 2017, the first open marketplace
                      for any non-fungible token on the Ethereum blockchain was
                      born.
                    </Typography>
                    <Typography variant="p" component="p">
                      Today, we’re proud to remain the largest general
                      marketplace for user-owned digital items, supporting
                      multiple blockchains, with the broadest set of categories
                      and the best prices for new emerging digital item classes.
                    </Typography>
                    <Typography variant="p" component="p">
                      As a company, we’re thrilled to be at the center of this
                      growing industry, and will continue to invest in our core
                      infrastructure as we build the most accessible marketplace
                      for buyers, sellers, and creators.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </section>

          <section className="section-heading">
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="About-main-section-heading">
                  <Typography variant="h3" component="h3">
                    Backed by top firms & industry leaders
                  </Typography>
                  <Typography variant="p" component="p">
                    who are helping us pave the way towards a brand new digital
                    economy
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </section>
          <Container>
            <section className="section-five">
              <div className="section-five-main">
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="About-main-section-five-image">
                      <img src={Nftvc1} alt="collection3" />
                      <img src={Nftvc1} alt="collection3" />
                      <img src={Nftvc1} alt="collection3" />
                      <img src={Nftvc1} alt="collection3" />
                      <img src={Nftvc1} alt="collection3" />
                      <img src={Nftvc1} alt="collection3" />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="About-main-section-five-image">
                      <img src={Nftvc1} alt="collection3" />
                      <img src={Nftvc1} alt="collection3" />
                      <img src={Nftvc1} alt="collection3" />
                      <img src={Nftvc1} alt="collection3" />
                      <img src={Nftvc1} alt="collection3" />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </section>
          </Container>

          <Container>
            <section className="section-heading heading-two">
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="About-main-section-heading">
                    <Typography variant="h3" component="h3">
                      with some of the most forward-thinking angels
                    </Typography>
                    <Typography variant="p" component="p">
                      who are just as passionate about this space as we are.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </section>

            <section className="section-six">
              <div className="section-six-main">
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="About-main-section-six">
                      <div className="About-main-section-six-box">
                        <div className="About-main-section-six-box-image">
                          <img src={man1} alt="collection3" />
                        </div>
                        <div className="About-main-section-six-box-text">
                          <Typography variant="h6" component="h6">
                            Mark Cuban
                          </Typography>
                          <Typography variant="p" component="p">
                            Entrepreneur & Investor
                          </Typography>
                        </div>
                      </div>
                      <div className="About-main-section-six-box">
                        <div className="About-main-section-six-box-image">
                          <img src={man1} alt="collection3" />
                        </div>
                        <div className="About-main-section-six-box-text">
                          <Typography variant="h6" component="h6">
                            Mark Cuban
                          </Typography>
                          <Typography variant="p" component="p">
                            Entrepreneur & Investor
                          </Typography>
                        </div>
                      </div>
                      <div className="About-main-section-six-box">
                        <div className="About-main-section-six-box-image">
                          <img src={man1} alt="collection3" />
                        </div>
                        <div className="About-main-section-six-box-text">
                          <Typography variant="h6" component="h6">
                            Mark Cuban
                          </Typography>
                          <Typography variant="p" component="p">
                            Entrepreneur & Investor
                          </Typography>
                        </div>
                      </div>
                      <div className="About-main-section-six-box">
                        <div className="About-main-section-six-box-image">
                          <img src={man1} alt="collection3" />
                        </div>
                        <div className="About-main-section-six-box-text">
                          <Typography variant="h6" component="h6">
                            Mark Cuban
                          </Typography>
                          <Typography variant="p" component="p">
                            Entrepreneur & Investor
                          </Typography>
                        </div>
                      </div>
                      <div className="About-main-section-six-box">
                        <div className="About-main-section-six-box-image">
                          <img src={man1} alt="collection3" />
                        </div>
                        <div className="About-main-section-six-box-text">
                          <Typography variant="h6" component="h6">
                            Mark Cuban
                          </Typography>
                          <Typography variant="p" component="p">
                            Entrepreneur & Investor
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </section>
          </Container>

          <Container>
            <section className="section-heading">
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="About-main-section-heading">
                    <Typography variant="h3" component="h3">
                      You might have read about us in the news
                    </Typography>
                    <Typography variant="p" component="p">
                      If not, here are just a few stories about OpenSea
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </section>
            <section className="section-seven">
              <div className="section-seven-main">
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="About-main-section-seven">
                      <div className="Learn-slide">
                        <div className="explore-cllection-slide">
                          <OwlCarousel
                            className="owl-theme owl-carousel"
                            {...options}
                          >
                            <div className="item">
                              <Link
                                to="/collection-detail"
                                className="collection-cover-link"
                              >
                                <div className="cover-photo-for-collection">
                                  <img src={collection1} alt="collection1" />
                                </div>
                              </Link>
                              <div className="explore-cllection-slide-text">
                                <h4>What are photography NFTs?</h4>
                              </div>
                            </div>

                            <div className="item">
                              <Link className="collection-cover-link">
                                <div className="cover-photo-for-collection">
                                  <img src={collection2} alt="collection2" />
                                </div>
                              </Link>
                              <div className="explore-cllection-slide-text">
                                <h4>What is an NFT?</h4>
                              </div>
                            </div>

                            <div className="item">
                              <Link className="collection-cover-link">
                                <div className="cover-photo-for-collection">
                                  <img src={collection3} alt="collection3" />
                                </div>
                              </Link>
                              <div className="explore-cllection-slide-text">
                                <h4>What are gaming NFTs?</h4>
                              </div>
                            </div>

                            <div className="item">
                              <Link className="collection-cover-link">
                                <div className="cover-photo-for-collection">
                                  <img src={collection4} alt="collection4" />
                                </div>
                              </Link>
                              <div className="explore-cllection-slide-text">
                                <h4>How to create an NFT</h4>
                              </div>
                            </div>

                            <div className="item">
                              <Link className="collection-cover-link">
                                <div className="cover-photo-for-collection">
                                  <img src={collection5} alt="collection6" />
                                </div>
                              </Link>
                              <div className="explore-cllection-slide-text">
                                <h4>What are music NFTs?</h4>
                              </div>
                            </div>

                            <div className="item">
                              <Link className="collection-cover-link">
                                <div className="cover-photo-for-collection">
                                  <img src={collection6} alt="collection6" />
                                </div>
                              </Link>
                              <div className="explore-cllection-slide-text">
                                <h4>
                                  How to make the most of your OpenSea
                                  collection
                                </h4>
                              </div>
                            </div>
                          </OwlCarousel>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </section>
          </Container>
          <section className="line">
            <div className="line-bottom"></div>
          </section>

          <section className="section-heading Security">
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="About-main-section-heading">
                  <Typography variant="h3" component="h3">
                    Security Reports
                  </Typography>
                  <Typography variant="p" component="p">
                    OpenSea strives to be the most trustworthy and secure
                    marketplace for NFTs. Finding and eliminating current
                    vulnerabilities is a top priority. OpenSea highly values our
                    partnership with the vulnerability hunting community and as
                    such we ensure all reports are reviewed by security experts
                    and acted upon appropriately.
                  </Typography>
                  <Link>Submit a vulnerability here.</Link>
                </div>
              </Grid>
            </Grid>
          </section>
          <section className="line">
            <div className="line-bottom"></div>
          </section>

          <section className="section-heading">
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="About-main-section-heading">
                  <Typography variant="h3" component="h3">
                    Interested in joining us?
                  </Typography>
                  <Typography variant="p" component="p">
                    Hop aboard and view our open positions
                  </Typography>
                  <Button variant="contained">See open roles</Button>
                </div>
              </Grid>
            </Grid>
          </section>
        </Box>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
