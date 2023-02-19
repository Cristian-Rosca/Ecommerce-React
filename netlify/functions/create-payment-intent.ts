const dotenv = require('dotenv-safe');
dotenv.config({
    example: '.env.example', // path to your .env.example file
    path: '.env', // path to your .env file
    allowEmptyValues: true, // allow empty values for optional variables
    systemvars: true, // include system environment variables
    silent: true, // suppress warnings
    required: ['STRIPE_SECRET_KEY', 'REACT_APP_STRIPE_PUBLISHABLE_KEY'] // list of required variables
  });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    try {
        console.log(event);
        
        const { amount } = JSON.parse(event.body);
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"],
        });
        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent}),
        };
    } catch (error) {
        console.log(error);
        
        return {
            statusCode: 400,
            body: JSON.stringify({ error })
        }
    }
};