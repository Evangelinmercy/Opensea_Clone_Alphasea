import React, {useState} from "react";
import "./MessagePopup.css";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import closeMenu from "../../img/closemenu.png";
import SearchIcon from "@mui/icons-material/Search";
import dayjs from "dayjs";
import msgIcon from "../../img/msgIcon.png";
import profile from '../../img/profile.png';
import Delete from '../../img/delete.png';
import AlarmClock from '../../img/Alarm.png';
import knowMore from '../../img/knowMore.png';
import Checkbox from "@mui/material/Checkbox";
import msgActive from "../../img/msgactive.svg";

// const today = dayjs();
const yesterday = dayjs().subtract(1, "day");
// const todayStartOfTheDay = today.startOf("day");

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none !important",
}));

  const useStyles = makeStyles({

    leftIndox: {
        background: "#d2f4ff !important",
        strokeWidth: "0.841 !important",
        stroke: "#505558 !important",
        backdropFilter: "blur(84.12220001220703px)",
        width: '270.423',
        height: '80%',
        paddingTop: '50px',
        borderRadius: '20px',
        '@media (max-width: 767.98px)' : {
          height: '100%',
        },
    },

     textClr: {
        color: '#0070F0 !important',
        fontSize: '17.061px',
        fontWeight: '500',
        lineHeight: '149.687%',
    },


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

const MessagePopup = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="msgBtn">
      <img src={msgIcon} alt="msgIcon" />
      </Button>
      <Modal className='popbg'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" 
      >

        <Box sx={style} className="popBOX msg">
        <div className="menu" onClick={handleClose} ><Link><img src={closeMenu} alt="closeMenu" /></Link></div>

        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} className="row">

        <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <div className={classes.leftIndox}>
            <div className="butOutLayer">
                <Button className='apply'>INBOX</Button>
            </div>
            </div>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
        <div className='rightInfo'>
          <div className='RightInnerLayer'>
            <div className="follower">
              <div className="follower_profile"><img src={profile} alt="profile"></img></div>
              <div className="follower_msg">
                  <p className="msg">Jake jungle <span className={classes.textClr}>Assigned  PROJ-3 Investigate Memory
              Leakage on Lambd....</span> to yoy</p>
              <div className="timeLine">
                <p>0 m</p>
                <img src={msgActive} alt="msgActive" />
                <Button className="msgTime"> TO DO
                </Button>
              </div>
              </div>
              <div className="msg_icons">
              <div className="follower_icon"><img src={Delete} alt="delete"></img></div>
              <div className="follower_icon"><img src={AlarmClock} alt="AlarmClock"></img></div>
              <div className="follower_icon"><img src={knowMore} alt="knowMore"></img></div>
              </div>
            </div>

            <div className="follower">
               <div className="follower_profile"><img src={profile} alt="profile"></img></div>
               <div className="follower_msg">
                   <p className="msg">Jake jungle <span className={classes.textClr}>Assigned  PROJ-3 Investigate Memory
               Leakage on Lambd....</span> to yoy</p>
               <div className="timeLine">
                 <p>0 m</p>
                 <img src={msgActive} alt="msgActive" />
                 <Button className="msgTime"> TO DO
                 </Button>
               </div>
               </div>
               <div className="msg_icons">
               <div className="follower_icon"><img src={Delete} alt="delete"></img></div>
               <div className="follower_icon"><img src={AlarmClock} alt="AlarmClock"></img></div>
               <div className="follower_icon"><img src={knowMore} alt="knowMore"></img></div>
               </div>
            </div>

            <div className="follower">
               <div className="follower_profile"><img src={profile} alt="profile"></img></div>
               <div className="follower_msg">
                   <p className="msg">Jake jungle <span className={classes.textClr}>Assigned  PROJ-3 Investigate Memory
               Leakage on Lambd....</span> to yoy</p>
               <div className="timeLine">
                 <p>0 m</p>
                 <img src={msgActive} alt="msgActive" />
                 <Button className="msgTime"> TO DO
                 </Button>
               </div>
               </div>
               <div className="msg_icons">
               <div className="follower_icon"><img src={Delete} alt="delete"></img></div>
               <div className="follower_icon"><img src={AlarmClock} alt="AlarmClock"></img></div>
               <div className="follower_icon"><img src={knowMore} alt="knowMore"></img></div>
               </div>
            </div>

            <div className="follower">
               <div className="follower_profile"><img src={profile} alt="profile"></img></div>
               <div className="follower_msg">
                   <p className="msg">Jake jungle <span className={classes.textClr}>Assigned  PROJ-3 Investigate Memory
               Leakage on Lambd....</span> to yoy</p>
               <div className="timeLine">
                 <p>0 m</p>
                 <img src={msgActive} alt="msgActive" />
                 <Button className="msgTime"> TO DO
                 </Button>
               </div>
               </div>
               <div className="msg_icons">
               <div className="follower_icon"><img src={Delete} alt="delete"></img></div>
               <div className="follower_icon"><img src={AlarmClock} alt="AlarmClock"></img></div>
               <div className="follower_icon"><img src={knowMore} alt="knowMore"></img></div>
               </div>
            </div>

          </div>

          <div className="bottom_Btns">
              <Button className="handleBtn">View All</Button>
              <Button className="handleBtn">Remove All</Button>
              <Button className="handleBtn">Inbox Settings</Button>
            </div>
        </div>
        </Grid>

    </Grid>
    </Box>


        </Box>
      </Modal>
    </div>
  );
};

export default MessagePopup;

