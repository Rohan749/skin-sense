import { Box, Divider } from "@mui/material";
import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import BodyBox from "./common/BodyBox";
import Header from "./common/Header";
import Title from "./common/Title";
import axios from 'axios';
import CustomButton from "./common/CustomButton";


const Dashboard = ({details}) => {

  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;


  const [loading, setLoading] = useState(true)
  const [uvIndex, setUvIndex] = useState("")



  const generatePDF = () => {
    const doc = new jsPDF("p", "pt");
    const element = document.getElementById('content'); 
    doc.html(element, {
      callback: function (pdf) {
        pdf.save(`${details.name}-prescription.pdf`);
      }
    });
  };



  var myHeaders = new Headers();
  myHeaders.append("x-access-token", process.env.REACT_APP_API_KEY);
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://api.openuv.io/api/v1/forecast?lat=51.5&lng=-0.11&alt=100&dt=", requestOptions)
    .then(response => response.text())
    .then(result => {
      const uvValue = JSON.parse(result)
      console.log(uvValue)

    })
    .catch(error => console.log('error', error));
  



  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        height: "100vh",
        alignItems: 'center'
      }}
    >
      <div id="content">
      <BodyBox >
        <Header>Prescription</Header>
        <Box sx={{ width: "100%", fontWeight: "bold", color: "#999999" }}>
        <br/>
          <br/>
          <Divider />
        <Title>Prescription Details</Title>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            
            <Box>Prescription Date: {formattedDate}</Box>
            <Box>Prescription No: 001</Box>
          </Box>
          <br/>
          <br/>
          <Divider />
          <Title>Patient Details</Title>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <Box>Name: {details.name}</Box>
          <Box>Age: {details.age}</Box>
          <Box>Gender: {details.gender}</Box>
          <Box>UV Index:  <>Loading...</></Box>
          <Box>Prescribed Medicine: hydrocortisone</Box>
          </Box>
        </Box>
      </BodyBox>
      </div>
      <Box sx={{p: '1rem 0'}}>
      <CustomButton onClick={generatePDF}>Export to PDF</CustomButton>
      </Box>
    </Box>
  );
};

export default Dashboard;
