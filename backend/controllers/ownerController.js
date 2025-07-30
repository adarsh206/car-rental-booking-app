import imagekit from "../config/imageKit.js";
import User from "../models/User.js";
import fs from "fs";
import Car from "../models/Car.js";


// API to Change Role of User
export const changeRoleToOwner = async (req, res) => {
    try {
        const { _id } = req.user;
        await User.findByIdAndUpdate(_id, {role: "owner"});
        res.json({success: true, message: "Now you can list cars"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// API to List Car
export const addCar = async (req, res) => {
    try {
        const {_id} = req.user;
        let car = JSON.parse(req.body.carData); 
        const imageFile = req.file;

        // Upload Image To ImageKit
        const fileBuffer = fs.readFileSync(imageFile.path);
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/cars'
        })

        // For URL Generation, works for both images and videos & optimization through imagekit
        var optimizedImageUrl = imagekit.url({
            path : response.filePath,
            transformation : [
                {width : "1280"},
                {quality: 'auto'}, // Auto compression
                {format: 'webp'}  // Convert to modern format
            ]
        });

        const image = optimizedImageUrl;
        await Car.create({...car, owner: _id, image});

        res.json({success: true, message: "Car Added Successfully!"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// API to list Owner Cars
