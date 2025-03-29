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

import Polygoscan from '../../img/polygonscan-logo.png'
import './Transaction.css'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import TabTransaction from './TabTransaction'


   


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



const Transaction = () => {

  const classes = useStyles();

  const [openPolygonTrans, setOpenPolygonTrans] = useState(false);
  const handleOpenPolygonTrans = () => setOpenPolygonTrans(true);
  const handleClosePolygonTrans = () => setOpenPolygonTrans(false);

  return (
    <div >
     
           <div className="Transaction-detail">
      <Button onClick={handleOpenPolygonTrans} variant="contained">Transaction
   
      </Button>
      
      <Modal className="transaction-bill"
        open={openPolygonTrans}
        onClose={handleClosePolygonTrans}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style} className="popBOX BlockPopup Transaction">
        <div className="menu" onClick={handleClosePolygonTrans} ><Link><img src={closeMenu} alt="closeMenu" /></Link></div>
        <div >
          <div id="alert-dialog-description" className='product-head'>
          <div className="polygon-logo">
            <img src={Polygoscan} alt={Polygoscan} />
          </div>
          <div className="matic-scale">
            <div className="matic-value">
                <p className="matic-percentage">MATIC : $0.93 <span>(+4.95%)</span> </p>
            </div>
            <div className="gwei-value">
           <p className="gwei-cnt"> <LocalGasStationIcon /> 243.5 Gwei</p>  
            </div>
          </div>
        <div className="transaction-bottom">
            <p className="detail-trans">Transaction Details </p>
        </div>
        <div>
            <p className="gasless-para"><b>Sponsored : -</b> Gasless execution and MEV production on 1inch - #1 DEX aggregator. <span>Try Now!</span></p>
        </div>
          </div>
     
     <div className="transaction-tab-detail">
        <TabTransaction />
     </div>
         
 
            

              
               
        </div>
        </Box>
      </Modal>
      </div>
    </div>
  );
};

export default Transaction;
