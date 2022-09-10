import axios from "axios";
import { useState } from "react";
import React from "react";

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost/api/user/save", inputs);
    console.log(inputs);
    alert("Welcome Sir");
  };

  return (
    <>
      <div className="flex">
        <div className="head">
          <p className="text">Get in Touch</p>
          <p className="text1">
            Have any query feel free to ask. Here are the ways
          </p>
          <p className="text2">you can contact to us</p>
        </div>
        <div className="head1">
          <img
            className="img"
            src="https://wallpaperaccess.com/full/5686369.jpg"
          ></img>
        </div>
      </div>
      <div className="flex1">
        <div className="con1">
          <p className="outside">How to Find US</p>
          <p className="inside">
            We are having an expert team that are ready to answer your queries
            24x7.
          </p>
          <p className="inside1">
            You can send us your query by mail or you can contact us on our
            registered number.
          </p>
          <p className="inside2">
            The details are given below for your convinience. Feel free to
            contact us.
          </p>
          <p className="quater">Headquaters</p>
          <p className="details">Address...</p>
          <p className="details1">Telephone: +9126482466</p>
          <p className="details2">E-mail: aryanshubbu171@gmail.com</p>
        </div>
        <div className="con2">
          <p className="outside1">Contact us</p>
          <form onSubmit={handleSubmit}>
            <div className="flex2">
              <div className="one">
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="two">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <input
              className="input1"
              type="text"
              placeholder="Query"
              name="query"
              onChange={handleChange}
            ></input>
            <div className="flex3">
              <div className="three">
                <input type="submit" name="submit" value="Submit"></input>
              </div>
              <div className="four">
                <input type="reset"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
