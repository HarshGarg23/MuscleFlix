const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const paymentRoute=require('./paymentRoute')
const mailer = require("nodemailer");
const QRCode = require('qrcode')


//Importing jimp module
var Jimp = require("jimp");
// Importing filesystem module
var fs = require('fs')
// Importing qrcode-reader module
var qrCode = require('qrcode-reader');
 

app.use(bodyParser.json())
app.use(cors())
app.use('/api',paymentRoute);

app.use('/api/forma',(req,res)=>{

    let data=req.body;

    let stringdata = JSON.stringify(data)
     
    QRCode.toString(stringdata,{type:'terminal'},
                        function (err, QRcode) {
     
        if(err) return console.log("error occurred")
  
        // console.log(QRcode)
        // var img = QRcode;
        fs.writeFileSync('./qr.html', `<img src="${res}">`);
    })
       
    QRCode.toDataURL(stringdata, function (err, code) {
        if(err) return console.log("error occurred")
     
        // console.log(code)
        // fs.writeFileSync('./qr.html', `<img src="${res}">`);
    })


//     var buffer = fs.readFileSync(__dirname + './qr_photo.png');
 
// // Parse the image using Jimp.read() method
// Jimp.read(buffer, function(err, image) {
//     if (err) {
//         console.error(err);
//     }
//     // Creating an instance of qrcode-reader module
//     let qrcode = new qrCode();
//     qrcode.callback = function(err, value) {
//         if (err) {
//             console.error(err);
//         }
//         // Printing the decrypted value
//         console.log(value.result);
//     };
//     // Decoding the QR code
//     qrcode.decode(image.bitmap);
// });



  

    let body ={
        from: 'harsh1713.be21@chitkara.edu.in',
        to: data.email,
        subject: 'This is subject',
        html: '<h2>The html content</h2><br>'
    }
    
    const transporter =   mailer.createTransport({
        service: 'Gmail',
        port:465,
        auth:{
            user: "harsh1713.be21@chitkara.edu.in",
            pass : "xijotjjvcrylifxr"
        }
    })
    
    transporter.verify(function(error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    
    transporter.sendMail(body,(err, result) =>{
        if (err) {
            console.log(err);
            res.send(err);
            return false
        }
        console.log(result);
        console.log("email sent");
    })
    
})


const port=5000

app.listen(port,()=>
{
    console.log(`APP IS RUNNING AT ${port}`)
})