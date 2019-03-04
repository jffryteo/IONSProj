
module.exports = function(app){


  const {getEvent1,getHomeUser,getHomePage,getLogin,getCreateFromVoucher,getCreateFromScratch,getJoin,getUserAcc,registerUser,getUserProfile} = require('../controllers/createEventController.js');


// routing
app.get('/',getHomePage);
app.get('/login',getLogin);
app.post('/login',registerUser);
app.get('/createFromVoucher',getCreateFromVoucher);
app.get('/createFromScratch',getCreateFromScratch);
app.get('/join',getJoin);
app.get('/userAcc',getUserAcc);
app.get('/userProfile',getUserProfile);
app.get('/homeUser',getHomeUser);
app.get('/event1',getEvent1);
}
