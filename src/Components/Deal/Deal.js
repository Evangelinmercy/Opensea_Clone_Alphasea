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
import dealslide1 from "../../img/deal/deal-slide-img-1.avif";
import Header from '../Header/Header';
import "./Deal.css"
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from '@mui/material/TextField';

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
  floorprice,
  volume,
  volpercent
) {
  return {
    rank,
    collectionimg,
    collectionname,
    floorprice,
    volume,
    volpercent,
  };
}

const rowsone = [
  createData(1, collection1, "collection1", 6.0, 240.12, -10.2),
  createData(2, collection2, "collection2", 9.0, 374.34, -12.2),
  createData(3, collection3, "collection3", 16.0, 24.54, -0.2),
  createData(4, collection4, "collection4", 3.7, 67.76, 10.2),
  createData(5, collection5, "collection5", 16.0, 49.88, 10.2),
];

function createDatatwo(
  ranktwo,
  collectionimgtwo,
  collectionnametwo,
  floorpricetwo,
  volumetwo,
  volpercenttwo
) {
  return {
    ranktwo,
    collectionimgtwo,
    collectionnametwo,
    floorpricetwo,
    volumetwo,
    volpercenttwo,
  };
}

const rowstwo = [
  createDatatwo(6, collection6, "collection6", 16.0, 490.2, 0.2),
  createDatatwo(7, collection3, "collection3", 16.0, 24.54, -0.2),
  createDatatwo(8, collection4, "collection4", 3.7, 67.76, 10.2),
  createDatatwo(9, collection5, "collection5", 16.0, 49.88, 10.2),
  createDatatwo(10, collection6, "collection6", 16.0, 490.2, 0.2),
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

const ExploreBody = () => {

    const classes = useStyles();

  return (

    <div className="alphasea-deal-page">

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Item className={classes.headercls}>
                <Header />
            </Item>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                            
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                    <div className="center-handshake"><HandshakeOutlinedIcon/></div>
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>

                    </div>
                    <div class="slide">
                            
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                    <div className="center-handshake"><HandshakeOutlinedIcon/></div>
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                    </div>
                    <div class="slide">
                            
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                    <div className="center-handshake"><HandshakeOutlinedIcon/></div>
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>

                    </div>
                    <div class="slide">
                            
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                    <div className="center-handshake"><HandshakeOutlinedIcon/></div>
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>

                    </div>
                    <div class="slide">
                            
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                    <div className="center-handshake"><HandshakeOutlinedIcon/></div>
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>

                    </div>
                    <div class="slide">
                            
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                    <div className="center-handshake"><HandshakeOutlinedIcon/></div>
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>

                    </div>
                    <div class="slide">
                            
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                    <div className="center-handshake"><HandshakeOutlinedIcon/></div>
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>

                    </div>
                   <div class="slide">
                            
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                    <div className="center-handshake"><HandshakeOutlinedIcon/></div>
                    <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>

                    </div>
                    <div class="slide">
                            
                            <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                            <div className="center-handshake"><HandshakeOutlinedIcon/></div>
                            <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
        
                    </div>
                    <div class="slide">
                            
                            <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                            <div className="center-handshake"><HandshakeOutlinedIcon/></div>
                            <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
        
                    </div>
                    <div class="slide">
                            
                            <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                            <div className="center-handshake"><HandshakeOutlinedIcon/></div>
                            <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
        
                    </div>
                    <div class="slide">
                            
                            <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                            <div className="center-handshake"><HandshakeOutlinedIcon/></div>
                            <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
        
                    </div>
                    <div class="slide">
                            
                            <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
                            <div className="center-handshake"><HandshakeOutlinedIcon/></div>
                            <div className="Deal-img1"><img src={dealslide1} alt="dealslide1" className="dealslide1" /></div>
        
                    </div>
                </div>
            </div>

            <div className="btm-deal-section">
                <Typography variant="h1" className="head">Make a deal</Typography>

                <div className="head-body-2">
                <Typography variant="h2">Offer your NFTs for their NFTs. <Link to="/helpcenter">Learn more</Link></Typography>
                </div>
            </div>

            <div className="searching-deal">
            <div className="searching-deal-outer-layer">
              <div className="double-inner-layer">
                <SearchOutlinedIcon/>

                <TextField
                    id="standard-search"
                    type="search"
                    // variant="standard"
                    placeholder="Search by username, address, or ENS"
                  />
              </div>
            </div>
            </div>

            </Grid>


            </Grid>
        </Box>


    
    </div>
  );
};

export default ExploreBody;
