import OpenAI from "openai";
import { open_ai_key } from "./openai-key.js";

const openai = new OpenAI({ apiKey: open_ai_key, dangerouslyAllowBrowser: true });

async function main() {


  const article = `
A month after the worst massacre of Jews since the Holocaust, there is a moral inversion of history taking place. Israel is being accused of genocide by protesters, human rights activists and some media in response to its military campaign against the Hamas regime in Gaza. Not only is it a debasement of the term genocide, it is a distortion of the Holocaust that fuels the surge in antisemitism worldwide.
<< Follow Ynetnews on Facebook | Twitter | Instagram | TikTok >>


Read more:
Hey UN, does it also count as a war crime when Israeli women are raped?
What's it like being an Arab-Israeli after October 7
Israel must insist on full hostage release before stopping war
It strains credulity that as we have recently commemorated the 85th anniversary of Kristallnacht November 9, 1938, the infamous antisemitic pogrom in Germany marking the onset of the Holocaust, Jews are being accused of mass murder. Over 1500 Israelis, mostly civilians, were murdered by Hamas terrorists, many of them tortured and raped, while 250 innocents were kidnapped and taken hostage in Gaza. Yet these horrific crimes have been diminished, ignored and even celebrated by those who accuse Israel of genocide. 
3
 View gallery Gaza war 
Fighting in Gaza does not amount to genocide (Photo: Courtesy)
“Genocide” is a legal term that requires intent to destroy an entire people, ethnicity or nation. In no way does it apply to Israel’s actions to defend itself. Yet critics of Israel have manipulated the memory of the Holocaust to turn it against the Jewish state, a familiar demonization throughout history. It is a perversion of fact and international law. It is dangerous. It is antisemitic. 

Indeed, the barbaric actions of the Hamas terrorists and its charter, which calls for the elimination of the state of Israel, fit the legal description of genocide. And anti-Israel protesters’ slogan, “from the river to the sea” is, as many in Congress have acknowledged, “a genocidal call to violence to destroy the state of Israel and its people to replace it with a Palestinian state extending from the Jordan River to the Mediterranean Sea.”
The sharp escalation of antisemitism worldwide since the outbreak of the Hamas-Israel war is of utmost concern. FBI Director Christopher Wray recently said that antisemitism in the U.S. “has reached historic levels.” Attacks on Jews and Jewish institutions in Europe and the proliferation of antisemitic speech in the countries where the Holocaust took place are becoming more and more acceptable. Jews worldwide are feeling increasingly isolated and living in acute fear. 
Gaza war 
Rep. Rashida Tlaib is distorting the meaning of the word 'Genocide' (Photo: Courtesy)

Why does UN Secretary General Antonio Guterres dislike Israel so much?
Ynet News
The International Holocaust Remembrance Alliance (IHRA), which brings together governments, organizations and experts to strengthen Holocaust education and remembrance, has made confronting Holocaust distortion a priority in fighting antisemitism. There could not be a more important time to do so. 
We believe it is of vital importance that teachers, students and the public understand the concept of genocide. There is no doubt that many innocent Palestinians are casualties of this war, one brought on by its Hamas regime. It is tragic and heartbreaking. But to conflate that with the Holocaust disgraces history and the memory of the victims of true genocide.

Group of people standing outside a Jewish-owned shop in an unnamed German town, after Kristallnacht, November 1938 (Photo: AP)
As we commemorate Kristallnacht we mourn those Jews who were murdered on October 7 in the worst pogrom since the Holocaust. And we call on all those who care about human rights to remember and protest that genocide, which includes the nearly 250 Israelis and others who were snatched by terrorists from their homes, nurseries and communities, held hostage for over a month in Gaza.

We join with President Biden, the U.S. and world leaders in condemning the surge of antisemitism. We, as Holocaust education organizations, must be vigilant and loud in rejecting the disinformation and distortion of the Holocaust that is now infecting the global community during the Israel-Hamas war. 
`;
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
        The article: ${article}
        The questions: ${questions}"`
      },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
  });
  console.log(completion.choices[0].message.content);
}

//main();