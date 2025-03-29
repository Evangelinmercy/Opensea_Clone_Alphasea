import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './ProductDetail.css'
import crayons from '../../img/crayons-img.png'
import ethereum from '../../img/ethereum-logo.svg'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { tooltipClasses } from '@mui/material/Tooltip';
import LaunchIcon from '@mui/icons-material/Launch';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckIcon from '@mui/icons-material/Check';
import HandshakeIcon from '@mui/icons-material/Handshake';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CountdownTimer from './CountdownTimer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NfcIcon from '@mui/icons-material/Nfc';
import LanguageIcon from '@mui/icons-material/Language';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ListIcon from '@mui/icons-material/List';
import toast, { Toaster } from 'react-hot-toast';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import {Link} from 'react-router-dom'
import collection1 from '../../img/collection-1.png'
import collection2 from '../../img/collection-2.webp'
import collection3 from '../../img/collection-3.webp'
import collection4 from '../../img/collection-4.jpg'
import collection5 from '../../img/collection-5.webp'
import collection6 from '../../img/collection-6.png'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '0px',
    color: theme.palette.text.secondary,
  }));


const useStyles = makeStyles({
    leftcls:{
        background: 'transparent !important',
        border: 'none !important',
        padding: '0 20px !important',
        boxShadow: 'none !important',
        '@media (max-width: 991.98px)' : {
          padding: '0 !important',
        }
    },
    rightcls: {
        background: 'transparent !important',
        border: 'none !important',
        padding: '0 20px !important',
        boxShadow: 'none !important',
        '@media (max-width: 991.98px)' : {
          padding: '0 !important',
        }
    },
    headercls: {
      background: 'transparent !important',
      borderRadius: '0px !important',
      boxShadow:'none !important',
  }

  });

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
      title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
      title: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
      },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[6],
      borderRadius: 5,
      fontSize: 12,
      padding:8,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(0.08, 129.12, 1, 2, 'estubbs'),
    createData(0.08, 129.12, 1, 2, 'estubbs'),
    createData(0.08, 129.12, 1, 2, 'estubbs'),
    createData(0.08, 129.12, 1, 2, 'estubbs'),
    createData(0.08, 129.12, 1, 2, 'estubbs'),
  ];


function createDataOffer(name, calories, fat, carbs, protein, offer) {
  return { name, calories, fat, carbs, protein, offer };
}

const rowstwo = [
    createDataOffer(0.08, 129.12, 1, 50, 20),
    createDataOffer(0.08, 129.12, 1, 50, 20),
    createDataOffer(0.08, 129.12, 1, 50, 20),
    createDataOffer(0.08, 129.12, 1, 50, 20),
    createDataOffer(0.08, 129.12, 1, 50, 20),
];

function createDataItem(price, from, Date) {
  return { price, from, Date};
}

const rowsitem = [
  createDataItem(0.0389 , "A0ECAF",  "10h"),
  createDataItem(0.0389, "A0ECAF",  "13h"),
  createDataItem(0.0389, "A0ECAF", "14h"),
  createDataItem(0.0389, "A0ECAF", "20h"),
  createDataItem(0.0389, "A0ECAF",  "24h"),
  createDataItem(0.0389 , "A0ECAF",  "10h"),
  createDataItem(0.0389, "A0ECAF",  "13h"),
  createDataItem(0.0389, "A0ECAF", "14h"),
  createDataItem(0.0389, "A0ECAF", "20h"),
  createDataItem(0.0389, "A0ECAF",  "24h"),
  createDataItem(0.0389 , "A0ECAF",  "10h"),
  createDataItem(0.0389, "A0ECAF",  "13h"),
  createDataItem(0.0389, "A0ECAF", "14h"),
  createDataItem(0.0389, "A0ECAF", "20h"),
  createDataItem(0.0389, "A0ECAF",  "24h"),
];

const ProductDetail = () => {

    const classes = useStyles();
    

    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;

    const [addCart, setaddCart] = useState(false);
    const handleAddCart = () => {
      setaddCart(!addCart)
      if(!addCart){
        toast.success('Add to cart')
      } else {
        toast.success('Remove from cart')
      }
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

  const[accordion, setaccordion] = useState(false);
  const handleAccordion = () => {
    setaccordion(true)
  }

  return (
    <div className="product-detail product-detail-main-content-page">
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            style: {
              fontSize: "16px",
              fontWeight: 600,
              color: "#000",
              marginBottom: "80px",
            },
          },
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className='field-mobile-response'>
            <Item className={classes.leftcls}>
              <div className="field-trip">
                <h5>
                  Field Trip by Andrew McWhae <VerifiedSharpIcon />{" "}
                </h5>
                <div className="coin-icon share">
                  <LightTooltip title="Make a deal" placement="top-start" arrow>
                    <Button>
                      <HandshakeIcon />
                    </Button>
                  </LightTooltip>

                  <LightTooltip title="Share" placement="top-start" arrow>
                    <Button>
                      <IosShareIcon />
                    </Button>
                  </LightTooltip>

                  <LightTooltip title="More" placement="top-start" arrow>
                    <Button>
                      <MoreHorizIcon />
                    </Button>
                  </LightTooltip>
                </div>
              </div>
              <div className="trip">
                <h2>Field Trip #358</h2>
                <p>
                  Owned by <span>estubbs</span>
                </p>
              </div>

              <div className="leftside">
                <div className="item-summary">
                  <div className="coin-icon">
                    <LightTooltip
                      title="Chain: Ethereum"
                      placement="top-start"
                      arrow
                    >
                      <Button>
                        <img src={ethereum} alt="ethereum" />
                      </Button>
                    </LightTooltip>
                  </div>
                  <div className="coin-icon share">
                    <LightTooltip
                      title="View Original media"
                      placement="top-start"
                      arrow
                    >
                      <Button className="share">
                        <LaunchIcon />
                      </Button>
                    </LightTooltip>
                    <p>0</p>
                    <LightTooltip title="Favorite" placement="top-start" arrow>
                      <Button>
                        <FavoriteBorderIcon />
                      </Button>
                    </LightTooltip>
                  </div>
                </div>

                <div className="left-crayons">
                  <img src={crayons} alt="approved" />
                </div>
              </div>

              <div className="description">
                <div className="head-title">
                  <h3>
                    <MenuIcon /> Description{" "}
                  </h3>
                </div>
              </div>

              <div className="para">
                <div className="descr-para">
                  <h6>
                    By <span>56919B</span> <VerifiedSharpIcon />
                  </h6>
                  <p>
                    This edition of Field Trip consists of overlapping lines
                    styled using white outlines & transparent square strokes in
                    a zoom field. Colors are from the Rich Rainbow palette and
                    the shapes are set against a solid dark background.
                  </p>
                </div>
              </div>

              <div className="traits">
                <Accordion className="inner-accor">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {" "}
                      <LabelOutlinedIcon />
                      Traits
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <Link
                              to="/collection-detail"
                              className="trait-card-link"
                            >
                              <div className="trait-card">
                                <div className="text-sec">Background</div>
                                <p>
                                  Yellow <span>18%</span>
                                </p>
                                <div className="floor">
                                  Floor: <span>0.849 </span>
                                  <span>ETH</span>
                                </div>
                              </div>
                            </Link>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <Link
                              to="/collection-detail"
                              className="trait-card-link"
                            >
                              <div className="trait-card">
                                <div className="text-sec">Beard</div>
                                <p>
                                  Stubble <span>19%</span>
                                </p>
                                <div className="floor">
                                  Floor: <span>0.719 </span>
                                  <span>ETH</span>
                                </div>
                              </div>
                            </Link>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <Link
                              to="/collection-detail"
                              className="trait-card-link"
                            >
                              <div className="trait-card">
                                <div className="text-sec">Eyes</div>
                                <p>
                                  Blue <span>12%</span>
                                </p>
                                <div className="floor">
                                  Floor: <span>0.74 </span>
                                  <span>ETH</span>
                                </div>
                              </div>
                            </Link>
                          </Grid>
                        </Grid>

                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <Link
                              to="/collection-detail"
                              className="trait-card-link sec"
                            >
                              <div className="trait-card">
                                <div className="text-sec">Fur</div>
                                <p>
                                  Bengal <span>6%</span>
                                </p>
                                <div className="floor">
                                  Floor: <span>0.74 </span>
                                  <span>ETH</span>
                                </div>
                              </div>
                            </Link>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <Link
                              to="/collection-detail"
                              className="trait-card-link sec"
                            >
                              <div className="trait-card">
                                <div className="text-sec">Necklace</div>
                                <p>
                                  Gold Chains <span>3%</span>
                                </p>
                                <div className="floor">
                                  Floor: <span>2.39 </span>
                                  <span>ETH</span>
                                </div>
                              </div>
                            </Link>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <Link
                              to="/collection-detail"
                              className="trait-card-link sec"
                            >
                              <div className="trait-card">
                                <div className="text-sec">Shirt</div>
                                <p>
                                  Tracksuit <span>4%</span>
                                </p>
                                <div className="floor">
                                  Floor: <span>0.85 </span>
                                  <span>ETH</span>
                                </div>
                              </div>
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="accordion">
                <Accordion className="inner-accor">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {" "}
                      <VerticalSplitOutlinedIcon /> About Field Trip by Andrew
                      McWhae
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Field Trip is Andrew McWhae's genesis NFT collection. It
                      consists of 600 pieces of generative artworks composed of
                      brightly colored shapes arranged in lively patterns. Going
                      on a field trip implies experiencing something other than
                      your normal environment and that's exactly what I want the
                      viewer to do. At its core it is a collision-avoidance
                      algorithm that places lines which are then drawn using
                      stylized geometry. Every output is a different style or
                      color palette; no two are simply different seeds.Category
                      Art.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="detail detail-items-customer">
                <Accordion className="inner-accor">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <BallotOutlinedIcon /> Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="flex-detail-outer">
                        <div className="flex-detail">
                          <label>Contract Address</label>
                          <span>
                            <a>0xb59b...401d</a>
                          </span>
                        </div>
                        <div className="flex-detail">
                          <label>Token ID</label>
                          <span>
                            <a>358</a>
                          </span>
                        </div>
                        <div className="flex-detail">
                          <label>Token Standard</label>
                          <span>ERC-721</span>
                        </div>
                        <div className="flex-detail">
                          <label>Chain</label>
                          <span>Ethereum</span>
                        </div>
                        <div className="flex-detail">
                          <label>Last Updated</label>
                          <span>9 months ago</span>
                        </div>
                        <div className="flex-detail">
                          <div className="earning">
                            <label>Creator Earnings</label>
                            <LightTooltip
                              title="The creator(s) of this item will receive 10% for every sale"
                              placement="top-start"
                              arrow
                            >
                              <Button className="share">
                                <InfoOutlinedIcon />
                              </Button>
                            </LightTooltip>
                          </div>

                          <span>10%</span>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Item>
          </Grid>

          <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className='field-desktop-response'>
            <Item className={classes.rightcls}>
              <div className="field-trip">
                <h5>
                  Field Trip by Andrew McWhae <VerifiedSharpIcon />{" "}
                </h5>
                <div className="coin-icon share">
                  <LightTooltip title="Make a deal" placement="top-start" arrow>
                    <Button>
                      <HandshakeIcon />
                    </Button>
                  </LightTooltip>

                  <LightTooltip title="Share" placement="top-start" arrow>
                    <Button>
                      <IosShareIcon />
                    </Button>
                  </LightTooltip>

                  <LightTooltip title="More" placement="top-start" arrow>
                    <Button>
                      <MoreHorizIcon />
                    </Button>
                  </LightTooltip>
                </div>
              </div>

              <div className="trip">
                <h2>Field Trip #358</h2>
                <p>
                  Owned by <span>estubbs</span>
                </p>
              </div>

              <div className="views">
                <h4># 355</h4>
                <p>
                  {" "}
                  <RemoveRedEyeIcon /> 150 Views
                </p>
                <p>
                  {" "}
                  <ApartmentIcon /> Art
                </p>
              </div>

              <div className="sale">
                <div className="counter">
                  <div className="sale-head">
                    <h2>Sale ends September 16, 2023 at 11:44 AM </h2>
                  </div>
                  <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                </div>

                <div className="counter price">
                  <h2>Current price</h2>
                  <h3>
                    0.0911 ETH <span>$145.43</span>
                  </h3>

                  <div className="two-btn">
                    <div className="BuynOW-cart">
                      <Button className="btnBuy" variant="contained">
                        Buy now
                      </Button>
                      <Button
                        className="btnCart"
                        variant="contained"
                        onClick={handleAddCart}
                        startIcon={
                          addCart ? (
                            <RemoveShoppingCartIcon />
                          ) : (
                            <ShoppingCartIcon />
                          )
                        }
                      ></Button>
                    </div>
                    <Button className="make-offer">
                      {" "}
                      <SellOutlinedIcon /> Make offer{" "}
                    </Button>
                  </div>

                  <div className="support">
                    <div className="support-creator-icon">
                      <VolunteerActivismIcon />
                    </div>
                    <div className="support-creator-info">
                      Supports creator{" "}
                      <span>
                        This listing is paying the collection creator their
                        suggested creator earnings.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="listing">
                <Accordion className="inner-accor">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {" "}
                      <SellOutlinedIcon /> Listings
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="table-accordion">
                    <Typography>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">Price</TableCell>
                              <TableCell align="center">USD Price</TableCell>
                              <TableCell align="center">Quantity</TableCell>
                              <TableCell align="center">Expiration</TableCell>
                              <TableCell align="center">From</TableCell>
                              <TableCell align="center"></TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell align="center" className="list-Name">
                                  {row.name} ETH
                                </TableCell>
                                <TableCell align="center" className="mild-font">
                                  ${row.calories}
                                </TableCell>
                                <TableCell align="center" className="mild-font">
                                  {row.fat}
                                </TableCell>
                                <TableCell align="center" className="mild-font">
                                  in {row.carbs} days
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className="mild-font starting"
                                >
                                  {row.protein}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className="mild-font btn buy"
                                >
                                  <Button
                                    variant="contained"
                                    className="table-buy"
                                  >
                                    Buy
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="listing offer">
                <Accordion className="inner-accor">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    aria-expanded="true"
                  >
                    <Typography>
                      {" "}
                      <ListIcon /> Offers
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="table-accordion">
                    <Typography>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Price</TableCell>
                              <TableCell align="center">USD Price</TableCell>
                              <TableCell align="center">Quantity</TableCell>
                              <TableCell align="center">
                                Floor Difference
                              </TableCell>
                              <TableCell align="center">Expiration</TableCell>
                              <TableCell align="center">From</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rowstwo.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell className="list-Name" align="center">
                                  {row.name} ETH
                                </TableCell>
                                <TableCell align="center">
                                  ${row.calories}
                                </TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="center">
                                  in {row.carbs} days
                                </TableCell>
                                <TableCell align="center">
                                  {row.protein}
                                </TableCell>
                                <TableCell align="center" className="starting">
                                  <span>appeljue</span>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>



              <div className="description sm-responsive">
                <div className="head-title">
                  <h3>
                    <MenuIcon /> Description{" "}
                  </h3>
                </div>
              </div>

              <div className="para sm-responsive">
                <div className="descr-para">
                  <h6>
                    By <span>56919B</span> <VerifiedSharpIcon />
                  </h6>
                  <p>
                    This edition of Field Trip consists of overlapping lines
                    styled using white outlines & transparent square strokes in
                    a zoom field. Colors are from the Rich Rainbow palette and
                    the shapes are set against a solid dark background.
                  </p>
                </div>
              </div>

              <div className="traits sm-responsive">
                <Accordion className="inner-accor">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {" "}
                      <LabelOutlinedIcon />
                      Traits
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <Link
                              to="/collection-detail"
                              className="trait-card-link"
                            >
                              <div className="trait-card">
                                <div className="text-sec">Background</div>
                                <p>
                                  Yellow <span>18%</span>
                                </p>
                                <div className="floor">
                                  Floor: <span>0.849 </span>
                                  <span>ETH</span>
                                </div>
                              </div>
                            </Link>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <Link
                              to="/collection-detail"
                              className="trait-card-link"
                            >
                              <div className="trait-card">
                                <div className="text-sec">Beard</div>
                                <p>
                                  Stubble <span>19%</span>
                                </p>
                                <div className="floor">
                                  Floor: <span>0.719 </span>
                                  <span>ETH</span>
                                </div>
                              </div>
                            </Link>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <Link
                              to="/collection-detail"
                              className="trait-card-link"
                            >
                              <div className="trait-card">
                                <div className="text-sec">Eyes</div>
                                <p>
                                  Blue <span>12%</span>
                                </p>
                                <div className="floor">
                                  Floor: <span>0.74 </span>
                                  <span>ETH</span>
                                </div>
                              </div>
                            </Link>
                          </Grid>
                        </Grid>

                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <Link
                              to="/collection-detail"
                              className="trait-card-link sec"
                            >
                              <div className="trait-card">
                                <div className="text-sec">Fur</div>
                                <p>
                                  Bengal <span>6%</span>
                                </p>
                                <div className="floor">
                                  Floor: <span>0.74 </span>
                                  <span>ETH</span>
                                </div>
                              </div>
                            </Link>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <Link
                              to="/collection-detail"
                              className="trait-card-link sec"
                            >
                              <div className="trait-card">
                                <div className="text-sec">Necklace</div>
                                <p>
                                  Gold Chains <span>3%</span>
                                </p>
                                <div className="floor">
                                  Floor: <span>2.39 </span>
                                  <span>ETH</span>
                                </div>
                              </div>
                            </Link>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <Link
                              to="/collection-detail"
                              className="trait-card-link sec"
                            >
                              <div className="trait-card">
                                <div className="text-sec">Shirt</div>
                                <p>
                                  Tracksuit <span>4%</span>
                                </p>
                                <div className="floor">
                                  Floor: <span>0.85 </span>
                                  <span>ETH</span>
                                </div>
                              </div>
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="accordion sm-responsive">
                <Accordion className="inner-accor">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {" "}
                      <VerticalSplitOutlinedIcon /> About Field Trip by Andrew
                      McWhae
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Field Trip is Andrew McWhae's genesis NFT collection. It
                      consists of 600 pieces of generative artworks composed of
                      brightly colored shapes arranged in lively patterns. Going
                      on a field trip implies experiencing something other than
                      your normal environment and that's exactly what I want the
                      viewer to do. At its core it is a collision-avoidance
                      algorithm that places lines which are then drawn using
                      stylized geometry. Every output is a different style or
                      color palette; no two are simply different seeds.Category
                      Art.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="detail detail-items-customer sm-responsive">
                <Accordion className="inner-accor">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <BallotOutlinedIcon /> Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="flex-detail-outer">
                        <div className="flex-detail">
                          <label>Contract Address</label>
                          <span>
                            <a>0xb59b...401d</a>
                          </span>
                        </div>
                        <div className="flex-detail">
                          <label>Token ID</label>
                          <span>
                            <a>358</a>
                          </span>
                        </div>
                        <div className="flex-detail">
                          <label>Token Standard</label>
                          <span>ERC-721</span>
                        </div>
                        <div className="flex-detail">
                          <label>Chain</label>
                          <span>Ethereum</span>
                        </div>
                        <div className="flex-detail">
                          <label>Last Updated</label>
                          <span>9 months ago</span>
                        </div>
                        <div className="flex-detail">
                          <div className="earning">
                            <label>Creator Earnings</label>
                            <LightTooltip
                              title="The creator(s) of this item will receive 10% for every sale"
                              placement="top-start"
                              arrow
                            >
                              <Button className="share">
                                <InfoOutlinedIcon />
                              </Button>
                            </LightTooltip>
                          </div>

                          <span>10%</span>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Item>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Item className={classes.rightcls}>
              <div className="listing activity Item">
                <Accordion className="inner-accor">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      {" "}
                      <ImportExportOutlinedIcon /> Item Activity
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="table-accordion">
                    <Autocomplete
                      multiple
                      id="tags-outlined"
                      className="tags-outlined"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      defaultValue={[top100Films[13]]}
                      filterSelectedOptions
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          // label="filterSelectedOptions"
                          placeholder="Filter"
                        />
                      )}
                    />

                    <Typography className="item-activity">
                      <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: 650 }}
                          aria-label="simple table"
                          className="item-activity-table"
                          id="style-1"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">Event</TableCell>
                              <TableCell align="center">Price</TableCell>
                              <TableCell align="center">From</TableCell>
                              <TableCell align="center">To</TableCell>
                              <TableCell align="center">Date</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rowsitem.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell align="center" className="event">
                                  <SellOutlinedIcon /> <p>List</p>
                                </TableCell>
                                <TableCell align="center" className="list-Name">
                                  {row.price} ETH
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className="mild-font starting"
                                >
                                  {row.from}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  className="mild-font"
                                ></TableCell>
                                <TableCell align="center" className="mild-font">
                                  {row.Date} ago
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Item>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Item className={classes.rightcls}>
              <div className="listing activity product-scroll">
                <Accordion className="inner-accor">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    onClick={handleAccordion}
                  >
                    <Typography>
                      {" "}
                      <CalendarViewMonthOutlinedIcon />
                      More From This Collection
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="table-accordion">
                    <div className="table-width">
                      <div className="total-card grid-pdt-block-specific">
                        <div className="cards-items">
                          <Link
                            className="productdetail-redirect"
                            to="/productdetail"
                          >
                            <div className="product-item">
                              <div className="product-item-img">
                                <div
                                  className={tiles22 ? "minheightdiffer" : ""}
                                >
                                  <img src={collection1} alt="collection1" />
                                </div>
                              </div>
                              <div className="ratingDetails">
                                <div className="pdt-name-price">
                                  <h4 className="pdt-name">WD #4079</h4>
                                  <span className="pdt-price">0.0353 ETH</span>
                                  <span className="sale">
                                    Last sale: 0.02 WETH
                                  </span>
                                </div>
                                <div className="idContent">#1,723</div>
                              </div>
                            </div>
                          </Link>
                          <div className="BuynOW-cart">
                            <Button className="btnBuy" variant="contained">
                              Buy now
                            </Button>
                            <Button
                              className="btnCart"
                              variant="contained"
                              onClick={handleAddCart}
                              startIcon={
                                addCart ? (
                                  <RemoveShoppingCartIcon />
                                ) : (
                                  <ShoppingCartIcon />
                                )
                              }
                            ></Button>
                          </div>
                        </div>

                        <div className="cards-items">
                          <Link
                            className="productdetail-redirect"
                            to="/productdetail"
                          >
                            <div className="product-item">
                              <div className="product-item-img">
                                <div
                                  className={tiles22 ? "minheightdiffer" : ""}
                                >
                                  <img src={collection1} alt="collection1" />
                                </div>
                              </div>
                              <div className="ratingDetails">
                                <div className="pdt-name-price">
                                  <h4 className="pdt-name">WD #4079</h4>
                                  <span className="pdt-price">0.0353 ETH</span>
                                  <span className="sale">
                                    Last sale: 0.02 WETH
                                  </span>
                                </div>
                                <div className="idContent">#1,723</div>
                              </div>
                            </div>
                          </Link>
                          <div className="BuynOW-cart">
                            <Button className="btnBuy" variant="contained">
                              Buy now
                            </Button>
                            <Button
                              className="btnCart"
                              variant="contained"
                              onClick={handleAddCart}
                              startIcon={
                                addCart ? (
                                  <RemoveShoppingCartIcon />
                                ) : (
                                  <ShoppingCartIcon />
                                )
                              }
                            ></Button>
                          </div>
                        </div>

                        <div className="cards-items">
                          <Link
                            className="productdetail-redirect"
                            to="/productdetail"
                          >
                            <div className="product-item">
                              <div className="product-item-img">
                                <div
                                  className={tiles22 ? "minheightdiffer" : ""}
                                >
                                  <img src={collection1} alt="collection1" />
                                </div>
                              </div>
                              <div className="ratingDetails">
                                <div className="pdt-name-price">
                                  <h4 className="pdt-name">WD #4079</h4>
                                  <span className="pdt-price">0.0353 ETH</span>
                                  <span className="sale">
                                    Last sale: 0.02 WETH
                                  </span>
                                </div>
                                <div className="idContent">#1,723</div>
                              </div>
                            </div>
                          </Link>
                          <div className="BuynOW-cart">
                            <Button className="btnBuy" variant="contained">
                              Buy now
                            </Button>
                            <Button
                              className="btnCart"
                              variant="contained"
                              onClick={handleAddCart}
                              startIcon={
                                addCart ? (
                                  <RemoveShoppingCartIcon />
                                ) : (
                                  <ShoppingCartIcon />
                                )
                              }
                            ></Button>
                          </div>
                        </div>

                        <div className="cards-items">
                          <Link
                            className="productdetail-redirect"
                            to="/productdetail"
                          >
                            <div className="product-item">
                              <div className="product-item-img">
                                <div
                                  className={tiles22 ? "minheightdiffer" : ""}
                                >
                                  <img src={collection1} alt="collection1" />
                                </div>
                              </div>
                              <div className="ratingDetails">
                                <div className="pdt-name-price">
                                  <h4 className="pdt-name">WD #4079</h4>
                                  <span className="pdt-price">0.0353 ETH</span>
                                  <span className="sale">
                                    Last sale: 0.02 WETH
                                  </span>
                                </div>
                                <div className="idContent">#1,723</div>
                              </div>
                            </div>
                          </Link>
                          <div className="BuynOW-cart">
                            <Button className="btnBuy" variant="contained">
                              Buy now
                            </Button>
                            <Button
                              className="btnCart"
                              variant="contained"
                              onClick={handleAddCart}
                              startIcon={
                                addCart ? (
                                  <RemoveShoppingCartIcon />
                                ) : (
                                  <ShoppingCartIcon />
                                )
                              }
                            ></Button>
                          </div>
                        </div>

                        <div className="cards-items">
                          <Link
                            className="productdetail-redirect"
                            to="/productdetail"
                          >
                            <div className="product-item">
                              <div className="product-item-img">
                                <div
                                  className={tiles22 ? "minheightdiffer" : ""}
                                >
                                  <img src={collection1} alt="collection1" />
                                </div>
                              </div>
                              <div className="ratingDetails">
                                <div className="pdt-name-price">
                                  <h4 className="pdt-name">WD #4079</h4>
                                  <span className="pdt-price">0.0353 ETH</span>
                                  <span className="sale">
                                    Last sale: 0.02 WETH
                                  </span>
                                </div>
                                <div className="idContent">#1,723</div>
                              </div>
                            </div>
                          </Link>
                          <div className="BuynOW-cart">
                            <Button className="btnBuy" variant="contained">
                              Buy now
                            </Button>
                            <Button
                              className="btnCart"
                              variant="contained"
                              onClick={handleAddCart}
                              startIcon={
                                addCart ? (
                                  <RemoveShoppingCartIcon />
                                ) : (
                                  <ShoppingCartIcon />
                                )
                              }
                            ></Button>
                          </div>
                        </div>

                        <div className="cards-items">
                          <Link
                            className="productdetail-redirect"
                            to="/productdetail"
                          >
                            <div className="product-item">
                              <div className="product-item-img">
                                <div
                                  className={tiles22 ? "minheightdiffer" : ""}
                                >
                                  <img src={collection1} alt="collection1" />
                                </div>
                              </div>
                              <div className="ratingDetails">
                                <div className="pdt-name-price">
                                  <h4 className="pdt-name">WD #4079</h4>
                                  <span className="pdt-price">0.0353 ETH</span>
                                  <span className="sale">
                                    Last sale: 0.02 WETH
                                  </span>
                                </div>
                                <div className="idContent">#1,723</div>
                              </div>
                            </div>
                          </Link>
                          <div className="BuynOW-cart">
                            <Button className="btnBuy" variant="contained">
                              Buy now
                            </Button>
                            <Button
                              className="btnCart"
                              variant="contained"
                              onClick={handleAddCart}
                              startIcon={
                                addCart ? (
                                  <RemoveShoppingCartIcon />
                                ) : (
                                  <ShoppingCartIcon />
                                )
                              }
                            ></Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionDetails>

                  <div className="view-collect">
                    <Link to="/collection-detail">View Collection</Link>
                  </div>
                </Accordion>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProductDetail
