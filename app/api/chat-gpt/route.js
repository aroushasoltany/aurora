const OpenAI = require("openai");
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const POST = async (req, { params }) => {
  try {
    const message = "Which is the capital of Albania?";
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      temperature: 0,
      max_tokens: 1000,
    });

    console.log(response?.choices[0]?.message);

    return new Response(
      { status: 200 }
    )
  } catch (err) {
    console.log("ERROORRRRRR")
    console.log(err);

    return new Response(
      {status: 500}
    )
  }
}

// require('dotenv').config()
// const axios = require("axios");

// const CHATGPT_END_POINT = "https://api.openai.com/v1/chat/completions";
// const CHATGPT_MODEL = "gpt-3.5-turbo";

// const config = {
//   headers: {
//     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
//   },
// };

// const postChatGPTMessage = async (message) => {
//   const chatGPTData = {
//     model: CHATGPT_MODEL,
//     messages: message,
//   };

//   try {
//     const resp = await axios.post(CHATGPT_END_POINT, chatGPTData, config);
//     console.log('11111111111111111111111')
//     const data = resp.data;
//     console.log('2222222222222222222222')
//     const message2 = data?.choices[0]?.message;

//     return message2;
//   } catch (error) {
//     console.log("error with chatgpt api");
//     console.log(error)
//     return null
//   }
// }

// export const POST = async (req, { params }) => {
//   const message = 'what are some girl names?'

//   const chatGPTResponse = await postChatGPTMessage(message);

//   if (!chatGPTResponse) {
//     return new Response({ status: 500});
//   }
//   const { content } = chatGPTResponse;

//   console.log('contentttttttt');
//   console.log(content);

//   return new Response(
//     { status: 200 },
//     { message: content },
//   )
// }