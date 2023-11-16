let rules = [];
export { getRules };

rules.push({audience: "hitech", platform: "*", question: "Does the following text use phrases that relate to high technology workers?", grade: "good", response: "Well done, you used hitech langugae"});
rules.push({audience: "", platform: "", question: "Does the following text use bad language?", grade: "bad", response: "Don't use bad language"});
rules.push({audience: "", platform: "", question: "Does the following test talk about hostages?", grade: "Neutral", response: "Consider using the hashtags: #BringThenHomeNow #BringThemBackNow"});
rules.push({audience: "US democrat liberals", platform: "*", question: "does the following text uses religious themes and images to prove its main point ", grade: "bad", response: "your post uses relogous themes and images discuss its main point, this kind of themes are not well accepted with your target audience. consider rephrasing your post"});
rules.push({audience: "", platform: "", question: "Does the text potentially offend any cultural or ethnic group?", grade: "bad", response: "Avoid content that may be offensive to any cultural or ethnic group. Respectful communication is key."});
rules.push({audience: "", platform: "", question: "Does the text advocate for peaceful resolution and dialogue?", grade: "good", response: "Advocating for peaceful solutions promotes a constructive dialogue. Keep emphasizing peaceful resolutions!"});
rules.push({audience: "", platform: "", question: "Does the text promote violence or hostility?", grade: "bad", response: "Avoid language that may incite violence or hostility. Focus on promoting peaceful dialogue and understanding."});
rules.push({audience: "", platform: "", question: "Does the text neglect the humanitarian aspects of the conflict?", grade: "bad", response: "Ensure your text recognizes the human impact of the conflict. Empathy enhances the effectiveness of your message."});
rules.push({audience: "kids", platform: "*", question: "Does the text contains hard description of graphics violence?", grade: "bad", response: "Does not fit the audience age."});
rules.push({audience: "", platform: "", question: "Does the text disregard international law or relevant resolutions?", grade: "bad", response: "Acknowledge international law and resolutions to provide a comprehensive perspective. Ignoring them may lead to misunderstandings."});
rules.push({audience: "US democrat liberals", platform: "*", question: "Does the text uses whataboutism?", grade: "bad", response: "You post includes whataboutism as a strategy which is not well accepted strategy by your audience."});
rules.push({audience: "US democrat liberals", platform: "*", question: "Does the text uses pink-washing?", grade: "bad", response: "You post includes pink-washing as a strategy which is not well accepted strategy by your audience."});
//Can the first sentence of this text be improved to effectively summerise the text? Please answer in yes or no if yes provide an alternative first sentence no longer then 12 words

function getRules(audience, platform)
{
    var result = [];

    rules.forEach(function (rule, index) {
      if(rule.audience == audience || rule.audience == "*")
            if(rule.platform == platform || rule.platform == "*")
                result.push(rule);
    });

    return result;
}