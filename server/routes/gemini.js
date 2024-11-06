const express = require('express');
const router = express.Router();
const geminiController = require('../controllers/gemini');
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");


// Function to initialize GoogleGenerativeAI with API key
function createGenAI() {
  dotenv.config();
  const apiKey = process.env.API_KEY;
  return new GoogleGenerativeAI({ apiKey:apiKey });
}

const genAI = createGenAI();

router.post('/generate', geminiController.generateResponse);
router.post('/chat', geminiController.handleChat);

module.exports = router;
