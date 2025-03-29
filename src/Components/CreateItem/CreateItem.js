import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
import CreateItemBody from './CreateItemBody';


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
    }
  });

const CreateItem = () => {
     
 const classes = useStyles();

 const [menuOpen, setMenuOpen] = useState(true)

 const openMenuHandler = () => {
    setMenuOpen(false)
 }

 const closeMenuHandler = () => {
    setMenuOpen(true)
 }

  return (
    <div className='dashboard-page profile-page-main'>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0}>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Item className={classes.headercls}>
        <Header />
    </Item>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Item className={classes.bodyclass}>
    <CreateItemBody />
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

export default CreateItem;
