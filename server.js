const express = require('express');
const mongoose =  require('mongoose');

const { partyListRoute } =  require('./routes/partyList');
const { candidateRoute } =  require('./routes/candidate');
const { userRoute } =  require('./routes/user');
const authLogin =  require('./routes/auth');
const verifyToken =  require('./middlewares/verifyToken');


require('dotenv').config()

const app = express();
app.use(express.json());

app.use('/api/partylist',verifyToken, partyListRoute);
app.use('/api/candidates', verifyToken, candidateRoute);
app.use('/api/user', verifyToken,  userRoute);
app.use('/api/login', authLogin);

app.use('/api/trial', (req, res) => {
    res.json({mes: "hello"})
});

const URL  = process.env.DB_DEV_HOST
const PORT = process.env.PORT || 4000
const database = mongoose.connection

database.once('open', _ => console.log("Connected to Database."))
database.on('error', err => console.error('connection error:', err))
mongoose.connect( URL , { useNewUrlParser: true, useUnifiedTopology: true  })

app.listen(PORT, () => console.log('Running in port: ' + PORT));