import { v4 as uuidv4 } from 'uuid';

// Users Array
let users = [

    {
        "name": "Kiiza Atwiine Stephen",
        "age": 21,
        "occupation": "Accountant and Aspiring Developer (Programmer.)",
        "hobbies": "Computer programming, cycling and music",
        "address": {
            "city": "Entebbe City",
            "district": "Wakiso District",
            "parish": "Katabi",
            "village": "Kitala"
        }
    }

];

//CRUD functions

// Get All Users.
export const getUsers = (req, res) => {
    res.send(users);
}

// Ce-reating a User
export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4() });
    res.send(`User with name ${user.name} added to database.`)
}

//Get a single User
export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

// Updating User's information.
export const updateUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    const { name, age, occupation, hobbies } = req.body;

    if (name) user.name = name;
    if (age) user.age = age;
    if (occupation) user.occupation = occupation;
    if (hobbies) user.hobbies = hobbies;

    res.send(`User with ID ${id} has been successfully updated.`);
}

// Delete a User.
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with ID ${id} has been deleted.`);
}