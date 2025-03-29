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
import "./LearnHomePage.css";
import "../CollectionStats/CollectionStats.css";
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
  items: 4,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  autoplayTimeout: 2000,
  dots: false,
  loop: true,
  smartSpeed: 2000,
  autoHeightClass: "owl-height", 
  slideBy: 4,
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
      items: 4,
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


const LearnHomePage = () => {
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
    <div className="Learn-Home-Page">
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
        className="Learn-Home-Page-Body"
      >
        <Box sx={{ width: "100%" }}>
          <Box className="learn-section is--hero-learn">
            <div className="container is--hero-learn">
              <div className="column-wrapper">
                <div className="column is--hero-learn-left">
                  <img
                    src={HeroImgLogo}
                    alt="HeroImgLogo"
                    className="hero-img is--hero-learn z-8"
                  />
                  <img
                    src={Eth}
                    alt="HeroImgLogo"
                    className="hero-img is--hero-learn z-7"
                  />
                  <img
                    src={doodlescard}
                    alt="HeroImgLogo"
                    className="hero-img is--hero-learn z-6"
                  />
                  <img
                    src={Polygon}
                    alt="HeroImgLogo"
                    className="hero-img is--hero-learn z-5"
                  />
                  <img
                    src={CoolCat}
                    alt="HeroImgLogo"
                    className="hero-img is--hero-learn z-4"
                  />
                  <img
                    src={Klay}
                    alt="HeroImgLogo"
                    className="hero-img is--hero-learn z-3"
                  />
                  <img
                    src={gigapixel}
                    alt="HeroImgLogo"
                    className="hero-img is--hero-learn z-2"
                  />
                  <img
                    src={Sol}
                    alt="HeroImgLogo"
                    className="hero-img is--hero-learn z-1"
                  />
                </div>
                <div className="column is--hero-learn-right">
                  <Typography variant="h1" className="heading is--h1-hero">
                    Your NFT journey starts here.
                  </Typography>
                  <div className="description-text is--hero">
                    Guides, practical tips, and support articles for first-time
                    creators, experienced collectors, and everyone in between.
                  </div>
                  <div class="wrapper is--hero-buttons">
                    <a href="#start-learning" class="button w-button">
                      Start learning
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Box>

          <Box className="learn-section is--ft-videos">
            <div className="container is--ft-video">
              <div className="wrapper is--ft-video-title">
                <Typography variant="h2" className="heading is--ft-articles">
                  <strong>Meet OpenSea</strong>
                </Typography>
                <div class="description-text is--ft-articles-copy videos">
                  Allow us to introduce ourselves! Hear from our CEO, Devin
                  Finzer, about who we are, how we started, and where we're
                  headed.
                </div>
              </div>

              <div className="card is--ft-video">
                <div className="card-thumbnail is--lightbox">
                  <Link
                    to="#"
                    class="lightbox is--inside-video w-inline-block w-lightbox"
                    aria-label="open lightbox"
                    aria-haspopup="dialog"
                  >
                    <div id="start-learning" class="button is-lightbox">
                      <img
                        src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63042013f2b3ba4bdc69f3c3_play_circle.svg"
                        loading="lazy"
                        alt=""
                      />
                      <div>Who is OpenSea?</div>
                    </div>
                  </Link>
                  <div
                    data-poster-url="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/631785a5112ccf196594549b_OpenSea Short-poster-00001.jpg"
                    data-video-urls="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/631785a5112ccf196594549b_OpenSea Short-transcode.mp4,https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/631785a5112ccf196594549b_OpenSea Short-transcode.webm"
                    data-autoplay="true"
                    data-loop="true"
                    data-wf-ignore="true"
                    class="background-video w-background-video w-background-video-atom"
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      poster="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/631785a5112ccf196594549b_OpenSea Short-poster-00001.jpg"
                    >
                      <source
                        src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/631785a5112ccf196594549b_OpenSea Short-transcode.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </Box>

          <div className="explore-notable-cllection-slide nft">
            <h2>NFT 101</h2>
            <p>Get comfortable with the basics.</p>
            <OwlCarousel className="owl-theme owl-carousel nft" {...options}>
              <div className="item">
                <Link
                  to="/collection-detail"
                  className="notable-collection-item nft"
                >
                  <div className="cover-photo-for-collection">
                    <img src={nft1011} alt="collection1" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is an NFT?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1012} alt="collection2" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to buy an NFT</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1013} alt="collection3" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>Drops on OpenSea</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1014} alt="collection4" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to create an NFT</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1015} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is minting?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1016} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What are redeemable NFTs?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1014} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to make the most of your OpenSea collection</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1013} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is an allowlist?</h4>
                  </div>
                </Link>
              </div>
            </OwlCarousel>
          </div>

          <div className="explore-notable-cllection-slide nft">
            <h2>Intro to web3</h2>
            <p>Learn more about web3 concepts.</p>
            <OwlCarousel className="owl-theme owl-carousel nft" {...options}>
              <div className="item">
                <Link
                  to="/collection-detail"
                  className="notable-collection-item nft"
                >
                  <div className="cover-photo-for-collection">
                    <img src={nft1011} alt="collection1" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is an NFT?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1012} alt="collection2" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to buy an NFT</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1013} alt="collection3" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is minting?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1014} alt="collection4" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to stay protected in web3</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1015} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to create an NFT on alphasea</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1016} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to sell an NFT using alphasea</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1014} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is a crypto wallet?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1013} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>Who is alphasea?</h4>
                  </div>
                </Link>
              </div>
            </OwlCarousel>
          </div>

          <div className="explore-notable-cllection-slide nft">
            <h2>Blockchain basics</h2>
            <p>Learn more about web3 concepts.</p>
            <OwlCarousel className="owl-theme owl-carousel nft" {...options}>
              <div className="item">
                <Link
                  to="/collection-detail"
                  className="notable-collection-item nft"
                >
                  <div className="cover-photo-for-collection">
                    <img src={nft1011} alt="collection1" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is an NFT?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1012} alt="collection2" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to buy an NFT</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1013} alt="collection3" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is minting?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1014} alt="collection4" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to stay protected in web3</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1015} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to create an NFT on alphasea</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1016} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to sell an NFT using alphasea</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1014} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is a crypto wallet?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1013} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>Who is alphasea?</h4>
                  </div>
                </Link>
              </div>
            </OwlCarousel>
          </div>

          <div className="explore-notable-cllection-slide nft">
            <h2>Blockchain basics</h2>
            <p>Understand the technology behind cryptocurrency and NFTs.</p>
            <OwlCarousel className="owl-theme owl-carousel nft" {...options}>
              <div className="item">
                <Link
                  to="/collection-detail"
                  className="notable-collection-item nft"
                >
                  <div className="cover-photo-for-collection">
                    <img src={nft1011} alt="collection1" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is an NFT?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1012} alt="collection2" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to buy an NFT</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1013} alt="collection3" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is minting?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1014} alt="collection4" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to stay protected in web3</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1015} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to create an NFT on alphasea</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1016} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to sell an NFT using alphasea</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1014} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is a crypto wallet?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1013} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>Who is alphasea?</h4>
                  </div>
                </Link>
              </div>
            </OwlCarousel>
          </div>

          <div className="explore-notable-cllection-slide nft">
            <h2>Watch and learn</h2>
            <p>Learn about important NFT concepts.</p>
            <OwlCarousel className="owl-theme owl-carousel nft" {...options}>
              <div className="item">
                <Link
                  to="/collection-detail"
                  className="notable-collection-item nft"
                >
                  <div className="cover-photo-for-collection">
                    <img src={nft1011} alt="collection1" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is an NFT?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1012} alt="collection2" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to buy an NFT</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1013} alt="collection3" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is minting?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1014} alt="collection4" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to stay protected in web3</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1015} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to create an NFT on alphasea</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1016} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>How to sell an NFT using alphasea</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1014} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>What is a crypto wallet?</h4>
                  </div>
                </Link>
              </div>

              <div className="item">
                <Link className="notable-collection-item nft">
                  <div className="cover-photo-for-collection">
                    <img src={nft1013} alt="collection6" />
                  </div>
                  <div className="cover-photo-for-collection-detail">
                    <h4>Who is alphasea?</h4>
                  </div>
                </Link>
              </div>
            </OwlCarousel>
          </div>

          <div class="learn-section is--links-bottom">
            <div class="container is--links-bottom">
              <div class="wrapper">
                <a
                  href="https://support.opensea.io/"
                  class="link-block is--bottom-link first w-inline-block"
                >
                  <div class="wrapper is--bottom-link-left">
                    <img
                      src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63044c1ff2b3ba9e426c835e_Get%20help%20.svg"
                      loading="lazy"
                      alt=""
                      class="link-icon"
                    />
                    <div class="wrapper is--bottom-link-meta">
                      <h4 class="link-heading is-h4">
                        Get help with a specific issue
                      </h4>
                      <div class="link-subtitle">Check out our Help Center</div>
                    </div>
                  </div>
                  <img
                    src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63044c74c3ae4cd85b36dacd_arrow-right-link.svg"
                    loading="lazy"
                    alt=""
                    class="link-arrow"
                  />
                </a>
                <a
                  href="https://opensea.io/blog/"
                  class="link-block is--bottom-link w-inline-block"
                >
                  <div class="wrapper is--bottom-link-left">
                    <img
                      src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/6306a3ebbbb316091f2530c8_Frame%20276.svg"
                      loading="lazy"
                      alt=""
                      class="link-icon"
                    />
                    <div class="wrapper is--bottom-link-meta">
                      <h4 class="link-heading is-h4">
                        Catch up on OpenSea news
                      </h4>
                      <div class="link-subtitle">Visit our Blog</div>
                    </div>
                  </div>
                  <img
                    src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63044c74c3ae4cd85b36dacd_arrow-right-link.svg"
                    loading="lazy"
                    alt=""
                    class="link-arrow"
                  />
                </a>
                <a
                  href="https://opensea.io/"
                  class="link-block is--bottom-link w-inline-block"
                >
                  <div class="wrapper is--bottom-link-left">
                    <img
                      src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63044c1492519c66f2cb843a_os%20ship.svg"
                      loading="lazy"
                      alt=""
                      class="link-icon"
                    />
                    <div class="wrapper is--bottom-link-meta">
                      <h4 class="link-heading is-h4">Start exploring</h4>
                      <div class="link-subtitle">
                        Check out featured projects
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63044c74c3ae4cd85b36dacd_arrow-right-link.svg"
                    loading="lazy"
                    alt=""
                    class="link-arrow"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="newsletter-main-container">
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

export default LearnHomePage;
