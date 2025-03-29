import React, {useState} from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import Paper from "@mui/material/Paper";
import { makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import closeMenu from "../../img/closemenu.png";
import SendIcon from '@mui/icons-material/Send';
import "./Product.css";
import Box from "@mui/material/Box";
import Sucess from "../../img/success.png";


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
    <div>
           <div className="action">
     
           <Button onClick={handleOpen} className="send-btn-succ" >Send</Button>

      <Modal className="qr-popup"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style} className="popBOX BlockPopup send">
           <div className="success-mg-popup">
            <img src={Sucess} alt={Sucess} />
           </div>
   
        </Box>
      </Modal>
      </div>
    </div>
  );
};

export default FilterPopup;
