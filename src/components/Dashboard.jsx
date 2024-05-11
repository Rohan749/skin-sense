import { Box, Divider } from "@mui/material";
import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import BodyBox from "./common/BodyBox";
import Header from "./common/Header";
import Title from "./common/Title";
import axios from 'axios';
import CustomButton from "./common/CustomButton";
import { useNavigate } from "react-router-dom";
import { diseases_medicines } from "../skin_disease_medications";
import CustomSpan from "./common/CustomSpan";


const Dashboard = ({details}) => {

  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;


  const [loading, setLoading] = useState(true)
  const [uvIndex, setUvIndex] = useState("")

  const navigate = useNavigate();

  const [fetchedData, setFetchedData] = useState({})




  const generatePDF = () => {
    const doc = new jsPDF("p", "pt");
    const element = document.getElementById('content'); 
    doc.html(element, {
      callback: function (pdf) {
        pdf.save(`${details.name}-prescription.pdf`);
      }
    });

    navigate("/")
  };



useEffect(() => {
  // var myHeaders = new Headers();
  // myHeaders.append("x-access-token", process.env.REACT_APP_API_KEY);
  // myHeaders.append("Content-Type", "application/json");
  
  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow'
  // };
  
  // fetch("https://api.openuv.io/api/v1/forecast?lat=12.9092&lng=77.5666&alt=100&dt=", requestOptions)
  //   .then(response => response.text())
  //   .then(result => {
  //     const uvValue = JSON.parse(result)

  //    const finalValue = uvValue.result[uvValue.result.length -1]
  //     console.log(finalValue)
  // setUvIndex(finalValue.uv)

  //   })
  //   .catch(error => console.log('error', error));
}, [])

const skinTypesWithMedications = [
  {
      skinType: "oily",
      medications: [
          "Clindamycin (Topical Antibiotic)",
          "Tretinoin (Topical Retinoid)",
          "Doxycycline (Oral Antibiotic)"
      ]
  },
  {
      skinType: "mix",
      medications: [
          "Hydroquinone (Topical Agent for Pigmentation)",
          "Tretinoin (Topical Retinoid)",
          "Diclofenac (with 3% hyaluronic acid) (Topical NSAID)"
      ]
  },
  {
      skinType: "dry",
      medications: [
          "Emollients and Moisturizers",
          "Topical Corticosteroids",
          "Topical Calcineurin Inhibitors (Tacrolimus and Pimecrolimus)"
      ]
  }
];

function skinAnalyser() {
  const val = Math.floor(Math.random() * 3);
  return val;
}
  
useEffect(() => {
  const interval = setTimeout(() => {
    const index = skinAnalyser()

    setFetchedData(skinTypesWithMedications[index])
    console.log(fetchedData)

    var myHeaders = new Headers();
  myHeaders.append("x-access-token", process.env.REACT_APP_API_KEY);
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://api.openuv.io/api/v1/forecast?lat=12.9092&lng=77.5666&alt=100&dt=", requestOptions)
    .then(response => response.text())
    .then(result => {
      const uvValue = JSON.parse(result)

      console.log(uvValue)

     const finalValue = uvValue.result[uvValue.result.length -1]
      console.log(finalValue)
  setUvIndex(finalValue.uv)

    })
    .catch(error => console.log('error', error));
  }, 3000)


  return () => {
    clearTimeout(interval)
  }

}, [])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: 'column',
        height: "100vh",
        alignItems: 'center',
        p: '5rem 0'
      }}
    >
      <div id="content">
      <Box >
        <Header>Prescription</Header>
        <Box sx={{ width: "100%", fontWeight: "bold" }}>
          <Divider />
        <Title>Prescription Details</Title>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            
            <Box>Prescription Date: {formattedDate}</Box>
          </Box>
          <br/>
          <Divider />
          <Title>Patient Details</Title>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <Box sx={{display: 'flex'}}>Name: <CustomSpan> {details.name}</CustomSpan> </Box>
          <Box sx={{display: 'flex'}}>Age: <CustomSpan> {details.age}</CustomSpan></Box>
          <Box sx={{display: 'flex'}}>Gender: <CustomSpan> {details.gender}</CustomSpan></Box>
          <Box sx={{display: 'flex'}}>UV Index:  <CustomSpan>{uvIndex}</CustomSpan></Box>
          <Box sx={{display: 'flex'}}>Skin Disease:  <CustomSpan> Not Detected</CustomSpan></Box>
          <Box sx={{display: 'flex'}}>Skin Condition: <CustomSpan> {!fetchedData.medications ? <>Loading...</> : fetchedData.skinType}</CustomSpan></Box>
          <Box sx={{display: 'flex'}}>Prescribed Medicine: <CustomSpan>
          {fetchedData.medications === undefined ? <>Loading</> :
            fetchedData.medications.map((val) => (
              <span key={Math.random()}>{val}</span>
            ))
            }
            </CustomSpan></Box>
          </Box>
        </Box>
      </Box>
      </div>
      <Box sx={{p: '1rem 0'}}>
      <CustomButton onClick={generatePDF}>Export to PDF</CustomButton>
      </Box>
    </Box>
  );
};

export default Dashboard;
