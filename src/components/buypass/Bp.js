import {
  FormControl,
  Input,
  FormLabel,
  Box,
  Button,
  TextField,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material";
// import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { userPass } from "../../api";
// import firebase from 'firebase'

const Boxe = styled(Box)((theme) => ({
  display: "flex",
  // flexDirection:'column',
  padding: "10px 20px",
  justifyContent: "space-between",
  width: "70%",
}));

const Image = styled("img")((theme) => ({
  width: "70%",
}));

const Container = styled(Box)((theme) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f3f3f3",
}));

const FormControls = styled(FormControl)((theme) => ({
  boxShadow: "6px 4px 4px #cfcfcf",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  height: "90vh",
  alignItems: "center",
  width: "38%",
}));

const Btn = styled(Button)((theme) => ({
  width: "30%",
  backgroundColor: "#052CA3",
  color: "white",
}));
const Bp = () => {
  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === "[object Date]";
  }

  function isObj(val) {
    return typeof val === "object";
  }

  function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val);
    } else {
      return val;
    }
  }

  function buildForm({ action, params }) {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);

    Object.keys(params).forEach((key) => {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", key);
      input.setAttribute("value", stringifyValue(params[key]));
      form.appendChild(input);
    });

    return form;
  }

  function post(details) {
    const form = buildForm(details);
    document.body.appendChild(form);
    form.submit();
    form.remove();
  }

  const getData = (data) => {
    return fetch(`http://localhost:5000/api/payment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const signupInitialValues = {
    name: "",
    email: "",
    phonenumber: "",
    city: "",
  };


  const [values, setValues] = useState(signupInitialValues);
  const [state, setState] = useState();
  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const form = useRef();

  const makePayment = async(e) => {
    // e.preventDefault();


    getData({ amount: 1, email: "gargn9038@gmail.com" }).then((response) => {
      var information = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: response,
      };
      post(information);
    });


    
    // axios.post("/api/forma", result)
    // .then(res=>setState({
    //     sent:true,
    //   }).catch(()=>{
    //       console.log("Message Not Sent")
    //     }))
      // }


      // if(req.method=='POST'){
      // }
  };


  const backend= ((req, res)=>{
    axios.post("/api/forma", values)
    .then(res=>setState({
        sent:true,
      }).catch(()=>{
          console.log("Message Not Sent")
        }))
  })

  // let result = values;




  // const userPass = async (values) => {
  //       try {
  //           return await axios.post("/api/forma", values)
  //           .then(res=>setState({
  //               sent:true,
  //             }).catch(()=>{
  //                 console.log("Message Not Sent")
  //               }))
  //           //   };
  //       } catch (err) {
  //           console.log(err.message);
  //       }
  //   }


  return (
    <Container>
      <Box>
        <Box>
          <h2>MuscleFlix</h2>
          <Image src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        </Box>
      </Box>
      <FormControls >
        <Boxe>
          <FormLabel>Amount</FormLabel>
          <TextField
            id="outlined-textarea"
            label="Amount"
            disabled
            defaultValue="500"
            onChange={(e)=>onInputChange(e)}
          />
        </Boxe>
        <Boxe>
          <FormLabel>Email</FormLabel>
          <TextField
            name="email"
            id="outlined-textarea"
            label="Email"
            onChange={(e)=>onInputChange(e)}
          />
        </Boxe>
        <Boxe>
          <FormLabel>Phone Number</FormLabel>
          <TextField
            name="phone_number"
            id="outlined-textarea"
            label="Number"
            onChange={(e)=>onInputChange(e)}
          />
        </Boxe>
        <Boxe>
          <FormLabel>Full Name</FormLabel>
          <TextField
            name="name"
            id="outlined-textarea"
            label="Name"
            onChange={(e)=>onInputChange(e)}
          />
        </Boxe>
        <Boxe>
          <FormLabel>City</FormLabel>
          <TextField
            name="city"
            id="outlined-textarea"
            label="City"
            onChange={(e)=>onInputChange(e)}
          />
        </Boxe>
        <Boxe>
          <FormLabel>State</FormLabel>
          <TextField
            name="state"
            id="outlined-textarea"
            label="State"
            onChange={(e)=>onInputChange(e)}
          />
        </Boxe>
        <Box
          style={{
            height: "8%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Btn type="submit" onClick={makePayment}>Pay 500</Btn>
        </Box>
      </FormControls>
    </Container>
  );
};

export default Bp;
