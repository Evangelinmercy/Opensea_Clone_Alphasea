import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import profilebrand from '../../img/profilebrand.png'
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import approved from '../../img/approved.png'
import brandnamelogo from '../../img/brand-name-logo.png'
import defaultprofile from '../../img/defaultprofile.png'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Modal from '@mui/material/Modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  borderRadius: '20px'
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '0px',
    color: theme.palette.text.secondary,
  }));

const useStyles = makeStyles({
    
    headercls: {
        background: 'transparent !important',
        borderRadius: '0px !important',
        boxShadow:'none !important',
    },
    containwidth:{
        padding: '0 80px',
        '@media (max-width: 991.98px)' : {
            padding: '0 10px',
          },
    },
    rightpartstyle:{
        paddingLeft: '50px',
        '@media (max-width: 991.98px)' : {
            paddingLeft: '0px',
          },
    },
    dashboargraph: {
        background: 'transparent !important',
        borderRadius: '0px !important',
        boxShadow:'none !important',
    }
  });

const ProfileBody = () => {

  const classes = useStyles();
  
  
  
  const [profileImageChange, setProfileImageChange] = useState(null)
  const [imgName, setImgName] = useState('No selected files')

  const [profileBannerImageChange, setBannerImageChange] = useState(null)
  const [imgBannerName, setImgBannerName] = useState('No selected files')

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div className='dashboard-body'>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} className={classes.containwidth}>
    
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Item className={classes.dashboargraph} id="profile-block">

    <Grid container spacing={0} className='profile-inner'>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}><h1>Profile Settings</h1></Grid>
    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
    
    <div className='company-details company-details-left-part'>
    {/* <label>Company:</label>
    <p>THE DEMO COMPANY</p>
    <div className='firm-logo'><img src={brandnamelogo} alt="brandnamelogo"/></div> */}
    <div className='profile-image-outer'>
      <h4>Profile Image</h4>
    <div className='profile-image profile-image-design-block'>
      <form>
      <input type="file" accept='image/*' className='input-field' hidden
      onChange={({ target: {files}}) => {
        files[0] && setImgName(files[0].name)
        if(files){
          setProfileImageChange(URL.createObjectURL(files[0]))
       }
       }}
      />
      {profileImageChange ?
                  <img src={profileImageChange} alt={imgName} /> :
                  <div className='upload-image-block'><CloudUploadIcon /></div>
                }
      </form>
    </div>
    <div className='edit-image-btn' onClick={()=> document.querySelector(".input-field").click()}>
    <Button variant="contained" endIcon={<BorderColorIcon />}>
  Edit
</Button>
</div>
    </div>
    
    <div className='profile-image-outer'>
      <h4>Profile Banner</h4>
      <div className='profile-image profile-image-design-block'>
      <form>
      <input type="file" accept='image/*' className='input-field-banner' hidden
      onChange={({ target: {files}}) => {
        files[0] && setImgBannerName(files[0].name)
        if(files){
          setBannerImageChange(URL.createObjectURL(files[0]))
       }
       }}
      />
      {profileBannerImageChange ?
                  <img src={profileBannerImageChange} alt={imgBannerName} /> :
                  <div className='upload-image-block'><CloudUploadIcon /></div>
                }
      </form>
    </div>
    <div className='edit-image-btn' onClick={()=> document.querySelector(".input-field-banner").click()}>
    <Button variant="contained" endIcon={<BorderColorIcon />}>
  Edit
</Button>
</div>
    </div>

    </div>
    
    </Grid>

    <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
    {/* <div className='profilebrand'><img src={profilebrand} alt="profilebrand"/></div> */}
    <div className='input-textfield-block'>
      <label>Name :</label>
      <TextField id="outlined-basic" variant="outlined" value="Joshua" />
    </div>
    <div className='input-textfield-block'>
      <label>Username :</label>
      <TextField id="outlined-basic" variant="outlined" value="" />
    </div>
    <div className='input-textfield-block'>
      <label>Bio :</label>
      <TextField id="outlined-basic" variant="outlined" value="" />
    </div>
    <div className='input-textfield-block'>
      <label>Email :</label>
      <TextField id="outlined-basic" variant="outlined" value="joshua.alpharive@gmail.com" />
    </div>
    <div className='input-textfield-block'>
      <label>Password :</label>
      <div className='psswrd-block-last'>
      <TextField id="outlined-basic" variant="outlined" value="joshua@27" type="password" />
      </div>
    </div>

    <div className='input-textfield-block Change-password-outer' onClick={handleOpen}><Link to="" className='Change-password'>Change password</Link></div>

    <div className='input-textfield-block Update-Data'>
    <Button variant="contained" >Update Data</Button>
    <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="change-psswrd-block-popup">
          <div className='close-change-passwrd-pop-up' onClick={handleClose}><HighlightOffIcon/></div>
        <div className='input-textfield-block'>
      <label>Old Password :</label>
      <div className='psswrd-block-last'>
      <TextField id="outlined-basic" variant="outlined" value="joshua@270390" />
      </div>
    </div>
    <div className='input-textfield-block'>
      <label>New Password :</label>
      <div className='psswrd-block-last'>
      <TextField id="outlined-basic" variant="outlined" value="joshua@27" />
      </div>
    </div>
    <div className='input-textfield-block'>
      <label>Confirm Password :</label>
      <div className='psswrd-block-last'>
      <TextField id="outlined-basic" variant="outlined" value="joshua@27" />
      </div>
    </div>
    <div className='input-textfield-block passwrd-change-btn'>
    <Button variant="contained" >Update Data</Button>
    </div>
        </Box>
      </Modal>
    </div>
    
    </Grid>

    </Grid>
        
    </Item>
    </Grid>

    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
     <div className='three-block-profile'>

        <div className='block-item'>
          <h5>Licensing</h5>
          <div className='text-block-div'>10/01/2023</div>
        </div>

        <div className='block-item'>
          <h5>License Expiration</h5>
          <div className='text-block-div'>10/01/2024</div>
        </div>

        <div className='block-item'>
          <h5>Self renewal</h5>
          <div className='text-block-div approved'><img src={approved} alt="approved"/></div>
        </div>

     </div>
    </Grid>

    </Grid>
    </Box>
    </div>
  )
}

export default ProfileBody
