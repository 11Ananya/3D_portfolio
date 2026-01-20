export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get API key from server-side environment variable
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ 
      error: 'OpenAI API key is not configured on the server' 
    });
  }

  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const systemPrompt = `You are a helpful assistant that answers questions about Ananya Dabas. 
Here are key details about Ananya:

Professional Background:
- She is a software developer with a passion for creating innovative web solutions
- Her favorite tech stack includes:
  * Frontend: React.js, Three.js, TailwindCSS
  * Backend: Node.js, Express.js
  * Database: MongoDB
  * Tools: Git, VS Code
- She created this 3D portfolio website using React and Three.js

Hobbies and Interests:
- She's a huge Potterhead (Harry Potter fan) with deep knowledge of the wizarding world
- She enjoys playing basketball
- She participates in local tech meetups and developer communities

Fun Facts:
- She has memorized the entire periodic table (all 118 elements!)
- She combines her love for science with her technical skills

Outside of Coding:
- She's often found discussing Harry Potter theories and favorite moments
- She enjoys playing basketball to stay active and competitive
- She loves sharing her knowledge about chemistry and the periodic table

Please answer questions in a friendly and conversational tone.`;

    // Call OpenAI API from server-side
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: message
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      const statusCode = response.status;
      let errorMessage = errorData.error?.message || 'OpenAI API request failed';
      
      // Provide user-friendly messages for common errors
      if (statusCode === 429) {
        errorMessage = 'Rate limit exceeded. Please wait a moment and try again.';
      } else if (statusCode === 401) {
        errorMessage = 'API authentication failed. Please check your OpenAI API key.';
      } else if (statusCode === 500) {
        errorMessage = 'OpenAI service error. Please try again later.';
      }
      
      return res.status(statusCode).json({ 
        error: errorMessage 
      });
    }

    const result = await response.json();
    const botResponse = result.choices[0].message.content;

    return res.status(200).json({ response: botResponse });

  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return res.status(500).json({ 
      error: error.message || 'Internal server error' 
    });
  }
}

