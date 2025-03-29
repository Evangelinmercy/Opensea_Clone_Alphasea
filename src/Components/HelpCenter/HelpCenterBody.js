import React from 'react'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import { tooltipClasses } from '@mui/material/Tooltip';
import {Link} from 'react-router-dom'
import Getstarthelp from './HelpCenterImg/Getstarthelp.png'
import Sellhelp from './HelpCenterImg/Sellhelp.png'
import UserSafetyhelp from './HelpCenterImg/UserSafetyhelp.png'
import Faqhelp from './HelpCenterImg/Faqhelp.png'
import Drophelp from './HelpCenterImg/Drophelp.png'
import Contenthelp from './HelpCenterImg/Contenthelp.png'
import Createhelp from './HelpCenterImg/Createhelp.png'
import Buyhelp from './HelpCenterImg/Buyhelp.png'
import Devloperhelp from './HelpCenterImg/Devloperhelp.png'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '111.111px',
    backgroundColor: '#fff',
    boxShadow: '3.33333px 3.33333px 7.77778px 0px rgba(156, 156, 156, 0.48) inset, -3.33333px -3.33333px 7.77778px 0px #FFF inset',
    '&:hover': {
      backgroundColor: '#fff',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 5),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '100%',
          '&:focus': {
            width: '100%',
          },
        },
      },
    }));


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '0px',
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const useStyles = makeStyles({
    helpcommoninner:{
        background: 'transparent !important',
        border: 'none !important',
        padding: '20px 30px !important',
        boxShadow: 'none !important',
        '@media (max-width: 991.98px)' : {
            padding: '20px 0 !important',
          }
    },
    helpcenterbodycontain: {
        padding: '20px 40px',
        '@media (max-width: 991.98px)' : {
            padding: '10px 20px !important',
          }
    }
  });

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
      },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[6],
      borderRadius: 5,
      fontSize: 12,
      padding:8,
    },
  }));



const HelpCenterBody = () => {

    const classes = useStyles();


  return (
    <div className='product-detail help-center-body'>

    <Box sx={{ flexGrow: 1 }} className="search-block-help-center">
    <Grid container spacing={0}>
    
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

    </Grid>
    </Box>

    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} className={classes.helpcenterbodycontain}>

    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock' to='/get-started'>
        <div className='help-center-img'><img src={Getstarthelp} alt="Getstarthelp"/></div>
        <div className='help-center-caption'><h3>Get Started</h3></div>
        </Link>
    </Item>
    </Grid>

    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock' to='/get-started'>
        <div className='help-center-img'><img src={Buyhelp} alt="Buyhelp"/></div>
        <div className='help-center-caption'><h3>Buying</h3></div>
        </Link>
    </Item>
    </Grid>

    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock' to='/get-started'>
        <div className='help-center-img'><img src={Sellhelp} alt="Sellhelp"/></div>
        <div className='help-center-caption'><h3>Selling</h3></div>
        </Link>
    </Item>
    </Grid>

    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock' to='/get-started'>
        <div className='help-center-img'><img src={Drophelp} alt="Drophelp"/></div>
        <div className='help-center-caption'><h3>Drops</h3></div>
        </Link>
    </Item>
    </Grid>

    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock' to='/get-started'>
        <div className='help-center-img'><img src={Createhelp} alt="Createhelp"/></div>
        <div className='help-center-caption'><h3>Creating</h3></div>
        </Link>
    </Item>
    </Grid>

    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock' to='/get-started'>
        <div className='help-center-img'><img src={Contenthelp} alt="Contenthelp"/></div>
        <div className='help-center-caption'><h3>User Content</h3></div>
        </Link>
    </Item>
    </Grid>

    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock' to='/get-started'>
        <div className='help-center-img'><img src={Faqhelp} alt="Faqhelp"/></div>
        <div className='help-center-caption'><h3>Faq</h3></div>
        </Link>
    </Item>
    </Grid>

    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock' to='/get-started'>
        <div className='help-center-img'><img src={UserSafetyhelp} alt="UserSafetyhelp"/></div>
        <div className='help-center-caption'><h3>User Safety</h3></div>
        </Link>
    </Item>
    </Grid>


    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock' to='/get-started'>
        <div className='help-center-img'><img src={Devloperhelp} alt="Devloperhelp"/></div>
        <div className='help-center-caption'><h3>Devlopers</h3></div>
        </Link>
    </Item>
    </Grid>

    </Grid>
    </Box>

    <Box sx={{ flexGrow: 1 }} className="help-center-body-contain-box">
    
    <h2>Promoted Articles</h2>

    <Grid id="Promoted-Articles-part" container spacing={0} className={classes.helpcenterbodycontain}>

    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock'>
        <div className='help-center-caption'><h3>How do I create an AlphaSea account?</h3></div>
        </Link>
    </Item>
    </Grid>

    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock'>
        <div className='help-center-caption'><h3>What crypto wallets can I use with AlphaSea?</h3></div>
        </Link>
    </Item>
    </Grid>

    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock'>
        <div className='help-center-caption'><h3>How do I participate in a Primary Drop?</h3></div>
        </Link>
    </Item>
    </Grid>

    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock'>
        <div className='help-center-caption'><h3>How do I sell an NFT?</h3></div>
        </Link>
    </Item>
    </Grid>

    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
    <Item className={classes.helpcommoninner}>
        <Link className='commonhelpblock'>
        <div className='help-center-caption'><h3>How do I create an NFT?</h3></div>
        </Link>
    </Item>
    </Grid>

    </Grid>
    </Box>

    </div>
  )
}

export default HelpCenterBody
