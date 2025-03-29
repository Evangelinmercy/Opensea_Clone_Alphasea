import React from "react";
import collection1 from "../../img/collection-1.png";
import collection2 from "../../img/collection-2.webp";
import collection3 from "../../img/collection-3.webp";
import collection4 from "../../img/collection-4.jpg";
import collection5 from "../../img/collection-5.webp";
import collection6 from "../../img/collection-6.png";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import "./Blog.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import OutlinedInput from "@mui/material/OutlinedInput";
import HeroImgLogo from "../../img/LearnHomepage/Hero img-logo.png";
import gigapixel from "../../img/LearnHomepage/Hero img--gigapixel.png";
import CoolCat from "../../img/LearnHomepage/Hero img-CoolCat.png";
import Eth from "../../img/LearnHomepage/Hero img-Eth 2.png";
import Klay from "../../img/LearnHomepage/Hero img-Klay.png";
import Polygon from "../../img/LearnHomepage/Hero img-Polygon.png";
import Sol from "../../img/LearnHomepage/Hero img-Sol.png";
import doodlescard from "../../img/LearnHomepage/doodles_card-2-p-500.png";
import nft1011 from "../../img/nft/nft1011.png";
import nft1012 from "../../img/nft/nft1012.png";
import nft1013 from "../../img/nft/nft1013.png";
import nft1014 from "../../img/nft/nft1014.png";
import nft1015 from "../../img/nft/nft1015.png";
import nft1016 from "../../img/nft/nft1016.png";
import NftImage from "../../img/nft-post.png";
import LearnFooter from '../../Components/Learn/LearnFooter';
import Button from "@mui/material/Button";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import learnLogo from "../../img/Learn/learn-logo.svg";
import openseaSlider from "../../img/blog/opensea-slider-img.png";
import weekNft from "../../img/blog/this-week-nft.png";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "0px",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  footercls: {
    background: "transparent !important",
    borderRadius: "0px !important",
    boxShadow: "none !important",
    padding: "0px !important",
    "@media (max-width: 991.98px)": {
      padding: "30px 0 !important",
    },
  },
  headercls: {
    background: "transparent !important",
    borderRadius: "0px !important",
    boxShadow: "none !important",
  },

  bodyclass: {
    background: "transparent !important",
    borderRadius: "0px !important",
    boxShadow: "none !important",
  },
});

//Owl Carousel Settings
const options = {
  margin: 30,
  items: 1,
  responsiveClass: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 9000,
  dots: true,
  loop: true,
  smartSpeed: 500,
  // autoHeightClass: "owl-height", 
  slideBy: 1,
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
    },
  },
};

function createData(
  rank,
  collectionimg,
  collectionname,
  volume,
  floorprice,
  Change,
  Sales
) {
  return {
    rank,
    collectionimg,
    collectionname,
    volume,
    floorprice,
    Change,
    Sales,
  };
}

const rows = [
  createData(1, collection1, "collection1", 6.0, 24, 50.3, 1),
  createData(2, collection2, "collection2", 9.0, 374.34, -12.2, 1),
  createData(3, collection3, "collection3", 16.0, 24.54, -0.2, 1),
  createData(4, collection4, "collection4", 3.7, 67.76, 10.2, 1),
  createData(5, collection5, "collection5", 16.0, 49.88, 10.2, 1),
  createData(6, collection6, "collection6", 16.0, 490.2, 0.2, 1),
  createData(7, collection3, "collection3", 16.0, 24.54, -0.2, 1),
  createData(8, collection4, "collection4", 3.7, 67.76, 10.2, 1),
  createData(9, collection5, "collection5", 16.0, 49.88, 10.2, 1),
  createData(10, collection6, "collection6", 16.0, 490.2, 0.2, 1),
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className="lr-padding-remove"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TabPanelTrending(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanelTrending.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TabPanelTop(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanelTop.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


const Blog = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(2);
  const [valueTrend, setValueTrend] = React.useState(0);
  const [valueTrendTwo, setValueTrendTwo] = React.useState(0);
  const [valueTop, setValueTop] = React.useState(0);
  const [chains, setChains] = React.useState("");
  const [Allchains, setAllChains] = React.useState("");

  const handleChainChange = (event) => {
    setChains(event.target.value);
  };

  const handleChainAllChange = (event) => {
    setAllChains(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeInner = (event, newValue) => {
    setValueTrend(newValue);
  };
  const handleChangeInnerTwo = (event, newValue) => {
    setValueTrendTwo(newValue);
  };

  const handleChangeTop = (event, newValue) => {
    setValueTop(newValue);
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[6],
      borderRadius: 5,
      fontSize: 12,
      padding: 8,
    },
  }));

  const LightTooltipImage = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[6],
      borderRadius: 5,
      fontSize: 12,
      padding: 2,
    },
  }));
  

  return (
    <div className="Learn-Home-Page Blog-page">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Item className={classes.headercls}>
        <div div className="learn-header-sticky">
        <div className="learn-header">
        <div className="learn-header-inner">
              <div className="logo-outer-part">
                <Link to="/">
                  <div className="logo">
                  <img
                    src={learnLogo}
                    alt="HeroImgLogo"
                  />
                  </div>
                </Link>
              </div>
              <div className="logo-outer-button">
                <Link to="/">
                  <Button className="button-nav">Alphasea.io
                  <ArrowOutwardIcon />
                  </Button>
                </Link>
              </div>
        </div>

        </div>
        </div>
        </Item>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="Blog-body-section"
      >
        <Box sx={{ width: "100%" }}>
          <Box className="container is-overflow-hidden is-hero-home">
          <div className="explore-notable-cllection-slide nft">
           
            <OwlCarousel className="owl-theme owl-carousel nft" {...options}>
              <div className="item fs-slide">
                <Link
                  to="/collection-detail"
                  className="card is--featured-article-horizontal"
                >
                  <div className="card_articles-ratio-box _4-3">
                    <img src={weekNft} alt="weekNft" className="card_img is-slider"/>
                  </div>
                  <div class="thumnail-content is--feature-article" aria-hidden="true">
                  <div className="card_label-wrapper">
                    <div className="card_category-label">Company</div>
                  </div>
                  
                  <Typography variant="h3" className="heading featured-article-home">Changes to creator fees on OpenSea</Typography>
                  <p class="card_articles-date" aria-hidden="true">August 17, 2023</p>
                  <p class="card_summary-article truncated" aria-hidden="true">We’re making a few changes to our approach to creator fees.</p>
                  <Button className="button_blue mt-24 is-featured-card">View Post</Button>
                  </div>
                </Link>
              </div>


              <div className="item fs-slide">
                <Link
                  to="/collection-detail"
                  className="card is--featured-article-horizontal"
                >
                  <div className="card_articles-ratio-box _4-3">
                    <img src={weekNft} alt="weekNft" className="card_img is-slider"/>
                  </div>
                  <div class="thumnail-content is--feature-article" aria-hidden="true">
                  <div className="card_label-wrapper">
                    <div className="card_category-label">Company</div>
                  </div>
                  
                  <Typography variant="h3" className="heading featured-article-home">Changes to creator fees on OpenSea</Typography>
                  <p class="card_articles-date" aria-hidden="true">August 17, 2023</p>
                  <p class="card_summary-article truncated" aria-hidden="true">We’re making a few changes to our approach to creator fees.</p>
                  <Button className="button_blue mt-24 is-featured-card">View Post</Button>
                  </div>
                </Link>
              </div>

              <div className="item fs-slide">
                <Link
                  to="/collection-detail"
                  className="card is--featured-article-horizontal"
                >
                  <div className="card_articles-ratio-box _4-3">
                    <img src={weekNft} alt="weekNft" className="card_img is-slider"/>
                  </div>
                  <div class="thumnail-content is--feature-article" aria-hidden="true">
                  <div className="card_label-wrapper">
                    <div className="card_category-label">Company</div>
                  </div>
                  
                  <Typography variant="h3" className="heading featured-article-home">Changes to creator fees on OpenSea</Typography>
                  <p class="card_articles-date" aria-hidden="true">August 17, 2023</p>
                  <p class="card_summary-article truncated" aria-hidden="true">We’re making a few changes to our approach to creator fees.</p>
                  <Button className="button_blue mt-24 is-featured-card">View Post</Button>
                  </div>
                </Link>
              </div>
            </OwlCarousel>
          </div>
          </Box>


          <Box className="container is-overflow-hidden is-hero-home">
          <div className="explore-notable-cllection-slide nft section2">
          <div className="h2--padding">
          <Typography variant="h2" className="section_heading-h2">Categories</Typography>
          </div>

          <div className="collection-list-wrapper-2 w-dyn-list">
          <div className="collection-list w-dyn-items">
            <div className="collection-item w-dyn-item">
              <Link className="button is-category w-inline-block">
                <div className="text-block-6">Product</div>
              </Link>
            </div>

            <div className="collection-item w-dyn-item">
              <Link className="button is-category w-inline-block">
                <div className="text-block-6">Company</div>
              </Link>
            </div>

            <div className="collection-item w-dyn-item">
              <Link className="button is-category w-inline-block">
                <div className="text-block-6">Community</div>
              </Link>
            </div>

            <div className="collection-item w-dyn-item">
              <Link className="button is-category w-inline-block">
                <div className="text-block-6">Creator</div>
              </Link>
            </div>
          </div>
          </div>

          <Box className="is-articles-home">
            <div className="resources-wrapper is-home">
              <div className="w-dyn-list">
              <div className="collection-list_articles w-dyn-items">
                <div className="w-dyn-item">
                <div className="blog-card ">
                <Link
                  to="/collection-detail"
                  className="card_articles-link absolute w-inline-block"
                >
                  <div className="card_articles-ratio-box _16-9">
                    <img src={weekNft} alt="weekNft" className="card_img is-slider"/>
                  </div>
                  <div class="card_articles-bottom" aria-hidden="true">
                  <div className="card_label-wrapper">
                    <div className="card_category-label">Company</div>
                  </div>
                  
                  <Typography variant="h3" className="heading featured-article-home">Changes to creator fees on OpenSea</Typography>
                  <p class="card_articles-date" aria-hidden="true">August 17, 2023</p>
                  <p class="card_summary-article truncated" aria-hidden="true">We’re making a few changes to our approach to creator fees.</p>
                 
                  </div>
                </Link>
              </div>
                </div>

                <div className="w-dyn-item">
                <div className="blog-card">
                <Link
                  to="/collection-detail"
                  className="card_articles-link absolute w-inline-block"
                >
                  <div className="card_articles-ratio-box _16-9">
                    <img src={weekNft} alt="weekNft" className="card_img is-slider"/>
                  </div>
                  <div class="card_articles-bottom" aria-hidden="true">
                  <div className="card_label-wrapper">
                    <div className="card_category-label">Company</div>
                  </div>
                  
                  <Typography variant="h3" className="heading featured-article-home">Changes to creator fees on OpenSea</Typography>
                  <p class="card_articles-date" aria-hidden="true">August 17, 2023</p>
                  <p class="card_summary-article truncated" aria-hidden="true">We’re making a few changes to our approach to creator fees.</p>
                 
                  </div>
                </Link>
              </div>
                </div>

                <div className="w-dyn-item">
                <div className="blog-card">
                <Link
                  to="/collection-detail"
                  className="card_articles-link absolute w-inline-block"
                >
                  <div className="card_articles-ratio-box _16-9">
                    <img src={weekNft} alt="weekNft" className="card_img is-slider"/>
                  </div>
                  <div class="card_articles-bottom" aria-hidden="true">
                  <div className="card_label-wrapper">
                    <div className="card_category-label">Company</div>
                  </div>
                  
                  <Typography variant="h3" className="heading featured-article-home">Changes to creator fees on OpenSea</Typography>
                  <p class="card_articles-date" aria-hidden="true">August 17, 2023</p>
                  <p class="card_summary-article truncated" aria-hidden="true">We’re making a few changes to our approach to creator fees.</p>
                 
                  </div>
                </Link>
              </div>
                </div>

                <div className="w-dyn-item">
                <div className="blog-card">
                <Link
                  to="/collection-detail"
                  className="card_articles-link absolute w-inline-block"
                >
                  <div className="card_articles-ratio-box _16-9">
                    <img src={weekNft} alt="weekNft" className="card_img is-slider"/>
                  </div>
                  <div class="card_articles-bottom" aria-hidden="true">
                  <div className="card_label-wrapper">
                    <div className="card_category-label">Company</div>
                  </div>
                  
                  <Typography variant="h3" className="heading featured-article-home">Changes to creator fees on OpenSea</Typography>
                  <p class="card_articles-date" aria-hidden="true">August 17, 2023</p>
                  <p class="card_summary-article truncated" aria-hidden="true">We’re making a few changes to our approach to creator fees.</p>
                 
                  </div>
                </Link>
              </div>
                </div>

                <div className="w-dyn-item">
                <div className="blog-card">
                <Link
                  to="/collection-detail"
                  className="card_articles-link absolute w-inline-block"
                >
                  <div className="card_articles-ratio-box _16-9">
                    <img src={weekNft} alt="weekNft" className="card_img is-slider"/>
                  </div>
                  <div class="card_articles-bottom" aria-hidden="true">
                  <div className="card_label-wrapper">
                    <div className="card_category-label">Company</div>
                  </div>
                  
                  <Typography variant="h3" className="heading featured-article-home">Changes to creator fees on OpenSea</Typography>
                  <p class="card_articles-date" aria-hidden="true">August 17, 2023</p>
                  <p class="card_summary-article truncated" aria-hidden="true">We’re making a few changes to our approach to creator fees.</p>
                 
                  </div>
                </Link>
              </div>
                </div>

                <div className="w-dyn-item">
                <div className="blog-card">
                <Link
                  to="/collection-detail"
                  className="card_articles-link absolute w-inline-block"
                >
                  <div className="card_articles-ratio-box _16-9">
                    <img src={weekNft} alt="weekNft" className="card_img is-slider"/>
                  </div>
                  <div class="card_articles-bottom" aria-hidden="true">
                  <div className="card_label-wrapper">
                    <div className="card_category-label">Company</div>
                  </div>
                  
                  <Typography variant="h3" className="heading featured-article-home">Changes to creator fees on OpenSea</Typography>
                  <p class="card_articles-date" aria-hidden="true">August 17, 2023</p>
                  <p class="card_summary-article truncated" aria-hidden="true">We’re making a few changes to our approach to creator fees.</p>
                 
                  </div>
                </Link>
              </div>
                </div>
              </div>

              <div className="w-pagination-wrapper pagination-_buttons-wrapper">
                <Link className="w-pagination-previous button is-pagination">
                <svg class="w-pagination-previous-icon button-icon" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" transform="translate(0, 1)"><path fill="none" stroke="currentColor" fill-rule="evenodd" d="M8 10L4 6l4-4"></path></svg>
                <div class="button-text w-inline-block">Previous</div>
                </Link>

                <Link className="w-pagination-next button is-pagination">
                <div class="button-text w-inline-block">Next</div>
                <svg class="w-pagination-next-icon button-icon" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" transform="translate(0, 1)"><path fill="none" stroke="currentColor" fill-rule="evenodd" d="M4 2l4 4-4 4"></path></svg>
                </Link>
              </div>

              </div>
            </div>
          </Box>


          </div>
          </Box>


          <div className="newsletter-main-container">
          <div className="container-large ">
            <Box container mx={5}>
              <Grid container className="newsletter-main">
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                  <div className="newsletter-box-main">
                    <div className="newsletter-box-main-heading">
                      <Typography variant="p" component="p">
                        OpenSea Currents
                      </Typography>
                      <Typography variant="h2" component="h2">
                        Sign up for our newsletter
                      </Typography>
                      <Typography variant="p" component="p">
                        Join our newsletter to get web3 news, updates,
                        interviews, and deep dives all in one place.
                      </Typography>
                    </div>
                    <div className="newsletter-box-main-form">
                      <form noValidate autoComplete="off">
                        <Grid container>
                          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                            <FormControl
                              spacing={2}
                              className="email-input-main"
                            >
                              <OutlinedInput
                                placeholder="You email address"
                                className="email-input"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                            <Button
                              variant="contained"
                              className="footer-button"
                            >
                              sign up
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
                  <div className="newsletter-box-main-image">
                    <img src={NftImage} alt="Ethereum" />
                  </div>
                </Grid>
              </Grid>
            </Box>
            </div>
          </div>


        </Box>


      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Item className={classes.headercls}>
        <LearnFooter  />
        </Item>
      </Grid>
    </div>
  );
};

export default Blog;
