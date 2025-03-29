import React, {useState} from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import closeMenu from "../../img/closemenu.png";
import Bag from "../../img/bag-img.png";

import "./Product.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none !important",
}));

  const useStyles = makeStyles({

    modalpara:{
        fontSize: '18px',
        textAlign:'center',
        maxWidth:'750px !important',
        margin:'0 auto',
        paddingBottom: '80px',
        '@media (max-width: 767.98px)' : {
            paddingBottom: '36px',
          },

      },

      reasonBlock:{
        fontSize:'24px',
        fontWeight:'600',
        margin:'0'
    }

  });

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1207,
  border: "2px solid #000",
  p: 4,
};



const FilterPopup = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
           <div className="locked">
      <Button onClick={handleOpen} variant="contained">Locked
      <div>

      </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style} className="popBOX BlockPopup productpopup">
        <div className="menu" onClick={handleClose} ><Link><img src={closeMenu} alt="closeMenu" /></Link></div>
        <div >
          <div id="alert-dialog-description" className='product-head bag-grid'>
          <div className="logo-dt">
          <img src={Bag} alt="bag"/>
          </div>
          <div className="logo-dt">
          <img src={Bag} alt="bag"/>
          </div>
          <div className="logo-dt">
          <img src={Bag} alt="bag"/>
          </div>
          <div className="logo-dt">
          <img src={Bag} alt="bag"/>
          </div>
          </div>
  
              <div className="product-box-direct">
              <div className="product-detail-box">
                <p className="product-head-title">Product</p>
                <p><b>Boloso de mano luis vution</b></p>
                <p><b>Short description</b></p>
                <p className="sub-para">Bolso de mano luis vution echo con piel devaca </p>
                <p><b>Long  description</b></p>
                <p className="sub-para">Bolso de mano luis vution echo con piel devaca </p>
             </div>
             <div className="client-id">
                <div className="client-details">
                <p className="client-id-head">Client ID </p>
                 <p className="id-value">xxx1112s</p>
                </div>
                <div className="client-details">
                <p className="client-id-head">ID PRODUCT </p>
                 <p className="id-value">xxx1112-001</p>
                </div>
              <div className="client-details">
              <p className="client-id-head">Category</p>
                 <p className="id-value">Fashion</p>
              </div>
                 <p className="client-id-head">Status Product</p>
            </div>
              </div>
            
       
         
 
               <div className="inital-details">
                 <div className="inital-block">
                    <div className="brand-name">
                        <p className="louis-name">D1113s</p>
                        <p><b>Brand</b></p>
                        <p className="louis-name">Louis-vution</p>
                        <p><b>Initial_Stack</b></p>
                        <p className="louis-name">10</p>
                    </div>
                 </div>
                 <div className="blockchain">
                    <p><b>Blockchain Info</b></p>
                    <Link href="#" className="locked-loc">Locked</Link>
                 </div>
               </div>

               <Grid container spacing={0}>
               <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
             <div className="product-detail-box">
                        <p><b>Measures</b></p>
                        <p className="louis-name">30x20</p>
                        <p><b>Unit of Meassurment</b></p>
                        <p className="louis-name">CM</p>
                        <p><b>Material</b></p>
                        <p className="louis-name">Pel de vaca</p>
                        <p><b>Ingredient</b></p>
                        <p className="louis-name">N/A</p>
                        <p><b>Location</b></p>
                        <p className="louis-name">Passing de grace 88, Barcelona, CP 08008</p>
                        <Link href="#" className="map-loc">Click see on the map</Link>
                        <p><b>License Attachments</b></p>
                      <Link href="#" className="download-link">Download License</Link>
                      <p><b>Warranty</b></p>
                      <p className="louis-name">2 Years</p>
             </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
           <div className="product-detail-box">
                <p className="product-head-title">Warranty</p>
               <div className="extension-inital">
                   <p className="inital-head-part">Initial</p>
                   <p className="inital-years">2 Years</p>
               </div>
               <div className="extension-inital">
                   <p className="inital-head-part">Extension permitet</p>
                   <p className="inital-years">Yes, 1 Years</p>
               </div>
               <div className="extension-inital">
                   <p className="inital-head-part">Price Extension Warranty </p>
                   <p className="inital-years">60 $</p>
               </div>
               <div className="extension-inital">
                   <p className="inital-head-part">warranty extension applied </p>
                   <p className="inital-years">Yes, 10-10-2022</p>
               </div>
             </div>
          </Grid>
               </Grid>
               
        </div>
        </Box>
      </Modal>
      </div>
    </div>
  );
};

export default FilterPopup;
