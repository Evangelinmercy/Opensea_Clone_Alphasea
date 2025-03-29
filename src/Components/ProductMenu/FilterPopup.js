import React, {useState} from "react";
import "./FilterPopup.css";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
// import { makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import closeMenu from "../../img/closemenu.png";
import SearchIcon from "@mui/icons-material/Search";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Checkbox from "@mui/material/Checkbox";

// const today = dayjs();
const yesterday = dayjs().subtract(1, "day");
// const todayStartOfTheDay = today.startOf("day");

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none !important",
}));

//   const useStyles = makeStyles({

//   });

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1207,
  // bgcolor: 'background.paper',
  border: "2px solid #000",
  p: 4,
};

const FilterPopup = () => {
  // const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <Button onClick={handleOpen} className="filterBtn">
        <SearchIcon />
        &nbsp; Filter
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style} className="popBOX">
        <div className="menu" onClick={handleClose} ><Link><img src={closeMenu} alt="closeMenu" /></Link></div>
          <div className="listOne">
            <div className="start-end-date">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  className="modelTypo"
                >
                  Date Range
                </Typography>
                <DemoContainer
                  components={[
                    "DatePicker",
                    "DateTimePicker",
                    "TimePicker",
                    "DateRangePicker",
                  ]}
                >
                  <DemoItem>
                    <DatePicker
                      defaultValue={yesterday}
                      disablePast
                      views={["year", "month", "day"]}
                    />
                  </DemoItem>

                  <DemoItem>
                    <DatePicker
                      defaultValue={yesterday}
                      disablePast
                      views={["year", "month", "day"]}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div className="productId">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="modelTypo"
              >
                Product ID
              </Typography>

              <div className="cmn-input-cls">
                <TextField
                  id="outlined-basic"
                  label="Enter Your Amount "
                  variant="outlined"
                  className="textField"
                />
              </div>
            </div>
          </div>

          <div className="listTwo">
            <div className="productId">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="modelTypo"
              >
                Name
              </Typography>

              <div className="cmn-input-cls">
                <TextField
                  id="outlined-basic"
                  label="Enter Your Amount "
                  variant="outlined"
                  className="textField"
                />
              </div>
            </div>
            <div className="productId">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="modelTypo"
              >
                Surname
              </Typography>

              <div className="cmn-input-cls">
                <TextField
                  id="outlined-basic"
                  label="Enter Your Amount "
                  variant="outlined"
                  className="textField"
                />
              </div>
            </div>

            <div className="start-end-date">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  className="modelTypo"
                >
                  DOB
                </Typography>
                <DemoContainer
                  components={[
                    "DatePicker",
                    "DateTimePicker",
                    "TimePicker",
                    "DateRangePicker",
                  ]}
                >
                  <DemoItem>
                    <DatePicker
                      defaultValue={yesterday}
                      disablePast
                      views={["year", "month", "day"]}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>

          <div className="listThree">
            <div className="warn">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="modelTypo"
              >
                Warranty Extension
              </Typography>
              <Checkbox defaultChecked  className="checkBox"/>
            </div>
            <div className="start-end-date">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  className="modelTypo"
                >
                 End Of Warrenty
                </Typography>
                <DemoContainer
                  components={[
                    "DatePicker",
                    "DateTimePicker",
                    "TimePicker",
                    "DateRangePicker",
                  ]}
                >
                  <DemoItem>
                    <DatePicker
                      defaultValue={yesterday}
                      disablePast
                      views={["year", "month", "day"]}
                    />
                  </DemoItem>

                  <DemoItem>
                    <DatePicker
                      defaultValue={yesterday}
                      disablePast
                      views={["year", "month", "day"]}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="productId">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="modelTypo"
              >
               Country
              </Typography>

              <div className="cmn-input-cls">
                <TextField
                  id="outlined-basic"
                  label="Enter Your Amount "
                  variant="outlined"
                  className="textField"
                />
              </div>
            </div>
          </div>
            <div className="butOutLayer">
          <Button className='apply'>Apply</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default FilterPopup;
