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
import ForgetPassword from '../../images/Forgot.png'
  


export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    
 const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };
   const notify = () => toast("Forget password success");
  return (
      <div className='login-form'>
          <Box container>
              <div className='forgerPassword-form-main'>
                    <div className='form-login-box'>
                  <Grid container className='form-container'>
                    
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                       <form className='common-form-lrf'>
                      <div className='forgerPassword-form-text'>
                          <Typography variant="h4" component="h2">Forget Password</Typography>
                      </div>
                       <div className='forgerPassword-form-password'> 
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
        </FormControl>
                                  </div>
        <div className='register-form-confirmpassword'> 
                     <FormControl  variant="outlined" className='form-confirmpassword'>
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showConfirmPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />                           
        </FormControl>
                          </div>                              
                          <div className='forgerPassword-form-submit'>
                    <Button variant="contained" onClick={notify}>submit</Button>
                    <ToastContainer />
                                  </div>   
                        </form>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className='forgerPassword-form-image'>
                      <img src={ForgetPassword} alt="Logo" />
                          </div>
                          </Grid>
                         
                  </Grid>
              </div>
               </div>
          </Box>
    </div>
  )
}

