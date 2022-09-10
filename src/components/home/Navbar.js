import React from "react";
import { styled, AppBar, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Boxcomp = styled(Box)(({ theme }) => ({
  background: "white",
}));

const Nav = styled(AppBar)(({ theme }) => ({
  background: "white",
  display: "flex",
  justifyContent: "space-between",
  position: "sticky",
  flexDirection: "row",
  padding: "10px 50px ",
  boxShadow: "none",
  height: "12vh",
  alignItems: "center",
}));

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Navbar">
      <Box>
        <Boxcomp>
          <Nav>
            <Box
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <h3 style={{ color: "black"  , fontFamily:" 'Bebas Neue'" , fontSize:"30px", letterSpacing:'2px'}}>Muscleflix</h3>
            </Box>
            <Box
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "14vw",
              }}
            >
              {/* <h3 style={{color:"black",}}>Home</h3>   */}
            <h3><Link style={{ color: "black" , textDecoration:'none' }} to="/">About Us</Link></h3>
              <h3 ><Link style={{ color: "black" , textDecoration:'none' }} to="/contact">Conatct Us</Link></h3>
            </Box>
          </Nav>
        </Boxcomp>
      </Box>
    </div>
  );
};

export default Navbar;
