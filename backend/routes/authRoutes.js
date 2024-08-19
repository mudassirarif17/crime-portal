import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import multer from "multer";
import "dotenv/config.js"
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Multer Code 
const storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , "../src/images");
    },
    filename : function(req , file , cb){
        const uniqueSuffix = Date.now();
        cb(null , uniqueSuffix + file.originalname)
    }
})

const upload = multer({storage : storage});

// Register route
router.post('/register', upload.single("image") ,async (req, res) => {
    const { username, email, password } = req.body;
    const imageName = req.file.filename;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ 
            image : imageName,
            username,
            email,
            password
         });
        await user.save();

        const payload = { user: { id: user.id } };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if all fields are provided
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if the email is valid
        if (!email.includes("@")) {
            return res.status(400).json({ error: "Please enter a valid email" });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        // console.log(user);

        // If user is not found, send a 404 response
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Compare the provided password with the stored password
        const dotMatch = await bcrypt.compare(password, user.password);
        // console.log(dotMatch);

        // If the password matches, generate a JWT token and send it
        if (dotMatch) {
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
                expiresIn: "7d",
            });

            return res.status(201).json({ token });
        } else {
            // If the password doesn't match, send a 404 response
            return res.status(404).json({ error: "Email and password do not match" });
        }
    } catch (error) {
        console.log(error);
        // Send a 500 response if an error occurs
        return res.status(500).send("Internal Server Error");
    }
});

// Route 3 get a user detail
router.get('/getuser' , authMiddleware ,async (req , res)=>{
    try {
        const userId = req.userId;
        // console.log(userId);
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"});
    }
})

router.get('/getalluser',async (req , res)=>{
    try {
        const user = await User.find();
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Internal Server Error"});
    }
})


export default router;





// import express from "express";
// import User from "../models/User.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import multer from "multer";
// import "dotenv/config.js";
// import authMiddleware from "../middleware/authMiddleware.js";
// import nodemailer from "nodemailer";
// import crypto from "crypto";

// const router = express.Router();

// // Multer Code 
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, "../src/images");
//     },
//     filename: function(req, file, cb) {
//         const uniqueSuffix = Date.now();
//         cb(null, uniqueSuffix + file.originalname);
//     }
// });

// const upload = multer({ storage: storage });

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//     service: "gmail", // or any other email service you use
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });

// // Utility function to send OTP email
// const sendOTPEmail = async (email, otp) => {
//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: "Your OTP Code",
//         text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
//     };

//     await transporter.sendMail(mailOptions);
// };

// // Generate OTP function
// const generateOTP = () => {
//     return crypto.randomInt(100000, 999999).toString(); // 6 digit OTP
// };

// // Register route
// router.post('/register', upload.single("image"), async (req, res) => {
//     const { username, email, password } = req.body;
//     const imageName = req.file.filename;

//     try {
//         let user = await User.findOne({ email });

//         if (user) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }

//         const otp = generateOTP();
//         await sendOTPEmail(email, otp);

//         // Save the OTP in the user document or in-memory storage for validation later
//         user = new User({ 
//             image: imageName,
//             username,
//             email,
//             password,
//             otp,  // Save the OTP temporarily for verification
//             otpExpires: Date.now() + 10 * 60 * 1000 // OTP expires in 10 minutes
//         });
//         await user.save();

//         res.status(200).json({ msg: "OTP sent to your email. Please verify." });

//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

// // OTP Verification route
// router.post('/verify-otp', async (req, res) => {
//     const { email, otp } = req.body;

//     try {
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({ msg: 'User not found' });
//         }

//         if (user.otp !== otp || user.otpExpires < Date.now()) {
//             return res.status(400).json({ msg: 'Invalid or expired OTP' });
//         }

//         // OTP verified, now generate JWT token and send it
//         const payload = { user: { id: user.id } };

//         jwt.sign(
//             payload,
//             process.env.JWT_SECRET,
//             { expiresIn: 3600 },
//             (err, token) => {
//                 if (err) throw err;
//                 res.json({ token });

//                 // Clear OTP after successful verification
//                 user.otp = undefined;
//                 user.otpExpires = undefined;
//                 user.save();
//             }
//         );
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

// // Login route
// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         if (!email || !password) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         if (!email.includes("@")) {
//             return res.status(400).json({ error: "Please enter a valid email" });
//         }

//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//         }

//         const dotMatch = await bcrypt.compare(password, user.password);

//         if (dotMatch) {
//             const otp = generateOTP();
//             await sendOTPEmail(email, otp);

//             user.otp = otp;
//             user.otpExpires = Date.now() + 10 * 60 * 1000;
//             await user.save();

//             return res.status(200).json({ msg: "OTP sent to your email. Please verify." });
//         } else {
//             return res.status(404).json({ error: "Email and password do not match" });
//         }
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send("Internal Server Error");
//     }
// });

// // Route to get user details
// router.get('/getuser', authMiddleware, async (req, res) => {
//     try {
//         const userId = req.userId;
//         const user = await User.findById(userId).select("-password");
//         res.send(user);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// // Route to get all users
// router.get('/getalluser', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.send(users);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// export default router;
