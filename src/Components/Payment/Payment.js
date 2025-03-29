import * as React from 'react';
import './Payment.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Stack from '@mui/material/Stack';

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

const styleError = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    
  const [openError, setOpenError] = React.useState(false);
  const handleOpenError = () => setOpenError(true);
  const handleCloseError = () => setOpenError(false);

  return (
    <div>
 <Stack direction="row" spacing={2}>
          <Button variant='contained' onClick={handleOpen}>Payment success</Button>
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
                  <Box sx={style} className='payment-box-main'>
                      <div className='payment-close' onClick={handleClose}><CloseIcon/></div>
                      <div className='payment-main'>
                          <div className='payment-icon'>
                              <CheckCircleIcon/>
                          </div>
                          <div className='payment-title'>
                              <Typography id="transition-modal-title" variant="h6" component="h2">
            Success bid
                              </Typography>
                               <Typography id="transition-modal-title" variant="p" component="p">
              Frozen
                              </Typography>
                                 <Typography id="transition-modal-title" variant="h3" component="h2" className='payment-pay'>
           10,000 BNB
                              </Typography>
                                 <Typography id="transition-modal-title" variant="p" component="p">
              unitil the end on auction
                              </Typography>
                              <div className='payment-button'>
                                         <Button variant="contained">Bending Orders</Button>
                       </div>
                          </div>
                      </div>
          </Box>
        </Fade>
        
          </Modal>
          
              <div>
          <Button variant='contained' onClick={handleOpenError}>Payment error</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openError}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openError}>
                  <Box sx={styleError} className='payment-box-main'>
                      <div className='payment-close' onClick={handleCloseError}><CloseIcon/></div>
                      <div className='payment-main'>
                          <div className='payment-icon'>
                              <PriorityHighIcon/>
                          </div>
                          <div className='payment-title-error'>
                                 <Typography id="transition-modal-title" variant="p" component="p">srroy, payment to your own wallet is not support </Typography>
                              <div className='payment-button'>
                                         <Button variant="contained">OK</Button>
                       </div>
                          </div>
                      </div>
          </Box>
        </Fade>
        
      </Modal>   
        </div>
        </Stack>
      </div>
  
  );
}
