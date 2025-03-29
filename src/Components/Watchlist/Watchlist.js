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
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import "./Watchlist.css";
import "../CollectionStats/CollectionStats.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import OutlinedInput from "@mui/material/OutlinedInput";
import Image1 from "../../images/image-72 -1.svg";
import Image2 from "../../images/image-72 -2.svg";
import Image3 from "../../images/image-72 -3.svg";
import Image4 from "../../images/image-72 -4.svg";
import Image5 from "../../images/image-72 -5.svg";
import Image6 from "../../images/image-72 -6.svg";
import Image7 from "../../images/image-72 -7.svg";
import Image8 from "../../images/image-72 -8.svg";
import Image9 from "../../images/image-72 -9.svg";
import Image10 from "../../images/image-72 -10.svg";
import Button from '@mui/material/Button';

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
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '0px',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  footercls: {
      background: 'transparent !important',
      borderRadius: '0px !important',
      boxShadow:'none !important',
      padding: '0px !important',
      '@media (max-width: 991.98px)' : {
          padding: '30px 0 !important',
        }
  },
  headercls: {
      background: 'transparent !important',
      borderRadius: '0px !important',
      boxShadow:'none !important',
  },

  bodyclass: {
      background: 'transparent !important',
      borderRadius: '0px !important',
      boxShadow:'none !important',
  },
});

function createData(
  rank,
  collectionimg,
  collectionname,
  volume,
  floorprice,
  Change,
  Sales,
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
  createData(1, collection1, "collection1", 6.0, 24, 50.3,1),
  createData(2, collection2, "collection2", 9.0, 374.34, -12.2,1),
  createData(3, collection3, "collection3", 16.0, 24.54, -0.2,1),
  createData(4, collection4, "collection4", 3.7, 67.76, 10.2,1),
  createData(5, collection5, "collection5", 16.0, 49.88, 10.2,1),
  createData(6, collection6, "collection6", 16.0, 490.2, 0.2,1),
  createData(7, collection3, "collection3", 16.0, 24.54, -0.2,1),
  createData(8, collection4, "collection4", 3.7, 67.76, 10.2,1),
  createData(9, collection5, "collection5", 16.0, 49.88, 10.2,1),
  createData(10, collection6, "collection6", 16.0, 490.2, 0.2,1),
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

const CollectionStats = () => {

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
    <div className="CollectionStats-container">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Item className={classes.headercls}>
          <Header />
        </Item>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        class="collection-stat-body-part"
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="CollectionStats-heading">
            <Typography variant="h2" component="h1">
              Collection stats
            </Typography>
          </div>
        </Grid>

        <Box sx={{ width: "100%" }}>
          <Box className="flex-box-all-chains-view-all">
            <Tabs
              className="outer-tabs"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              initialSelectedIndex={2}
            >
              <Tab label="Trending" {...a11yProps(0)} />
              <Tab label="Top" {...a11yProps(1)} />
              <Tab label="Watchlist" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <div className="CollectionStats-table">
            <Box container>
            <CustomTabPanel value={value} index={0}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={3} md={3} lg={2} xl={2}>
                    <div className="CollectionStats-all-categories all-chains-view-all">
                      <FormControl fullWidth>
                        <InputLabel>All categories</InputLabel>
                        <Select
                          value={chains}
                          onChange={handleChainChange}
                          MenuProps={MenuProps}
                        >
                          <MenuItem value={10}>All categories</MenuItem>
                          <MenuItem value={20}>Art</MenuItem>
                          <MenuItem value={30}>Gaming</MenuItem>
                          <MenuItem value={40}>Memberships</MenuItem>
                          <MenuItem value={50}>PFPs</MenuItem>
                          <MenuItem value={60}>Photography</MenuItem>
                          <MenuItem value={70}>Domain Names</MenuItem>
                          <MenuItem value={80}>Music</MenuItem>
                        </Select>
                      </FormControl>

                      {/* <LightTooltip
                      title="Chain: Ethereum"
                      placement="top-start"
                      arrow
                    >
                      <Link className="view-all-btn-style" to="">
                        All chains
                      </Link>
                    </LightTooltip> */}
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={9} md={6} lg={6} xl={6} className="all-chains">
                    <div className="CollectionStats-all-categories all-chains-view-all all-chains-main-mobile">
                      <FormControl fullWidth>
                        <InputLabel>All chains</InputLabel>
                        <Select
                          value={Allchains}
                          onChange={handleChainAllChange}
                          MenuProps={MenuProps}
                        >
                          <MenuItem value={10}>All chains</MenuItem>
                          <MenuItem value={20}>Arbitrum</MenuItem>
                          <MenuItem value={30}>Avalanche</MenuItem>
                          <MenuItem value={40}>BNB Chain</MenuItem>
                          <MenuItem value={50}>Ethereum</MenuItem>
                          <MenuItem value={60}>Klaytn</MenuItem>
                          <MenuItem value={70}>Optimism</MenuItem>
                          <MenuItem value={80}>Polygon</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="All-chains-desktop">
                      <Tabs
                        value={valueTrend}
                        onChange={handleChangeInner}
                        aria-label="scrollable force tabs example"
                        className="inner-tabs inner-tabs-trend"
                      >
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab label=" All chains" />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image1} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image2} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image3} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image4} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image5} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image6} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image7} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image8} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image9} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title={<img src={Image8} alt="Ethereum" />}
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image10} alt="Ethereum" />} />
                        </LightTooltip>
                      </Tabs>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={4} xl={4}>
                    <div className="CollectionStats-tab3">
                      <Tabs
                        value={valueTrendTwo}
                        onChange={handleChangeInnerTwo}
                        aria-label="basic tabs example"
                        className="inner-tabs inner-tabs-trend"
                      >
                        <Tab label="1h" />
                        <Tab label="6h" />
                        <Tab label="24h" />
                        <Tab label="7d" />
                        <Tab label="30d" />
                        <Tab label="All" />
                      </Tabs>
                    </div>
                  </Grid>
                </Grid>

                <TabPanelTrending
                  value={valueTrend}
                  index={0}
                  className="padding-none-lr"
                >
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell>Collection</TableCell>
                          <TableCell>Volume</TableCell>
                          <TableCell>% Change </TableCell>
                          <TableCell>Floor price </TableCell>
                          <TableCell>Sales </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>{row.rank}</TableCell>
                            <TableCell className="collections">
                              <div className="collections-outer">
                                <LightTooltipImage
                                  title={
                                    <>
                                      <div className="Collection-table-image-hover">
                                        <Link>
                                          <img
                                            src={collection1}
                                            alt="Ethereum"
                                          />
                                        </Link>
                                        <Link>
                                          <img
                                            src={collection1}
                                            alt="Ethereum"
                                          />
                                        </Link>
                                        <Link>
                                          <img
                                            src={collection1}
                                            alt="Ethereum"
                                          />
                                        </Link>
                                      </div>
                                    </>
                                  }
                                  placement="top-start"
                                  arrow
                                >
                                  <div className="collections-img">
                                    <img src={row.collectionimg} />
                                  </div>
                                </LightTooltipImage>

                                <span>{row.collectionname}</span>
                              </div>
                            </TableCell>
                            <TableCell>{row.volume} ETH</TableCell>
                            <TableCell>
                              <div className="volume-rate-outer">
                                <div className="volume-rate">
                                  {row.floorprice} %
                                </div>
                                <span
                                  style={{
                                    color:
                                      `${row.volpercent}` < 0 ? "red" : "green",
                                  }}
                                >
                                  {row.volpercent}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>{row.Change} ETH</TableCell>
                            <TableCell>{row.Sales} </TableCell>
                            <TableCell>
                              <StarOutlineIcon />{" "}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanelTrending>
                <TabPanelTrending
                  value={valueTrend}
                  index={1}
                  className="padding-none-lr"
                >
                  Item Two
                </TabPanelTrending>
                <TabPanelTrending
                  value={valueTrend}
                  index={2}
                  className="padding-none-lr"
                >
                  Item Three
                </TabPanelTrending>
                <TabPanelTrending
                  value={valueTrend}
                  index={3}
                  className="padding-none-lr"
                >
                  Item Three
                </TabPanelTrending>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={3} md={3} lg={2} xl={2}>
                    <div className="CollectionStats-all-categories all-chains-view-all">
                      <FormControl fullWidth>
                        <InputLabel>All categories</InputLabel>
                        <Select
                          value={chains}
                          onChange={handleChainChange}
                          MenuProps={MenuProps}
                        >
                          <MenuItem value={10}>All categories</MenuItem>
                          <MenuItem value={20}>Art</MenuItem>
                          <MenuItem value={30}>Gaming</MenuItem>
                          <MenuItem value={40}>Memberships</MenuItem>
                          <MenuItem value={50}>PFPs</MenuItem>
                          <MenuItem value={60}>Photography</MenuItem>
                          <MenuItem value={70}>Domain Names</MenuItem>
                          <MenuItem value={80}>Music</MenuItem>
                        </Select>
                      </FormControl>

                      {/* <LightTooltip
                      title="Chain: Ethereum"
                      placement="top-start"
                      arrow
                    >
                      <Link className="view-all-btn-style" to="">
                        All chains
                      </Link>
                    </LightTooltip> */}
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={9} md={6} lg={6} xl={6} className="all-chains">
                    <div className="CollectionStats-all-categories all-chains-view-all all-chains-main-mobile">
                      <FormControl fullWidth>
                        <InputLabel>All chains</InputLabel>
                        <Select
                          value={Allchains}
                          onChange={handleChainAllChange}
                          MenuProps={MenuProps}
                        >
                          <MenuItem value={10}>All chains</MenuItem>
                          <MenuItem value={20}>Arbitrum</MenuItem>
                          <MenuItem value={30}>Avalanche</MenuItem>
                          <MenuItem value={40}>BNB Chain</MenuItem>
                          <MenuItem value={50}>Ethereum</MenuItem>
                          <MenuItem value={60}>Klaytn</MenuItem>
                          <MenuItem value={70}>Optimism</MenuItem>
                          <MenuItem value={80}>Polygon</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="All-chains-desktop">
                      <Tabs
                        value={valueTrend}
                        onChange={handleChangeInner}
                        aria-label="scrollable force tabs example"
                        className="inner-tabs inner-tabs-trend"
                      >
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab label=" All chains" />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image1} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image2} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image3} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image4} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image5} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image6} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image7} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image8} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image9} alt="Ethereum" />} />
                        </LightTooltip>
                        <LightTooltip
                          title={<img src={Image8} alt="Ethereum" />}
                          placement="top-start"
                          arrow
                        >
                          <Tab icon={<img src={Image10} alt="Ethereum" />} />
                        </LightTooltip>
                      </Tabs>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3} lg={4} xl={4}>
                    <div className="CollectionStats-tab3">
                      <Tabs
                        value={valueTrendTwo}
                        onChange={handleChangeInnerTwo}
                        aria-label="basic tabs example"
                        className="inner-tabs inner-tabs-trend"
                      >
                        <Tab label="1h" />
                        <Tab label="6h" />
                        <Tab label="24h" />
                        <Tab label="7d" />
                        <Tab label="30d" />
                        <Tab label="All" />
                      </Tabs>
                    </div>
                  </Grid>
                </Grid>

                <TabPanelTrending
                  value={valueTrend}
                  index={0}
                  className="padding-none-lr"
                >
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>#</TableCell>
                          <TableCell>Collection</TableCell>
                          <TableCell>Volume</TableCell>
                          <TableCell>% Change </TableCell>
                          <TableCell>Floor price </TableCell>
                          <TableCell>Sales </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>{row.rank}</TableCell>
                            <TableCell className="collections">
                              <div className="collections-outer">
                                <LightTooltipImage
                                  title={
                                    <>
                                      <div className="Collection-table-image-hover">
                                        <Link>
                                          <img
                                            src={collection1}
                                            alt="Ethereum"
                                          />
                                        </Link>
                                        <Link>
                                          <img
                                            src={collection1}
                                            alt="Ethereum"
                                          />
                                        </Link>
                                        <Link>
                                          <img
                                            src={collection1}
                                            alt="Ethereum"
                                          />
                                        </Link>
                                      </div>
                                    </>
                                  }
                                  placement="top-start"
                                  arrow
                                >
                                  <div className="collections-img">
                                    <img src={row.collectionimg} />
                                  </div>
                                </LightTooltipImage>

                                <span>{row.collectionname}</span>
                              </div>
                            </TableCell>
                            <TableCell>{row.volume} ETH</TableCell>
                            <TableCell>
                              <div className="volume-rate-outer">
                                <div className="volume-rate">
                                  {row.floorprice} %
                                </div>
                                <span
                                  style={{
                                    color:
                                      `${row.volpercent}` < 0 ? "red" : "green",
                                  }}
                                >
                                  {row.volpercent}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>{row.Change} ETH</TableCell>
                            <TableCell>{row.Sales} </TableCell>
                            <TableCell>
                              <StarOutlineIcon />{" "}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanelTrending>
                <TabPanelTrending
                  value={valueTrend}
                  index={1}
                  className="padding-none-lr"
                >
                  Item Two
                </TabPanelTrending>
                <TabPanelTrending
                  value={valueTrend}
                  index={2}
                  className="padding-none-lr"
                >
                  Item Three
                </TabPanelTrending>
                <TabPanelTrending
                  value={valueTrend}
                  index={3}
                  className="padding-none-lr"
                >
                  Item Three
                </TabPanelTrending>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={2} className="watchlist">

                  <Grid container spacing={2}>
                      <Grid item xs={6} sm={3} md={3} lg={3} xl={3}>
                        <div className="CollectionStats-all-categories all-chains-view-all">
                          <FormControl fullWidth>
                            <InputLabel>All categories</InputLabel>
                            <Select
                              value={chains}
                              onChange={handleChainChange}
                              MenuProps={MenuProps}
                            >
                              <MenuItem value={10}>All categories</MenuItem>
                              <MenuItem value={20}>Art</MenuItem>
                              <MenuItem value={30}>Gaming</MenuItem>
                              <MenuItem value={40}>Memberships</MenuItem>
                              <MenuItem value={50}>PFPs</MenuItem>
                              <MenuItem value={60}>Photography</MenuItem>
                              <MenuItem value={70}>Domain Names</MenuItem>
                              <MenuItem value={80}>Music</MenuItem>
                            </Select>
                          </FormControl>

                          {/* <LightTooltip
                          title="Chain: Ethereum"
                          placement="top-start"
                          arrow
                        >
                          <Link className="view-all-btn-style" to="">
                            All chains
                          </Link>
                        </LightTooltip> */}
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={9} md={9} lg={9} xl={9}>
                        <div className="CollectionStats-all-categories all-chains-view-all all-chains-main-mobile">
                          <FormControl fullWidth>
                            <InputLabel>All chains</InputLabel>
                            <Select
                              value={Allchains}
                              onChange={handleChainAllChange}
                              MenuProps={MenuProps}
                            >
                              <MenuItem value={10}>All chains</MenuItem>
                              <MenuItem value={20}>Arbitrum</MenuItem>
                              <MenuItem value={30}>Avalanche</MenuItem>
                              <MenuItem value={40}>BNB Chain</MenuItem>
                              <MenuItem value={50}>Ethereum</MenuItem>
                              <MenuItem value={60}>Klaytn</MenuItem>
                              <MenuItem value={70}>Optimism</MenuItem>
                              <MenuItem value={80}>Polygon</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                        <div className="All-chains-desktop">
                          <Tabs
                            value={valueTrend}
                            onChange={handleChangeInner}
                            aria-label="scrollable force tabs example"
                            className="inner-tabs inner-tabs-trend"
                          >
                            <LightTooltip
                              title="Chain: Ethereum"
                              placement="top-start"
                              arrow
                            >
                              <Tab label=" All chains" />
                            </LightTooltip>
                            <LightTooltip
                              title="Chain: Ethereum"
                              placement="top-start"
                              arrow
                            >
                              <Tab icon={<img src={Image1} alt="Ethereum" />} />
                            </LightTooltip>
                            <LightTooltip
                              title="Chain: Ethereum"
                              placement="top-start"
                              arrow
                            >
                              <Tab icon={<img src={Image2} alt="Ethereum" />} />
                            </LightTooltip>
                            <LightTooltip
                              title="Chain: Ethereum"
                              placement="top-start"
                              arrow
                            >
                              <Tab icon={<img src={Image3} alt="Ethereum" />} />
                            </LightTooltip>
                            <LightTooltip
                              title="Chain: Ethereum"
                              placement="top-start"
                              arrow
                            >
                              <Tab icon={<img src={Image4} alt="Ethereum" />} />
                            </LightTooltip>
                            <LightTooltip
                              title="Chain: Ethereum"
                              placement="top-start"
                              arrow
                            >
                              <Tab icon={<img src={Image5} alt="Ethereum" />} />
                            </LightTooltip>
                            <LightTooltip
                              title="Chain: Ethereum"
                              placement="top-start"
                              arrow
                            >
                              <Tab icon={<img src={Image6} alt="Ethereum" />} />
                            </LightTooltip>
                            <LightTooltip
                              title="Chain: Ethereum"
                              placement="top-start"
                              arrow
                            >
                              <Tab icon={<img src={Image7} alt="Ethereum" />} />
                            </LightTooltip>
                            <LightTooltip
                              title="Chain: Ethereum"
                              placement="top-start"
                              arrow
                            >
                              <Tab icon={<img src={Image8} alt="Ethereum" />} />
                            </LightTooltip>
                            <LightTooltip
                              title="Chain: Ethereum"
                              placement="top-start"
                              arrow
                            >
                              <Tab icon={<img src={Image9} alt="Ethereum" />} />
                            </LightTooltip>
                            <LightTooltip
                              title={<img src={Image8} alt="Ethereum" />}
                              placement="top-start"
                              arrow
                            >
                              <Tab icon={<img src={Image10} alt="Ethereum" />} />
                            </LightTooltip>
                          </Tabs>
                        </div>
                      </Grid>

                  </Grid>

                  <div className="watchlist-collection-stats">
                    <div className="watchlist">
                    <p>Collections you add to your watchlist will appear here.</p>
                      <Button className="btnBuy" variant="contained">
                      <Link to="/collectionstats">Explore collections</Link>
                      </Button>
                    </div>
                  </div>
              </CustomTabPanel>
            </Box>

          </div>

          {/* <CustomTabPanel value={value} index={1}>
            <Tabs
              value={valueTop}
              onChange={handleChangeTop}
              aria-label="basic tabs example"
              className="inner-tabs inner-tabs-top"
            >
              <Tab label="1h" />
              <Tab label="6h" />
              <Tab label="1d" />
              <Tab label="7d" />
              <Tab label="30d" />
              <Tab label="All" />
            </Tabs>
            <TabPanelTop value={valueTop} index={0}>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Rank</TableCell>
                      <TableCell align="center">Collection</TableCell>
                      <TableCell align="center">Floor Price</TableCell>
                      <TableCell align="right">Volume </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{row.rank}</TableCell>
                        <TableCell className="collections">
                          <div className="collections-outer">
                            <div className="collections-img">
                              <img src={row.collectionimg} />
                            </div>
                            <span>{row.collectionname}</span>
                          </div>
                        </TableCell>
                        <TableCell>{row.floorprice} ETH</TableCell>
                        <TableCell>
                          <div className="volume-rate-outer">
                            <div className="volume-rate">{row.volume} ETH</div>
                            <span
                              style={{
                                color:
                                  `${row.volpercent}` < 0 ? "red" : "green",
                              }}
                            >
                              {row.volpercent}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>{row.floorprice} ETH</TableCell>
                        <TableCell>{row.floorprice} ETH</TableCell>
                        <TableCell>{row.floorprice} ETH</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanelTop>
            <TabPanelTop value={valueTop} index={1}>
              Item Two
            </TabPanelTop>
            <TabPanelTop value={valueTop} index={2}>
              Item Three
            </TabPanelTop>
            <TabPanelTop value={valueTop} index={3}>
              Item One
            </TabPanelTop>
            <TabPanelTop value={valueTop} index={4}>
              Item Two
            </TabPanelTop>
            <TabPanelTop value={valueTop} index={5}>
              Item Three
            </TabPanelTop>
          </CustomTabPanel> */}


          {/* <CustomTabPanel value={value} index={2}>
          <div className="watchlist-collection-stats">
            <div className="watchlist">
            <p>Collections you add to your watchlist will appear here.</p>
              <Button className="btnBuy" variant="contained">
              Explore collections
              </Button>
            </div>
          </div>
          </CustomTabPanel> */}



        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Item className={classes.headercls}>
          {/* <Footer /> */}
        </Item>
      </Grid>
    </div>
  );
};

export default CollectionStats;
