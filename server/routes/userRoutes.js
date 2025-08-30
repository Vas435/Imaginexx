import {registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay} from '../controllers/userController.js';
import express from 'express';
import userAuth from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits',userAuth, userCredits);
userRouter.post('/payment/razorpay', userAuth, paymentRazorpay);
userRouter.post('/verify/razorpay', verifyRazorpay);

export default userRouter;

// http://localhost:4000/api/users/register
// http://localhost:4000/api/users/login