const router = require('express').Router();

const Workouts = require('./workout-models.js');
// const restricted = require('../auth/restricted-middleware.js')

router.get('/',  (req, res) => {
  Workouts.find()
    .then(workouts => {
      res.status(200).json(workouts);
    })
    .catch( error => {
        console.log(error);
        res.status(500).json( { error: "The workout information could not be retrieved." })
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id
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


router.post('/', (req, res) => {
    const input = req.body;

    if(input.name && input.description) {
        Workouts.add(workoutInfo)
        .then(workout => {
            res.status(201).json(workout)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "failed to create a new workout"})
        })
    } else {
        res.status(400).json({message: "please make sure you fill out the name and the description"})
    }
  
  
})


router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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
