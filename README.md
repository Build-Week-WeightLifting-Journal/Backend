# Backend

## Every endpoint starts with the following: 

https://weightlifting-journal15.herokuapp.com/



### Signup 

Link: https://weightlifting-journal15.herokuapp.com/api/auth/register

#### Example Entry: 
```
{
    "username": "testing",
    "password": "password, 
    "email:"test@gmail.com"
}
```

### Login

Link: https://weightlifting-journal15.herokuapp.com/api/auth/login

#### Example Entry:

```
{
	"username": "testing",
	"password": "password"
}
```

### Add a workout by User ID

Link:  https://weightlifting-journal15.herokuapp.com/api/workouts/

#### Example Entry: 

```
{
	"name": "My Upper Shoulder Workout",
	"description": "Description goes here",
    "date": 19960811,
	"user_id": 2
	
}
```

### Get a workout by User ID

Link: https://weightlifting-journal15.herokuapp.com/api/user/:user_id/workouts

#### Example Response: 

```

  {
    "id": 3,
    "name": "Leg Day Workout",
    "description": "Description here",
    "user_id": 2,
    "date": "1996-08-11T00:00:00.000Z"
  }

```


### Get a workout by ID



Link: https://weightlifting-journal15.herokuapp.com/api/workouts/:id

#### Example Response: 

```{
  "id": 2,
  "name": "Chest Day ",
  "description": "Description Here",
  "date": "1996-08-11T00:00:00.000Z"
}
```

### Get User Workout By Date

Link: https://weightlifting-journal15.herokuapp.com/api/user/:user_id/date/1996-08-11T00:00:00.000Z

### Example Response: 

```

  {
    "id": 3,
    "user_id": 1,
    "name": "Workout 1",
    "description": "heroku workout description test",
    "date": "1996-08-11T00:00:00.000Z"
  }

```


### Edit Workout by ID

Link: https://weightlifting-journal15.herokuapp.com/api/workouts/:id

#### Example Response:
```
{
  "id": 2,
  "name": "Chest Day :)",
  "description": "Description Here"
}
```
Note: You can edit either name, or description here (both are not required for a successful request).

### Delete Workout by ID

Link: Link: https://weightlifting-journal15.herokuapp.com/api/workouts/:id

#### Example Response:

```
{
  "message": "The workout was successfully deleted."
}
```

### Add an Exercise 

Link:  https://weightlifting-journal15.herokuapp.com/api/exercises

#### Example Entry: 

```

{
	"name": "Bench Press",
	"sets": 3,
	"reps": 3,
	"weight": 25,
	"workout_id":2
}
```

### Get Exercises by Workout ID

Link: https://weightlifting-journal15.herokuapp.com/api/workouts/:workout_id/exercises

#### Example Response: 

```
[
  {
    "id": 1,
    "name": "Shoulder Press",
    "sets": 3,
    "reps": 3,
    "weight": 25,
    "workout_id": 1
  },
  {
    "id": 2,
    "name": "Bench Press",
    "sets": 3,
    "reps": 3,
    "weight": 25,
    "workout_id": 1
  }
]
```

### Get Exercises by ID

Link: https://weightlifting-journal15.herokuapp.com/api/exercises/:id

#### Example Response: 

```
{
  "id": 2,
  "name": "Bench Press ",
  "sets": 3,
  "reps": 3,
  "weight": 25
}
```

### Edit Exercises by ID

Link: https://weightlifting-journal15.herokuapp.com/api/exercises/:id

#### Example Entry: 

```
{
  "id": 2,
  "name": "Bench Press Again ",
  "sets": 3,
  "reps": 3,
  "weight": 25
}
```
Note: You can edit either name, sets, reps, or weight here (all are not required for a successful request).

### Delete Exercises by ID

Link: https://weightlifting-journal15.herokuapp.com/api/exercises/:id

#### Example Response: 

```
{
  "message": "The exercise was successfully deleted."
}
```