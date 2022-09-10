import { Box, Button, styled, Typography } from "@mui/material";
// import { display, style } from "@mui/system";
import Countdown from "react-countdown";
import React from "react";
// import LanguageIcon from '@mui/icons-material/Language';
import LanguageIcon from "@mui/icons-material/Language";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { style } from "@mui/system";
import { Link } from "react-router-dom";

const Image = styled(Box)`
  width: 98vw;
  height: 100vh;
  background: #141212db
    url(https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1600);
  margin: 0 8px;
  background-blend-mode: darken;
  display: flex;
  -webkit-justify-content: none;
  flex-direction: column;
  position: relative;
`;

const Box1 = styled(Box)((theme) => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  height: "60%",
  position: "relative",
  top: "25%",
}));

const Box2 = styled(Box)((theme) => ({
  // height:"30%",
  width: "20%",
  margin: "40px 10px",
  padding: "0 10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
const Box3 = styled(Box)((theme) => ({
  height: "20%",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  width: "100%",
}));

const Btn = styled(Button)((theme) => ({
  width: "40%",
  padding: "15px 25px",
  backgroundColor: "#990147",
  color:'white',
  textDecoration:'none',
  "&:hover":{
    backgroundColor:'#990147a3',
    padding:'16px 26px',
    width:'42%'
  }
}));

const BtnText = styled(Link)(({theme})=>({
  color:'white',
  textDecoration : 'none'
}))

const Days = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "row",
  padding: "10px 20px",
  justifyContent: "space-between",
  width: "38%",
  margin: "50px",
}));

const Timer = styled(Box)((theme) => ({
  height: "80vh",
  width: "98vw",
  margin: "10px 6px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  letterSpacing: "4px",
  background:
    "#000000c7 url(https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)",
  fontSize: "1em",
  backgroundBlendMode: "darken",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

const About = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "row",
  padding: "65px 90px",
  height: "53%",
  justifyContent: "space-between",
  // alignItems:"center"
}));

const Bxs = styled(Box)((theme) => ({
  fontSize:'1.3em',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  border: "2px solid white",
  padding: "18px 18px",
  width: "82px",
}));
const Cnt = styled(Box)((theme) => ({
  // fontSize: "7em",
  color: "white",
  // marginTop: "20px",
  // border: "2px solid white",
  // padding: "10px 20px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));
const Where = styled(Box)((theme) => ({
  display: "flex",
  justifyContent: "space-around",
  height: "200px",
}));

const Completionist = () => <span>Event is Over!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <>
        <Days>
          <Bxs       data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600">
            <span>{days}</span>
            <h5>Days</h5>
          </Bxs>
          <Bxs       data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600" >
            <span>{hours}</span>
            <h5>Hours</h5>
          </Bxs >
          <Bxs       data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600">
            <span>{minutes}</span>
            <h5>Minutes</h5>
          </Bxs>
          <Bxs       data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600">
            <span>{seconds}</span>
            <h5>Seconds</h5>
          </Bxs>
        </Days>
      </>
    );
  }
};

const Mid = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Image style={{ height: "100vh" }}>
        <Box1>
          <Box style={{display:'flex' , flexDirection:'column' , alignItems:'center'}}>
            <h3 style={{ color: "white", padding: "4px", wordSpacing: "3px" }}>
              New Upcoming Event 2022
            </h3>
            <h1
              style={{
                fontSize: "70px",
                color: "#eae0c8",
                margin: "0 0",
                fontWeight: "Bolder",
                letterSpacing: "2px",
              }}
            >
              Muscle Flix Chitkara
            </h1>
            <p
              style={{
                fontSize: "40px",
                margin: "20 0px ",
                color: "#6f4e37",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              Gains with Brains
            </p>
          </Box>
        </Box1>
        <Box3>
          <Box2 style={{ width: "27%" }}>
            <Btn variant="contained">  <BtnText to="/buypass"> Buy Pass</BtnText></Btn>
            <Btn variant="contained">Contact Us</Btn>
          </Box2>
        </Box3>
      </Image>

      <About
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
      >
        <Box style={{ margin: "0px 60px", width: "45%" }}>
          <h1>About the event</h1>
          <br />
          <p
            style={{
              letterSpacing: "1px",
              fontSize: "20px",
              marginBottom: "35px",
            }}
          >
            Young Founder Summit is a one of its kind event where high school
            students of class 9-12 collaborate with their peers and thrive to
            build some compelling business ideas and identify new innovations.
            Students engage in a 52-hour intensive Startup program to ignite
            their minds and work on some potential business Ideas. They learn to
            ideate, validate, pitch, plan, innovate and present to the Jury
            while being mentored by industry experts from diverse sectors. By
            the end of the summit, students will be working in teams and will
            continue to get follow-on mentoring by designated mentors at Young
            Founder Summit. There are wholesome cash rewards worth Rs 1,00,000
            and a structured mentoring track laid down for the participating
            students and the winning teams. The award ceremony and the final
            pitch day happen on Day 3 of this event among esteemed professionals
            of the industry, education and government. Parents are also invited
            WHERE Hyatt Regency, Ludhiana WHEN 13th - 15th Au
          </p>
          <Where
            style={{ display: "flex", flexDirection: "row", margin: "10px" }}
          >
            <Box>
              <LanguageIcon style={{ fontSize: "30px" }} />
              <h3>Where</h3>
              <p>Chitkara University Rajpura</p>
            </Box>
            <Box>
              <CalendarMonthIcon style={{ fontSize: "30px" }} />
              <h3>When</h3>
              <p>13th-15th September, 9am - 5pm</p>
            </Box>
          </Where>
          <Box
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Btn variant="contained">Buy Pass</Btn>
            <Btn variant="contained">Contact Us</Btn>
          </Box>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Box>
            <img
              src="https://images.unsplash.com/photo-1629327896333-7ecec1515ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BlZWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </Box>
        </Box>
      </About>

      <Timer>
        <h3 style={{ color: "white" }}>Time is running Out</h3>
        <h1 style={{ color: "white", fontWeight: "bold" }}>
          Muscle Flix Chitkara
        </h1>
        <Cnt
          // data-aos="zoom-in"
          // data-aos-delay="100"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="600"
        >
          <Countdown date={Date.now() + 864000000} renderer={renderer} />
        </Cnt>
      </Timer>
    </div>
  );
};

export default Mid;
