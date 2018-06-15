$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("package7/tester.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to write a step with \"\u003cname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I check for the \"\u003cvalue\u003e\" in step",
  "keyword": "When "
});
formatter.step({
  "name": "I verify the \"\u003cstatus\u003e\" in step",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ]
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ]
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to write a step with \"name1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "def.a1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check for the \"5\" in step",
  "keyword": "When "
});
formatter.match({
  "location": "def.a2(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"success\" in step",
  "keyword": "Then "
});
formatter.match({
  "location": "def.a3(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to write a step with \"name2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "def.a1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check for the \"7\" in step",
  "keyword": "When "
});
formatter.match({
  "location": "def.a2(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Fail\" in step",
  "keyword": "Then "
});
formatter.match({
  "location": "def.a3(String)"
});
formatter.result({
  "status": "passed"
});
});