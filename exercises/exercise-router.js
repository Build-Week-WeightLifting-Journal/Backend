const router = require('express').Router();

const Exercises = require('./exercise-models.js');
const restricted = require("../auth/restricted-middleware.js");



router.get('/:id', restricted, (req, res) => {
    const id = req.params.id
    Exercises.findById(id)
    .then( id => {
        if (id) {
            res.status(200).json(id)
        } else {
            res.status(404).json({ message: "The exercise with the specified ID does not exist." })
        }
    })
    .catch( error => {
        console.log(error);
        res.status(500).json( { error: "The exercise information could not be retrieved." })
    })
})


router.post('/', restricted, (req, res) => {
    const input = req.body;

    if(input.name && input.sets && input.reps && input.weight && input.workout_id) {
        Exercises.add(input)
        .then(exercise => {
            res.status(201).json(exercise)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "failed to create a new exercise"})
        })
    } else {
        res.status(400).json({message: "please make sure you fill out all of the fields"})
    }
  
  
})


router.put('/:id', restricted,  (req, res) => {
    const id = req.params.id
    const input = req.body
    if (input.name || input.sets || input.reps || input.weight ) {
        Exercises.update(id, input)
        .then ( id => {
            if (id) {
                res.status(200).json({...id, ...input})
            } else {
                res.status(404).json({ message: "The exercise with the specified ID was not found." })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "The exercise information could not be modified." })
        })
    } else {
        res.status(400).json({ errorMessage: "Please provide an edited name, sets, reps, or weight" })
    }
    
})

router.delete('/:id', restricted, (req, res) => {
    const id = req.params.id;
   Exercises.remove(id)
    .then( id => {
        if (id) {
            res.status(200).json({message: "The exercise was successfully deleted."})
        } else {
            res.status(404).json({ message: "The exercise with the specified ID could not be found." })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: "The exercise could not be removed" })
    })
})


module.exports = router;
