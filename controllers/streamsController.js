// const path = require("path");
const router = require("express").Router();
const db = require("../models");
// cors setup
const cors = require('cors');
const corsOptions = require('../server').corsOptions;

const streamFunctions = {
  // findAll: function (req, res) {
  //   db.Stream
  //     .find({email : req.params.email})
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  createStream: function (dbArticle, res) {
    console.log(dbArticle);
    db.Stream
      .create(dbArticle)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update: function (req, res) {
  //   db.Stream
  //     .findOneAndUpdate({ _id: req.params.id}, req.body, {new:true})
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function (req, res) {
  //   db.Stream
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
}


// fetchStreams
// fetchStream
// deleteStream
// editStream

router.post("/api/streams", cors(corsOptions), function(req,res){
  console.log(req);
})
// streamFunctions.createStream(req,)
// router.get("/api/articles/:email", streamFunctions.findAll);

// router.patch("/api/articles/:id", streamFunctions.update);

// router.patch("/api/favoriteArticle/:id", streamFunctions.update);

// router.patch("/api/articleTag/:id", streamFunctions.update);

// router.delete("/api/article/:id", streamFunctions.remove)

// //  If no API routes are hit, send the React app
// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// module.exports = router;
module.exports = function (app) {
  // app.get('/', requireAuth, function (req, res) {
  //      res.send({
  //           hi: 'there'
  //      });
  // })
  app.post('/api/streams', cors(corsOptions), streamFunctions.createStream);
  // app.post('/signin', cors(corsOptions), requireSignin, Authentication.signin);
}