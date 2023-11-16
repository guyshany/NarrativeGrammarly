import OpenAI from "openai";
import { open_ai_key } from "./openai-key.js";

const openai = new OpenAI({ apiKey: open_ai_key, dangerouslyAllowBrowser: true });

export async function parseText(text) {


  const questions = `* Is it talking about hospital?
* Is it talking about the war?
* Is it talking about peace?
* Is it talking about revenge?
* Is it talking about the holocaust?`;

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a helpful assistant designed to output JSON. 
        I will provide you with a post submitted by a user and will you will answer few questions about it. 
        The answers should be in JSON and include: The original question, answer(true/false) and the snippet of text from the article 
        relevant to the answer
        The article: ${text}
        The questions: ${questions}"`
      },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
  });
  console.log(completion.choices[0].message.content);

  return completion.choices[0].message.content;
}
