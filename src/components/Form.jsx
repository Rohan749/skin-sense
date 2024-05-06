import { Box, Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import Header from "./common/Header";
import BodyBox from "./common/BodyBox";
import InputField from "./common/InputField";
import Title from "./common/Title";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CustomButton from "./common/CustomButton";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({handleFormDetails}) => {

  const [details, setDetails] = useState({
    name: "",
    age: "",
    ph: "",
    gender: "",
  })

  const navigate = useNavigate();

  // const notify = () => toast("Wow so easy!");

  const handleValues = () => {
    handleFormDetails(details)

    if(details.name == "" || details.age == "" || details.ph == "" || details.gender == "") {
      toast("Please fill the input fields correctly.")
      return
    }
    navigate("/prescription")
  }

  return (
    <Box>
      <Header>Skin-Sense!</Header>
      <FormControl
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 0",
        }}
      >
        <BodyBox>
          <Box
            sx={{
              p: "1rem 0",
            }}
          >
            <Title>Personal Information</Title>
          </Box>
          <InputField
            id="outlined-basic"
            label="Enter your name"
            variant="outlined"
            value={details.name}
            onChange={(e) => {setDetails((prev)=> ({...prev, name: e.target.value}))}}
          />
          <InputField
            id="outlined-basic"
            label="Enter your age"
            variant="outlined"
            value={details.age}
            onChange={(e) => {setDetails((prev)=> ({...prev, age: e.target.value}))}}
          />
          <InputField
            id="outlined-basic"
            label="Ph No. (optional)"
            variant="outlined"
            value={details.ph}
            onChange={(e) => {setDetails((prev)=> ({...prev, ph: e.target.value}))}}
          />
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={details.gender}
            onChange={(e) => {setDetails((prev)=> ({...prev, gender: e.target.value}))}}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          <Divider />
          <Box
            sx={{
              p: "1rem 0",
            }}
          >
            {/* <Title>Skin Characterstics</Title>
          </Box>
          <InputField
            id="outlined-basic"
            label="Any known skin conditions"
            variant="outlined"
          />
          <FormLabel id="demo-row-radio-buttons-group-label">
            Skin Type
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="oily" control={<Radio />} label="Oily" />
            <FormControlLabel value="dry" control={<Radio />} label="Dry" />
            <FormControlLabel
              value="comnimation"
              control={<Radio />}
              label="Combined"
            />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Skin sensitivity level
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="low" control={<Radio />} label="Low" />
            <FormControlLabel value="mid" control={<Radio />} label="Medium" />
            <FormControlLabel value="high" control={<Radio />} label="High" />
          </RadioGroup>

          <Divider />

          <Box
            sx={{
              p: "1rem 0",
            }}
          >
            <Title>Health and Lifestyle</Title>
          </Box>
          <InputField
            id="outlined-basic"
            label="Dietary Restrictions (if any)"
            variant="outlined"
          />
          <FormLabel id="demo-row-radio-buttons-group-label">
            Smoking/Alcohol habits
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="never" control={<Radio />} label="Never" />
            <FormControlLabel
              value="occasional"
              control={<Radio />}
              label="Occasional"
            />
            <FormControlLabel
              value="regular"
              control={<Radio />}
              label="Regular"
            />
          </RadioGroup>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Sun Exposure level
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="low" control={<Radio />} label="Low" />
            <FormControlLabel value="mid" control={<Radio />} label="Medium" />
            <FormControlLabel value="high" control={<Radio />} label="High" />
          </RadioGroup>
          <Box
            sx={{
              p: "1rem 0",
            }}
          > */}
            <CustomButton onClick={handleValues}>Submit your data</CustomButton>
          </Box>
        </BodyBox>
      </FormControl>
    </Box>
  );
};

export default Form;
