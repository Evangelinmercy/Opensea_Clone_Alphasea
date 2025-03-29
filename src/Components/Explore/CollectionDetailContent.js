import React, { useState, useRef } from 'react'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Link} from 'react-router-dom'
import FilterListIcon from '@mui/icons-material/FilterList';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MetaMask from '../../img/MetaMask.png'
import cryptobasiccourse from '../../img/cryptobasiccourse.png'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import collection1 from '../../img/collection-1.png'
import collection2 from '../../img/collection-2.webp'
import collection3 from '../../img/collection-3.webp'
import collection4 from '../../img/collection-4.jpg'
import collection5 from '../../img/collection-5.webp'
import collection6 from '../../img/collection-6.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import tiles1 from '../../img/tiles-1.png'
import tiles2 from '../../img/tiles-2.png'
import tiles3 from '../../img/tiles-3.png'
import toast, { Toaster } from 'react-hot-toast';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import Backdrop from "@mui/material/Backdrop";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import MinimizeIcon from "@mui/icons-material/Minimize";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import SecurityIcon from "@mui/icons-material/Security";
import "./CollectionStats.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SwapVertIcon from '@mui/icons-material/SwapVert';

// import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
}));

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
    containwidth:{
        padding: '0 40px',
        gap: '10px',
        alignItems: 'center',
        '@media (max-width: 991.98px)' : {
            padding: '0 10px',
        },
    }
  });

  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



const chains = [
  'BNB Chain',
  'Base',
  'Ethereum',
  'Klaytn',
  'Polygon',
  'Solana',
];

const status = [
    'Listed',
'On auction',
'New',
'Has offer'
]

const CollectionDetailContent = () => {
 
  const classes = useStyles();  

  const [personName, setPersonName] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [recent, setRecent] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [imageBanner, setImageBanner] = useState(null);
const[satusCollection, setSatusCollection] = useState(true);
const[priceCollection, setPriceCollection] = useState(false);
const[rarityCollection, setRarityCollection] = useState(false);
const[quantityCollection, setQuantityCollection] = useState(false);
const[currencyCollection, setCurrencyCollection] = useState(false);

const[tiles11, setTiles11] = useState(false);
const[tiles22, setTiles22] = useState(false);
const[tiles33, setTiles33] = useState(true);



const handleTileOne = () => {
  setTiles11(true)
  setTiles22(false)
  setTiles33(false)
}

const handleTileTwo = () => {
  setTiles11(false)
  setTiles22(true)
  setTiles33(false)
}

const handleTileThree = () => {
  setTiles11(false)
  setTiles22(false)
  setTiles33(true)
}

const toggleStatus = () => {
  setSatusCollection(!satusCollection)
  setPriceCollection(false)
  setRarityCollection(false)
  setQuantityCollection(false)
  setCurrencyCollection(false)
}

const togglePrice = () => {
  setPriceCollection(!priceCollection)
  setSatusCollection(false)
  setRarityCollection(false)
  setQuantityCollection(false)
  setCurrencyCollection(false)
}

const toggleRarity = () => {
  setRarityCollection(!rarityCollection)
  setSatusCollection(false)
  setPriceCollection(false)
  setQuantityCollection(false)
  setCurrencyCollection(false)
}

const toggleQty = () => {
  setQuantityCollection(!quantityCollection)
  setSatusCollection(false)
  setPriceCollection(false)
  setRarityCollection(false)
  setCurrencyCollection(false)
}

const toggleCurrency = () => {
  setCurrencyCollection(!currencyCollection)
  setSatusCollection(false)
  setPriceCollection(false)
  setRarityCollection(false)
  setQuantityCollection(false)
}

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

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };



  
  const hiddenBannerInput = useRef(null);

  const handleImageBannerChange = (event) => {
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
            setImageBanner(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonBannerClick = (file) => {
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
        setImageBanner(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  const handleBannerClick = (event) => {
    hiddenBannerInput.current.click();
  };



  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleRecentChange = (event) => {
    setRecent(event.target.value);
  };

  const handleStatusChange = (event) => {
    const {
      target: { value },
    } = event;
    setStatusList(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [addCart, setaddCart] = useState(false);
  const handleAddCart = () => {
    setaddCart(!addCart)
    if(!addCart){
      toast.success('Add to cart')
    } else {
      toast.success('Remove from cart')
    }
  }

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  
  ];
  const date100Films = [
    { title: "30 mins", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    let [num, setNum] = useState(0);
    let incNum = () => {
      if (num < 10) {
        setNum(Number(num) + 1);
      }
    };
    let decNum = () => {
      if (num > 0) {
        setNum(num - 1);
      }
    };
    let handleMakeButtonChange = (e) => {
      setNum(e.target.value);
  };
  
    const LightTooltip = styled(({ className, ...props }) => (
      <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
      },
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: theme.shadows[6],
        borderRadius: 5,
        fontSize: 12,
        padding: 8,
      },
    }));

    const [openAdvanceSettings, setOpenAdvanceSettings] = useState(false);
    const handleOpenAdvanceSettings = () =>
    setOpenAdvanceSettings(!openAdvanceSettings);
  
    const [openDuration, setOpenDuration] = useState(false);
  const handleOpenDuration = () => setOpenDuration(!openDuration);
  

  const [slice ,setslice] =useState(true);
  const handleseemore = () => {
    setslice(!slice);
  }

  return (
    <div className='ProfileContent collection-detail-page'>
            <Toaster
          position="bottom-right"
          toastOptions={{
            success: {
              style: {
                fontSize: '16px',
                fontWeight: 600,
                color: '#000',
                marginBottom: '80px'
              },
            },
          }}
        />
     <div className='profile-details'>
        <div className='profile-image-banner'>

        <div className='profile-banner-outer'>

         <div className="image-upload-container">
      <div className="box-decoration">

        <div className='profile-banner' onClick={handleBannerClick} style={{ cursor: "pointer" }}>
        <div className='profile-banner-inner'>
        {imageBanner ? (
            <img src={URL.createObjectURL(imageBanner)} alt="upload-image" className="img-display-after" />
          ) : (
            <img src={cryptobasiccourse} alt="upload-image" className="img-display-before" />
          )}
        </div>

        <input
            id="image-upload-input"
            type="file"
            onChange={handleImageBannerChange}
            ref={hiddenBannerInput}
            style={{ display: "none" }}
          />
          <Button
          className="image-upload-button"
          id="image-upload-button-banner"
          onClick={handleUploadButtonBannerClick}
        >
          <CloudUploadIcon/>
        </Button>
        </div>

        
      </div>
    </div>

         </div>


         <div className='profile-img-outer'>

            <div className="image-upload-container">
        <div className="box-decoration">
        <div className='profile-img' onClick={handleClick} style={{ cursor: "pointer" }}>
        <div className='profile-img-inner'>
        {image ? (
          <img src={URL.createObjectURL(image)} alt="upload-profile-image" className="img-display-after" />
          ) : (
          <img src={MetaMask} alt="upload-profile-image" className="img-display-before" />
          )}
        </div>

        <input
          id="image-upload-input"
          type="file"
          onChange={handleImageChange}
          ref={hiddenFileInput}
          style={{ display: "none" }}
          />
        </div>

        
      </div>
    </div>


        </div>
        </div>
        <div className='profile-details-name'><h2>Runaway</h2></div>
        <div className='collection-created-by'><span>By <span className='created-by'>Andrewmcwhae</span></span></div>
        <div className='collection-detail-row'>

        <div className='collection-list-items'>
        <div className='label-block-outer'><label>Items</label><span className='label-block'>11</span></div>
        <div className='label-block-outer'><label>Created</label><span className='label-block'>May 2023</span></div>
        <div className='label-block-outer'><label>Creator earnings </label><span className='label-block'>0%</span></div>
        <div className='label-block-outer'><label>Chain</label><span className='label-block'>Ethereum</span></div>
        <div className='label-block-outer'><label>Category</label><span className='label-block'>Art</span></div>
        </div>

       <div className={slice ? "description-data" : "less"}>
       <p >Limited edition original production music, melodic themes, and musical moments by composer and musician Bobby Yaps. Music and art exist together on the Ethereum blockchain.</p>
      </div>
      <div className='see-more-description' onClick={handleseemore}>
        <Button>
        {slice ? <> see more <KeyboardArrowDownIcon /></> : <> see less <KeyboardArrowDownIcon /></> }
        {/* <div>See more </div> */}
        </Button>
      </div>

        <div className='offer-price desktop-responsive'>
        <div className='label-block-outer column-dir'><span className='label-block'>3 ETH</span><label>total volume</label></div>
        <div className='label-block-outer column-dir'><span className='label-block'>0.02 ETH</span><label>floor price</label></div>
        <div className='label-block-outer column-dir'><span className='label-block'>91%</span><label>listed</label></div>
        <div className='label-block-outer column-dir'><span className='label-block'>102</span><label>owners</label></div>
        <div className='label-block-outer column-dir'><span className='label-block'>23%</span><label>unique owners</label></div>
        </div>

        <div className='offer-price sm-device'>
        <div className='eth'>
        <div className='label-block-outer column-dir'><span className='label-block'>3 ETH</span><label>total volume</label></div>
        <div className='label-block-outer column-dir'><span className='label-block'>0.02 ETH</span><label>floor price</label></div>
        </div>
        <div className='owners'>
        <div className='label-block-outer column-dir'><span className='label-block'>91%</span><label>listed</label></div>
        <div className='label-block-outer column-dir'><span className='label-block'>102</span><label>owners</label></div>
        <div className='label-block-outer column-dir'><span className='label-block'>23%</span><label>unique owners</label></div>
        </div>
        </div>

        <div className='SubPages'>
            <ul>
              <li className='menu ActiveMenu'><Link>Items</Link></li>
              <li className='menu'><Link>Offer</Link></li>
              <li className='menu'><Link>Analytics</Link></li>
              <li className='menu'><Link>Activity</Link></li>
            </ul>

            </div>

        </div>

        <div className="filter-list-flex" id="filter-list-flex">
          {/* <div className='filter-left-Align'>
            <div id="filter-part"><FilterListIcon/></div>
          </div> */}
          <div className='total-item-result'><span>600</span> results</div>
          <div className="w-full">
          <Search className='search-box-filter'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by name"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </div>
          <div className="priceList">
          <FormControl fullWidth className='simple-select-form'>
        <InputLabel id="demo-simple-select-label"  className='input1'>Recently Received</InputLabel>
        <InputLabel id="demo-simple-select-label" className='input2'><SwapVertIcon /></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={recent}
          label="Recently Received"
          onChange={handleRecentChange}
        >
          <MenuItem value={10}>Price high to low</MenuItem>
          <MenuItem value={20}>Price low to high</MenuItem>
        </Select>
      </FormControl>
          </div>
          <div className='titles-tab'>
          <div className='tiles-block'>
             <div onClick={handleTileOne} className={tiles11 ? 'tile-design active-tiles': 'tile-design'}><img src={tiles1} alt="title-block"/></div>
             <div onClick={handleTileTwo} className={tiles22 ? 'tile-design active-tiles': 'tile-design'}><img src={tiles2} alt="title-block"/></div>
             <div onClick={handleTileThree} className={tiles33 ? 'tile-design active-tiles': 'tile-design'}><img src={tiles3} alt="title-block"/></div>
          </div>
          </div>
        </div>
        

        <Grid container spacing={0} className={classes.containwidth} id="containwidth-pdt-collection-items">
        <Grid item xs={12} sm={12} md={12} lg={2} xl={2} className='filter-options-collections'>
        <Item className={classes.headercls} id="filter-sidebar">

            <>
            <h3 onClick={toggleStatus}>Status <ArrowForwardIosIcon/></h3>
            {satusCollection &&
            <div className='status-options'>
            <Button variant="contained">All</Button>
            <Button variant="contained">Listed</Button>
            <Button variant="contained">On auction</Button>
            <Button variant="contained">Has offers</Button>
            <Button variant="contained">New</Button>
            </div>
            }
            </>

            <h3 onClick={togglePrice}>Price <ArrowForwardIosIcon/></h3>
            {priceCollection &&
            <>
            <Box>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={price}
            onChange={handlePriceChange}
            >
            <MenuItem value={10}>USD</MenuItem>
            <MenuItem value={20}>ETH</MenuItem>
            <MenuItem value={30}>SOL</MenuItem>
            </Select>
            </FormControl>
            <TextField id="outlined-basic-1" label="" variant="outlined" />
            <span>to</span>
            <TextField id="outlined-basic-2" label="" variant="outlined" />
            </Box>
            <Button variant="contained" fullWidth id='apply-common'>Apply</Button>
            </>
          }

            <>
            <h3 onClick={toggleRarity}>Rarity Rank <ArrowForwardIosIcon/></h3>
            {rarityCollection &&
            <>
            <Box>
            <TextField id="outlined-basic-1" label="" variant="outlined" value="1"/>
            <span>-</span>
            <TextField id="outlined-basic-2" label="" variant="outlined" value="599" />
            </Box>
            <Button variant="contained" fullWidth id='apply-common'>Apply</Button>
            </>
          } 
            </>

            <>
            <h3 onClick={toggleQty}>Quantity <ArrowForwardIosIcon/></h3>
            {quantityCollection &&
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="All items" />
      <FormControlLabel control={<Checkbox />} label="Single items" />
      <FormControlLabel control={<Checkbox />} label="Bundles" />
    </FormGroup>
  }
    </>



            <>
            <h3 onClick={toggleCurrency}>Currency <ArrowForwardIosIcon/></h3>
            {currencyCollection &&
            <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="ETH" />
      <FormControlLabel control={<Checkbox />} label="WETH" />
    </FormGroup>
    }
</>


        </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={10} xl={10} className='product-col-block'>
        <Item className={classes.headercls}>
        <Grid container spacing={2} className={classes.containwidth} id="filter-id-pdts">

        <Grid className="grid-pdt-block-specific" item xs={6} sm={6} md={4} lg={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null} xl={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null}>
        <Item className={classes.headercls}>
          <Link className='productdetail-redirect' to="/productdetail">
          <div className='product-item'>
          <div className='product-item-img'><div className={tiles22 ? "minheightdiffer" : "" }><img src={collection1} alt="collection1"/></div></div>
          <div className='ratingDetails'>
          <div className='pdt-name-price'><h4 className='pdt-name'>The Self</h4><span className='pdt-price'>200 ETH</span></div>
          <div className='idContent'>#1,723</div>
          </div>
          </div>
          
          </Link>
          <div className='BuynOW-cart'>
          <Button className="btnBuy" variant="contained">
          Buy now
          </Button>
          <Button className="btnCart" variant="contained" onClick={handleAddCart} startIcon={ addCart ? <RemoveShoppingCartIcon /> : <ShoppingCartIcon />}>
         </Button>
          </div>
        </Item>
        </Grid>

        <Grid className="grid-pdt-block-specific" item xs={6} sm={6} md={4} lg={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null} xl={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null}>
        <Item className={classes.headercls}>
        <Link className='productdetail-redirect' to="/productdetail">
          <div className='product-item'>
          <div className='product-item-img'><div className={tiles22 ? "minheightdiffer" : "" }><img src={collection2} alt="collection2"/></div></div>
          <div className='ratingDetails'>
          <div className='pdt-name-price'><h4 className='pdt-name'>The Self</h4><span className='pdt-price'>200 ETH</span></div>
          <div className='idContent'>#1,723</div>
          </div>
          </div>
          </Link>
          <div className='BuynOW-cart'>
          <Button className="btnBuy" variant="contained">
          Buy now
          </Button>
          <Button className="btnCart" variant="contained" onClick={handleAddCart} startIcon={ addCart ? <RemoveShoppingCartIcon /> : <ShoppingCartIcon /> }>
         </Button>
          </div>
        </Item>
        </Grid>

        <Grid  className="grid-pdt-block-specific"  item xs={6} sm={6} md={4} lg={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null} xl={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null}>
        <Item className={classes.headercls}>
        <Link className='productdetail-redirect' to="/productdetail">
          <div className='product-item'>
          <div className='product-item-img'><div className={tiles22 ? "minheightdiffer" : "" }><img src={collection3} alt="collection3"/></div></div>
          <div className='ratingDetails'>
          <div className='pdt-name-price'><h4 className='pdt-name'>The Self</h4><span className='pdt-price'>200 ETH</span></div>
          <div className='idContent'>#1,723</div>
          </div>
          </div>
        </Link>
          <div className='BuynOW-cart'>
          <Button className="btnBuy" variant="contained">
          Buy now
          </Button>
          <Button className="btnCart" variant="contained" onClick={handleAddCart} startIcon={ addCart ? <RemoveShoppingCartIcon /> : <ShoppingCartIcon /> }>
         </Button>
          </div>
        </Item>
        </Grid>

        <Grid className="grid-pdt-block-specific" item xs={6} sm={6} md={4} lg={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null} xl={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null}>
        <Item className={classes.headercls}>
        <Link className='productdetail-redirect' to="/productdetail">
          <div className='product-item'>
          <div className='product-item-img'><div className={tiles22 ? "minheightdiffer" : "" }><img src={collection4} alt="collection4"/></div></div>
          <div className='ratingDetails'>
          <div className='pdt-name-price'><h4 className='pdt-name'>The Self</h4><span className='pdt-price'>200 ETH</span></div>
          <div className='idContent'>#1,723</div>
          </div>
          </div>
          </Link>
          <div className='BuynOW-cart'>
          <Button className="btnBuy" variant="contained">
          Buy now
          </Button>
          <Button className="btnCart" variant="contained" onClick={handleAddCart} startIcon={ addCart ? <RemoveShoppingCartIcon /> : <ShoppingCartIcon /> }>
         </Button>
          </div>
        </Item>
        </Grid>

        <Grid className="grid-pdt-block-specific" item xs={6} sm={6} md={4} lg={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null} xl={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null}>
        <Item className={classes.headercls}>
        <Link className='productdetail-redirect' to="/productdetail">
          <div className='product-item'>
          <div className='product-item-img'><div className={tiles22 ? "minheightdiffer" : "" }><img src={collection6} alt="collection6"/></div></div>
          <div className='ratingDetails'>
          <div className='pdt-name-price'><h4 className='pdt-name'>The Self</h4><span className='pdt-price'>200 ETH</span></div>
          <div className='idContent'>#1,723</div>
          </div>
          </div>
          </Link>
          <div className='BuynOW-cart'>
          <Button className="btnBuy" variant="contained">
          Buy now
          </Button>
          <Button className="btnCart" variant="contained" onClick={handleAddCart} startIcon={ addCart ? <RemoveShoppingCartIcon /> : <ShoppingCartIcon /> }>
         </Button>
          </div>
        </Item>
        </Grid>

        <Grid className="grid-pdt-block-specific" item xs={6} sm={6} md={4} lg={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null} xl={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null}>
        <Item className={classes.headercls}>
        <Link className='productdetail-redirect' to="/productdetail">
          <div className='product-item'>
          <div className='product-item-img'><div className={tiles22 ? "minheightdiffer" : "" }><img src={collection6} alt="collection6"/></div></div>
          <div className='ratingDetails'>
          <div className='pdt-name-price'><h4 className='pdt-name'>The Self</h4><span className='pdt-price'>200 ETH</span></div>
          <div className='idContent'>#1,723</div>
          </div>
          </div>
        </Link>
        <div className='BuynOW-cart'>
          <Button className="btnBuy" variant="contained">
          Buy now
          </Button>
          <Button className="btnCart" variant="contained" onClick={handleAddCart} startIcon={ addCart ? <RemoveShoppingCartIcon /> : <ShoppingCartIcon /> }>
         </Button>
          </div>
        </Item>
        </Grid>


        </Grid>
        </Item>
        </Grid>
        </Grid>

        <div className="make-collection-container-Button">
        <Button variant="contained" onClick={handleOpen}>
          Make collection offer 
          {/* <InfoIcon /> */}
        </Button>
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
            <Box sx={style} className="Choose-blockchain-box-main">
              <div className="Choose-blockchain-title">
                {" "}
                <Typography
                  id="transition-modal-title"
                  variant="h4"
                  component="h4"
                >
                  Make collection offer <InfoIcon />
                </Typography>
                <CloseIcon onClick={handleClose} />
              </div>
              <div className="Choose-blockchain-box collection-offer">
                <div className="Offer-price-titel">
                  <Typography variant="h6" component="h6">
                    Offer price
                  </Typography>
                  <Typography variant="p" component="p">
                    Floor price: 0.0145 ETH <span>|</span>Best offer: 0.0121
                    WETH
                  </Typography>
                </div>

                <Grid container spacing={2} className="make-offer">
                  <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                    <div className="Offer-price-button">
                      <TextField
                        id="outlined-basic"
                        placeholder="My Collection Name"
                        variant="outlined"
                      />
                      <Button>Disabled</Button>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                    <div className="Offer-price-button-two">
                      <Button>Disabled</Button>
                    </div>
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="make-offer">
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="Offer-price-titel">
                      <Typography variant="h6" component="h6">
                        Quantity
                      </Typography>
                      <Typography variant="p" component="p">
                        Offers can be accepted separately
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="Offer-price-button-three">
                      <Button>
                        <span>
                          <Button
                            class="btn btn-outline-primary"
                            type="button"
                            onClick={decNum}
                          >
                            -
                          </Button>
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          value={num}
                          onChange={handleMakeButtonChange}
                        />
                        <span>
                          <Button
                            class="btn btn-outline-primary"
                            type="button"
                            onClick={incNum}
                          >
                            +
                          </Button>
                        </span>
                      </Button>
                    </div>
                  </Grid>
                </Grid>
                <div className="make-collection-container-Trait make-offer">
                  <div
                    className="Trait-heading"
                    onClick={handleOpenAdvanceSettings}
                  >
                    <Typography variant="h6" component="h6">
                      Trait
                    </Typography>
                    {openAdvanceSettings ? <MinimizeIcon /> : <AddIcon />}
                  </div>
                  {openAdvanceSettings && (
                    <>
                      <div className="Trait-Search">
                        <Autocomplete
                          id="size-small-outlined"
                          size="small"
                          options={top100Films}
                          getOptionLabel={(option) => option.title}
                          defaultValue={top100Films[13]}
                          renderInput={(params) => (
                            <TextField {...params} placeholder="Search Trait" />
                          )}
                        />
                        <div className="SearchIcon">
                          <SearchIcon />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="make-collection-container-Trait make-offer">
                  <div className="Trait-heading" onClick={handleOpenDuration}>
                    <Typography variant="h6" component="h6">
                      Duration
                    </Typography>
                    {openDuration ? <MinimizeIcon /> : <AddIcon />}
                  </div>
                  {openDuration && (
                    <>
                      <Grid container>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                          <Stack spacing={0} sx={{ width: 120 }}>
                            <div className="Duration">
                              <Autocomplete
                                id="size-small-outlined"
                                size="small"
                                options={date100Films}
                                getOptionLabel={(option) => option.title}
                                defaultValue={date100Films[13]}
                                renderInput={(params) => (
                                  <TextField {...params} placeholder="7 days" />
                                )}
                              />
                            </div>
                          </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                          <div className="Duration-date-time">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer components={[]}>
                                <DemoItem label="">
                                  <MobileDateTimePicker
                                    defaultValue={dayjs("2022-04-17T15:30")}
                                  />
                                </DemoItem>
                              </DemoContainer>
                            </LocalizationProvider>
                          </div>
                        </Grid>
                      </Grid>
                    </>
                  )}
                </div>

                <div className="DeGods make-offer">
                  <div className="DeGods-image">
                    <div className="DeGods-image">
                      <img src={collection1} alt="Ethereum" />
                    </div>
                    <div className="DeGods-titel">
                      <LightTooltip
                        title="Chain: Ethereum"
                        placement="top-start"
                        arrow
                      >
                        <Typography variant="h5" component="h5">
                          DeGods
                        </Typography>
                      </LightTooltip>
                    </div>
                  </div>
                  <div className="DeGods-heading">
                    <Typography variant="h5" component="h5">
                      -- WETH
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="Make-collection-footer make-offer">
                <Box container>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Button variant="contained">Make offer</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <div className="Make-collection-footer-p">
                        <div className="SecurityIcon">
                          <SecurityIcon />
                        </div>
                        <Typography variant="p" component="p">
                          Collection offers come with protections.
                          <Link href="#">Learn more</Link>
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>

     </div>
    </div>
  )
}

export default CollectionDetailContent

