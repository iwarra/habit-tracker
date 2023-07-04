const router = require('express').Router();
let Habit = require('../models/habitModel'); 

router.route('/').get((req, res) => {
  Habit.find()
       .then(habits => res.json(habits))
       .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name
  const checked = req.body.checked
  const category = req.body.category
  const color = req.body.color
  const icon = req.body.icon
  const repetition = Number(req.body.repetition)
  const monthlyTotal = Number(req.body.monthlyTotal); 

  const newHabit = new Habit ({
    name,
    checked,
    category,
    color,
    icon,
    repetition,
    monthlyTotal
  });

  newHabit.save()
    .then(() => res.json('Habit added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

 router.route('/:id').get((req, res) => {
    Habit.findById(req.params.id)
    .then(habit => res.json(habit))
    .catch(err => res.status(400).json('Error: ' + err));
 });

 router.route('/:id').delete((req, res) => {
  Habit.findByIdAndDelete(req.params.id)
  .then(() => res.json('Habit deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
 });

 router.route('/update/:id').post((req, res) => {
  Habit.findById(req.params.id)
  .then(habit => {
     habit.name = req.body.name
     habit.checked = req.body.checked
     habit.category = req.body.category
     habit.color = req.body.color
     habit.icon = req.body.icon
     habit.repetition = Number(req.body.repetition)
     habit.monthlyTotal = Number(req.body.monthlyTotal); 

    habit.save()
      .then(() => res.json('Habit updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
  })
   .catch(err => res.status(400).json('Error: ' + err));
 });

 module.exports = router;