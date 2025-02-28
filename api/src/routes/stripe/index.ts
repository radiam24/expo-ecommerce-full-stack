// import { Router } from 'express';
// import { createPaymentIntent, getKeys, webhook } from './stripeController.js';
// import { verifyToken } from '../../middlewares/authMiddleware.js';

// const router = Router();

// // Note: Guests can get the publishable key
// router.get('/keys', getKeys);

// router.post('/payment-intent', verifyToken, createPaymentIntent);

// router.post('/webhook', webhook);

// export default router;

// THE ORIGINAL CODE ABOVE IS DISABLED FOR NOW BECAUSE I DON'T HAVE A STRIPE ACCOUNT
import { Router } from 'express'
import { createPaymentIntent, getKeys, webhook } from './stripeController.js'
// import { verifyToken } from '../../middlewares/authMiddleware.js';

const router = Router()

router.get('/keys', getKeys)

if (process.env.STRIPE_SECRET_KEY) {
    router.post('/payment-intent', /* verifyToken, */ createPaymentIntent)
    router.post('/webhook', webhook)
} else {
    console.warn('⚠️ Stripe routes are disabled because no API key was found.')
}

export default router
