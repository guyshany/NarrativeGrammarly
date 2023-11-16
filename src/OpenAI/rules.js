let rules = [];
export { getRules };

rules.push({audience: "hitech", platform: "*", question: "Does the following text use phrases that relate to high technology workers?", grade: "good", response: "Well done, you used hitech langugae"});

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