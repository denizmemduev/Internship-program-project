


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const admin = require('firebase-admin');



app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));



//------------------------------------------------------------
var serviceAccount = require("/home/alienware/Documents/internship-program-project-firebase-adminsdk-zlo13-eb9de19ca6.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://internship-program-project.firebaseio.com"
});

//---------------------------------------------------------------


//Importing Routes

const  studentsRoute =require('./routes/interns');
app.use('/interns', studentsRoute);


const  teamsRoute =require('./routes/teams');
app.use('/teams', teamsRoute);


//-------------------------------------------------------------------------------------------------------



app.listen(4000,()=>console.log( 'Server is running'))



