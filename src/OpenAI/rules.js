let rules = [];
export { getRules };

rules.push({audience: "hitech", platform: "*", question: "Does the following text use phrases that relate to high technology workers?", grade: "good", response: "Well done, you used hitech langugae"});
rules.push({audience: "*", platform: "*", question: "Is it using bad language?", grade: "bad", response: "Don't use bad language"});
rules.push({audience: "*", platform: "*", question: "Does the following test talk about hostages?", grade: "Neutral", response: "Consider using the hashtags: #BringThenHomeNow #BringThemBackNow"});
rules.push({audience: "*", platform: "*", question: "can the first sentence of the following text be improved to effectively summerise the text and create emotinal engagement? ", grade: "Neutral", response: "Consider reprasing your first sentance so taht it will effectily summerise the post content and create emotional engagement"});
rules.push({audience: "US democrat liberals", platform: "*", question: "does the following text uses religous themes and images to prove its main point ", grade: "bad", response: "your post uses relogous themes and images discuss its main point, this kind of themes are not well accepted with your target audience. consider rephrasing your post"});

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