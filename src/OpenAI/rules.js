let rules = [];
export { getRules };

rules.push({audience: "hitech", platform: "*", question: "Does the following text uses at least one terminology from technology or business management jargon?", grade: "good", response: "Well done, you used hitech langugae"});
rules.push({audience: "*", platform: "", question: "Does the following text use bad language?", grade: "bad", response: "Don't use bad language"});
rules.push({audience: "*", platform: "", question: "Does the following text talk about hostages?", grade: "Neutral", response: "Consider using the hashtags: #BringThenHomeNow #BringThemBackNow", hashtag: true});
rules.push({audience: "american_liberals", platform: "*", question: "does the following text uses religious themes and images to prove its main point ", grade: "bad", response: "your post uses relogous themes and images discuss its main point, this kind of themes are not well accepted with your target audience. consider rephrasing your post"});
rules.push({audience: "*", platform: "", question: "Does the text potentially offend any cultural or ethnic group?", grade: "bad", response: "Avoid content that may be offensive to any cultural or ethnic group. Respectful communication is key."});
rules.push({audience: "*", platform: "", question: "Does the text advocate for peaceful resolution and dialogue?", grade: "good", response: "Advocating for peaceful solutions promotes a constructive dialogue. Keep emphasizing peaceful resolutions!"});
rules.push({audience: "*", platform: "", question: "Does the text promote violence or hostility?", grade: "bad", response: "Avoid language that may incite violence or hostility. Focus on promoting peaceful dialogue and understanding."});
rules.push({audience: "*", platform: "", question: "Does the text neglect the humanitarian aspects of the conflict?", grade: "bad", response: "Ensure your text recognizes the human impact of the conflict. Empathy enhances the effectiveness of your message."});
rules.push({audience: "kids", platform: "*", question: "Does the text contains hard description of graphics violence?", grade: "bad", response: "Does not fit the audience age."});
rules.push({audience: "*", platform: "", question: "Does the text disregard international law or relevant resolutions?", grade: "bad", response: "Acknowledge international law and resolutions to provide a comprehensive perspective. Ignoring them may lead to misunderstandings."});
rules.push({audience: "american_liberals", platform: "*", question: "Does the text uses whataboutism?", grade: "bad", response: "You post includes whataboutism as a strategy which is not well accepted strategy by your audience."});
rules.push({audience: "american_liberals", platform: "*", question: "Does the text uses pink-washing?", grade: "bad", response: "You post includes pink-washing as a strategy which is not well accepted strategy by your audience."});
rules.push({audience: "american_liberals", platform: "*", question: "Does the following text talks about the Jewish people percentage on the land of israel?", grade: "bad", response: "This post discusses a narative of historical land rights which may not be well accepted by your target audience. Consider rephrasing and using a different narrative."});
rules.push({audience: "american_liberals", platform: "*", question: "Does the following text has accurate mentions of the term 'Zionism' in it or in the  hashtags section?", grade: "bad", response: "The suggested post phrasing has a clear mention of The term 'Zionism' in the text or hashtags section. This term is not perceived well with the selected target audience as they see it as colonialism. Consider rephrasing your text or removing specific hashtags"});
rules.push({audience: "american_liberals", platform: "*", question: "Does the following text has accurate mentions of the term 'terror' in it or in the  hashtags section?", grade: "bad", response: "Use the phrases Mass shooting/Crimes against humanity instead of the word 'terror'."});
rules.push({audience: "*", platform: "*", question: "Does the text rely on unreliable sources?", grade: "bad", response: "Ensure the credibility of your sources. Relying on unreliable or biased information can compromise the integrity of your message."});

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