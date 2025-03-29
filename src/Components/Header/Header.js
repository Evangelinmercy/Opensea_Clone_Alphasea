import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../img/opensea-logo.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Link, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Avatar from "@mui/material/Avatar";
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import ImageIcon from '@mui/icons-material/Search';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import Grow from '@mui/material/Grow';

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import collection1 from "../../img/collection-1.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { IconButton, Stack, TextField } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import Backdrop from "@mui/material/Backdrop";

import Badge from "@mui/material/Badge";
import VerifiedIcon from "@mui/icons-material/Verified";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import Ether from "../../images/Ether.svg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Autocomplete from "@mui/material/Autocomplete";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Metamask from "../../images/metamask.png";

import Logout from "@mui/icons-material/Logout";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import Switch from "@mui/material/Switch";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SettingsIcon from '@mui/icons-material/Settings';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WalletIcon from '@mui/icons-material/Wallet';

import bitkeep from "../../img/wallet/bitkeep.png";
import bitski from "../../img/wallet/bitski-alternative.png";
import core from "../../img/wallet/core.png";
import fortmatic from "../../img/wallet/fortmatic-alternative.png";
import glow from "../../img/wallet/glow.svg";
import kaikas from "../../img/wallet/kaikas.webp";
import ledgerconnect from "../../img/wallet/ledgerconnect-alternative.png";
import MetaMask from '../../img/MetaMask.png'
import opera from "../../img/wallet/opera-touch-alternative.svg";
import phantom from "../../img/wallet/phantom.svg";
import solflare from "../../img/wallet/solflare.png";
import trust from "../../img/wallet/trust-alternative.png";
import closeMenu from "../../img/closemenu.png";

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});


const stylewallet = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

function createData(calories, fat, carbs, protein) {
  return { calories, fat, carbs, protein };
}

const rows = [
  createData(
    "UserLogoff",
    "Logoff “EMEASALESAdministrator”",
    "SE-EMEA-0026.emea.sales",
    "2019-10-17 11:03:11"
  ),
  createData(
    "UserLogoff",
    "Logoff “EMEASALESAdministrator”",
    "SE-EMEA-0026.emea.sales",
    "2019-10-17 11:03:11"
  ),
  createData(
    "UserLogoff",
    "Logoff “EMEASALESAdministrator”",
    "SE-EMEA-0026.emea.sales",
    "2019-10-17 11:03:11"
  ),
  createData(
    "UserLogoff",
    "Logoff “EMEASALESAdministrator”",
    "SE-EMEA-0026.emea.sales",
    "2019-10-17 11:03:11"
  ),
  createData(
    "UserLogoff",
    "Logoff “EMEASALESAdministrator”",
    "SE-EMEA-0026.emea.sales",
    "2019-10-17 11:03:11"
  ),
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "111.111px",
  backgroundColor: "#fff",
  boxShadow:
    "3.33333px 3.33333px 7.77778px 0px rgba(156, 156, 156, 0.48) inset, -3.33333px -3.33333px 7.77778px 0px #FFF inset",
  "&:hover": {
    backgroundColor: "#fff",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 5),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "100%",
      },
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// RESPONSIVE



// RESPONSIVE

const useStyles = makeStyles({
  headermainouter: {
    background: "transparent !important",
    backdropFilter: "blur(27.777780532836914px)",

    "& > div": {
      display: "flex",
      alignItems: "center",
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingLeft: "2rem",
      paddingRight: "2rem",

      "@media (max-width: 991.98px)": {
        padding: "0 !important"
      }
    },

  },
  removerbs: {
    borderRadius: "0px !important",
    boxShadow: "none !important",
    border: "none !important",
    background: "transparent !important",
    height: "100%",
    padding: "0px !important",
    display: "flex",
    justifyContent: "space-between"

  },
  containwidth: {
    padding: "0 80px",
    "@media (max-width: 991.98px)": {
      padding: "0",
    },
  },
});

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
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





const emails = ['English', 'Espanol', 'Deutsch', 'Francais'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} className="dialogBox-language">
      <DialogTitle><ArrowBackIcon /> Choose Language</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters key={email} className="language-profile-menu">
            <ListItemButton onClick={() => handleListItemClick(email)}>
            
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


const Header = () => {
  const classes = useStyles();
  // DROPDOWN
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const openProfile = Boolean(anchorElProfile);
  const handleClickProfile = (event) => {
    setAnchorElProfile(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  const [anchorElProfileMobile, setAnchorElProfileMobile] = useState(null);
  const openProfileMobile = Boolean(anchorElProfileMobile);
  const handleClickProfileMobile = (event) => {
    setAnchorElProfileMobile(event.currentTarget);
  };
  const handleCloseProfileMobile = () => {
    setAnchorElProfileMobile(null);
  };
  // DROPDOWN

  const [openSearch, setOpenSearch] = useState(true)

  const openSearchHandle = () => {
    setOpenSearch(false)
  }

  const closeSearchHandle = () => {
    setOpenSearch(true)
  }
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
      borderRadius: 12,
      fontSize: 12,
      padding: 0,
    },
  }));

  const [opencart, setOpencart] = React.useState(false);
  const handleOpencart = () => setOpencart(true);
  const handleClosecart = () => setOpencart(false);

  const style = {
    position: "absolute",
    top: "50%",
    // left: "100%",
    right: "0%",
    transform: "translate(-10%, -50%)",
    width: 370,
    bgcolor: "background.paper",
    boxShadow: 20,
    p: 2,
  };
  const [value, setValue] = React.useState('female');

  const handleChangeCrypto = (event) => {
    setValue(event.target.value);
  };

 const [openAdvanceSettings, setOpenAdvanceSettings] = useState(false);
    const handleOpenAdvanceSettings = () =>
    setOpenAdvanceSettings(!openAdvanceSettings);
  
  const [searchMobile, setSearchMobile] = useState(false);
  const [headerMobile, setHeaderMobile] = useState(true);
  const handleSearchMobile = () => {
    setSearchMobile(true);
    setHeaderMobile(false)
  }
  const handleCloseSearchMobile = () => {
    setSearchMobile(false);
    setHeaderMobile(true);
  };

      const LightTooltipCopy = styled(({ className, ...props }) => (
            <Tooltip {...props} classes={{ popper: className }} />
          ))(({ theme }) => ({
            [`& .${tooltipClasses.arrow}`]: {
              color: theme.palette.common.white,
            },
            [`& .${tooltipClasses.tooltip}`]: {
              backgroundColor: theme.palette.common.white,
              color: "rgba(0, 0, 0, 0.87)",
              boxShadow: theme.shadows[10],
              borderRadius: 5,
              fontSize: 14,
              padding: 10,
            },
          }));

         const [openBalance, setOpenBalance] = useState(null);
         const handleOpenBalance = () => setOpenBalance(!openBalance);
  const handleCloseBalance = () => setOpenBalance(null);


  

  const [valueTab, setValueTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };

    const [anchorElMetamask, setAnchorElMetamask] = React.useState(null);
    const openMetamask = Boolean(anchorElMetamask);
    const handleClickMetamask = (event) => {
      setAnchorElMetamask(event.currentTarget);
    };
    const handleCloseMetamask = () => {
      setAnchorElMetamask(null);
  };
  
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  

        const [openMobileResponsive, setOpenMobileResponsive] = useState(null);
        const handleOpenMobileResponsive = () =>
          setOpenMobileResponsive(!openMobileResponsive);
  const handleCloseMobileResponsive = () => setOpenMobileResponsive(null);
  
     const [openMobileResponsiveMenuDrops, setOpenMobileResponsiveMenuDrops] =
       useState(null);
        const handleOpenMobileResponsiveMenuDrops = () =>
          setOpenMobileResponsiveMenuDrops(!openMobileResponsiveMenuDrops);
        const handleCloseMobileResponsiveMenuDrops = () =>
    setOpenMobileResponsiveMenuDrops(null);
  
         const [
           openMobileResponsiveMenuStats,
           setOpenMobileResponsiveMenuStats,
         ] = useState(null);
         const handleOpenMobileResponsiveMenuStats = () =>
           setOpenMobileResponsiveMenuStats(!openMobileResponsiveMenuStats);
         const handleCloseMobileResponsiveMenuStats = () =>
    setOpenMobileResponsiveMenuStats(null);
  
        const [
          openMobileResponsiveMenuResources,
          setOpenMobileResponsiveMenuResources,
        ] = useState(null);
        const handleOpenMobileResponsiveMenuResources = () =>
          setOpenMobileResponsiveMenuResources(
            !openMobileResponsiveMenuResources
          );
        const handleCloseMobileResponsiveMenuResources = () =>
          setOpenMobileResponsiveMenuResources(null);

  
          const [
            openMobileResponsiveMenuAccount,
            setOpenMobileResponsiveMenuAccount,
          ] = useState(null);
          const handleOpenMobileResponsiveMenuAccount = () =>
            setOpenMobileResponsiveMenuAccount(
              !openMobileResponsiveMenuAccount
            );
          const handleCloseMobileResponsiveMenuAccount = () =>
    setOpenMobileResponsiveMenuAccount(null);
  
      const [
        openMobileResponsiveMenuAccountSettings,
        setOpenMobileResponsiveMenuAccountSettings,
      ] = useState(null);
          const handleOpenMobileResponsiveMenuAccountSettings = () =>
            setOpenMobileResponsiveMenuAccountSettings(
              !openMobileResponsiveMenuAccountSettings
            );
          const handleCloseMobileResponsiveMenuAccountSettings = () =>
            setOpenMobileResponsiveMenuAccountSettings(null);


            
    const [openLanguage, setOpenLanguage] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  
    const handleLanguageClickOpen = () => {
      setOpenLanguage(true);
    };
  
    const handleLanguageClose = (value) => {
      setOpenLanguage(false);
      setSelectedValue(value);
    };


    
const stylewallet = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  p: 4,
  border: "none",
};

    const [openwallet, setOpenwallet] = React.useState(false);
    const handlewalletOpen = () => setOpenwallet(true);
    const handleClosewallet = () => setOpenwallet(false);

    const [slice ,setslice] =useState(true);
    const handleseemore = () => {
      setslice(!slice);
    }


  return (
    <ThemeProvider theme={theme} className="header-main-page">
    <div className="header-main-page-desktop">
      <Box sx={{ flexGrow: 1 }} className={classes.headermainouter} >
        <Grid container spacing={0} className={classes.containwidth}>
          <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
            <Item className={classes.removerbs}>
              <div className="logo-outer-part">
                <Link to="/" href="/">
                  <div className="logo">
                    <svg height="40" viewBox="0 0 373 100" fill="none">
                      <g clip-path="url(#clip0_7200_1299)">
                        <path
                          d="M50.4003 0.500347C22.8003 0.300347 0.300347 22.8003 0.500347 50.4003C0.700347 77.3003 22.7003 99.2003 49.6003 99.5003C77.3003 99.7003 99.8003 77.2003 99.5003 49.6003C99.3003 22.7003 77.3003 0.700347 50.4003 0.500347Z"
                          fill="#2081E2"
                        />
                        <path
                          d="M35.6002 25.8994C38.7002 29.7994 40.5002 34.6994 40.5002 40.0994C40.5002 44.6994 39.1002 48.9994 36.8002 52.5994H20.2002L35.6002 25.8994Z"
                          fill="white"
                        />
                        <path
                          d="M86.3003 58.4998C86.3003 58.6998 86.2003 58.8998 86.0003 58.9998C84.9003 59.4998 81.2003 61.1998 79.6003 63.3998C75.6003 68.8998 72.6003 77.6998 65.8003 77.6998H37.3003C27.2003 77.6998 18.8003 69.6998 18.9003 59.0998C18.9003 58.7998 19.1003 58.5998 19.4003 58.5998H32.8003C33.3003 58.5998 33.6003 58.9998 33.6003 59.3998V61.9998C33.6003 63.3998 34.7003 64.4998 36.1003 64.4998H46.3003V58.5998H39.3003C43.3003 53.4998 45.7003 47.0998 45.7003 40.0998C45.7003 32.2998 42.7003 25.1998 37.8003 19.8998C40.8003 20.1998 43.6003 20.7998 46.2003 21.5998V19.8998C46.2003 18.1998 47.6003 16.7998 49.3003 16.7998C51.0003 16.7998 52.4003 18.1998 52.4003 19.8998V23.8998C61.9003 28.2998 68.2003 35.6998 68.2003 44.0998C68.2003 48.9998 66.1003 53.5998 62.4003 57.3998C61.7003 58.0998 60.7003 58.4998 59.7003 58.4998H52.5003V64.3998H61.5003C63.4003 64.3998 66.9003 60.6998 68.6003 58.4998C68.6003 58.4998 68.7003 58.3998 68.9003 58.2998C69.1003 58.1998 85.5003 54.4998 85.5003 54.4998C85.8003 54.3998 86.2003 54.6998 86.2003 54.9998L86.3003 58.4998Z"
                          fill="white"
                        />
                      </g>
                      <path
                        d="M168.774 67.7881H159.409L157.038 61.2554H140.504L138.076 67.7881H128.711L143.626 29.228H153.917L168.774 67.7881ZM154.784 54.029L148.771 37.4372L142.759 54.029H154.784ZM179.504 67.7881H172.162V29.228H179.504V67.7881ZM202.74 68.4818C199.444 68.4818 196.38 67.0944 194.126 64.2038V78.4254H186.784V39.8652H194.126V43.3917C196.265 40.6746 199.329 39.1715 202.74 39.1715C209.908 39.1715 215.111 44.4901 215.111 53.7978C215.111 63.1054 209.908 68.4818 202.74 68.4818ZM200.427 61.9491C204.647 61.9491 207.48 58.6539 207.48 53.7978C207.48 48.9994 204.647 45.7042 200.427 45.7042C198.057 45.7042 195.34 47.0917 194.126 48.8838V58.7695C195.34 60.5039 198.057 61.9491 200.427 61.9491ZM246.734 67.7881H239.392V50.7916C239.392 46.9182 237.369 45.7042 234.189 45.7042C231.357 45.7042 229.102 47.3229 227.83 48.9994V67.7881H220.488V29.228H227.83V43.5074C229.622 41.3683 233.091 39.1715 237.658 39.1715C243.786 39.1715 246.734 42.5246 246.734 47.9588V67.7881ZM278.13 67.7881H270.788V64.8975C268.881 67.1522 265.585 68.4818 261.943 68.4818C257.492 68.4818 252.231 65.4756 252.231 59.232C252.231 52.6993 257.492 50.2135 261.943 50.2135C265.643 50.2135 268.938 51.4275 270.788 53.6243V49.8666C270.788 47.0338 268.36 45.1839 264.66 45.1839C261.654 45.1839 258.879 46.2823 256.509 48.4791L253.734 43.5652C257.145 40.559 261.539 39.1715 265.932 39.1715C272.292 39.1715 278.13 41.7152 278.13 49.751V67.7881ZM264.892 63.5101C267.262 63.5101 269.574 62.7007 270.788 61.082V57.6133C269.574 55.9946 267.262 55.1852 264.892 55.1852C262.001 55.1852 259.631 56.6883 259.631 59.4055C259.631 62.007 262.001 63.5101 264.892 63.5101ZM295.472 68.4818C290.616 68.4818 285.933 66.8631 282.985 64.146L286.164 59.0008C288.188 60.9085 292.35 62.8163 295.819 62.8163C298.999 62.8163 300.502 61.5445 300.502 59.8101C300.502 55.1852 283.91 58.943 283.91 47.9588C283.91 43.2761 288.014 39.1715 295.356 39.1715C300.097 39.1715 303.855 40.7902 306.63 42.9871L303.681 48.0166C302.005 46.2245 298.825 44.7792 295.414 44.7792C292.755 44.7792 291.021 45.9932 291.021 47.5541C291.021 51.7166 307.555 48.2479 307.555 59.5211C307.555 64.6085 303.219 68.4818 295.472 68.4818ZM326.087 68.4818C317.588 68.4818 311.171 62.7585 311.171 53.7978C311.171 45.7042 317.126 39.1715 325.624 39.1715C333.949 39.1715 339.615 45.4151 339.615 54.5493V56.168H318.86C319.323 59.6945 322.156 62.6429 326.896 62.6429C329.266 62.6429 332.562 61.6023 334.354 59.8679L337.591 64.6085C334.816 67.1522 330.423 68.4818 326.087 68.4818ZM332.504 51.1963C332.33 48.5369 330.48 45.0104 325.624 45.0104C321.057 45.0104 319.092 48.4213 318.745 51.1963H332.504ZM369.025 67.7881H361.683V64.8975C359.775 67.1522 356.48 68.4818 352.838 68.4818C348.387 68.4818 343.126 65.4756 343.126 59.232C343.126 52.6993 348.387 50.2135 352.838 50.2135C356.538 50.2135 359.833 51.4275 361.683 53.6243V49.8666C361.683 47.0338 359.255 45.1839 355.555 45.1839C352.549 45.1839 349.774 46.2823 347.404 48.4791L344.629 43.5652C348.04 40.559 352.433 39.1715 356.827 39.1715C363.186 39.1715 369.025 41.7152 369.025 49.751V67.7881ZM355.786 63.5101C358.157 63.5101 360.469 62.7007 361.683 61.082V57.6133C360.469 55.9946 358.157 55.1852 355.786 55.1852C352.896 55.1852 350.526 56.6883 350.526 59.4055C350.526 62.007 352.896 63.5101 355.786 63.5101Z"
                        fill="black"
                      />
                    </svg>
                    {/* <img src={logo} alt="logo" className="img-fluid" /> */}
                  </div>
                </Link>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} sm={3} md={2} lg={2} xl={2}>
            <div className="Drops-header-section">
              <Stack spacing={4} direction="row">
                <LightTooltipImage
                
                  title={
                    <>
                      <div className="Collection-table-image-hover">
                        <Box className="drop-box"
                          sx={{
                            width: "180px",
                            maxWidth: 600,
                            bgcolor: "background.paper",
                            padding: 1,
                            borderRadius:'12px !important',
                          }}

                        >
                          <nav
                            className="drop-stat-menu common-style-menu"
                            aria-label="secondary mailbox folders"
                          >
                            <List>
                              <ListItem className="drop-list" disablePadding>
                                <ListItemButton>
                                  <ListItemText primary="Featured" />
                                </ListItemButton>
                              </ListItem>

                              <ListItem>
                                <ListItemButton disablePadding>
                                  <ListItemText primary="Learn More" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Box>
                      </div>
                    </>
                  }
                  placement="top-start"
                  arrow
                  >
                  <Typography variant="h6" component="h2">
                    Drops
                  </Typography>
                </LightTooltipImage>

                <LightTooltipImage
                  title={
                    <>
                      <div className="Collection-table-image-hover">
                        <Box className="drop-box"
                          sx={{
                            width: "180px",
                            maxWidth: 600,
                            bgcolor: "background.paper",
                            padding: 1,
                            borderRadius:'12px !important',
                          }}
                        >
                          <nav aria-label="secondary mailbox folders" className="drop-stat-menu common-style-menu">
                            <List>
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText primary="Trash" />
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton
                                  component="a"
                                  href="#simple-list"
                                >
                                  <ListItemText primary="Spam" />
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </nav>
                        </Box>
                      </div>
                    </>
                  }
                  placement="top-start"
                  arrow
                >
                  <Typography variant="h6" component="h2">
                    Stats
                  </Typography>
                </LightTooltipImage>

                <Typography variant="h6" component="h2">
                  <Link to="/createNft">Create</Link>
                </Typography>
              </Stack>
            </div>

            {/* <div className="subTitle">
                <Button
                  className="subTitle"
                  theme={theme}
                  id="basic-button1"
                  aria-controls={open ? "basic-menu1" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Typography variant="h6" component="h2">
                    Drops
                  </Typography>
                </Button>
                <div className="Drops">
                  <Menu
                    id="basic-menu1"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button1",
                    }}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Features</MenuItem>
                    <MenuItem onClick={handleClose}>Learn More</MenuItem>
                  </Menu>
                </div>

                <Popper
                  open={open}
                  anchorEl={anchorEl}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={openProfile}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                          >
                            <MenuItem onClick={handleClose}>Features</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>

                <Button
                  className="subTitle"
                  id="basic-button2"
                  aria-controls={open1 ? "basic-menu2" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                  onClick={handleClick1}
                >
                  <Typography variant="h6" component="h2">
                    Stats
                  </Typography>
                  <Typography variant="h6" component="h2">
                    Stats
                  </Typography>
                </Button>

                <Menu
                  className="dropdown2"
                  id="basic-menu2"
                  anchorEl1={anchorEl1}
                  open={open1}
                  onClose={handleClose1}
                  MenuListProps={{
                    "aria-labelledby": "basic-button2",
                  }}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <MenuItem onClick={handleClose1}>Rankings</MenuItem>
                  <MenuItem onClick={handleClose1}>Activity</MenuItem>
                </Menu>

                <Popper
                  open={open1}
                  anchorEl={anchorEl1}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose1}>
                          <MenuList
                            autoFocusItem={openProfile}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                          >
                            <MenuItem onClick={handleClose1}>Rankings</MenuItem>
                            <MenuItem onClick={handleClose1}>Activity</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div> */}
          </Grid>

          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Item className="secondHalf">
              <div className="search-nmwp mobile-response">
                <Search className="searchBar">
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    className="searchInput"
                    placeholder=" Search items, collections, and accounts"
                    inputProps={{ "aria-label": "search" }}
                  />
                  <div className="ETClJ">/</div>
                </Search>
              </div>
            </Item>
          </Grid>

          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Item className="thirdHalf">
              <div class="outDisplay desktop">
                <div class="outline" aria-expanded="false">
                  <div className="eth-and-weth">
                    <Button onClick={handleOpenBalance}>
                      <Typography variant="h6" component="h2">
                        <WalletOutlinedIcon /> 0ETH
                      </Typography>
                      <Typography variant="h6" component="h2">
                        |
                      </Typography>
                      <Typography variant="h6" component="h2">
                        0WETH
                      </Typography>
                    </Button>
                  </div>
                </div>

            <div>
                <Button className="btn login"onClick={handlewalletOpen}><WalletIcon />Login</Button>
                <Modal
                  open={openwallet}
                  onClose={handleClosewallet}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={stylewallet} className="wallet-box">
                  <div className="wallet-box-head-part">
                  <div className="menu" onClick={handleClosewallet} ><Link><img src={closeMenu} alt="closeMenu" /></Link></div>

                  <div className="wallet-head">
                    <Typography id="modal-modal-title" variant="h4" component="h4">
                    Connect your wallet
                    </Typography>
                  </div>
                  <p className="wallet-info">
                  If you don't have a wallet, you can select a provider and create one now. <span>Learn more</span>
                    </p>
                  </div>
                    <div>
                      <ul className={slice ? "description-data popular-connection-wallet" : "less popular-connection-wallet"}>
                        <li><Button className="wallet-btn"><div className="connect"><img src={MetaMask} alt="metamask" />MetaMask</div> <div className="span">popular</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={bitkeep} alt="metamask" />BitKeep</div> </Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={core} alt="metamask" />Core</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={bitski} alt="metamask" />Bitski</div> </Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={fortmatic} alt="metamask" />Fortmatic</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={glow} alt="metamask" />Glow</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={kaikas} alt="metamask" />Kaikas</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={ledgerconnect} alt="metamask" />Ledger</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={opera} alt="metamask" />Opera</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={phantom} alt="metamask" />phantom</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={solflare} alt="metamask" />Solflare</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={trust} alt="metamask" />Trust</div></Button></li>                    
                        <li className="view-btn" onClick={handleseemore}><Button className="wallet-btn view"><div className="connect"> {slice ? <> View all <KeyboardArrowDownIcon /></> : <> View less <KeyboardArrowDownIcon /></> }</div></Button></li>                    
                     
                      </ul>
                    </div>
                  </Box>
                </Modal>
            </div>

                <div class="profile-icon-right">
                  <Button
                    className="subTitle profile"
                    theme={theme}
                    id="basic-buttonProfile"
                    aria-controls={
                      openProfile ? "basic-menuProfile" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={openProfile ? "true" : undefined}
                    onClick={handleClickProfile}
                  >
                    <AccountCircleOutlinedIcon />
                  </Button>
                  <Menu
                    className="dropdown3"
                    id="basic-menuProfile"
                    anchorElProfile={anchorElProfile}
                    open={openProfile}
                    onClose={handleCloseProfile}
                    MenuListProps={{
                      "aria-labelledby": "basic-buttonProfile",
                    }}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/profile">
                        <PersonOutlinedIcon />
                        Profile
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/watchlist">
                        <RemoveRedEyeOutlinedIcon />
                        Watchlist
                      </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/deal">
                        <HandshakeIcon />
                        Deals
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/header-studio-Collections">
                        <PersonOutlinedIcon />
                        <div className="studio-flex">
                        Studio   
                        <span>New</span>
                        </div>
                      </Link>
                    </MenuItem>
                    {/* <MenuItem onClick={handleCloseProfile}>
                      <Link to="/profile">
                        <PersonOutlinedIcon />
                        Alphasea Pro   
                      </Link>
                    </MenuItem> */}
                    <Divider />
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/profilesettings">
                        <SettingsIcon />
                        Setting
                      </Link>
                    </MenuItem>                 
                    <MenuItem >
                    {/* onClick={handleCloseProfile} */}
                      <div>
                        <Button onClick={handleLanguageClickOpen} className="language-profile-menu">
                        <span className="language-logo">
                        <LanguageIcon />
                        Language 
                        </span>
                        <span className="overlap-text">{selectedValue.toLowerCase().slice(0, 2)} <NavigateNextIcon /></span>
                         
                        </Button>
                        <SimpleDialog
                          selectedValue={selectedValue}
                          open={openLanguage}
                          onClose={handleLanguageClose}
                        />
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseProfile}>
                      <Link>
                        <ModeNightOutlinedIcon />
                        Night Mode
                      </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseProfile}>
                      <Link>
                        <LoginIcon />
                        Logout
                      </Link>
                    </MenuItem> 
                    <Divider />     
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/learn-homepage">
                        <TextSnippetIcon />
                        Learn
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/helpcenter">
                        <HelpOutlineIcon />
                        Help Center
                      </Link>
                    </MenuItem>
                  </Menu>

                  {/* <Popper
open={openProfile}
anchorEl={anchorElProfile}
role={undefined}
placement="bottom-start"
transition
disablePortal
>
{({ TransitionProps, placement }) => (
<Grow
{...TransitionProps}
style={{
transformOrigin:
placement === 'bottom-start' ? 'left top' : 'left bottom',
}}
>
<Paper>
<ClickAwayListener onClickAway={handleCloseProfile}>
<MenuList
autoFocusItem={openProfile}
id="composition-menu"
aria-labelledby="composition-button"
>
<MenuItem onClick={handleCloseProfile}>
<PersonOutlinedIcon /> Profile
</MenuItem>
<MenuItem onClick={handleCloseProfile}>
<AppsOutlinedIcon /> My Collection
</MenuItem>
<MenuItem onClick={handleCloseProfile}>
<CreateOutlinedIcon /> Create
</MenuItem>
<MenuItem onClick={handleCloseProfile}>
<SettingsApplicationsOutlinedIcon /> Setting
</MenuItem>
<MenuItem onClick={handleCloseProfile}>
<ModeNightOutlinedIcon /> Night Mode
</MenuItem>
</MenuList>
</ClickAwayListener>
</Paper>
</Grow>
)}
</Popper> */}
                  </div>
                  
                  
                <div className="cart-ShoppingCartIcon" onClick={handleOpencart}>
                  <Badge badgeContent={1} color="primary">
                    <ShoppingCartIcon color="action" />
                  </Badge>
                </div>
              </div>

              <div class="outDisplay sm-device">
                <div class="outline" aria-expanded="false">
                  <div className="eth-and-weth">
                    <Button onClick={handleOpenBalance}>
                      <Typography variant="h6" component="h2">
                        <WalletOutlinedIcon />
                      </Typography>
                    </Button>
                  </div>
                </div>


                <div>
                <Button className="btn login"onClick={handlewalletOpen}><WalletIcon />Login</Button>
                <Modal
                  open={openwallet}
                  onClose={handleClosewallet}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={stylewallet} className="wallet-box">
                  <div className="wallet-box-head-part">
                  <div className="menu" onClick={handleClosewallet} ><Link><img src={closeMenu} alt="closeMenu" /></Link></div>

                  <div className="wallet-head">
                    <Typography id="modal-modal-title" variant="h4" component="h4">
                    Connect your wallet
                    </Typography>
                  </div>
                  <p className="wallet-info">
                  If you don't have a wallet, you can select a provider and create one now. <span>Learn more</span>
                    </p>
                  </div>
                    <div>
                      <ul className={slice ? "description-data popular-connection-wallet" : "less popular-connection-wallet"}>
                        <li><Button className="wallet-btn"><div className="connect"><img src={MetaMask} alt="metamask" />MetaMask</div> <div className="span">popular</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={bitkeep} alt="metamask" />BitKeep</div> </Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={core} alt="metamask" />Core</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={bitski} alt="metamask" />Bitski</div> </Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={fortmatic} alt="metamask" />Fortmatic</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={glow} alt="metamask" />Glow</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={kaikas} alt="metamask" />Kaikas</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={ledgerconnect} alt="metamask" />Ledger</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={opera} alt="metamask" />Opera</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={phantom} alt="metamask" />phantom</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={solflare} alt="metamask" />Solflare</div></Button></li>
                        <li><Button className="wallet-btn"><div className="connect"><img src={trust} alt="metamask" />Trust</div></Button></li>                    
                        <li className="view-btn" onClick={handleseemore}><Button className="wallet-btn view"><div className="connect"> {slice ? <> View all <KeyboardArrowDownIcon /></> : <> View less <KeyboardArrowDownIcon /></> }</div></Button></li>                    
                     
                      </ul>
                    </div>
                  </Box>
                </Modal>
            </div>

                <div class="profile-icon-right">
                  <Button
                    className="subTitle profile"
                    theme={theme}
                    id="basic-buttonProfile"
                    aria-controls={
                      openProfile ? "basic-menuProfile" : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={openProfile ? "true" : undefined}
                    onClick={handleClickProfile}
                  >
                    <AccountCircleOutlinedIcon />
                  </Button>
                  <Menu
                    className="dropdown3"
                    id="basic-menuProfile"
                    anchorElProfile={anchorElProfile}
                    open={openProfile}
                    onClose={handleCloseProfile}
                    MenuListProps={{
                      "aria-labelledby": "basic-buttonProfile",
                    }}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/profile">
                        <PersonOutlinedIcon />
                        Profile
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/watchlist">
                        <RemoveRedEyeOutlinedIcon />
                        Watchlist
                      </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/deal">
                        <HandshakeIcon />
                        Deals
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/header-studio-Collections">
                        <DesignServicesIcon />
                        <div className="studio-flex">
                        Studio   
                        <span>New</span>
                        </div>
                      </Link>
                    </MenuItem>
                    {/* <MenuItem onClick={handleCloseProfile}>
                      <Link to="/profile">
                        <PersonOutlinedIcon />
                        Alphasea Pro   
                      </Link>
                    </MenuItem> */}
                    <Divider />
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/profilesettings">
                        <SettingsIcon />
                        Setting
                      </Link>
                    </MenuItem>                 
                    <MenuItem >
                    {/* onClick={handleCloseProfile} */}
                      <div>
                        <Button onClick={handleLanguageClickOpen} className="language-profile-menu">
                        <span className="language-logo">
                        <LanguageIcon />
                        Language 
                        </span>
                        <span className="overlap-text">{selectedValue.toLowerCase().slice(0, 2)} <NavigateNextIcon /></span>
                         
                        </Button>
                        <SimpleDialog
                          selectedValue={selectedValue}
                          open={openLanguage}
                          onClose={handleLanguageClose}
                        />
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseProfile}>
                      <Link>
                        <ModeNightOutlinedIcon />
                        Night Mode
                      </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseProfile}>
                      <Link>
                        <LoginIcon />
                        Logout
                      </Link>
                    </MenuItem> 
                    <Divider />     
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/learn-homepage">
                        <TextSnippetIcon />
                        Learn
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseProfile}>
                      <Link to="/helpcenter">
                        <HelpOutlineIcon />
                        Help Center
                      </Link>
                    </MenuItem>
                  </Menu>

                  {/* <Popper
open={openProfile}
anchorEl={anchorElProfile}
role={undefined}
placement="bottom-start"
transition
disablePortal
>
{({ TransitionProps, placement }) => (
<Grow
{...TransitionProps}
style={{
transformOrigin:
placement === 'bottom-start' ? 'left top' : 'left bottom',
}}
>
<Paper>
<ClickAwayListener onClickAway={handleCloseProfile}>
<MenuList
autoFocusItem={openProfile}
id="composition-menu"
aria-labelledby="composition-button"
>
<MenuItem onClick={handleCloseProfile}>
<PersonOutlinedIcon /> Profile
</MenuItem>
<MenuItem onClick={handleCloseProfile}>
<AppsOutlinedIcon /> My Collection
</MenuItem>
<MenuItem onClick={handleCloseProfile}>
<CreateOutlinedIcon /> Create
</MenuItem>
<MenuItem onClick={handleCloseProfile}>
<SettingsApplicationsOutlinedIcon /> Setting
</MenuItem>
<MenuItem onClick={handleCloseProfile}>
<ModeNightOutlinedIcon /> Night Mode
</MenuItem>
</MenuList>
</ClickAwayListener>
</Paper>
</Grow>
)}
</Popper> */}
                </div>
                <div className="cart-ShoppingCartIcon" onClick={handleOpencart}>
                  <Badge badgeContent={1} color="primary">
                    <ShoppingCartIcon color="action" />
                  </Badge>
                </div>
              </div>
              
            </Item>
          </Grid>

        </Grid>
      </Box>
    </div>
      <div className="responsiveHeader">
        <Box sx={{ flexGrow: 1, p: 2 }}>
          {searchMobile && (
            <div className="search-icon-bar">
              <div className="search-nmwp">
                <Search className="searchBar icon-arrow">
                  <div
                    className="searchBar-icon-arrow"
                    onClick={handleCloseSearchMobile}
                  >
                    <ArrowBackIosIcon />
                  </div>
                  <StyledInputBase
                    className="searchInput"
                    placeholder=" Search"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </div>
            </div>
          )}
          {headerMobile && (
            <Grid container spacing={0}>
              <AppBar position="static" className="responseSearch">
                <Grid item xs={6} sm={6} md={3} lg={6} xl={6}>
                <Link to="/" href="/">
                  <div className="logo">
                    <svg height="40" viewBox="0 0 373 100" fill="none">
                      <g clip-path="url(#clip0_7200_1299)">
                        <path
                          d="M50.4003 0.500347C22.8003 0.300347 0.300347 22.8003 0.500347 50.4003C0.700347 77.3003 22.7003 99.2003 49.6003 99.5003C77.3003 99.7003 99.8003 77.2003 99.5003 49.6003C99.3003 22.7003 77.3003 0.700347 50.4003 0.500347Z"
                          fill="#2081E2"
                        />
                        <path
                          d="M35.6002 25.8994C38.7002 29.7994 40.5002 34.6994 40.5002 40.0994C40.5002 44.6994 39.1002 48.9994 36.8002 52.5994H20.2002L35.6002 25.8994Z"
                          fill="white"
                        />
                        <path
                          d="M86.3003 58.4998C86.3003 58.6998 86.2003 58.8998 86.0003 58.9998C84.9003 59.4998 81.2003 61.1998 79.6003 63.3998C75.6003 68.8998 72.6003 77.6998 65.8003 77.6998H37.3003C27.2003 77.6998 18.8003 69.6998 18.9003 59.0998C18.9003 58.7998 19.1003 58.5998 19.4003 58.5998H32.8003C33.3003 58.5998 33.6003 58.9998 33.6003 59.3998V61.9998C33.6003 63.3998 34.7003 64.4998 36.1003 64.4998H46.3003V58.5998H39.3003C43.3003 53.4998 45.7003 47.0998 45.7003 40.0998C45.7003 32.2998 42.7003 25.1998 37.8003 19.8998C40.8003 20.1998 43.6003 20.7998 46.2003 21.5998V19.8998C46.2003 18.1998 47.6003 16.7998 49.3003 16.7998C51.0003 16.7998 52.4003 18.1998 52.4003 19.8998V23.8998C61.9003 28.2998 68.2003 35.6998 68.2003 44.0998C68.2003 48.9998 66.1003 53.5998 62.4003 57.3998C61.7003 58.0998 60.7003 58.4998 59.7003 58.4998H52.5003V64.3998H61.5003C63.4003 64.3998 66.9003 60.6998 68.6003 58.4998C68.6003 58.4998 68.7003 58.3998 68.9003 58.2998C69.1003 58.1998 85.5003 54.4998 85.5003 54.4998C85.8003 54.3998 86.2003 54.6998 86.2003 54.9998L86.3003 58.4998Z"
                          fill="white"
                        />
                      </g>
                      <path
                        d="M168.774 67.7881H159.409L157.038 61.2554H140.504L138.076 67.7881H128.711L143.626 29.228H153.917L168.774 67.7881ZM154.784 54.029L148.771 37.4372L142.759 54.029H154.784ZM179.504 67.7881H172.162V29.228H179.504V67.7881ZM202.74 68.4818C199.444 68.4818 196.38 67.0944 194.126 64.2038V78.4254H186.784V39.8652H194.126V43.3917C196.265 40.6746 199.329 39.1715 202.74 39.1715C209.908 39.1715 215.111 44.4901 215.111 53.7978C215.111 63.1054 209.908 68.4818 202.74 68.4818ZM200.427 61.9491C204.647 61.9491 207.48 58.6539 207.48 53.7978C207.48 48.9994 204.647 45.7042 200.427 45.7042C198.057 45.7042 195.34 47.0917 194.126 48.8838V58.7695C195.34 60.5039 198.057 61.9491 200.427 61.9491ZM246.734 67.7881H239.392V50.7916C239.392 46.9182 237.369 45.7042 234.189 45.7042C231.357 45.7042 229.102 47.3229 227.83 48.9994V67.7881H220.488V29.228H227.83V43.5074C229.622 41.3683 233.091 39.1715 237.658 39.1715C243.786 39.1715 246.734 42.5246 246.734 47.9588V67.7881ZM278.13 67.7881H270.788V64.8975C268.881 67.1522 265.585 68.4818 261.943 68.4818C257.492 68.4818 252.231 65.4756 252.231 59.232C252.231 52.6993 257.492 50.2135 261.943 50.2135C265.643 50.2135 268.938 51.4275 270.788 53.6243V49.8666C270.788 47.0338 268.36 45.1839 264.66 45.1839C261.654 45.1839 258.879 46.2823 256.509 48.4791L253.734 43.5652C257.145 40.559 261.539 39.1715 265.932 39.1715C272.292 39.1715 278.13 41.7152 278.13 49.751V67.7881ZM264.892 63.5101C267.262 63.5101 269.574 62.7007 270.788 61.082V57.6133C269.574 55.9946 267.262 55.1852 264.892 55.1852C262.001 55.1852 259.631 56.6883 259.631 59.4055C259.631 62.007 262.001 63.5101 264.892 63.5101ZM295.472 68.4818C290.616 68.4818 285.933 66.8631 282.985 64.146L286.164 59.0008C288.188 60.9085 292.35 62.8163 295.819 62.8163C298.999 62.8163 300.502 61.5445 300.502 59.8101C300.502 55.1852 283.91 58.943 283.91 47.9588C283.91 43.2761 288.014 39.1715 295.356 39.1715C300.097 39.1715 303.855 40.7902 306.63 42.9871L303.681 48.0166C302.005 46.2245 298.825 44.7792 295.414 44.7792C292.755 44.7792 291.021 45.9932 291.021 47.5541C291.021 51.7166 307.555 48.2479 307.555 59.5211C307.555 64.6085 303.219 68.4818 295.472 68.4818ZM326.087 68.4818C317.588 68.4818 311.171 62.7585 311.171 53.7978C311.171 45.7042 317.126 39.1715 325.624 39.1715C333.949 39.1715 339.615 45.4151 339.615 54.5493V56.168H318.86C319.323 59.6945 322.156 62.6429 326.896 62.6429C329.266 62.6429 332.562 61.6023 334.354 59.8679L337.591 64.6085C334.816 67.1522 330.423 68.4818 326.087 68.4818ZM332.504 51.1963C332.33 48.5369 330.48 45.0104 325.624 45.0104C321.057 45.0104 319.092 48.4213 318.745 51.1963H332.504ZM369.025 67.7881H361.683V64.8975C359.775 67.1522 356.48 68.4818 352.838 68.4818C348.387 68.4818 343.126 65.4756 343.126 59.232C343.126 52.6993 348.387 50.2135 352.838 50.2135C356.538 50.2135 359.833 51.4275 361.683 53.6243V49.8666C361.683 47.0338 359.255 45.1839 355.555 45.1839C352.549 45.1839 349.774 46.2823 347.404 48.4791L344.629 43.5652C348.04 40.559 352.433 39.1715 356.827 39.1715C363.186 39.1715 369.025 41.7152 369.025 49.751V67.7881ZM355.786 63.5101C358.157 63.5101 360.469 62.7007 361.683 61.082V57.6133C360.469 55.9946 358.157 55.1852 355.786 55.1852C352.896 55.1852 350.526 56.6883 350.526 59.4055C350.526 62.007 352.896 63.5101 355.786 63.5101Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </Link>
                </Grid>

                <Grid item xs={6} sm={6} md={5} lg={6} xl={6}>
                  {/* <Toolbar className="searchBox">
                  
                </Toolbar> */}
                  <div className="searchBox-icon">
                    <SearchIcon onClick={handleSearchMobile} />
                    <WalletOutlinedIcon />
                    <ShoppingCartIcon onClick={handleOpencart} />
                    <Button
                      className="subTitle profile"
                      // theme={theme}
                      // id="basic-buttonProfile"
                      // aria-controls={
                      //   openProfileMobile ? "basic-menuProfile" : undefined
                      // }
                      // aria-haspopup="true"
                      // aria-expanded={openProfileMobile ? "true" : undefined}
                      // onClick={handleClickProfileMobile}
                      onClick={handleOpenMobileResponsive}
                    >
                      <MenuIcon />
                    </Button>

                    <Popper
                      open={openProfileMobile}
                      anchorEl={anchorElProfileMobile}
                      role={undefined}
                      placement="bottom-start"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom-start"
                                ? "left top"
                                : "left bottom",
                          }}
                        >
                          <Paper>
                            <ClickAwayListener
                              onClickAway={handleCloseProfileMobile}
                            >
                              <MenuList
                                autoFocusItem={openProfileMobile}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                              >
                                <MenuItem onClick={handleCloseProfileMobile}>
                                  <Link to="/profile">
                                    <PersonOutlinedIcon />
                                    Profile
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseProfileMobile}>
                                  <AppsOutlinedIcon />
                                  My Collection
                                </MenuItem>
                                <MenuItem onClick={handleCloseProfileMobile}>
                                  <Link to="/create-NFT">
                                    <CreateOutlinedIcon />
                                    Create
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseProfileMobile}>
                                  <Link to="/profilesettings">
                                    <SettingsApplicationsOutlinedIcon />
                                    Setting
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseProfileMobile}>
                                  <ModeNightOutlinedIcon /> Night Mode
                                </MenuItem>
                                <MenuItem onClick={handleCloseProfile}>
                                  <Link to="/login">
                                    <LoginIcon />
                                    Login
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseProfile}>
                                  <Link to="/register">
                                    <HowToRegIcon />
                                    Register
                                  </Link>
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                </Grid>
              </AppBar>
            </Grid>
          )}
        </Box>
      </div>
      {/* <div className="make-collection-container"> */}
        {/* <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={opencart}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={opencart}>
            <Box sx={style} className="Choose-blockchain-box-main">
              <div className="Choose-blockchain-title Your-cart">
                {" "}
                <Typography
                  id="transition-modal-title"
                  variant="h4"
                  component="h4"
                >
                  Your cart <InfoIcon />
                </Typography>
                <CloseIcon onClick={handleClosecart} />
              </div>
              <div className="Choose-Your-cart-box">
                <Typography variant="p" component="p">
                  Add items to get started.
                </Typography>
              </div>
              <div className="Make-collection-footer make-offer">
                <Box container>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button variant="contained">Complete purchase</Button>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Box>
          </Fade>
        </Modal> */}
      {/* </div> */}
      <div className="Your-cart make-collection-container">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={opencart}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={opencart}>
            <Box sx={style} className="Choose-blockchain-box-main">
              <div className="Choose-blockchain-title Your-cart">
                {" "}
                <Typography
                  id="transition-modal-title"
                  variant="h4"
                  component="h4"
                >
                  Your cart <InfoIcon />
                </Typography>
                <CloseIcon onClick={handleClosecart} />
              </div>
              <div className="Choose-Your-cart-box-tow">
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="Your-cart-item">
                      <Typography variant="p" component="p">
                        1 item
                      </Typography>
                      <Button variant="text">Clear all</Button>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="Your-cart-item-image-hover">
                      <div className="Your-cart-item-image">
                        <div className="Your-cart-item-images">
                          <img src={collection1} alt="Ethereum" />

                          <div className="Your-cart-item-image-text-one">
                            <Typography variant="h5" component="h5">
                              9731
                            </Typography>
                            <Typography variant="h6" component="h6">
                              Mutant Ape Yacht Club <VerifiedIcon />
                            </Typography>
                            <Typography variant="p" component="p">
                              Creator earnings: <span>2.5%</span>
                            </Typography>
                          </div>
                        </div>
                        <div className="Your-cart-item-image-text-two">
                          <div className="delete-text">
                            <Typography variant="p" component="p">
                              5.025 ETH
                            </Typography>
                          </div>
                          <div className="delete-icon">
                            <DeleteIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="Your-cart-item-three">
                      <Typography variant="h5" component="h5">
                        Total price
                      </Typography>
                      <div className="">
                        <Typography variant="h6" component="h6">
                          5.025 ETH
                        </Typography>
                        <Typography variant="p" component="p">
                          $7,823.62
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="Your-cart-item-four">
                      <Typography variant="h5" component="h5">
                        Payment method
                      </Typography>
                      <Typography variant="h6" component="h6">
                        Crypto
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="Your-cart-item-five">
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={value}
                          onChange={handleChangeCrypto}
                        >
                          <FormControlLabel
                            value="Crypto"
                            control={<Radio />}
                            label={
                              <>
                                <div className="Crypto-text">
                                  <img src={Ether} alt="Ethereum" />
                                  <Typography variant="p" component="p">
                                    Crypto
                                  </Typography>
                                </div>
                              </>
                            }
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label={
                              <>
                                <div className="Crypto-text">
                                  <CreditCardIcon />
                                  <Typography variant="p" component="p">
                                    Credit or debit card
                                  </Typography>
                                </div>
                              </>
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="Your-cart-item-six">
                      <div
                        className="Your-cart-item-six-box"
                        onClick={handleOpenAdvanceSettings}
                      >
                        <Typography variant="h6" component="h6">
                          Send to a different wallet
                        </Typography>
                        <div
                          className={
                            openAdvanceSettings
                              ? "transitn-effect rotate-icon-transition"
                              : "transitn-effect"
                          }
                        >
                          <KeyboardArrowDownIcon />
                        </div>
                      </div>
                      {openAdvanceSettings && (
                        <>
                          <div className="collection-btn Your-cart-item-six-btn">
                            <TextField
                              id="outlined-basic"
                              placeholder="e.g. 0x1ed3... or destination.eth, destination.lens"
                              variant="outlined"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="Make-collection-footer make-offer">
                <Box container>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button variant="contained">Complete purchase</Button>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
      {openBalance && (
        <>
          <div className="Choose-Offer-balance">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="Choose-Offer-balance-box">
                  <div className="Choose-Offer-balance-image">
                    <Avatar alt="Remy Sharp" src={Metamask} />
                  </div>
                  <div className="Choose-Offer-balance-text">
                    <LightTooltipCopy title="copy" placement="top-start" arrow>
                      <Typography
                        variant="p"
                        component="p"
                        onclick={() => {
                          copyTextToClipboard("");
                        }}
                      >
                        Ox81a1...c2a3
                      </Typography>
                    </LightTooltipCopy>
                  </div>
                  <div className="Metamask-icon">
                    <IconButton
                      onClick={handleClickMetamask}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={openMetamask ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openMetamask ? "true" : undefined}
                    >
                      <KeyboardArrowDownIcon />
                    </IconButton>

                    <Menu
                      anchorEl={anchorElMetamask}
                      id="account-menu"
                      open={openMetamask}
                      onClose={handleCloseMetamask}
                      onClick={handleCloseMetamask}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 2,
                          },
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            left: 10,
                            width: 0,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem onClick={handleCloseMetamask}>
                        <Avatar alt="Remy Sharp" src={Metamask} /> MetaMask
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={handleCloseMetamask}>
                        <ListItemIcon>
                          <RefreshRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        Refresh funds
                      </MenuItem>
                      <MenuItem onClick={handleCloseMetamask}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Stack spacing={0}>
                  <div className="Choose-Offer-balance-box-button">
                    <Autocomplete
                      id="size-small-outlined"
                      size="small"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      defaultValue={top100Films[13]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Ethereum .$0000 UST"
                        />
                      )}
                    />
                    <div className="Choose-Offer-balance-box-button-image">
                      <img src={Ether} alt="collection1" />
                    </div>
                  </div>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="Choose-Offer-balance-box-three">
                  <div className="Choose-Offer-balance-box-three-text">
                    <Typography variant="h5" component="h5">
                      0 ETH
                    </Typography>
                    <Typography variant="h6" component="h6">
                      ETH balance
                    </Typography>
                  </div>
                  <div></div>
                  <div className="Choose-Offer-balance-box-three-icon">
                    <ArrowForwardIcon />
                  </div>
                  <div className="Choose-Offer-balance-box-three-icon"></div>
                  <div className="Choose-Offer-balance-box-three-text">
                    <Typography variant="h5" component="h5">
                      0 WETH
                    </Typography>
                    <Typography variant="h6" component="h6">
                      Offer balance
                    </Typography>
                  </div>
                </div>
              </Grid>


              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="Choose-Offer-balance-box-four">
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                      }}
                    >
                      <Tabs
                        value={valueTab}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                      >
                        <Tab label="Wrap" {...a11yProps(0)} />
                        <Tab label="UnWrap" {...a11yProps(1)} />
                      </Tabs>
                    </Box>
                    <CustomTabPanel value={valueTab} index={0}>
                      <div className="Choose-Offer-balance-box-four-contend">
                        <div className="Choose-Offer-balance-box-four-contend-text">
                          <TextField
                            id="standard-basic"
                            variant="standard"
                            placeholder="0"
                          />
                        </div>

                        <Typography variant="h6" component="h6">
                          ETH
                        </Typography>
                      </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={valueTab} index={1}>
                      <div className="Choose-Offer-balance-box-four-contend">
                        <div className="Choose-Offer-balance-box-four-contend-text">
                          <TextField
                            id="standard-basic"
                            variant="standard"
                            placeholder="0"
                          />
                        </div>

                        <Typography variant="h6" component="h6">
                          WETH
                        </Typography>
                      </div>
                    </CustomTabPanel>
                  </Box>
                  <div className="Choose-Offer-balance-box-four-max">
                    <Typography variant="p" component="p">
                      Max
                    </Typography>
                  </div>
                  <div className="Make-collection-footer make-offer Choose-Offer-balance-box-four-tab ">
                    <Box container>
                      <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <Button variant="contained">Complete purchase</Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </>
      )}
      {openMobileResponsive && (
        <div className="mobile-responsive-header">
          <Box container>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className="mobile-responsive-header-menu">
                  <Box
                    sx={{
                      width: "100%",
                      // maxWidth: 320,
                      bgcolor: "background.paper",
                    }}
                  >
                    <nav aria-label="main mailbox folders">
                      <List>
                        <ListItem
                          disablePadding
                          onClick={handleOpenMobileResponsiveMenuDrops}
                        >
                          <ListItemButton>
                            <ListItemIcon>
                              <CalendarMonthIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drops" />
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              className="ArrowForward"
                            >
                              <ArrowForwardIosIcon />
                            </IconButton>
                          </ListItemButton>
                        </ListItem>
                        <ListItem
                          disablePadding
                          onClick={handleOpenMobileResponsiveMenuStats}
                        >
                          <ListItemButton>
                            <ListItemIcon>
                              <LeaderboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Stats" />
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              className="ArrowForward"
                            >
                              <ArrowForwardIosIcon />
                            </IconButton>
                          </ListItemButton>
                        </ListItem>
                        <ListItem
                          disablePadding
                          onClick={handleOpenMobileResponsiveMenuResources}
                        >
                          <ListItemButton>
                            <ListItemIcon>
                              <LibraryBooksIcon />
                            </ListItemIcon>
                            <ListItemText primary="Resources" />
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              className="ArrowForward"
                            >
                              <ArrowForwardIosIcon />
                            </IconButton>
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <ModeEditOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Create" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem
                          disablePadding
                          onClick={handleOpenMobileResponsiveMenuAccount}
                        >
                          <ListItemButton>
                            <ListItemIcon>
                              <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Account" />
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              className="ArrowForward"
                            >
                              <ArrowForwardIosIcon />
                            </IconButton>
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <LanguageIcon />
                            </ListItemIcon>
                            <ListItemText primary="language" />
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              className="ArrowForward"
                            >
                              <ArrowForwardIosIcon />
                            </IconButton>
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <ModeNightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Night mode" />
                            <Switch
                              edge="end"
                              // onChange={handleToggle("wifi")}
                              // checked={checked.indexOf("wifi") !== -1}
                              inputProps={{
                                "aria-labelledby": "switch-list-label-wifi",
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                          <ListItemButton>
                            <div className="media">
                              <ListItemIcon>
                                <TwitterIcon />
                                <InstagramIcon />
                                <LanguageIcon />
                                <LanguageIcon />
                                <YouTubeIcon />
                                <MusicNoteIcon />
                              </ListItemIcon>
                            </div>
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}

      {openMobileResponsiveMenuDrops && (
        <div className="mobile-responsive-header-menu-Drops">
          <Box
            sx={{ width: "100%", height: "100%", bgcolor: "background.paper" }}
          >
            <div className="menu-Drops-main">
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <ArrowBackIosIcon
                          onClick={handleCloseMobileResponsiveMenuDrops}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Drops" />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Featured" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Learn more" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>

              <nav aria-label="secondary mailbox folders">
                <div className="media-footer">
                  <List>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <div className="media">
                          <ListItemIcon>
                            <TwitterIcon />
                            <InstagramIcon />
                            <LanguageIcon />
                            <LanguageIcon />
                            <YouTubeIcon />
                            <MusicNoteIcon />
                          </ListItemIcon>
                        </div>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </div>
              </nav>
            </div>
          </Box>
        </div>
      )}

      {openMobileResponsiveMenuStats && (
        <div className="mobile-responsive-header-menu-Drops">
          <Box
            sx={{ width: "100%", height: "100%", bgcolor: "background.paper" }}
          >
            <div className="menu-Drops-main">
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <ArrowBackIosIcon
                          onClick={handleCloseMobileResponsiveMenuStats}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Stats" />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Rankings" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Activity" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>

              <nav aria-label="secondary mailbox folders">
                <div className="media-footer">
                  <List>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <div className="media">
                          <ListItemIcon>
                            <TwitterIcon />
                            <InstagramIcon />
                            <LanguageIcon />
                            <LanguageIcon />
                            <YouTubeIcon />
                            <MusicNoteIcon />
                          </ListItemIcon>
                        </div>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </div>
              </nav>
            </div>
          </Box>
        </div>
      )}

      {openMobileResponsiveMenuResources && (
        <div className="mobile-responsive-header-menu-Drops">
          <Box
            sx={{ width: "100%", height: "100%", bgcolor: "background.paper" }}
          >
            <div className="menu-Drops-main">
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <ArrowBackIosIcon
                          onClick={handleCloseMobileResponsiveMenuResources}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Resources" />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem disablePadding>
                  <Link to="/blog">
                    <ListItemButton>
                      <ListItemText primary="Blog" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                  <Link to="/learn-homepage">
                    <ListItemButton >
                      <ListItemText primary="Learn" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                  <Link to="/helpcenter">
                    <ListItemButton>
                      <ListItemText primary="Help center" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Community standards" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Taxes" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Partners" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Developer platform" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Platform status" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>

              <nav aria-label="secondary mailbox folders">
                <div className="media-footer">
                  <List>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <div className="media">
                          <ListItemIcon>
                            <TwitterIcon />
                            <InstagramIcon />
                            <LanguageIcon />
                            <LanguageIcon />
                            <YouTubeIcon />
                            <MusicNoteIcon />
                          </ListItemIcon>
                        </div>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </div>
              </nav>
            </div>
          </Box>
        </div>
      )}

      {openMobileResponsiveMenuAccount && (
        <div className="mobile-responsive-header-menu-Drops">
          <Box
            sx={{ width: "100%", height: "100%", bgcolor: "background.paper" }}
          >
            <div className="menu-Drops-main">
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <ArrowBackIosIcon
                          onClick={handleCloseMobileResponsiveMenuAccount}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Account" />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem disablePadding>
                  <Link to="/profile">
                    <ListItemButton>
                      <ListItemText primary="Profile" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                  <Link to="/deal">
                    <ListItemButton>
                      <ListItemText primary="Deals" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                  <Link to="/watchlist">
                    <ListItemButton>
                      <ListItemText primary="Watchlist" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                  {/* <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Favorites" />
                    </ListItemButton>
                  </ListItem> */}
                  <ListItem disablePadding>
                  <Link to="/header-studio-Collections">
                    <ListItemButton>
                      <ListItemText primary="Studio" />
                    </ListItemButton>
                  </Link>
                  </ListItem>
                  <ListItem
                    disablePadding
                    onClick={handleOpenMobileResponsiveMenuAccountSettings}
                  >
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Account settings" />
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        className="ArrowForward"
                      >
                        <ArrowForwardIosIcon />
                      </IconButton>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Log out" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>

              <nav aria-label="secondary mailbox folders">
                <div className="media-footer">
                  <List>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <div className="media">
                          <ListItemIcon>
                            <TwitterIcon />
                            <InstagramIcon />
                            <LanguageIcon />
                            <LanguageIcon />
                            <YouTubeIcon />
                            <MusicNoteIcon />
                          </ListItemIcon>
                        </div>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </div>
              </nav>
            </div>
          </Box>
        </div>
      )}

      {openMobileResponsiveMenuAccountSettings && (
        <div className="mobile-responsive-header-menu-Drops">
          <Box
            sx={{ width: "100%", height: "100%", bgcolor: "background.paper" }}
          >
            <div className="menu-Drops-main Account-Settings">
              <nav aria-label="main mailbox folders">
                <div className="Account-Settings-main-icon">
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon className="ArrowBackIosIcon-first">
                          <ArrowBackIosIcon
                            onClick={
                              handleCloseMobileResponsiveMenuAccountSettings
                            }
                          />
                        </ListItemIcon>
                        <ListItemText primary="Account Settings" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <Divider />
                </div>
                <List>
                  <ListItem disablePadding>
                  <Link to="/profilesettings">
                    <ListItemButton>
                      <ListItemIcon>
                        <AccountCircleIcon />
                      </ListItemIcon>
                      <ListItemText primary="Profile" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                  <Link to="/profilesettings">
                    <ListItemButton>
                      <ListItemIcon>
                        <NotificationsOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Notifications" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                  <Link to="/profilesettings">
                    <ListItemButton>
                      <ListItemIcon>
                        <LocalOfferOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Offers" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                  <Link to="/profilesettings">
                    <ListItemButton>
                      <ListItemIcon>
                        <SecurityOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Account support" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                  <Link to="/profilesettings">
                    <ListItemButton>
                      <ListItemIcon>
                        <AttachMoneyOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Earnings" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                  <Link to="/profilesettings">
                    <ListItemButton>
                      <ListItemIcon>
                        <CodeOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Developer" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              </nav>

              <nav aria-label="secondary mailbox folders">
                <div className="media-footer">
                  <List>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <div className="media">
                          <ListItemIcon>
                            <TwitterIcon />
                            <InstagramIcon />
                            <LanguageIcon />
                            <LanguageIcon />
                            <YouTubeIcon />
                            <MusicNoteIcon />
                          </ListItemIcon>
                        </div>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </div>
              </nav>
            </div>
          </Box>
        </div>
      )}


    </ThemeProvider>
  );

};

export default Header;







