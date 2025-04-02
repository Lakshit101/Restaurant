import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters"],
        maxLength: [30, "First name cannot exceed 30 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters"],
        maxLength: [30, "Last name cannot exceed 30 characters"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"],
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minLength: [10, "Phone number must contain at least 10 digits"],
        maxLength: [10, "Phone number cannot exceed 10 digits"]
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
