let rules = [];
export { getRules };

rules.push({audience: "hitech", platform: "*", question: "Does the following text use phrases that relate to high technology workers?", grade: "good", response: "Well done, you used hitech langugae"});
rules.push({audience: "*", platform: "*", question: "Is it using bad language?", grade: "bad", response: "Don't use bad language"});

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