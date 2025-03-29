import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import InfoIcon from "@mui/icons-material/Info";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextField from "@mui/material/TextField";
import Ethereum from "../../images/ethereum.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import Arbitrum from "../../images/arbitrum.svg";
import ArbitrumA from "../../images/arbitrum-2.svg";
import ArbitrumB from "../../images/arbitrum-4.svg";
import ArbitrumC from "../../images/arbitrum-5.svg";
import polygon from "../../images/polygon.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const CreateCollection = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openDeploying, setOpenDeploying] = React.useState(false);
  const handleOpenDeploying = () => setOpenDeploying(true);
  const handleCloseDeploying = () => setOpenDeploying(false);



  const steps = [
    {
      label: "Go to your wallet to finish deploying your contract",
      description: `You’ll be asked to pay gas fees and sign in order to deploy your contract on the blockchain..`,
    },
    {
      label: "Deploying your contract",
      description: "It may take some time for the transaction to be processed.",
    },
    {
      label: "Create an ad",
      description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <div className="createHeader-app">
        <Box container>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className="createheader-main">
                <div className="createheader-box">
                  <div className="createheader-icon">
                    <Link href="/CreateNft">
                      {" "}
                      <WestIcon />
                    </Link>
                  </div>
                  <div className="createheader-titel">
                      <Typography variant="h4" component="h2">
                        Drop a collection
                      </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <div className="createheader-box2">
                <div className=""></div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className="main-box">
        <Container>
          <Box container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12} md={4} lg={2} xl={2}></Grid>
              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <div className="collection-main">
                  <div className="collection-titel">
                    <Typography variant="h4" component="h2">
                      First, you’ll need to create a collection for your NFT
                    </Typography>
                  </div>
                  <div className="collection-p">
                    <Typography variant="p" component="p">
                      You’ll need to deploy an ERC-1155 contract on the
                      blockchain to create a collection for your NFT.
                      <Link href="#">What is a contract?</Link>
                    </Typography>
                  </div>
                  <div className="collection-logo-heading">
                    <Typography variant="h6" component="h6">
                      Logo image
                    </Typography>

                    <div className="collection-icon">
                      <InfoIcon />
                    </div>
                  </div>
                  <div className="collection-uploded-main">
                    <div className="collection-uploded-box">
                      <div className="collection-uploded-icon">
                        <CropOriginalIcon />
                      </div>
                      <div className="collection-uploded-icon">
                        <FileUploadIcon />
                      </div>
                    </div>
                    <div className="collection-uploded-main-title">
                      <div className="collection-uploded-title">
                        <Typography variant="h6" component="h6">
                          Drag and drop or click to upload
                        </Typography>
                      </div>
                      <div className="collection-uploded-title">
                        <Typography variant="p" component="p">
                          You may change this after deploying your contract.
                        </Typography>
                      </div>
                      <div className="collection-uploded-title">
                        <Typography variant="p" component="p">
                          Recommended size: 350 x 350. File types: JPG, PNG,
                          SVG, or GIF
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                      <div className="collection-button">
                        <div className="collection-logo-heading">
                          <Typography variant="h6" component="h6">
                            Contract name
                          </Typography>

                          <div className="collection-icon">
                            <InfoIcon />
                          </div>
                        </div>
                        <div className="collection-btn">
                          <TextField
                            id="outlined-basic"
                            placeholder="My Collection Name"
                            variant="outlined"
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <div className="collection-button">
                        <div className="collection-logo-heading">
                          <Typography variant="h6" component="h6">
                            Token symbol
                          </Typography>

                          <div className="collection-icon">
                            <InfoIcon />
                          </div>
                        </div>
                        <div className="collection-btn">
                          <TextField
                            id="outlined-basic"
                            placeholder="MCN"
                            variant="outlined"
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>

                  <div className="collection-Blockchain">
                    <div className="collection-logo-heading">
                      <Typography variant="h6" component="h6">
                        Blockchain
                      </Typography>

                      <div className="collection-icon">
                        <InfoIcon />
                      </div>
                    </div>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className="Blockchain-box">
                          <div className="Blockchain-image">
                            <img src={Ethereum} alt="Ethereum" />
                          </div>
                          <div className="Blockchain-heading">
                            <Typography variant="h6" component="h6">
                              Ethereum
                            </Typography>
                          </div>
                          <div className="Blockchain-title1">
                            <Typography variant="p" component="p">
                              Most popular
                            </Typography>
                          </div>
                          <div className="Blockchain-title2">
                            <Typography variant="p" component="p">
                              Estimated cost to deploy contract: $4.49
                            </Typography>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className="Blockchain-box">
                          <div className="Blockchain-image">
                            <img src={polygon} alt="Ethereum" />
                          </div>
                          <div className="Blockchain-heading">
                            <Typography variant="h6" component="h6">
                              Polygon
                            </Typography>
                          </div>
                          <div className="Blockchain-title1">
                            <Typography variant="p" component="p">
                              Cheaper
                            </Typography>
                          </div>
                          <div className="Blockchain-title2">
                            <Typography variant="p" component="p">
                              Estimated cost to deploy contract: $0.01
                            </Typography>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <div className="Blockchain-main" onClick={handleOpen}>
                          <div className="Blockchain-box">
                            <div className="Blockchain-image">
                              <MoreHorizIcon />
                            </div>
                            <div className="Blockchain-heading">
                              <Typography variant="h6" component="h6">
                                See more options
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={2} xl={2}></Grid>
              <div className="create-footer">
                <div className="create-footer-button">
                  <Button variant="contained" onClick={handleOpenDeploying}>
                    Continue
                  </Button>
                </div>
              </div>
            </Grid>
          </Box>
        </Container>
      </div>

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
                Choose blockchain
              </Typography>
              <CloseIcon onClick={handleClose} />
            </div>
            <div className="Choose-blockchain-box">
              <div className="Choose-blockchain-main">
                <div className="Choose-blockchain-image">
                  <img src={Arbitrum} alt="Ethereum" />
                </div>
                <div className="Choose-blockchain-titel">
                  <Typography variant="h6" component="h6">
                    Arbitrum
                  </Typography>
                </div>
              </div>
              <div className="Choose-blockchain-main">
                <div className="Choose-blockchain-image">
                  <img src={ArbitrumA} alt="Ethereum" />
                </div>
                <div className="Choose-blockchain-titel">
                  <Typography variant="h6" component="h6">
                    Arbitrum
                  </Typography>
                </div>
              </div>
              <div className="Choose-blockchain-main">
                <div className="Choose-blockchain-image">
                  <img src={ArbitrumB} alt="Ethereum" />
                </div>
                <div className="Choose-blockchain-titel">
                  <Typography variant="h6" component="h6">
                    Arbitrum
                  </Typography>
                </div>
              </div>
              <div className="Choose-blockchain-main">
                <div className="Choose-blockchain-image">
                  <img src={ArbitrumC} alt="Ethereum" />
                </div>
                <div className="Choose-blockchain-titel">
                  <Typography variant="h6" component="h6">
                    Arbitrum
                  </Typography>
                </div>
              </div>
              <div className="Choose-blockchain-main">
                <div className="Choose-blockchain-image">
                  <img src={Ethereum} alt="Ethereum" />
                </div>
                <div className="Choose-blockchain-titel">
                  <Typography variant="h6" component="h6">
                    Arbitrum
                  </Typography>
                </div>
              </div>
              <div className="Choose-blockchain-main">
                <div className="Choose-blockchain-image">
                  <img src={polygon} alt="Ethereum" />
                </div>
                <div className="Choose-blockchain-titel">
                  <Typography variant="h6" component="h6">
                    Arbitrum
                  </Typography>
                </div>
              </div>
              <div className="Choose-blockchain-main">
                <div className="Choose-blockchain-image">
                  <img src={Arbitrum} alt="Ethereum" />
                </div>
                <div className="Choose-blockchain-titel">
                  <Typography variant="h6" component="h6">
                    Arbitrum
                  </Typography>
                </div>
              </div>
              <div className="Choose-blockchain-main">
                <div className="Choose-blockchain-image">
                  <img src={Arbitrum} alt="Ethereum" />
                </div>
                <div className="Choose-blockchain-titel">
                  <Typography variant="h6" component="h6">
                    Arbitrum
                  </Typography>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDeploying}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openDeploying}>
          <Box sx={style} className="Choose-blockchain-box-main">
            <div className="Choose-blockchain-title">
              {" "}
              <Typography
                id="transition-modal-title"
                variant="h4"
                component="h4"
              >
                Deploying your contract
              </Typography>
              <CloseIcon onClick={handleCloseDeploying} />
            </div>
            <div className="Deploying-contract">
              <Box sx={{ maxWidth: 400 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel
                        optional={
                          index === 2 ? (
                            <Typography variant="caption"></Typography>
                          ) : null
                        }
                      >
                        {step.label}
                      </StepLabel>
                      <StepContent>
                        <Typography>{step.description}</Typography>
                        <Box sx={{ mb: 2 }}>
                          <div>
                            {/* <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index === steps.length - 1
                                  ? "Finish"
                                  : "Continue"}
                              </Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                Back
                              </Button> */}
                          </div>
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                      Reset
                    </Button>
                  </Paper>
                )}
              </Box>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreateCollection;
