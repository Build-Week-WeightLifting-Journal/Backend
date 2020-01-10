const router = require('express').Router();

const Workouts = require('./workout-models.js');
const restricted = require("../auth/restricted-middleware.js");



router.get('/', restricted,  (req, res) => {
  Workouts.find()
    .then(workouts => {
      res.status(200).json(workouts);
    })
    .catch( error => {
        console.log(error);
        res.status(500).json( { error: "The workout information could not be retrieved." })
    })
});

router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;
    Workouts.findById(id)
    .then( id => {
        if (id) {
            res.status(200).json(id)
        } else {
            res.status(404).json({ message: "The workout with the specified ID does not exist." })
        }
    })
    .catch( error => {
        console.log(error);
        res.status(500).json( { error: "The workout information could not be retrieved." })
    })
})



router.get('/:id/exercises', restricted, (req, res) => {
    const id = req.params.id;
    Workouts.findExercises(id)
    .then(id => {
      if(id){
        res.status(200).json(id)
      } else {
        res.status(404).json({message: "please enter a valid workout id"})
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({error: "error getting the exercises"})
    })
  })


router.post('/', restricted, (req, res) => {
    const input = req.body;

    if(input.name && input.description && input.user_id && input.date) {
        Workouts.add(input)
        .then(workout => {
            res.status(201).json(workout)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "failed to create a new workout"})
        })
    } else {
        res.status(400).json({message: "please make sure you fill out all of the required fields"})
    }
  
  
})


router.put('/:id', restricted, (req, res) => {
    const id = req.params.id
    const input = req.body
    if (input.name || input.description) {
        Workouts.update(id, input)
        .then ( id => {
            if (id) {
                res.status(200).json({...id, ...input})
            } else {
                res.status(404).json({ message: "The workout with the specified ID was not found." })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "The workout information could not be modified." })
        })
    } else {
        res.status(400).json({ errorMessage: "Please provide an edited name or description." })
    }
    
})

router.delete('/:id', restricted, (req, res) => {
    const id = req.params.id;
    Workouts.remove(id)
    .then( id => {
        if (id) {
            res.status(200).json({message: "The workout was successfully deleted."})
        } else {
            res.status(404).json({ message: "The workout with the specified ID could not be found." })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: "The workout could not be removed" })
    })
})





module.exports = router;
