import { parseText } from "../OpenAI/openai"

export const parseData = async (text) => {
    const result = await parseText(text);
    console.log(result)
}