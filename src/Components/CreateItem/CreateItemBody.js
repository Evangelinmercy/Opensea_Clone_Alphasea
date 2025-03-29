import React, { useState } from "react";
import "./CreateItem.css";
import ImageUpload from "./ImageUpload";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BUTTON from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Avatar from "react-avatar-edit";
import Typography from "@mui/material/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import Modal from "@mui/material/Modal";
import closeMenu from "../../img/closemenu.png";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none !important",
}));

const useStyles = makeStyles({
  heading: {
    fontSize: "40px",
    fontWeight: "600",
    color: "rgb(18, 18, 18)",
    letterSpacing: "0px",
    "@media (max-width: 767.98px)": {
      fontSize: "26px",
    },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1207,
  border: "2px solid #000",
  p: 4,
};

const CreateItemBody = () => {
  const classes = useStyles();

  const [profileImageChange, setProfileImageChange] = useState(null);
  const [imgName, setImgName] = useState("No selected files");

  const [openCollectCreate, setOpenCollectCreate] = useState(false);
  const [profileImageChangeCollectCreate, setProfileImageChangeCollectCreate] =
    useState(null);
  const [imgNameCollectCreate, setImgNameCollectCreate] =
    useState("No selected files");

  const handleOpenCollectCreate = () => setOpenCollectCreate(true);
  const handleCloseCollectCreate = () => setOpenCollectCreate(false);

  const [Chain, setChain] = React.useState("");

  const handleChange = (event) => {
    setChain(event.target.value);
  };

  const [selectCollection, setSelectCollection] = React.useState("");

  const handleSelectCollection = (event) => {
    setSelectCollection(event.target.value);
  };

  return (
    <div className="Create-NFT-page Create-NFT-page-main">
      <Box sx={style} className="CreateItem">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} className="containWidth">
            <div className="createNewItem">
              <h1 className={classes.heading}>Create New Item</h1>

              <div className="Item">
                <div className="upload">
                  <div className="alert">
                    <span>*</span> Required fields
                  </div>
                  <label className="media">
                    Image, Video, Audio, or 3D Model *
                  </label>
                  <div className="fileType">
                    File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3,
                    WAV, OGG, GLB, GLTF. Max size: 100 MB
                  </div>

                  <div className="profile-image-outer">
                    <div className="profile-image profile-image-design-block">
                      <form>
                        <input
                          type="file"
                          accept="image/*"
                          className="input-field"
                          hidden
                          onChange={({ target: { files } }) => {
                            files[0] && setImgName(files[0].name);
                            if (files) {
                              setProfileImageChange(
                                URL.createObjectURL(files[0])
                              );
                            }
                          }}
                        />
                        {profileImageChange ? (
                          <img src={profileImageChange} alt={imgName} />
                        ) : (
                          <div className="upload-image-block">
                            <CloudUploadIcon />
                          </div>
                        )}
                      </form>
                    </div>
                    <div
                      className="edit-image-btn"
                      id={profileImageChange ? "upload-when-file-in" : ""}
                      onClick={() =>
                        document.querySelector(".input-field").click()
                      }
                    >
                      {!profileImageChange ? (
                        <Button variant="contained">Upload Image</Button>
                      ) : (
                        <CloudUploadIcon />
                      )}
                    </div>
                  </div>
                </div>

                <div className="detail name">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    className="modelHead"
                  >
                    Name *
                  </Typography>
                  <div className="field">
                    <TextField
                      id="outlined-basic"
                      type="text"
                      placeholder="Item name"
                      className="textField"
                    />
                  </div>
                </div>

                <div className="detail link">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    className="modelHead"
                  >
                    External link
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    className="para"
                  >
                    OpenSea will include a link to this URL on this item's
                    detail page, so that users can click to learn more about it.
                    You are welcome to link to your own webpage with more
                    details.
                  </Typography>
                  <div className="field">
                    <TextField
                      id="outlined-basic"
                      placeholder="https://yoursite.io/item/123"
                      className="textField"
                    />
                  </div>
                </div>

                <div className="detail description">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    className="modelHead"
                  >
                    Description
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    className="para description"
                  >
                    The description will be included on the item's detail page
                    underneath its image. <span>Markdown</span> syntax is
                    supported.
                  </Typography>

                  <TextareaAutosize
                    className="textArea"
                    placeholder="Provide a detailed description of your item."
                  />
                </div>

                <div className="detail collection">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    className="modelHead"
                  >
                    Collection
                    <BUTTON
                      className="collectBtn"
                      onClick={handleOpenCollectCreate}
                    >
                      <CollectionsBookmarkOutlinedIcon />
                    </BUTTON>
                    <Modal
                      open={openCollectCreate}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      className="collection popup"
                    >
                      <Box sx={style} className="popBOX">
                        <div className="flex-item-modal">
                          <h2>Create Collection</h2>
                          <div
                            className="menu collection-create-pop-up-close"
                            onClick={handleCloseCollectCreate}
                          >
                            <Link>
                              <img src={closeMenu} alt="closeMenu" />
                            </Link>
                          </div>
                        </div>

                        <div className="profile-image-outer">
                          <div className="profile-image profile-image-design-block">
                            <form>
                              <input
                                type="file"
                                accept="image/*"
                                className="input-field-collect-create"
                                hidden
                                onChange={({ target: { files } }) => {
                                  files[0] &&
                                    setImgNameCollectCreate(files[0].name);
                                  if (files) {
                                    setProfileImageChangeCollectCreate(
                                      URL.createObjectURL(files[0])
                                    );
                                  }
                                }}
                              />
                              {profileImageChangeCollectCreate ? (
                                <img
                                  src={profileImageChangeCollectCreate}
                                  alt={imgNameCollectCreate}
                                />
                              ) : (
                                <div className="upload-image-block">
                                  <CloudUploadIcon />
                                </div>
                              )}
                            </form>
                          </div>

                          {/* <div className='edit-image-btn' onClick={()=> document.querySelector(".input-field-collect-create").click()}>
    <Button variant="contained">
  Upload Image
</Button>
</div> */}

                          <div
                            className="edit-image-btn"
                            id={
                              profileImageChangeCollectCreate
                                ? "upload-when-file-in-collection"
                                : ""
                            }
                            onClick={() =>
                              document
                                .querySelector(".input-field-collect-create")
                                .click()
                            }
                          >
                            {console.log(
                              profileImageChangeCollectCreate,
                              "hi hello"
                            )}
                            {!profileImageChangeCollectCreate ? (
                              <Button variant="contained">Upload Image</Button>
                            ) : (
                              <CloudUploadIcon />
                            )}
                          </div>
                        </div>

                        <div className="detail name">
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            className="modelHead"
                          >
                            Name *
                          </Typography>
                          <div className="field">
                            <TextField
                              id="outlined-basic"
                              type="text"
                              placeholder="Item name"
                              className="textField"
                            />
                          </div>
                        </div>

                        <div className="detail name">
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            className="modelHead"
                          >
                            Select Network *
                          </Typography>
                        </div>

                        <FormControl
                          sx={{ m: 1, minWidth: 120 }}
                          className="dropdown detail"
                        >
                          <Select
                            value={Chain}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                          >
                            <MenuItem value="">Polygon</MenuItem>
                            <MenuItem value={10}>Ethereum</MenuItem>
                            <MenuItem value={20}>Base</MenuItem>
                            <MenuItem value={30}>BNB Chain</MenuItem>
                            <MenuItem value={30}>MATIC</MenuItem>
                          </Select>
                        </FormControl>
                        <div className="butOutLayer">
                          <BUTTON className="apply">Submit</BUTTON>
                        </div>
                      </Box>
                    </Modal>
                  </Typography>

                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    className="para"
                  >
                    This is the collection where your item will appear. &nbsp;
                    <InfoOutlinedIcon />
                  </Typography>

                  <FormControl fullWidth className="dropdown detail">
                    <Select
                      value={selectCollection}
                      onChange={handleSelectCollection}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">Select Collection</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="detail supply">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    className="modelHead"
                  >
                    Supply
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    className="para"
                  >
                    The number of items that can be minted. No gas cost to you!
                    &nbsp;
                    <InfoOutlinedIcon />
                  </Typography>
                  <div className="field">
                    <TextField
                      id="outlined-basic"
                      placeholder="***"
                      type="number"
                      className="textField"
                    />
                  </div>
                </div>

                <div className="detail Blockchain">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    className="modelHead"
                  >
                    Blockchain
                  </Typography>

                  <FormControl
                    sx={{ m: 1, minWidth: 120 }}
                    className="dropdown"
                  >
                    <Select
                      value={Chain}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">Polygon</MenuItem>
                      <MenuItem value={10}>Ethereum</MenuItem>
                      <MenuItem value={20}>Base</MenuItem>
                      <MenuItem value={30}>BNB Chain</MenuItem>
                      <MenuItem value={30}>MATIC</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="detail metadata">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    className="modelHead"
                  >
                    Freeze metadata &nbsp;
                    <InfoOutlinedIcon />
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="p"
                    component="p"
                    className="para"
                  >
                    Freezing your metadata will allow you to permanently lock
                    and store all of this item's content in decentralized file
                    storage.
                  </Typography>
                  <div className="field">
                    <TextField
                      id="filled-basic"
                      placeholder="To freeze your metadata, you must create your item first."
                      variant="filled"
                      className="textField"
                    />
                  </div>
                </div>

                <div class="AssetForm--submit">
                  <div class="AssetForm--action">
                    <span>
                      <button
                        disabled=""
                        type="button"
                        class="assetForm_submit"
                      >
                        Create
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default CreateItemBody;
