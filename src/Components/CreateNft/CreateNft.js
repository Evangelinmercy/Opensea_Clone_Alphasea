import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import WestIcon from "@mui/icons-material/West";
import './CreateNft.css';
import AppsIcon from "@mui/icons-material/Apps";
import EastIcon from "@mui/icons-material/East";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import { Link} from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import collection1 from "../../img/create-nft-slide-1.png";
import collection2 from "../../img/create-nft-slide-2.png";
import collection3 from "../../img/create-nft-slide-3.png";
import collection4 from "../../img/create-nft-slide-4.png";
import collection5 from "../../img/create-nft-slide-5.png";

//Owl Carousel Settings
const options = {
    margin: 0,
    items: 4,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    loop: true,
    smartSpeed: 2000,
    autoHeightClass:'owl-height',
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    },
  }

const CreateNft = () => {
    return (
      <div>
        <div className="create-main create-main-nft-body">
          <Box container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="create-spacing">
                  <div className="create-spacing-mobile">
                    <div className="back-button">
                      <Link to="/" href="/">
                        <WestIcon />
                      </Link>
                    </div>

                    <div className="create-heading">
                      <Typography variant="h4" component="h2">
                        Create
                      </Typography>
                    </div>
                  </div>
                  <div className="create-box-mobile">
                  <Link>
                    create
                  </Link>
                    <Link to="/createHeader" underline="none">
                      <div className="create-box">
                        <div className="create-main-box">
                          <div className="create-app-icon">
                            <div className="icon">
                              <AppsIcon />
                            </div>
                            <div className="create-box-titel">
                              <Typography variant="h4" component="h2">
                                Drop a collection
                              </Typography>
                            </div>
                          </div>
                          <div className="create-p">
                            <Typography variant="p" component="p">
                              Launch your collection of NFTs for your community
                              to mint.
                            </Typography>
                          </div>
                        </div>
                        <div className="create-easticon">
                          <EastIcon />
                        </div>
                      </div>
                    </Link>
                    <Link to="/createAdd" underline="none">
                      <div className="create-box">
                        <div className="create-main-box">
                          <div className="create-app-icon">
                            <div className="icon">
                              <CropOriginalIcon />
                            </div>
                            <div className="create-box-titel">
                              <Typography variant="h4" component="h2">
                                Create an NFT
                              </Typography>
                            </div>
                          </div>
                          <div className="create-p">
                            <Typography variant="p" component="p">
                              Create and mint an NFT directly to your wallet.
                            </Typography>
                          </div>
                        </div>
                        <div className="create-easticon">
                          <EastIcon />
                        </div>
                      </div>
                    </Link>

                    <div className="cteare-Learn-more">
                      <Typography variant="p" component="p">
                        <a href="">Learn more</a>
                        about each option.
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="explore-cllection-slide">
                  <OwlCarousel className="owl-theme owl-carousel" {...options}>
                    <div className="item">
                      <Link
                        to="/collection-detail"
                        className="collection-cover-link"
                      >
                        <div className="cover-photo-for-collection">
                          <img src={collection1} alt="collection1" />
                        </div>
                        {/* <div className="overlay-with-collection-details">
                          <h4>Runaway</h4>
                          <span>Floor: 0.01ETH</span>
                        </div> */}
                      </Link>
                    </div>

                    <div className="item">
                      <Link className="collection-cover-link">
                        <div className="cover-photo-for-collection">
                          <img src={collection2} alt="collection2" />
                        </div>
                        {/* <div className="overlay-with-collection-details">
                          <h4>The Potraits</h4>
                          <span>Floor: 200ETH</span>
                        </div> */}
                      </Link>
                    </div>

                    <div className="item">
                      <Link className="collection-cover-link">
                        <div className="cover-photo-for-collection">
                          <img src={collection3} alt="collection3" />
                        </div>
                        {/* <div className="overlay-with-collection-details">
                          <h4>DOT.EXE</h4>
                          <span>Floor: 0.02ETH</span>
                        </div> */}
                      </Link>
                    </div>

                    <div className="item">
                      <Link className="collection-cover-link">
                        <div className="cover-photo-for-collection">
                          <img src={collection4} alt="collection4" />
                        </div>
                        {/* <div className="overlay-with-collection-details">
                          <h4>Spatial X</h4>
                          <span>Floor: 0.01ETH</span>
                        </div> */}
                      </Link>
                    </div>

                    <div className="item">
                      <Link className="collection-cover-link">
                        <div className="cover-photo-for-collection">
                          <img src={collection5} alt="collection6" />
                        </div>
                        {/* <div className="overlay-with-collection-details">
                          <h4>Field Trip</h4>
                          <span>Floor: 0.02ETH</span>
                        </div> */}
                      </Link>
                    </div>
                  </OwlCarousel>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    );
}

export default CreateNft