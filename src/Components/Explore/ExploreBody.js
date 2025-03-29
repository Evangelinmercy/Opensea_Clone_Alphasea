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
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import nft1011 from "../../img/nft/nft1011.png";
import nft1012 from "../../img/nft/nft1012.png";
import nft1013 from "../../img/nft/nft1013.png";
import nft1014 from "../../img/nft/nft1014.png";
import nft1015 from "../../img/nft/nft1015.png";
import nft1016 from "../../img/nft/nft1016.png";
import explore1011 from "../../img/explore/explore1011.png";
import explore1012 from "../../img/explore/explore1012.png";
import explore1013 from "../../img/explore/explore1013.png";
import explore1014 from "../../img/explore/explore1014.png";
import explore1015 from "../../img/explore/explore1015.png";
import explore1016 from "../../img/explore/explore1016.png";
import ExploreTableTrend from "./ExploreTableTrend";
import ExploreTableTop from "./ExploreTableTop";

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

//Owl Carousel Settings
const options = {
  margin: 30,
  items: 4,
  responsiveClass: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  dots: false,
  loop: true,
  smartSpeed: 2000,
  autoHeightClass: "owl-height",
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

const ExploreBody = () => {
  const [value, setValue] = React.useState(0);
  const [valueTrend, setValueTrend] = React.useState(0);
  const [valueTop, setValueTop] = React.useState(0);
  const [chains, setChains] = React.useState("");

  const handleChainChange = (event) => {
    setChains(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeInner = (event, newValue) => {
    setValueTrend(newValue);
  };

  const handleChangeTop = (event, newValue) => {
    setValueTop(newValue);
  };

  return (
    <div className="explore-body-content">
      <div className="SubPages">
        <ul>
          <li className="menu ActiveMenu">
            <Link>All</Link>
          </li>
          <li className="menu">
            <Link>Art</Link>
          </li>
          <li className="menu">
            <Link>Gaming</Link>
          </li>
          <li className="menu">
            <Link>Membership</Link>
          </li>
          <li className="menu">
            <Link>PFPs</Link>
          </li>
          <li className="menu">
            <Link>Photography</Link>
          </li>
          <li className="menu">
            <Link>Music</Link>
          </li>
        </ul>
      </div>

      <div className="explore-cllection-slide">
        <OwlCarousel className="owl-theme owl-carousel" {...options}>

          <div className="item">
            <Link to="/collection-detail" className="collection-cover-link">
              <div className="cover-photo-for-collection">
                <img src={collection1} alt="collection1" className="coverPic" />
              </div>
              <div className="overlay-with-collection-details">
                <h4>Runaway</h4>
                <span>Floor: 0.01ETH</span>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link to="/collection-detail" className="collection-cover-link">
              <div className="cover-photo-for-collection">
                <img src={collection2} alt="collection2" className="coverPic" />
              </div>
              <div className="overlay-with-collection-details">
                <h4>The Potraits</h4>
                <span>Floor: 200ETH</span>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link to="/collection-detail" className="collection-cover-link">
              <div className="cover-photo-for-collection">
                <img src={collection3} alt="collection3" className="coverPic" />
              </div>
              <div className="overlay-with-collection-details">
                <h4>DOT.EXE</h4>
                <span>Floor: 0.02ETH</span>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link to="/collection-detail" className="collection-cover-link">
              <div className="cover-photo-for-collection">
                <img src={collection4} alt="collection4" className="coverPic" />
              </div>
              <div className="overlay-with-collection-details">
                <h4>Spatial X</h4>
                <span>Floor: 0.01ETH</span>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link to="/collection-detail" className="collection-cover-link">
              <div className="cover-photo-for-collection">
                <img src={collection6} alt="collection6" className="coverPic" />
              </div>
              <div className="overlay-with-collection-details">
                <h4>Field Trip</h4>
                <span>Floor: 0.02ETH</span>
              </div>
            </Link>
          </div>

        </OwlCarousel>
      </div>

      <Box sx={{ width: "100%" }} className="explore-ranking-Table">
        <Box className="flex-box-all-chains-view-all flex-box-all-chains-view-all-explore">
          <Tabs
            className="outer-tabs"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Trending" {...a11yProps(0)} />
            <Tab label="Top" {...a11yProps(1)} />
          </Tabs>
          <div className="all-chains-view-all desktop-chain-shown">
            <FormControl fullWidth className="all-chain-form-desktop-view">
              <InputLabel id="demo-simple-select-label">All Chains</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={chains}
                label="Chains"
                onChange={handleChainChange}
              >
                <MenuItem value={10}>BNB Chain</MenuItem>
                <MenuItem value={20}>Base</MenuItem>
                <MenuItem value={30}>Ethereum</MenuItem>
                <MenuItem value={40}>Klaytn</MenuItem>
                <MenuItem value={50}>Polygon</MenuItem>
                <MenuItem value={60}>Solana</MenuItem>
              </Select>
            </FormControl>

            <Link className="view-all-btn-style" to="/collectionstats">
              View All
            </Link>
          </div>

          <FormControl fullWidth className="all-chain-form-sm-view">
            <InputLabel id="demo-simple-select-label">All Chains</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={chains}
              label="Chains"
              onChange={handleChainChange}
            >
              <MenuItem value={10}>BNB Chain</MenuItem>
              <MenuItem value={20}>Base</MenuItem>
              <MenuItem value={30}>Ethereum</MenuItem>
              <MenuItem value={40}>Klaytn</MenuItem>
              <MenuItem value={50}>Polygon</MenuItem>
              <MenuItem value={60}>Solana</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Tabs
            value={valueTrend}
            onChange={handleChangeInner}
            aria-label="basic tabs example"
            className="inner-tabs inner-tabs-trend"
          >
            <Tab label="1h" />
            <Tab label="6h" />
            <Tab label="1d" />
            <Tab label="7d" />
            <Tab label="30d" />
            <Tab label="All" />
          </Tabs>
          <TabPanelTrending
            value={valueTrend}
            index={0}
            className="padding-none-lr"
          >
            <ExploreTableTrend/>

          </TabPanelTrending>

          <TabPanelTrending
            value={valueTrend}
            index={1}
            className="padding-none-lr"
          >
            <ExploreTableTrend/>
          </TabPanelTrending>

          <TabPanelTrending
            value={valueTrend}
            index={2}
            className="padding-none-lr"
          >
            <ExploreTableTrend/>
          </TabPanelTrending>


          <TabPanelTrending
            value={valueTrend}
            index={3}
            className="padding-none-lr"
          >
            <ExploreTableTrend/>
          </TabPanelTrending>

          <TabPanelTrending
            value={valueTrend}
            index={4}
            className="padding-none-lr"
          >
            <ExploreTableTrend/>
          </TabPanelTrending>

          <TabPanelTrending
            value={valueTrend}
            index={5}
            className="padding-none-lr"
          >
            <ExploreTableTrend/>
          </TabPanelTrending>
        </CustomTabPanel>
        

        <CustomTabPanel value={value} index={1}>
        <Tabs
            value={valueTop}
            onChange={handleChangeTop}
            aria-label="basic tabs example"
            className="inner-tabs inner-tabs-trend"
          >
            <Tab label="1h" />
            <Tab label="6h" />
            <Tab label="1d" />
            <Tab label="7d" />
            <Tab label="30d" />
          </Tabs>
          <TabPanelTrending
            value={valueTop}
            index={0}
            className="padding-none-lr"
          >
            <ExploreTableTop/>

          </TabPanelTrending>

          <TabPanelTrending
            value={valueTop}
            index={1}
            className="padding-none-lr"
          >
            <ExploreTableTop/>

          </TabPanelTrending>

          <TabPanelTrending
            value={valueTop}
            index={2}
            className="padding-none-lr"
          >
            <ExploreTableTop/>
          </TabPanelTrending>
          <TabPanelTrending
            value={valueTop}
            index={3}
            className="padding-none-lr"
          >
           <ExploreTableTop/>
          </TabPanelTrending>

          <TabPanelTrending
            value={valueTop}
            index={4}
            className="padding-none-lr"
          >
            <ExploreTableTop/>
          </TabPanelTrending>
        </CustomTabPanel>
      </Box>

      <div className="explore-notable-cllection-slide">
        <h2>Notable Collections</h2>
        <OwlCarousel className="owl-theme owl-carousel" {...options}>
          <div className="item">
            <Link to="/collection-detail" className="notable-collection-item">
              <div className="cover-photo-for-collection">
                <img src={collection1} alt="collection1" />
              </div>
              <div className="cover-photo-for-collection-detail">
                <h4>Runaway</h4>
                <div className="floor-vol-rate-block">
                  <div className="floor-rate-note">
                    <label>Floor</label>
                    <span>0.03 ETH</span>
                  </div>

                  <div className="vol-rate-note">
                    <label>Total Volume</label>
                    <span>121 ETH</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="notable-collection-item">
              <div className="cover-photo-for-collection">
                <img src={collection2} alt="collection2" />
              </div>
              <div className="cover-photo-for-collection-detail">
                <h4>The Potraits</h4>
                <div className="floor-vol-rate-block">
                  <div className="floor-rate-note">
                    <label>Floor</label>
                    <span>0.03 ETH</span>
                  </div>

                  <div className="vol-rate-note">
                    <label>Total Volume</label>
                    <span>129 ETH</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="notable-collection-item">
              <div className="cover-photo-for-collection">
                <img src={collection3} alt="collection3" />
              </div>
              <div className="cover-photo-for-collection-detail">
                <h4>DOT.EXE</h4>
                <div className="floor-vol-rate-block">
                  <div className="floor-rate-note">
                    <label>Floor</label>
                    <span>0.05 ETH</span>
                  </div>

                  <div className="vol-rate-note">
                    <label>Total Volume</label>
                    <span>161 ETH</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="notable-collection-item">
              <div className="cover-photo-for-collection">
                <img src={collection4} alt="collection4" />
              </div>
              <div className="cover-photo-for-collection-detail">
                <h4>Spatial X</h4>
                <div className="floor-vol-rate-block">
                  <div className="floor-rate-note">
                    <label>Floor</label>
                    <span>0.08 ETH</span>
                  </div>

                  <div className="vol-rate-note">
                    <label>Total Volume</label>
                    <span>21 ETH</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="notable-collection-item">
              <div className="cover-photo-for-collection">
                <img src={collection6} alt="collection6" />
              </div>
              <div className="cover-photo-for-collection-detail">
                <h4>Field Trip</h4>
                <div className="floor-vol-rate-block">
                  <div className="floor-rate-note">
                    <label>Floor</label>
                    <span>0.03 ETH</span>
                  </div>

                  <div className="vol-rate-note">
                    <label>Total Volume</label>
                    <span>12 ETH</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </OwlCarousel>
      </div>

      <div className="explore-notable-cllection-slide nft">
        <h2>NFT 101</h2>
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

      <div className="explore-notable-cllection-slide nft explore">
        <h2>Explore Categories</h2>
        <OwlCarousel className="owl-theme owl-carousel nft" {...options}>
          <div className="item">
            <Link
              to="/collection-detail"
              className="notable-collection-item nft"
            >
              <div className="cover-photo-for-collection">
                <img src={explore1011} alt="collection1" />
              </div>
              <div className="cover-photo-for-collection-detail">
                <h4>Art</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="notable-collection-item nft">
              <div className="cover-photo-for-collection">
                <img src={explore1012} alt="collection2" />
              </div>
              <div className="cover-photo-for-collection-detail">
                <h4>Gaming</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="notable-collection-item nft">
              <div className="cover-photo-for-collection">
                <img src={explore1013} alt="collection3" />
              </div>
              <div className="cover-photo-for-collection-detail">
                <h4>Memberships</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="notable-collection-item nft">
              <div className="cover-photo-for-collection">
                <img src={explore1014} alt="collection4" />
              </div>
              <div className="cover-photo-for-collection-detail">
                <h4>Music</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="notable-collection-item nft">
              <div className="cover-photo-for-collection">
                <img src={explore1015} alt="collection6" />
              </div>
              <div className="cover-photo-for-collection-detail">
                <h4>PFPs</h4>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link className="notable-collection-item nft">
              <div className="cover-photo-for-collection">
                <img src={explore1016} alt="collection6" />
              </div>
              <div className="cover-photo-for-collection-detail">
                <h4>Photography</h4>
              </div>
            </Link>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default ExploreBody;
