


module.exports = {

    // routing

  getHomePage: (req, res) => {
    res.render('index.ejs');
},

  registerUser: (req,res) =>{

      let first_name = req.body.first_name;
      let last_name = req.body.last_name;
      let gender = req.body.gender;
      let email = req.body.email;
      let location = req.body.location;
      let phone_number = req.body.phone_number;
      let rating = '2';//hardcode test
      let uploadedFile = req.files.image;
      let image_name = uploadedFile.name;
      let fileExtension = uploadedFile.mimetype.split('/')[1];
      image_name = username + '.' + fileExtension;

      // check the filetype before uploading it
                if (uploadedFile.mimetype === 'image/png' || uploadedFile.mimetype === 'image/jpeg' || uploadedFile.mimetype === 'image/gif') {
                    // upload the file to the /public/assets/img directory
                    uploadedFile.mv(`public/assets/img/${image_name}`, (err ) => {
                        if (err) {
                            return res.status(500).send(err);
                        }

                        else{
      let query = "INSERT INTO `users` (first_name, last_name, gender, email, location, phone_num) VALUES ('" +
                            first_name + "', '" + last_name + "', '" + gender + "', '" + email + "', '" + location + "', '" + phone_number + "')";
      //let imgquery ="INSERT INTO `users_image`(image) VALUES ('" + uploadedFile)"

                            db.query(query, (err, result) => {
                                                  if (err) {
                                                      return res.status(500).send(err);
                                                  }
                                                  res.redirect('/');
                                                });

                                              }
                                            });

                                          }
                                              else{
                                                message = "Invalid File format. Only 'gif', 'jpeg' and 'png' images are allowed.";
                                                res.render('login.ejs');
                                              }
  },

getLogin: (req, res) => {
  res.render('login.ejs');
},

getVouchers: (req, res) => {
  res.render('vouchers.ejs');
},

getCreateFromScratch: (req, res) => {
  res.render('createFromScratch.ejs');
},

getCreateFromVoucher: (req, res) => {
  res.render('createFromVoucher.ejs');
},

getJoin: (req, res) => {
  res.render('join.ejs');
},
getUserAcc: (req, res) => {
  res.render('userAcc.ejs');
},
getUserProfile: (req,res) => {
  res.render('userProfile.ejs');
},
getHomeUser: (req,res) => {
  res.render('homeUser.ejs');
},
getEvent1: (req,res) => {
  res.render('event1Full.ejs');
}


};
