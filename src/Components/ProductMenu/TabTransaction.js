import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, colors } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper'}}>
      <AppBar position="static">
        <Tabs className='tab-head'
          value={value}
          onChange={handleChange}
        >
          <Tab label="Overview" {...a11yProps(0)}  className='tab-head-bg'/>
          <Tab label="Logs(2)" {...a11yProps(1)} className='tab-head-bg'/>
          <Tab label="Access List" {...a11yProps(2)} className='tab-head-bg' />
          <Tab label="Comments" {...a11yProps(3)} className='tab-head-bg' />
        </Tabs>
      </AppBar>
      <div
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        
        <TabPanel value={value} index={0} dir={theme.direction} className="tabpanel-bg">
        <Grid container spacing={0}>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <p><b>Transaction Hash :</b></p>
         </Grid>
         <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
         <div className='hash-id'>
              <p>0xg 65j5kyu664j4tjt4651y654r1tt51r146b16g4bg1b+gb61dff6df6f54f6bdfb4d5b45b4</p>
            </div>
         </Grid>

         <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
         <p><b>Status :</b></p>
         </Grid>
         <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className='hash-id'>
            <Button className='success-tick'> <DoneIcon />Success</Button>
            </div>
            </Grid>

       
      
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <p><b>Block :</b></p>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className='hash-id'>
              <p className='voliet-value'>255525462</p>
            </div>
            </Grid>
            
         
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <p><b>Timestamp :</b></p>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className='hash-id border-line'>
              <p>44s ago (May -30-2023 11:06:06 AM +UTC)</p>
            </div>
            </Grid>
            
        
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <p><b>From :</b></p>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <p className='from-id'>0xg 65j5kyu664j4tjt4651y654r1tt51r146b16g4bg1b+gb61dff6df6f54f6bdfb4d5b45b4</p>
            <div className='hash-id border-line'>
              <p>Contact  <span> 4tjt4651y654r1tt51r146b16g4bg1b+</span> ( lens Protocol : LPP Token )</p>
            </div>
          </Grid>
         
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <p><b>Value :</b></p>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className='hash-id '>
              <p className='matic-box'><span>0 MATIC</span> ($0.00)</p>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <p><b>Transaction Fee :</b></p>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className='hash-id border-line'>
              <p>0.33694563215524821532255 MATIC ($0.03)</p>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <p><b>Gas Price :</b></p>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
           <div className='hash-id'>
              <p>0.000025549554955689595 (238.54595456245 Gwei )</p>
            </div>
          </Grid>

          </Grid>
        </TabPanel>
        



        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <p><b>Transaction Hash :</b></p>
         </Grid>
         <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
         <div className='hash-id border-line'>
              <p>0xg 65j5kyu664j4tjt4651y654r1tt51r146b16g4bg1b+gb61dff6df6f54f6bdfb4d5b45b4</p>
            </div>
         </Grid>


       
      
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <p><b>Block :</b></p>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className='hash-id '>
              <p className='voliet-value'>255525462</p>
            </div>
            </Grid>
            
         
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <p><b>Timestamp :</b></p>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className='hash-id border-line'>
              <p>44s ago (May -30-2023 11:06:06 AM +UTC)</p>
            </div>
            </Grid>
            
        
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <p><b>From :</b></p>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <p className='from-id'>0xg 65j5kyu664j4tjt4651y654r1tt51r146b16g4bg1b+gb61dff6df6f54f6bdfb4d5b45b4</p>
            <div className='hash-id border-line'>
              <p>Contact  <span> 4tjt4651y654r1tt51r146b16g4bg1b+</span> ( lens Protocol : LPP Token )</p>
            </div>
          </Grid>
         
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <p><b>Value :</b></p>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
           
            <div className='hash-id'>
              <p className='matic-box'><span>0 MATIC</span> ($0.00)</p>
            </div>
          </Grid>
           </Grid>
        </TabPanel>


        <TabPanel value={value} index={2} dir={theme.direction}>
        <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <p><b>Transaction Hash :</b></p>
         </Grid>
         <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
         <div className='hash-id'>
              <p>0xg 65j5kyu664j4tjt4651y654r1tt51r146b16g4bg1b+gb61dff6df6f54f6bdfb4d5b45b4</p>
            </div>
         </Grid>

         <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
         <p><b>Status :</b></p>
         </Grid>
          
         <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className='hash-id'>
            <Button className='success-tick'> <DoneIcon />Success</Button>
            </div>
            </Grid>

       
      
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <p><b>Block :</b></p>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className='hash-id border-line'>
              <p className='voliet-value'>255525462</p>
            </div>
            </Grid>
            
         
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <p><b>Timestamp :</b></p>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className='hash-id border-line'>
              <p>44s ago (May -30-2023 11:06:06 AM +UTC)</p>
            </div>
            </Grid>
            
        
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <p><b>From :</b></p>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <p className='from-id'>0xg 65j5kyu664j4tjt4651y654r1tt51r146b16g4bg1b+gb61dff6df6f54f6bdfb4d5b45b4</p>
            <div className='hash-id'>
              <p>Contact  <span> 4tjt4651y654r1tt51r146b16g4bg1b+</span> ( lens Protocol : LPP Token )</p>
            </div>
          </Grid>
         
         
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <Grid container spacing={0}>
       

       
      
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <p><b>Block :</b></p>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className='hash-id'>
              <p className='voliet-value'>255525462</p>
            </div>
            </Grid>
            
         
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <p><b>Timestamp :</b></p>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className='hash-id border-line'>
              <p>44s ago (May -30-2023 11:06:06 AM +UTC)</p>
            </div>
            </Grid>
            
        
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <p><b>From :</b></p>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <p className='from-id'>0xg 65j5kyu664j4tjt4651y654r1tt51r146b16g4bg1b+gb61dff6df6f54f6bdfb4d5b45b4</p>
            <div className='hash-id border-line'>
              <p>Contact  <span> 4tjt4651y654r1tt51r146b16g4bg1b+</span> ( lens Protocol : LPP Token )</p>
            </div>
          </Grid>
         
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <p><b>Value :</b></p>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
           
            <div className='hash-id'>
              <p className='matic-box'><span>0 MATIC</span> ($0.00)</p>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <p><b>Transaction Fee :</b></p>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
           
            <div className='hash-id border-line'>
              <p>0.33694563215524821532255 MATIC ($0.03)</p>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <p><b>Gas Price :</b></p>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
           
            <div className='hash-id'>
              <p>0.000025549554955689595 (238.54595456245 Gwei )</p>
            </div>
          </Grid>

          </Grid>
        </TabPanel>
      </div>
    </Box>
  );
}