import React, {useState, useRef} from 'react'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProfileBody from './ProfileBody';
import './Dashboard.css'
import './Profile.css'
import togglebtn from '../../img/togglebtn.png'
import Menuclose from '../../img/Menuclose.png'
import {Link} from 'react-router-dom'
import customer from '../../img/customer.svg'
import maptrace from '../../img/maptrace.svg'
import guarantee from '../../img/guarantee.svg'
import bestseller from '../../img/bestseller.svg'
import bill from '../../img/bill.svg'
import product from '../../img/product.svg'
import supplychain from '../../img/supplychain.svg'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SecurityTwoToneIcon from '@mui/icons-material/SecurityTwoTone';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import CodeIcon from '@mui/icons-material/Code';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import {DefaultCopyField} from '@eisberg-labs/mui-copy-field';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EditIcon from '@mui/icons-material/Edit';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Checkbox from '@mui/material/Checkbox';
import ethereum from '../../img/ethereum.svg';
import Switch from '@mui/material/Switch';
import illustration from '../../img/offer-settings-illustration.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '0px',
    color: theme.palette.text.secondary,
  }));

const useStyles = makeStyles({
    footercls: {
        background: 'transparent !important',
        borderRadius: '0px !important',
        boxShadow:'none !important',
        padding: '0px !important',
        '@media (max-width: 991.98px)' : {
            padding: '30px 0 !important',
          }
    },
    headercls: {
        background: 'transparent !important',
        borderRadius: '0px !important',
        boxShadow:'none !important',
    },

    bodyclass: {
        background: 'transparent !important',
        borderRadius: '0px !important',
        boxShadow:'none !important',
    },
    containwidth: {
      padding: "0 40px",
      "@media (max-width: 991.98px)": {
        padding: "0",
      },
    },

  });

const ProfileSettings = () => {
     
 const classes = useStyles();

 const [menuOpen, setMenuOpen] = useState(true)

 const openMenuHandler = () => {
    setMenuOpen(false)
 }

 const closeMenuHandler = () => {
    setMenuOpen(true)
 }

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    
  const [image, setImage] = useState(null);

  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };


  const handleUploadButtonClick = (file) => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  const [profileBannerImageChange, setBannerImageChange] = useState(null)
  const [imgBannerName, setImgBannerName] = useState('No selected files')

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState('');

  const handleChangeage = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='dashboard-page profile-setting'>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0}>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Item className={classes.headercls}>
        <Header />
    </Item>
    </Grid>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} className={classes.containwidth}>
    {/* <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
    > */}
    <Grid item xs={12} sm={12} md={3} lg={3} xl={3} className='profile-left-list'>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderColor: 'divider' }}
        className='tab sm-responsive'
      >
      <Typography className='tab-set'>Settings</Typography>
        <Tab label="Profile" icon={<AccountCircleOutlinedIcon/>} {...a11yProps(0)} />
        <Tab label="Featured items" icon={<RecentActorsOutlinedIcon />} {...a11yProps(1)} />
        <Tab label="Notification" icon={<NotificationsOutlinedIcon />} {...a11yProps(2)} />
        <Tab label="Offers" icon={<LocalOfferOutlinedIcon />} {...a11yProps(3)} />
        <Tab label="Account Support" icon={<SecurityTwoToneIcon />} {...a11yProps(4)} />
        <Tab label="Earning" icon={<AttachMoneyTwoToneIcon />} {...a11yProps(5)} />
        <Tab label="Developer" icon={<CodeIcon />} {...a11yProps(6)} />
      </Tabs>
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel> */}
      <TabPanel value={value} index={1}>

       <div className='profile-details'>
        <Typography variant='h2' className='profile-details-head'>Profile details</Typography>

        <div className='profile-flex-info'>

    <Grid container spacing={0} className={classes.containwidth} id="containWidth">
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
        <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div className='input-typo'>Username</div>
            <TextField id="outlined-basic" placeholder='Enter Username' variant="outlined" />

        </Box>
        <Box
            component="form" className='column-details'
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div className='input-typo'>Bio</div>
            <TextareaAutosize className='textArea' placeholder='Tell the world your story !'/>

        </Box>
        <Box
            component="form" className='column-details'
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div className='input-typo'>Email Address</div>
            <TextField id="outlined-basic" placeholder='Enter email' variant="outlined" />
        </Box>
        <Box
            component="form" className='column-details social-connect'
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div className='input-typo'>Social Connections</div>
            <Typography variant='caption'>Help collectors verify your account by connecting social accounts</Typography>

              <div className='connection-list'>
                <div className='twit'>
                <TwitterIcon />
                  <p>Twitter</p>
                </div>
                <Button  variant="contained" fullWidth id='apply-common' className='Connect'>Connect</Button>
              </div>

              <div className='connection-list insta'>
                <div className='twit insta'>
                <InstagramIcon />
                  <p>Instagram</p>
                </div>
                <Button  variant="contained" fullWidth id='apply-common' className='Connect'>Connect</Button>
              </div>    
        </Box>
        <Box
                    component="form" className='column-details '
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <div className='input-typo detail'>Links</div>
            <div class="outlined-basic">
            <LanguageIcon />
            <TextField id="outlined-basic" placeholder='Yoursite.io' variant="outlined" />
            </div>
        </Box>

        <Box
                  component="form" className='column-details'
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <div className='input-typo detail'>Wallet Address</div>
            <div className='wallet'>
            0x3583...07e9
            <DefaultCopyField/>
            </div>
        </Box>

        <div className='connection-list desktop'>
                <Button  variant="contained" fullWidth id='apply-common' className='Connect'>Save</Button>
              </div>
        </Grid>
        
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className='right-layer-image-upload'>
        <div className='profile-image-outer'>
        <h4>Profile Image <InfoOutlinedIcon/></h4>
            <div className='profile-image profile-image-design-block' onClick={()=> document.querySelector(".input-field-banner").click()}>
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
                        <div className='upload-image-block'><EditIcon /></div>
                      }
            </form>
            </div>
        </div>

        <div className='profile-image-outer'>
        <h4>Profile Banner <InfoOutlinedIcon/></h4>
            <div className='profile-image profile-image-design-block' onClick={()=> document.querySelector(".input-field-banner").click()}>
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
                        <div className='upload-image-block'><EditIcon /></div>
                      }
            </form>
            </div>
        </div>

        <div className='connection-list sm-responsive'>
                <Button  variant="contained" fullWidth id='apply-common' className='Connect'>Save</Button>
              </div>
        </Grid>
        </Grid>

 
        </div>
        


       </div>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className='profile-details'>
        <Typography variant='h2' className='profile-details-head'>Featured items</Typography>
        <p className='feature-detail'>You don’t have any collected items to feature on your profile yet.</p>
      </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className='profile-details'>
        <Typography variant='h2' className='profile-details-head'>Notification settings</Typography>
        <p className='feature-detail'>Select which notifications you would like to receive for 0x3583...07e9</p>
      </div>

      <div className='notify-wanted'>
         <div className='setting-wrapper'>
         <Checkbox
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />

          <div className='notify-wanted-items'>
            <div className='bold'>Item Sold</div>
            <p>When someone purchased one of your items</p>
          </div>
         </div>

         <div className='setting-wrapper'>
         <Checkbox
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />

          <div className='notify-wanted-items'>
            <div className='bold'>Bid Activity</div>
            <p>When someone bids on one of your items</p>
          </div>
         </div>

         <div className='setting-wrapper'>
         <Checkbox
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />

          <div className='notify-wanted-items'>
            <div className='bold'>Deals Accepted</div>
            <p>When someone accepted one of your deals</p>
          </div>
         </div>

         <div className='setting-wrapper'>
         <Checkbox
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />

          <div className='notify-wanted-items'>
            <div className='bold'>Deal Offers</div>
            <p>When someone offers a deal on your items</p>
          </div>
         </div>

         <div className='setting-wrapper'>
         <Checkbox
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />

          <div className='notify-wanted-items'>
            <div className='bold'>Price Change</div>
            <p>When an item you made an offer on changes in price</p>
          </div>
         </div>

         <div className='setting-wrapper'>
         <Checkbox
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />

          <div className='notify-wanted-items'>
            <div className='bold'>Auction Expiration</div>
            <p>When a timed auction you created ends</p>
          </div>
         </div>

         <div className='setting-wrapper'>
         <Checkbox
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />

          <div className='notify-wanted-items'>
            <div className='bold'>Outbid</div>
            <p>When an offer you placed is exceeded by another user</p>
          </div>
         </div>

         <div className='setting-wrapper'>
         <Checkbox
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />

          <div className='notify-wanted-items'>
            <div className='bold'>Owned Item Updates</div>
            <p>When a significant update occurs for one of the items you have purchased on OpenSea</p>
          </div>
         </div>

         <div className='setting-wrapper'>
         <Checkbox
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />

          <div className='notify-wanted-items'>
            <div className='bold'>Successful Purchase</div>
            <p>When you successfully buy an item</p>
          </div>
         </div>

         <div className='setting-wrapper'>
         <Checkbox
            defaultChecked
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />

          <div className='notify-wanted-items'>
            <div className='bold'>Successful Mint</div>
            <p>When you successfully mint an item</p>
          </div>
         </div>

      </div>

      <div className='threshold'>
      <div className='notify-wanted-items'>
            <div className='bold'>Minimum Bid Threshold</div>
            <p>Receive notifications only when you receive offers with a value greater than or equal to this amount of ETH.</p>
      </div>

      <div className="ethereum">
        <div className='ethereum-img'>
        <img src={ethereum} alt={imgBannerName} /> 
        <div className="btm-option">
        <div>ETH</div>
        <p>Ethereum</p>
        </div>
        </div>
        <div className='ethereum-text-field'>
        <TextField id="outlined-basic" placeholder='e.g. 0.005'/>
        </div>
      </div>

      <div className='Input--info'>
      <InfoOutlinedIcon />
      <div class="Input--info-text">This field is required.</div>
      </div>

      </div>
      <div className='connection-list left-spc'>
                <Button  variant="contained" fullWidth id='apply-common' className='Connect notify'>Save</Button>
      </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className='profile-details offer'>
      <div className='offering-secure-set'>
      <Typography variant='caption' className='profile-details-h4'>Offer protection</Typography>
      <p className='feature-detail protect'>Check for item trait changes and items flagged as stolen before a offer is accepted. <Link>Learn more</Link>  <Switch defaultChecked /></p>
      </div>

      <div className='offering-secure-set mini'>
      <Typography variant='caption' className='profile-details-h4'>Set minimum offer</Typography>
      <p className='feature-detail protect'>Set a minimum offer for collections to ignore low offers. &nbsp;<InfoOutlinedIcon /></p>
      </div>

      <div className='watch-mere-offer'>
        <a>View my offers</a>
      </div>

      <div className='non-collection'>
        <div className='illusion-img'> <img src={illustration} alt={imgBannerName} /> </div>
        <Typography variant='h4'>No collections to manage offers</Typography>
        <Typography variant='caption'>You currently don’t have any collections and items to manage offers.</Typography>
      </div>
       
      </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className='profile-details-account'>
      <div className='profile-details general'>
        <Typography variant='h2' className='profile-details-head'>Account support</Typography>
        <p className='feature-detail'>If you need help related to your account, we can help you.</p>
      </div>

      <div className="accordion-navigation">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>General help</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Visit our <Link>help center</Link> to learn how to get started with buying, selling, and creating.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Contact OpenSea Support</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Can't find the answers you’re looking for? <br></br> You can <Link>submit a request</Link> here.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Help with a compromised account</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you believe your account has been compromised, let us know and we can lock your account. This will disable items in your wallet from being bought, sold, or transferred using OpenSea.  <Link>Learn more</Link>.  
          </Typography>

          <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChangeage}
                  placeholder='I have unknown transaction on my account'
                  className='compromised-dropdown'
                >
                  <MenuItem value={10}>I have unknown transaction on my account</MenuItem>
                  <MenuItem value={20}>I have everything but believe my account is compromised</MenuItem>
                  <MenuItem value={30}>Other</MenuItem>
                </Select>
              </FormControl>
          </Box>
          <div>
          <div className='accept'>
            <Checkbox />
            <p>I understand I must complete an identity verification process to unlock my account.</p>
            </div>
          <div className='connection-list lock-account'>
                <Button  variant="contained" fullWidth id='apply-common' className='Connect notify'>Lock account</Button>
          </div>
          </div>


        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Cancel all Ethereum listings and offers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You currently do not have any listings or offers to cancel.
          </Typography>
          <div className="dollar-ethereum">
          <AttachMoneyTwoToneIcon />
          <Typography variant='caption'>This method saves gas compared to cancelling an individual listing or offer.</Typography>
          </div>
        </AccordionDetails>
      </Accordion>

    </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div className='profile-details earning'>
        <Typography variant='h2' className='profile-details-head'>Earnings</Typography>
        <p className='feature-detail'>To access your 2022 Creator Earnings where this wallet is listed as the collection owner on Ethereum, Arbitrum, Avalanche, Klaytn, Optimism, and Polygon using OpenSea, see below.</p>
      <p>As a reminder, you are solely responsible for validating this information and determining what taxes you owe. This information is provided on a collection owner basis. If no collection owner exists, earnings information is listed for the wallet set to receive creator earnings.</p>
      <p>Please note, the information in this report reflects publicly available information from the Ethereum, Arbitrum, Avalanche, Klaytn, Optimism, and Polygon blockchains, except for the estimated USD conversion rate, which was obtained from <Link>www.coincap.io</Link> and measured as of the transaction minute. This report does not include Creator Earnings earned on Solana and BSC.</p>
      <p>For any questions, including requests for Creator Earnings information from Solana and BSC, please reach out to <Link>creatorearnings@opensea.io</Link>.</p>

      <div className="dollar-ethereum earning-patchWork">
          <Typography variant='caption'>This wallet address does not have any creator earnings from sales using OpenSea in 2022.</Typography>
          </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={7}>

      <div className='profile-details earning'>
        <Typography variant='h2' className='profile-details-head'>Developer</Typography>
      </div>
        <div className='mail-access'>
        <div className='left-mail-access'>
          <div className='mail-outlined'><EmailOutlinedIcon /></div>
          <div className='verification-access'>
            <p>Verify your email to get access</p>
            <span>Critical API updates will be sent to this email in the future.</span>
          </div>
        </div>

        <div className='right-mail-access'>
          <div className='docs'><Link>View API docs</Link></div>
          <div className='docs navy'><Link>Verify in profile</Link></div>
        </div>
        
        </div>

        <div className='opensea-API'>
          <Typography variant='caption'>Learn about OpenSea API</Typography>

          <div className='opensea-API-cards'>
            <div className='card1'>
              <AssignmentOutlinedIcon />
              <div className='opensea-API-cards-con'>
              <Typography variant='caption'>Display NFTs in your app</Typography>
              <div>Retrieve NFT data, images, and other information from both on and off-chain sources.</div>
              </div>
            </div>

            <div className='card1'>
              <SmartToyOutlinedIcon />
              <div className='opensea-API-cards-con'>
              <Typography variant='caption'>Buy & Sell NFTS</Typography>
              <div>Easily retrieve and create OpenSea listings and offers.</div>
              </div>
            </div>

            <div className='card1'>
              <InsightsOutlinedIcon />
              <div className='opensea-API-cards-con'>
              <Typography variant='caption'>Analyze NFT & Marketplace Data</Typography>
              <div>Access real-time and historical data about specific NFTs, collections, and the OS marketplace.</div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      </Grid>
    {/* </Box> */}
    </Grid>
    </Box>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Item className={classes.footercls}>
      <Footer />
    </Item>
    </Grid>
    </Grid>
    </Box>
    </div>
  )
}

export default ProfileSettings;
