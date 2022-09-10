
require('dotenv').config()
const formidable=require('formidable')
const express=require('express')
const router=express.Router()
const {v4:uuidv4}=require('uuid')
const https=require('https')
const PaytmChecksum=require('./PaytmChecksum')
const db = require('./firebase')
const firebase = require('firebase');

const mailer = require("nodemailer");
const axios = require('axios');
const { userPass } = require('../src/api')


router.post('/callback',(req,res)=>
{

    // let data = req.body;
    // console.log(data);

const form=new formidable.IncomingForm();

form.parse(req,(err,fields,file)=>
{









paytmChecksum = fields.CHECKSUMHASH;
delete fields.CHECKSUMHASH;

var isVerifySignature = PaytmChecksum.verifySignature(fields, process.env.PAYTM_MERCHANT_KEY, paytmChecksum);
if (isVerifySignature) {








    var paytmParams = {};
    paytmParams["MID"]     = fields.MID;
    paytmParams["ORDERID"] = fields.ORDERID;

    /*
    * Generate checksum by parameters we have
    * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
    */
    PaytmChecksum.generateSignature(paytmParams, process.env.PAYTM_MERCHANT_KEY).then(function(checksum){

        paytmParams["CHECKSUMHASH"] = checksum;

        var post_data = JSON.stringify(paytmParams);

        var options = {

            /* for Staging */
            hostname: 'securegw.paytm.in',

            /* for Production */
            // hostname: 'securegw.paytm.in',

            port: 443,
            path: '/order/status',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': post_data.length
            }
        };

        var response = "";
        var post_req = https.request(options, function(post_res) {
            post_res.on('data', function (chunk) {
                response += chunk;
            });

            post_res.on('end', function(){
                let result=JSON.parse(response)
                if(result.STATUS ==='TXN_SUCCESS')
                {

                    
                    //store in db
                    // db.collection('payments').doc('OQOjAFpp0zF2COo1V0OQ').update({paymenthistory:firebase.firestore.FieldValue.arrayUnion(result)})
                    // .then(()=>console.log("Update success"))
                    // .catch(()=>console.log("Unable to update"))
                     
                    

                    




                    
                }
                let data = req.body;
                axios.post("/api/forma", data)
                .then(res=>setState({
                sent:true,
                }).catch(()=>{
                console.log("Message Not Sent")
                }))
                res.redirect(`http://localhost:3000/`);
                console.log(req.body.data);

            });
        });

        post_req.write(post_data);
        post_req.end();
    });        










} else {
	console.log("Checksum Mismatched");
}






})

})

router.post('/payment',(req,res)=>
{


const{amount,email}=req.body;

    /* import checksum generation utility */
const totalAmount=JSON.stringify(amount);
var params = {};

/* initialize an array */
params['MID'] = process.env.PAYTM_MID,
params['WEBSITE'] = process.env.PAYTM_WEBSITE,
params['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
params['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE,
params['ORDER_ID'] = uuidv4(),
params['CUST_ID'] = process.env.PAYTM_CUST_ID,
params['TXN_AMOUNT'] = totalAmount,
params['CALLBACK_URL'] = 'http://localhost:5000/api/callback',
params['EMAIL'] ='gargn909@gmail.com',
params['MOBILE_NO'] = '98989'

/**
* Generate checksum by parameters we have
* Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
*/
var paytmChecksum = PaytmChecksum.generateSignature(params, process.env.PAYTM_MERCHANT_KEY);
paytmChecksum.then(function(checksum){
    let paytmParams={
        ...params,
        "CHECKSUMHASH":checksum
    }
    res.json(paytmParams)
}).catch(function(error){
	console.log(error);
});

})

module.exports=router