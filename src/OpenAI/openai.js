import OpenAI from 'openai'
import { open_ai_key } from './openai-key.js'
import { getRules } from './rules.js'

// The name of your Azure OpenAI Resource.
// https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource
const resource = 'narratively-openai'

// Corresponds to your Model deployment within your OpenAI resource, e.g. my-gpt35-16k-deployment
// Navigate to the Azure OpenAI Studio to deploy a model.
const model = 'gpt-4-turbo-1106' // 'gpt-3.5-turbo-1106'

// https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#rest-api-versioning
const apiVersion = '2023-09-01-preview'

/* TODO: manage the key better
const apiKey = process.env['AZURE_OPENAI_API_KEY']
if (!apiKey) {
  throw new Error(
    'The AZURE_OPENAI_API_KEY environment variable is missing or empty.'
  )
}
*/
const apiKey = open_ai_key

// Azure OpenAI requires a custom baseURL, api-version query param, and api-key header.
const openai = new OpenAI({
  apiKey,
  baseURL: `https://${resource}.openai.azure.com/openai/deployments/${model}`,
  defaultQuery: { 'api-version': apiVersion },
  defaultHeaders: { 'api-key': apiKey },
  dangerouslyAllowBrowser: true, //TODO: remove this after it is not in the browser
})

export async function parseText(text, audience) {
  //const questions = ['Is it talking about hospital?','Is it talking about the war?','Is it talking about peace?','Is it talking about revenge?','* Is it talking about the holocaust?'];
  //audience="american_liberals";
  //audience="hitech";
  var rules = getRules(audience, '*')

  var questions = []
  rules.forEach(function (rule, index) {
    questions.push(rule.question)
  })

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `You are a helpful assistant designed to output JSON. 
        I will provide you with a post submitted by a user and will you will answer few questions about it. 
        You should output a JSON with an array that every item in the array corresponds to one my questions.
        Each array item should include: The original question, answer true/false per the result of the question, and the snippet of text from the article. Note that the snippet should be exact text taken from the article. 
        relevant to the answer
        The post: ${text}
        The questions: ${questions}"`,
      },
    ],
    model: model,
    response_format: { type: 'json_object' },
    seed: 10,
    temperature: 0.2,
  })

  console.log(completion.choices[0].message.content)

  var result = JSON.parse(completion.choices[0].message.content)
  result =
    result.questions ||
    result.results ||
    result.response ||
    result.array ||
    result.answers ||
    result.responses // Sometimes the field name is different...

  for (var i = 0; i < rules.length; i++) {
    rules[i].answer = JSON.parse(result[i].answer)
    rules[i].snippet = result[i].snippet
  }

  var trueRules = rules.filter(function (el) {
    return el.answer == true
  })

  for (var i = 0; i < trueRules.length; i++) {
    trueRules[i].id = i
  }

  console.log(trueRules)
  return trueRules
}
