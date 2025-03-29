import React, {useState} from "react";
import "./FilterPopup.css";
import "./ProductMenu.css"
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import closeMenu from "../../img/closemenu.png";
import thumbalin from '../../img/thumb-logo.svg';
import Checkbox from "@mui/material/Checkbox";
import DoDisturbAltOutlinedIcon from '@mui/icons-material/DoDisturbAltOutlined';

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
      <Button onClick={handleOpen} >
      {<DoDisturbAltOutlinedIcon color="primary"  />}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style} className="popBOX BlockPopup">
        <div className="menu" onClick={handleClose} ><Link><img src={closeMenu} alt="closeMenu" /></Link></div>
        <div >
          <div id="alert-dialog-description" className='product-head'>
          <p className='product-block'>Block product</p>
          <p className={classes.modalpara}>You have selected to block these products, are you sure to block the traceability and post-sale services of the products?</p>
          </div>
          <Grid container spacing={0} className='whole-grid-value'>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className='product-list-items'>
                <div className='list-item-name'>
                  <div className='list-image'>
                  <img src={thumbalin} alt={thumbalin} />
                  </div>
                  <div className='item-name'>
                    <p>ADD-15533-11</p>
                  </div>
                </div>
                <div className='list-item-name'>
                  <div className='list-image'>
                  <img src={thumbalin} alt={thumbalin} />
                  </div>
                  <div className='item-name'>
                    <p>ADD-15533-11</p>
                  </div>
                </div>
                <div className='list-item-name'>
                  <div className='list-image'>
                  <img src={thumbalin} alt={thumbalin} />
                  </div>
                  <div className='item-name'>
                    <p>ADD-15533-11</p>
                  </div>
                </div>
                  <div className='cancel-all'>
                  <Button className='cancel-btn'>Cancel</Button>
                  </div>
                
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <p className={classes.reasonBlock}>Select reason for blocking</p>
            <ul className='product-detail'>
              <li>- The product has been stolen from its owner 
              <Checkbox className="boxStyle"/>
              </li>
              <li>- Is involved in a judicial investigation<Checkbox className="boxStyle" />
                </li>
              <li >- Other reasons (specify the reason)<Checkbox className="boxStyle"/>
      </li>
            </ul>
            <div className='input-box'> 
            <TextField className='field-box'
          required
         multiline
         rows={5}
         rowsMax={10}
          variant="outlined"
        />
            </div>
                
                <Grid container spacing={0} className='grid-direct'>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <div className='block-product'>
             <div className='button-direct'>
             <Button className='block-btn'>Block Product</Button>
             </div>
            </div>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <div className='disclamer-note'>
              <p>Remember that this option is irreversible automatically, to reverse this situation contact <Link href="#" className='support-link'>support@dtracer.io</Link></p>
            </div>
                </Grid>
                </Grid>
        
              

          </Grid>
          </Grid>
  
        </div>
        </Box>
      </Modal>
    </div>
  );
};

export default FilterPopup;
