
module.exports = function(app){


  const {getEvent1,getHomeUser,getHomePage,getLogin,getVouchers,getCreateFromScratch,getCreateFromVoucher,getJoin,getUserAcc,registerUser,getUserProfile} = require('../controllers/createEventController.js');


// routing
app.get('/',getHomePage);
app.get('/login',getLogin);
app.post('/login',registerUser);
app.get('/vouchers',getVouchers);
app.get('/createFromScratch',getCreateFromScratch);
app.get('/createFromVoucher', getCreateFromVoucher);
app.get('/join',getJoin);
app.get('/userAcc',getUserAcc);
app.get('/userProfile',getUserProfile);
app.get('/homeUser',getHomeUser);
app.get('/event1',getEvent1);
}
