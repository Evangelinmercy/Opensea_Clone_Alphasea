import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import './make.css'
import { Grid, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import MinimizeIcon from "@mui/icons-material/Minimize";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from '@mui/icons-material/Search';
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import SecurityIcon from "@mui/icons-material/Security";

import collection1 from "../../img/collection-1.png";

import { useState } from "react";
import { Link } from "react-router-dom";
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
 


  const CollectionStatsMake = () => {
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
      let handleChange = (e) => {
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
    
    return (
      <div className="make-collection-container">
        <Button variant="contained" onClick={handleOpen}>
          Make collection offer <InfoIcon />
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
              <div className="Choose-blockchain-box">
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
                          onChange={handleChange}
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
    );


};

export default CollectionStatsMake;
