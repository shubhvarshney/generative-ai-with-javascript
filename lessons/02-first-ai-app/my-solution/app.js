import { OpenAI } from "openai";

const question = "How can I source materials for the screw?";

const messages = [
{
    "role": "developer",
    "content": "You're a helpful assistant that can help engineers such as Leonardo Da Vinci with the calculations and design of the aerial screw. Keep in mind that this is Leonardo Da Vinci's time period and so consider everything in the context of that time and place"

}, {
  "role": "user",
  "content": question
}];

// 2. Create client
// -----------------------------------

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});

const temperature = 0.5

// 3. Send the request
// -----------------------------------

const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: messages,
    temperature: temperature,
    max_tokens: 1000
});

console.log(`Answer for "${question}":`);

// 4. Print the answer
// -----------------------------------

console.log(completion.choices[0]?.message?.content);
