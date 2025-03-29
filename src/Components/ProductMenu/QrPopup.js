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
import Code from "../../img/code.png";
import TextField from '@mui/material/TextField';
import "./Product.css";
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import Action from './Action';

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

  const [openQRPopUp, setOpenQRPopUp] = useState(false);
  const handleOpenQRPopUp = () => setOpenQRPopUp(true);
  const handleCloseQRPopUp = () => setOpenQRPopUp(false);

  return (
    <div >
           <div className="qr-detail">
      <Button onClick={handleOpenQRPopUp} variant="contained">QrPopup
      <div>

      </div>
      </Button>
      <Modal 
        open={openQRPopUp}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style} className="popBOX BlockPopup productpopup">
        <div className="menu" onClick={handleCloseQRPopUp} ><Link><img src={closeMenu} alt="closeMenu" /></Link></div>
        <div className="qr-box">
            <div className="qr-detail-id">
                <div className="qr-bar-img">
                    <img src ={Code} alt={Code} />
                </div>
                <div className="qr-product">
                    <div className="id-product">
                    <p className="product-id">QR Product ID</p>
                    <p>$id_product</p>
                    </div>
            
                    <div className="url-qr">
                    <p className="product-id">URL QR</p>
                    <Link href="#" className="link-qr">Link QR Product</Link>
                    </div>

                    
                    <div className="url-qr">
                    <p className="product-id">Action</p>
                    <Action />
                     
                    </div>
                   
                    
                    </div>
                </div>
            </div>

            <div className="status-cnt">
                <p className="status-head">Status</p>
                <div className="consumer-active-btn">
                <Button className="consumer-btn">Consumer Activated</Button>
                </div>
                <div className="pending-active-btn">
                <Button className="consumer-btn">Pending Sale</Button>
                </div>
                <div className="register-active-btn">
                <Button className="consumer-btn">Register in the System</Button>
                </div>
            </div>

            <div className="blockchain-info">
                <div className="infoclient">
                    <p className="info-block">Blockchain Infoclient</p>
                </div>
                <div className="wallet-direct">
                    <div className="wallet-location">
                    <p className="info-block">Wallet location</p>
                    </div>
               <div className="wallet-detail">
                <p>0x5a63g3hGij3799wyH3dygy7hu ficchWBT48QWW8U89QU</p>
               </div>
                </div>
            </div>

            <div className="id-input">
                <div className="holder-detail">
                    <div className="id-number">
                        <p className="holder-head">Holder ID</p>
                        <TextField className="inpit-txt-box"  id="outlined-password-input" label="" type="text" />
                    </div>
                    <div className="id-number">
                        <p className="holder-head">Holder Email</p>
                        <TextField className="inpit-txt-box"  id="outlined-password-input" label="" type="email" />
                    </div>
                    <div className="id-number">
                        <p className="holder-head">Holder Phone</p>
                        <TextField className="inpit-txt-box"  id="outlined-password-input" label="" type="text" />
                    </div>
                </div>
            </div>

            <div className="print-block">
                <div className="print-btn">
                     <Button className="printlink">{<LocalPrintshopIcon />}Print</Button>
                </div>
                <div className="block-bott">
                     <Button className="blocklink">{<DoDisturbAltIcon />}Block</Button>
                </div>
            </div>
        
        </Box>
      </Modal>
      </div>
    </div>
  );
};

export default FilterPopup;
