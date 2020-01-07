const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");


router.get('/', (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

  router.get('/:id/workouts', restricted, (req, res) => {
    const id = req.params.id;
    Users.findWorkouts(id)
    .then(id => {
      if(id){
        res.status(200).json(id)
      } else {
        res.status(404).json({message: "please enter a valid id"})
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({error: "error getting the workouts by user id"})
    })
  })

  // router.get('/:id/date/workouts', restricted, (req, res) => {
  //   const id = req.params.id;
  //   Users.findWorkouts(id)
  //   .then(id => {
  //     if(id){
  //       res.status(200).json(id)
  //     } else {
  //       res.status(404).json({message: "please enter a valid id"})
  //     }
  //   })
  //   .catch(error => {
  //     console.log(error)
  //     res.status(500).json({error: "error getting the workouts by user id"})
  //   })
  // })


module.exports = router;
