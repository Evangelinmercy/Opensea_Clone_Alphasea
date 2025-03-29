import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import '../auth.css';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../../images/Login.png'
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';


const style = {
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: 400,
bgcolor: 'background.paper',
border: '2px solid #000',
boxShadow: 24,
p: 4,
};


export default function InputAdornments() {
const [showPassword, setShowPassword] = React.useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
event.preventDefault();
};
const notify = () => toast("Loging success");

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

return (
<div className='login-form'>
<Box container>
<div className='login-form-main'>
<div className='form-login-box'>
<Grid container className='form-container'>

<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
<form className='common-form-lrf'>
<div className='long-form-text'>
<Typography variant="h4" component="h2">Login</Typography>
</div>
<div className='login-form-userName'>
<TextField id="outlined-basic" label="User Name" variant="outlined" className='userName' />
</div>
<div className='login-form-phoneNumber'>
<TextField id="outlined-basic" label="Phone Number" variant="outlined" className='phoneNumber' />
</div>
<div className='login-form-password'> 
<FormControl sx={{ m: 1,}} variant="outlined" className='form-password'>
<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
<OutlinedInput
id="outlined-adornment-password"
type={showPassword ? 'text' : 'password'}
endAdornment={
<InputAdornment position="end">
<IconButton
aria-label="toggle password visibility"
onClick={handleClickShowPassword}
onMouseDown={handleMouseDownPassword}
edge="end"
>
{showPassword ? <Visibility /> : <VisibilityOff />}
</IconButton>
</InputAdornment>
}
label="Password"
/>
<FormHelperText id="outlined-weight-helper-text" sx={{textAlign:'end'}}><Typography variant="p" component="p" sx={{mt:1}}><a href='/forgetpassword' sx={{textDecoration: 'none'}}>Forget Your password? </a></Typography></FormHelperText>

</FormControl>
</div>
<div className='login-form-submit'>
<Button variant="contained"  onClick={handleOpen}>submit</Button> 
<Modal
aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
open={open}
closeAfterTransition
slots={{ backdrop: Backdrop }}
slotProps={{
backdrop: {
timeout: 500,
},
}}
>
<Fade in={open}>
<Box sx={style} className='security-box-main'>
<div className='payment-close' onClick={handleClose}><CloseIcon/></div>
<div className='security-main'>
<div className='security-title'>
<Typography id="transition-modal-title" variant="h5" component="h2">
Security Verification
</Typography>
<FormHelperText id="outlined-weight-helper-text">Phone verification code</FormHelperText>
<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className='security-form'>
<OutlinedInput
id="outlined-adornment-weight"
endAdornment={<InputAdornment position="end" className='security-get-code'>Get Code</InputAdornment>}
aria-describedby="outlined-weight-helper-text"
inputProps={{
'aria-label': 'weight',
}}
/>
<FormHelperText id="outlined-weight-helper-text" className='security-enter'>Enter the 6-digit verification code send to 994***89756</FormHelperText>
</FormControl>
<div className='security-button'>
<Button variant="contained" onClick={notify} >Submit</Button>

</div>
</div>
</div>
</Box>
</Fade>
</Modal>
<ToastContainer />
</div>   
<div>
<Typography variant="p" component="p" sx={{mt:1}}>If you Don't have a account? <a href='/register'> Register </a> now</Typography>
</div>
</form>
</Grid>
<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
<div className='login-form-image'>
<img src={Login} alt="Logo" />
</div>
</Grid>

</Grid>
</div>
</div>
</Box>
</div>
)
}

