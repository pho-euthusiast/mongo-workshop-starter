import mongoose from "mongoose"; 

const contactSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, //if no name then error
        unique:  true // must be unique
    }, 
    phoneNumber: String,
    photoUrl: String, 
    funFact: String
})

export const Contact = mongoose.model("Contacts", contactSchema); 