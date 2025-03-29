import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import React, {useState} from "react";
import WestIcon from "@mui/icons-material/West";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextField from "@mui/material/TextField";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from "react-hot-toast";
import AddIcon from "@mui/icons-material/Add";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";

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

const CreateAdd = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const notify = () => toast.success("Create Nft!");

  const [profileBannerImageChange, setBannerImageChange] = useState(null)
  const [imgBannerName, setImgBannerName] = useState('No selected files')

  const RevertUploadImage = () => {
    setBannerImageChange(null)
   }

   const [openDeploying, setOpenDeploying] = React.useState(false);
   const handleOpenDeploying = () => setOpenDeploying(true);
   const handleCloseDeploying = () => setOpenDeploying(false);
  
  const [openAdvanceSettings, setOpenAdvanceSettings] = useState(false);
  const handleOpenAdvanceSettings = () => setOpenAdvanceSettings(!openAdvanceSettings);
  
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

        <div className="createadd-container main-box ">
          <Box container>
            <div className="collection-titel">
              <Typography variant="h4" component="h2">
                Create an NFT
              </Typography>
            </div>
            <div className="collection-p">
              <Typography variant="p" component="p">
                Once your item is minted you will not be able to change any of
                its information.
              </Typography>
            </div>
            <Grid container spacing={10}>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <div
                  className="collection-main"
                  onClick={() =>
                    document.querySelector(".input-field-banner").click()
                  }
                >
                  <div className="collection-uploded-main createadd">
                    <input
                      type="file"
                      accept="image/*"
                      className="input-field-banner"
                      hidden
                      onChange={({ target: { files } }) => {
                        files[0] && setImgBannerName(files[0].name);
                        if (files) {
                          setBannerImageChange(URL.createObjectURL(files[0]));
                        }
                      }}
                    />
                    {profileBannerImageChange ? (
                      <div className="upload-image-create-nft-small">
                        <img
                          src={profileBannerImageChange}
                          alt={imgBannerName}
                        />
                        <div className="deleted-func">
                          <Button
                            className="delete DELETE-ICON-NEW"
                            onClick={RevertUploadImage}
                          >
                            <DeleteOutlineIcon />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="collection-uploded-box">
                          <div className="collection-uploded-icon uploded-icon-mobile">
                            <CloudUploadIcon />
                          </div>
                        </div>
                        <div className="collection-uploded-main-title collection-uploded-mobile">
                          <div className="collection-uploded-title">
                            <Typography variant="h5" component="h5">
                              Drag and drop media
                            </Typography>
                          </div>
                          <div className="collection-uploded-title">
                            <Typography variant="h3" component="h3">
                              Browse files
                            </Typography>
                          </div>
                          <div className="collection-uploded-title addmax">
                            <Typography variant="p" component="p">
                              Max size: 50MB
                            </Typography>
                            <Typography variant="p" component="p">
                              JPG, PNG, GIF, SVG, MP4
                            </Typography>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                className="collection-mobile"
              >
                <div className="">
                  <div className="collection-button add">
                    <div className="collection-logo-heading">
                      <Typography variant="h6" component="h6">
                        Collection
                      </Typography>

                      <div className="collection-icon">*</div>
                    </div>
                    <Link
                      className="Create-a-new-collection"
                      to="/createcollection"
                    >
                      <div className="createAdd-btn">
                      
                        <div className="createAdd-icon">
                          <AddIcon />
                        </div>
                        <div className="createAdd-text">
                          <Typography variant="h6" component="h6">
                            Create a new collection
                          </Typography>
                        </div>
                       
                      </div>
                    </Link>
                  </div>
                  <div className="collection-button add">
                    <div className="collection-logo-heading">
                      <Typography variant="h6" component="h6">
                        Name
                      </Typography>

                      <div className="collection-icon">*</div>
                    </div>
                    <div className="collection-btn">
                      <TextField
                        id="outlined-basic"
                        placeholder="Name your NFT"
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <div className="collection-button add">
                    <div className="collection-logo-heading">
                      <Typography variant="h6" component="h6">
                        Supply
                      </Typography>

                      <div className="collection-icon">*</div>
                    </div>
                    <div className="collection-btn">
                      <TextField
                        id="outlined-basic"
                        placeholder="1"
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <div className="collection-button add">
                    <div className="collection-logo-heading">
                      <Typography variant="h6" component="h6">
                        Description
                      </Typography>
                    </div>
                    <div className="collection-btn">
                      <TextField
                        id="outlined-multiline-static"
                        placeholder="Description"
                        multiline
                        rows={5}
                        defaultValue="Default Value"
                      />
                    </div>
                  </div>
                  <div className="collection-button add">
                    <div className="collection-logo-heading">
                      <Typography variant="h6" component="h6">
                        External Link
                      </Typography>
                    </div>
                    <div className="collection-btn">
                      <TextField
                        id="outlined-basic"
                        placeholder="https://"
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <div className="collection-button add">
                    <div className="collection-logo-heading">
                      <Typography variant="h6" component="h6">
                        Traits
                      </Typography>
                    </div>
                    <div className="collection-btn">
                      <Typography variant="p" component="p">
                        Traits describe attributes of your item. They appear as
                        filters inside your collection page and are also listed
                        out inside your item page.
                      </Typography>
                    </div>
                  </div>
                  <div className="collection-button add">
                    <div className="collection-logo-heading">
                      <div className="collection-icon">
                        <Button
                          variant="outlined"
                          startIcon={<AddIcon />}
                          onClick={handleOpen}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
          <div className="create-footer">
            <div className="create-footer-button">
              <Button variant="contained" onClick={handleOpenDeploying}>
                Create
              </Button>
            </div>
          </div>
        </div>

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
                  Add trait
                </Typography>
                <CloseIcon onClick={handleClose} />
              </div>
              <div className="">
                <Grid container spacing={3}>
                  <Grid item xs={6} sm={6} md={12} lg={6} xl={6}>
                    <div className="collection-button">
                      <div className="collection-logo-heading">
                        <Typography variant="h6" component="h6">
                          Type
                        </Typography>
                      </div>
                      <div className="collection-btn">
                        <TextField
                          id="outlined-basic"
                          placeholder="Ex. Size"
                          variant="outlined"
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={12} lg={6} xl={6}>
                    <div className="collection-button">
                      <div className="collection-logo-heading">
                        <Typography variant="h6" component="h6">
                          Name
                        </Typography>
                      </div>
                      <div className="collection-btn ">
                        <TextField
                          id="outlined-basic"
                          placeholder="Ex. Large"
                          variant="outlined"
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="collection-btn">
                      <Button variant="contained">Add</Button>
                    </div>
                  </Grid>
                </Grid>
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

export default CreateAdd;
