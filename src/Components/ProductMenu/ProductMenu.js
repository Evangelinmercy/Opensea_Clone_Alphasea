import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './ProductMenu.css'
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import thumbalin from '../../img/thumb-logo.png';
import qr from '../../img/qr-bar.png'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DoDisturbAltOutlinedIcon from '@mui/icons-material/DoDisturbAltOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import { pink, blue } from '@mui/material/colors';
import togglebtn from '../../img/togglebtn.png';
import Menuclose from '../../img/Menuclose.png';
import {Link} from 'react-router-dom'
import customer from '../../img/customer.svg'
import maptrace from '../../img/maptrace.svg'
import guarantee from '../../img/guarantee.svg'
import bestseller from '../../img/bestseller.svg'
import bill from '../../img/bill.svg'
import product from '../../img/product.svg'
import supplychain from '../../img/supplychain.svg'
import RefreshIcon from '@mui/icons-material/Refresh';
import Files from '../../img/files.svg';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import Pagination from '@mui/material/Pagination';
import FilterPopup from './FilterPopup';
import MessagePopup from './MessagePopup';
import BlockPopup from './BlockPopup';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import apifile from '../../img/api-file.png'
import csvfile from '../../img/csv-file.png'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import TextField from '@mui/material/TextField';
import filelocationpath from '../../img/filelocationpath.png'
import approvedicon from '../../img/approvedicon.png'
import cancelicon from '../../img/cancelicon.png'
import pendingicon from '../../img/pendingicon.png'

import closeMenu from "../../img/closemenu.png";
import File from "../../img/system-file.svg";
import Bag from "../../img/bag-img.png";
import Print from '../../img/print.svg';
import Code from "../../img/code.png";
import "./Product.css";
import PendingAppovalPopup from './PendingAppovalPopup'
import LockedPopup from './LockedPopup';
import QrPopup from './QrPopup';
import Transaction from './Transaction'

import Polygoscan from '../../img/polygonscan-logo.png'
import './Transaction.css'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import TabTransaction from './TabTransaction'
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import Action from './Action';


const today = dayjs();
const yesterday = dayjs().subtract(1, 'day');
const todayStartOfTheDay = today.startOf('day');
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#fff',
  border: 'none',
  p: 4,
  borderRadius: '20px'
};

const styleUploadFile = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: '#fff',
  border: 'none',
  p: 4,
  borderRadius: '20px'
};



  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '0px',
    color: theme.palette.text.secondary,
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
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

    reasonBlock:{
        fontSize:'24px',
        fontWeight:'600'
    },
    containerproduct: {
      justifyContent: 'center'
    }
  });

function createData(name, thumbalin, fat, carbs, protein, status) {
  return { name, thumbalin, fat, carbs, protein, status};
}

const rows = [
  createData('ADD-15533-11', thumbalin, 'FEDERIC', 'SMITH', 'D4384DX', 'Accepted' ),
  createData('ADD-15533-11', thumbalin, 'FEDERIC', 'SMITH', 'D4384DX', 'Pending Approved'),
  createData('ADD-15533-11', thumbalin, 'FEDERIC', 'SMITH', 'D4384DX', 'Locked'),
  createData('ADD-15533-11', thumbalin, 'FEDERIC', 'SMITH', 'D4384DX', 'Accepted' ),
  createData('ADD-15533-11', thumbalin, 'FEDERIC', 'SMITH', 'D4384DX', 'Locked'),
];


function uploadFile(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const uploadFileRow = [
  uploadFile('15/02/2023 16:44', '102s', 'test product 1.csv', approvedicon),
  uploadFile('15/02/2023 16:44', '102s', 'test product 1.csv', cancelicon),
  uploadFile('15/02/2023 16:44', '102s', 'test product 1.csv', pendingicon),
];


const ProductMenu = () => {
    const classes = useStyles();

 const [menuOpen, setMenuOpen] = useState(true)

 const openMenuHandler = () => {
    setMenuOpen(false)
 }

 const closeMenuHandler = () => {
    setMenuOpen(true)
 }

 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openStep, setOpenStep] = React.useState(false);
  const handleStepOpen = () => {
    setOpenStep(true);
    setOpen(false);
  }
  const handleStepClose = () => setOpenStep(false);


  const [openUploadFile, setOpenUploadFile] = React.useState(false);
  const handleUploadFileOpen = () => {
    setOpenUploadFile(true);
    setOpenStep(false);
  }
  const handleUploadFileClose = () => setOpenUploadFile(false);

  const [openProduct, setOpenProduct] = useState(false);
  const handleOpenProduct = () => setOpenProduct(true);
  const handleCloseProduct = () => setOpenProduct(false);

  const [openPolygonTrans, setOpenPolygonTrans] = useState(false);
  const handleOpenPolygonTrans = () => setOpenPolygonTrans(true);
  const handleClosePolygonTrans = () => setOpenPolygonTrans(false);

  const [openQRPopUp, setOpenQRPopUp] = useState(false);
  const handleOpenQRPopUp = () => setOpenQRPopUp(true);
  const handleCloseQRPopUp = () => setOpenQRPopUp(false);

  return (
    
    <div className='list-full-cnt dashboard-page '>
         <div>
   <Header />
   </div>
       <Box sx={{ flexGrow: 1 }}>
       <Grid container className={classes.containerproduct} id="containerproduct"> 



    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='padding-lr-80px'>
       <div className='start-end-date calender-date'>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'DateTimePicker',
          'TimePicker',
          'DateRangePicker',
        ]}
      >
        <DemoItem>
          <DatePicker
            defaultValue={yesterday}
            disablePast
            views={['year', 'month', 'day']}
          />
        </DemoItem>

        <DemoItem>
          <DatePicker
            defaultValue={yesterday}
            disablePast
            views={['year', 'month', 'day']}
          />
        </DemoItem>
        
      </DemoContainer>
    </LocalizationProvider>
       </div>
    </Grid>


    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='padding-lr-80px'>
<div className='listbody listbody-pdt-menu'>
<div className='filter-btn filter-btn-pdt-menu'>

<div className='filter-filed'>
<div className='filter-box'>
    {/* <Button variant="contained">{<SearchIcon />}Filter</Button> */}
    <FilterPopup />
<Button className='filter-color'>{<RefreshIcon color='primary'/>}Filter Reset</Button>
</div>
<div>
<Button variant="contained">
  Export<img src={Files} alt={Files} />
      </Button>    
</div>
</div>

  </div>
  </div>

  <div className='tablebody tablebodyproduct'>
  <TableContainer>
  <Table className='tableScroll'>
        <TableHead>
          <TableRow className='row-head'> 
          <TableCell className='head-bg'></TableCell>
            <TableCell className='head-bg'>Product</TableCell>
            <TableCell className='head-bg'>Thumbnail</TableCell>
            <TableCell className='head-bg'>Product name</TableCell>
            <TableCell className='head-bg'>Category</TableCell>
            <TableCell className='head-bg'>Internal REF</TableCell>
            <TableCell className='head-bg'>Status</TableCell>
            <TableCell className='head-bg'>Product Info</TableCell>
            <TableCell className='head-bg'>Action</TableCell>
          </TableRow>
         </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell padding="checkbox" className='body-bg'> 
          <Checkbox
            color="primary"
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
              <TableCell component="th" scope="row" className='body-bg'>{row.name}</TableCell>
              <TableCell className='body-bg'><div className='thumbalin'><img src={row.thumbalin} alt={thumbalin} /></div></TableCell>
              <TableCell className='body-bg'>{row.fat}</TableCell>
              <TableCell className='body-bg'>{row.carbs}</TableCell>
              <TableCell className='body-bg'>{row.protein}</TableCell>
              <TableCell className='body-bg'>{row.status}</TableCell>
              <TableCell className='body-bg'><Link className='product-info-link'><InfoIcon/> Product nfo</Link></TableCell>
              <TableCell className='body-bg'>
                <div className='icon-space icon-space-buttons'>
                  <div onClick={handleOpenQRPopUp} className='qr-code-pdt'><img src={qr} alt="qr-code" /></div>
                <Button>{<SaveAltIcon  color="primary" />}</Button>  
                <MessagePopup/>
                <BlockPopup />
               <Button>{<PinDropOutlinedIcon sx={{ color: pink[500] }} />}{row.action}
                </Button> 
                </div>
                </TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
      </TableContainer>

           <div className='pagination-numb'>
           <Pagination count={9} color="primary" shape="rounded"/>
          </div>

      <div className='download-keys'>
      <div onClick={handleOpen} className='save-icon'>{<SaveAltIcon sx={{ color: blue[500] }} />}</div>
      <div className='print-icon'>{<LocalPrintshopOutlinedIcon  />}</div>
      <div className='print-icon'>{<DoDisturbAltOutlinedIcon  />}</div>
      </div>
  </div>
     </Grid>


     <Modal
        open={open}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="responsive-style-block"
      >
        
        <Box sx={style}>
        <div className='CloseOption-pop-up' onClick={handleClose}><HighlightOffIcon/></div>
          <Typography id="modal-modal-title" variant="h5" component="h2" style={{textAlign: 'center'}}>
          Select the type of imported product
          </Typography>
          <div className='csv-api-block'>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container> 

               <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className='apicsv-checkbox'>
                  <div onClick={handleStepOpen} className='apicsv-img'><img src={apifile} alt="apifile" /></div>
                  <div className='apicsvfile-checkbox-inner'>
                <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="API"
                labelPlacement="API"
                />
                </FormGroup>
                </FormControl>
                </div>
                </div>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className='apicsv-checkbox'>
                  <div onClick={handleStepOpen} className='apicsv-img'><img src={csvfile} alt="csvfile" /></div>
                  <div className='apicsvfile-checkbox-inner'>
                  <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                  <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label="CSV"
                  labelPlacement="CSV"
                  />
                  </FormGroup>
                  </FormControl>
                  </div>
                </div>
                </Grid>

                </Grid>
                </Box>
             
          </div>
        </Box>
      </Modal>

      <Modal
        open={openStep}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="responsive-style-block"
      >
        
        <Box sx={style}>
        <div className='CloseOption-pop-up' onClick={handleStepClose}><HighlightOffIcon/></div>
          <Typography id="modal-modal-title" variant="h5" component="h2" style={{textAlign: 'center'}}>
          How to import products via CSV file
          </Typography>
          <div className='csv-api-block'>
            

            <div className='three-steps'>

               <div className='first-step'>
                 <p className='steps-font-size-weight'>Step 1</p>    
                 <span>Download the sample document</span>         
                 <Button variant="contained" endIcon={<CloudDownloadIcon />}>Download</Button>
               </div>

               <div className='second-step'>
                <p className='steps-font-size-weight'>Step 2</p>
                <span>Fill in all the fields as indicated in the sample document</span>
                <div className='file-path-location'><img src={filelocationpath} alt="file-location-path"/></div>
               </div>

               <div className='third-step'>
                <p className='steps-font-size-weight'>Step 3</p>
                <span>Import the file in CSV format</span>
                <Button onClick={handleUploadFileOpen} variant="contained" endIcon={<CloudUploadIcon />}>Upload</Button>
               </div>

            </div>

             
          </div>
        </Box>
      </Modal>


      <Modal
        open={openUploadFile}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="responsive-style-block"
      >
        
        <Box sx={styleUploadFile}>
        <div className='CloseOption-pop-up' onClick={handleUploadFileClose}><HighlightOffIcon/></div>
         
        <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date and Thumbnailime</TableCell>
            <TableCell align="right">Processing time</TableCell>
            <TableCell align="right">File name</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {uploadFileRow.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={handleOpenProduct}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right"><img src={row.carbs} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
        </Box>
      </Modal>


      <Modal
        open={openProduct}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style} className="popBOX BlockPopup productpopup productpopup-shanmg">
        <div className="menu" onClick={handleCloseProduct} ><Link><img src={closeMenu} alt="closeMenu" /></Link></div>
        <div >
          <div id="alert-dialog-description" className='product-head bag-grid'>
          <div className="logo-dt">
          <img src={Bag} alt="bag"/>
          </div>
          <div className="logo-dt">
          <img src={Bag} alt="bag"/>
          </div>
          <div className="logo-dt">
          <img src={Bag} alt="bag"/>
          </div>
          <div className="logo-dt">
          <img src={Bag} alt="bag"/>
          </div>
          </div>
  
              <div className="product-box-direct">
              <div className="product-detail-box">
                <p className="product-head-title">Product</p>
                <p><b>Boloso de mano luis vution</b></p>
                <p><b>Short description</b></p>
                <p className="sub-para">Bolso de mano luis vution echo con piel devaca </p>
                <p><b>Long  description</b></p>
                <p className="sub-para">Bolso de mano luis vution echo con piel devaca </p>
             </div>
             <div className="client-id">
                <div className="client-details">
                <p className="client-id-head">Client ID </p>
                 <p className="id-value">xxx1112s</p>
                </div>
                <div className="client-details">
                <p className="client-id-head">ID PRODUCT </p>
                 <p className="id-value">xxx1112-001</p>
                </div>
              <div className="client-details">
              <p className="client-id-head">Category</p>
                 <p className="id-value">Fashion</p>
              </div>
                 <p className="client-id-head">Status Product</p>
            </div>
              </div>
            
       
         
 
               <div className="inital-details">
                 <div className="inital-block">
                    <div className="brand-name">
                        <p className="louis-name">D1113s</p>
                        <p><b>Brand</b></p>
                        <p className="louis-name">Louis-vution</p>
                        <p><b>Initial_Stack</b></p>
                        <p className="louis-name">10</p>
                    </div>
                 </div>
                 <div className="blockchain">
                    <p><b>Blockchain Info</b></p>
                    <div onClick={handleOpenPolygonTrans}><Link href="#" className="map-loc">Polygon Scan</Link></div>
                 </div>
               </div>

               <Grid container spacing={0}>
               <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
             <div className="product-detail-box">
                        <p><b>Measures</b></p>
                        <p className="louis-name">30x20</p>
                        <p><b>Unit of Meassurment</b></p>
                        <p className="louis-name">CM</p>
                        <p><b>Material</b></p>
                        <p className="louis-name">Pel de vaca</p>
                        <p><b>Ingredient</b></p>
                        <p className="louis-name">N/A</p>
                        <p><b>Location</b></p>
                        <p className="louis-name">Passing de grace 88, Barcelona, CP 08008</p>
                        <Link href="#" className="map-loc">Click see on the map</Link>
                        <p><b>License Attachments</b></p>
                      <Link href="#" className="download-link">Download License</Link>
                      <p><b>Warranty</b></p>
                      <p className="louis-name">2 Years</p>
             </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
           <div className="product-detail-box">
                <p className="product-head-title">Warranty</p>
               <div className="extension-inital">
                   <p className="inital-head-part">Initial</p>
                   <p className="inital-years">2 Years</p>
               </div>
               <div className="extension-inital">
                   <p className="inital-head-part">Extension permitet</p>
                   <p className="inital-years">Yes, 1 Years</p>
               </div>
               <div className="extension-inital">
                   <p className="inital-head-part">Price Extension Warranty </p>
                   <p className="inital-years">60 $</p>
               </div>
               <div className="extension-inital">
                   <p className="inital-head-part">warranty extension applied </p>
                   <p className="inital-years">Yes, 10-10-2022</p>
               </div>
             </div>
          </Grid>
               </Grid>
               
        </div>
        </Box>
      </Modal>

      <Modal className="transaction-bill"
        open={openPolygonTrans}
        onClose={handleClosePolygonTrans}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style} className="popBOX BlockPopup Transaction productpopup-shanmg">
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

      <Modal 
        open={openQRPopUp}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style} className="popBOX BlockPopup productpopup productpopup-shanmg">
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

     </Grid>

  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

  <Item className={classes.footercls}>
      <Footer />
    </Item>
    </Grid>

       
       </Box>
    </div>
  )
}

export default ProductMenu
