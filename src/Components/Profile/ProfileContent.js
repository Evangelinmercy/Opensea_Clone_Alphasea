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
import Menu from '@mui/material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import tiles1 from '../../img/tiles-1.png'
import tiles2 from '../../img/tiles-2.png'
import tiles3 from '../../img/tiles-3.png'
import collection1 from '../../img/collection-1.png'
import collection2 from '../../img/collection-2.webp'
import collection3 from '../../img/collection-3.webp'
import collection4 from '../../img/collection-4.jpg'
import collection5 from '../../img/collection-5.webp'
import collection6 from '../../img/collection-6.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import toast, { Toaster } from 'react-hot-toast';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SwapVertIcon from '@mui/icons-material/SwapVert';

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
        padding: '20px 40px 10px',
        gap: '10px',
        // alignItems: 'center',
        '@media (max-width: 991.98px)' : {
            padding: '0 10px',
        },
        '@media (max-width: 767px)':{
          gap: '6px',
          padding: '0',
        },
        '@media (max-width: 1199.98px)':{
          gap: '6px',
        }
    },
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


const ProfileContent = () => {


 
  const classes = useStyles();  

  const [personName, setPersonName] = React.useState([]);
  const [statusList, setStatusList] = React.useState([]);
  const [recent, setRecent] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [image, setImage] = useState(null);
  const [imageBanner, setImageBanner] = useState(null);


  const hiddenFileInput = useRef(null);


  const [addCart, setaddCart] = useState(false);
  const handleAddCart = () => {
    setaddCart(!addCart)
    if(!addCart){
      toast.success('Add to cart')
    } else {
      toast.success('Remove from cart')
    }
  }

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProflie = Boolean(anchorEl);
  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

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

const[satusCollection, setSatusCollection] = useState(false);
const[priceCollection, setPriceCollection] = useState(true);
const[rarityCollection, setRarityCollection] = useState(false);
const[quantityCollection, setQuantityCollection] = useState(false);
const[currencyCollection, setCurrencyCollection] = useState(false);

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

  const togglePrice = () => {
    setPriceCollection(!priceCollection)
    setSatusCollection(false)
    setRarityCollection(false)
    setQuantityCollection(false)
    setCurrencyCollection(false)
  }

  return (
    <div className='ProfileContent'>
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
{/* <Button
className="image-upload-button"
id="image-upload-button"
onClick={handleUploadButtonClick}
>
<CloudUploadIcon/>
</Button> */}
</div>
</div>
</div>


        </div>

        
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
{/* <Button
className="image-upload-button"
id="image-upload-button"
onClick={handleUploadButtonClick}
>
<CloudUploadIcon/>
</Button> */}
</div>
</div>
</div>


        </div>
        <div className='profileFlex'>
        
        <div className='profile-details-acc-date'>
        <div className='profile-details-name'><h2>Unnamed</h2></div>
        <div className='profile-details-acc-dat-left'>
        <span>0x9c3a...9809</span><span>Joined November 2022</span>
        </div>
        </div>
        
        <div>
      <Button
        id="demo-positioned-button"
        aria-controls={openProflie ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openProflie ? 'true' : undefined}
        onClick={handleButtonClick}
        className='dotInfo'
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={openProflie}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><Link to='/profilesettings'>Profile Settings</Link></MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem>*/}
        <MenuItem onClick={handleClose}>Logout</MenuItem> 
      </Menu>
        </div>
      </div>

      <div className='SubPages'>
            <ul>
              <li className='menu ActiveMenu'><Link>Collected</Link></li>
              <li className='menu'><Link>Offer made</Link></li>
              <li className='menu'><Link>Deals</Link></li>
              <li className='menu'><Link>Created</Link></li>
              <li className='menu'><Link to="/favourites">Favorites</Link></li>
              <li className='menu'><Link>Activity</Link></li>
              <li className='menu'><Link>More</Link></li>
            </ul>

            </div>

        <Grid container spacing={0} className={classes.containwidth} id="filter-search-flex" >
        {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className='filter-left-Align'>
        <Item className={classes.headercls} id="filter-part">
            <FilterListIcon/>
        </Item>
        </Grid> */}
        <Grid item xs={0} sm={0} md={0} lg={1} xl={1}>
        <Item className={classes.headercls}>
        <FormControl className={classes.formControl} fullWidth id="status-profileBox">
        <InputLabel id="demo-multiple-checkbox-label">Status</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={statusList}
          onChange={handleStatusChange}
          input={<OutlinedInput label="Status" style={{ width: '180 !important' }} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          style={{ width: '180 !important' }}
        >
          {status.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={statusList.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </Item>
        </Grid>
        <Grid item xs={0} sm={0} md={0} lg={1} xl={1}>
        <Item className={classes.headercls}>
        <FormControl fullWidth className="status-profileBox">
        <InputLabel id="demo-multiple-checkbox-label">Chains</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Chains" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {chains.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </Item>
        </Grid>
        <Grid item xs={8} sm={9} md={5} lg={5} xl={5}>
        <Item className={classes.headercls}>
        <Search className='search-box-filter'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by name"
              inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
        </Item>
        </Grid>
        <Grid item xs={2} sm={1} md={2} lg={2} xl={2} className='select-option-view-menu'>
        <Item className={classes.headercls}>
        <FormControl fullWidth className="status-profileBox select-option">
        <InputLabel id="demo-simple-select-label" className='input1'>Select Options</InputLabel>
        <InputLabel id="demo-simple-select-label" className='input2'><SwapVertIcon /></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={recent}
          label="Recently Received"
          onChange={handleRecentChange} className='recentlyListed'
        >
          <MenuItem value={10}>Recently received</MenuItem>
          <MenuItem value={20}>Price High to low</MenuItem>
          <MenuItem value={30}>Price low to high</MenuItem>
          <MenuItem value={40}>Highest floor</MenuItem>
          <MenuItem value={50}>Best Offer</MenuItem>
          <MenuItem value={60}>Recently Listed</MenuItem>
          <MenuItem value={70}>Recently Created</MenuItem>
          <MenuItem value={80}>Oldest</MenuItem>
        </Select>
        </FormControl>
        </Item>
        </Grid>

        <Grid item xs={0} sm={0} md={0} lg={2} xl={2} >
        <Item className={classes.headercls}>
          <div className='tiles-block'>
             <div onClick={handleTileOne} className={tiles11 ? 'tile-design active-tiles': 'tile-design'}><img src={tiles1} alt="title-block"/></div>
             <div onClick={handleTileTwo} className={tiles22 ? 'tile-design active-tiles': 'tile-design'}><img src={tiles2} alt="title-block"/></div>
             <div onClick={handleTileThree} className={tiles33 ? 'tile-design active-tiles': 'tile-design'}><img src={tiles3} alt="title-block"/></div>
          </div>
        </Item>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
        <Item className={classes.headercls}>
        </Item>
        </Grid> */}
        </Grid>

        <Grid container spacing={4} className={classes.containwidth} id="containwidth-pdt-collection-items">
        <Grid item xs={12} sm={12} md={3} lg={2} xl={2} className='filter-options-collections'>
        <Item className={classes.headercls} id="filter-sidebar">
                        
            <h3 onClick={togglePrice}>Price <ArrowForwardIosIcon/></h3>
            {priceCollection &&
            <>
            <Box>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Coin</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={price}
            label="Price"
            placeholder="USD"
            onChange={handlePriceChange}
            >
            <MenuItem value={10}>USD</MenuItem>
            <MenuItem value={20}>ETH</MenuItem>
            <MenuItem value={30}>SOL</MenuItem>
            </Select>
            </FormControl>
            <TextField id="outlined-basic-1" label="Min" variant="outlined" />
            <span>to</span>
            <TextField id="outlined-basic-2" label="Max" variant="outlined" />
            </Box>
            <Button variant="contained" fullWidth id='apply-common'>Apply</Button>
            </>
          }
            

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
        {/* <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
        <Item className={classes.headercls}>
            <h2>No items found for this search</h2>
            <Button variant="contained">Back to all items</Button>
        </Item>
        </Grid> */}


        <Grid item xs={12} sm={12} md={9} lg={10} xl={10} className='product-col-block'>
        <Item className={classes.headercls}>
        <Grid container spacing={0} className={classes.containwidth} id="filter-id-pdts">

        <Grid className="grid-pdt-block-specific" item xs={6} sm={4} md={4} lg={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null} xl={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null}>
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

        <Grid className="grid-pdt-block-specific" item xs={6} sm={4} md={4} lg={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null} xl={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null}>
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

        <Grid  className="grid-pdt-block-specific"  item xs={6} sm={4} md={4} lg={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null} xl={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null}>
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

        <Grid className="grid-pdt-block-specific" item xs={6} sm={4} md={4} lg={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null} xl={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null}>
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

        <Grid className="grid-pdt-block-specific" item xs={6} sm={4} md={4} lg={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null} xl={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null}>
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

        <Grid className="grid-pdt-block-specific" item xs={6} sm={4} md={4} lg={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null} xl={tiles11 ? 3 : tiles22 ? 2 : tiles33 ? 4 : null}>
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

     </div>
    </div>
  )
}

export default ProfileContent
