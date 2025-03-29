import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './HelpCenter.css'
import togglebtn from '../../img/togglebtn.png'
import Menuclose from '../../img/Menuclose.png'
import {Link} from 'react-router-dom'
import customer from '../../img/customer.svg'
import maptrace from '../../img/maptrace.svg'
import guarantee from '../../img/guarantee.svg'
import bestseller from '../../img/bestseller.svg'
import bill from '../../img/bill.svg'
import product from '../../img/product.svg'
import supplychain from '../../img/supplychain.svg'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '0px',
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const useStyles = makeStyles({
    footercls: {
        background: 'transparent !important',
        borderRadius: '0px !important',
        boxShadow:'none !important',
        padding: '90px 0 !important',
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
        position: 'relative'
    },
    helpcommoninner: {
        background: 'transparent !important',
        borderRadius: '0px !important',
        boxShadow:'none !important',
        textAlign:'left !important'
    }
  });

const DetailPage = () => {
     
 const classes = useStyles();

 const [menuOpen, setMenuOpen] = useState(true)

 const openMenuHandler = () => {
    setMenuOpen(false)
 }

 const closeMenuHandler = () => {
    setMenuOpen(true)
 }

  return (
    <div className='dashboard-page help-center-main'>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0}>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Item className={classes.headercls}>
        <Header />
    </Item>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='outer-bgcolor-container'>
    <Item className={classes.bodyclass}>

    
    <div className='detail-pages-inner-outer'>
    <Box sx={{ flexGrow: 1 }}>
    <div className='breadcrum-helpcenter'><Link>Help Center</Link> / Get Started</div>
    
     <Grid container spacing={0} className={classes.helpcenterbodycontain}>

     <Grid item xs={12} sm={12} md={12} lg={2} xl={2} id="link-left-side-id">
    <Item className={classes.helpcommoninner}>
        <h3>Article in this section</h3>

        <Link to='/detail-page-help-center' className='redirect-link-specific'>What crypto wallets can I use with AlphaSea?</Link>
        <Link to='/detail-page-help-center' className='redirect-link-specific'>What is a Non-Fungible Token (NFT)?</Link>
        <Link to='/detail-page-help-center' className='redirect-link-specific'>How do I create an AlphaSea account?</Link>
        <Link to='/detail-page-help-center' className='redirect-link-specific'>How do I create an AlphaSea account?</Link>
        <Link to='/detail-page-help-center' className='redirect-link-specific'>What crypto wallets can I use with AlphaSea?</Link>
        <Link to='/detail-page-help-center' className='redirect-link-specific'>What is a Non-Fungible Token (NFT)?</Link>
    </Item>
    </Grid>


    <Grid item xs={12} sm={12} md={12} lg={10} xl={10} id="link-left-side-detail-id">
    <Item className={classes.helpcommoninner}>
        <h2>How do I create an AlphaSea account?</h2>
        <p>You'll need digital currency, a crypto wallet, and an AlphaSea account to start buying or selling NFTs using AlphaSea . Let's get started! </p>

        <h4>1. Purchase digital currency (ETH)</h4>

        <p>You can buy ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You'll need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics in our What are gas fees? help guide.</p>

        <p>Now that you have ETH, let's get a crypto wallet.</p>

    </Item>
    </Grid>

    </Grid>
    </Box>
    </div>


    </Item>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Item className={classes.footercls}>
      <Footer />
    </Item>
    </Grid>
    </Grid>
    </Box>
    </div>
  )
}

export default DetailPage;
