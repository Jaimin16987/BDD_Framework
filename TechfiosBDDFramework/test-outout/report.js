$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/patel/git/BDD_Framework/TechfiosBDDFramework/src/main/java/features/service.feature");
formatter.feature({
  "line": 1,
  "name": "service features",
  "description": "",
  "id": "service-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "service test scenario",
  "description": "",
  "id": "service-features;service-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Techfios",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "use enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clik on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on product \u0026 service page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user move on new service",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters data \"\u003cname\u003e\" and \"\u003csalePrice\u003e\" and \"\u003citemNo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "browser is close",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "service-features;service-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "name",
        "salePrice",
        "itemNo"
      ],
      "line": 16,
      "id": "service-features;service-test-scenario;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Alaptop1",
        "500",
        "101"
      ],
      "line": 17,
      "id": "service-features;service-test-scenario;;2"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Alaptop2",
        "650",
        "102"
      ],
      "line": 18,
      "id": "service-features;service-test-scenario;;3"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Alaptop3",
        "700",
        "103"
      ],
      "line": 19,
      "id": "service-features;service-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "service test scenario",
  "description": "",
  "id": "service-features;service-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Techfios",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "use enters \"techfiosdemo@gmail.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clik on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on product \u0026 service page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user move on new service",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters data \"Alaptop1\" and \"500\" and \"101\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "browser is close",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 3755147109,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Techfios()"
});
formatter.result({
  "duration": 9091072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 12
    },
    {
      "val": "abc123",
      "offset": 41
    }
  ],
  "location": "LoginStepDefinition.use_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 190270470,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clik_on_login_button()"
});
formatter.result({
  "duration": 1373208452,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 16576750,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_product_service_page()"
});
formatter.result({
  "duration": 82447830,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_move_on_new_service()"
});
formatter.result({
  "duration": 657932006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alaptop1",
      "offset": 18
    },
    {
      "val": "500",
      "offset": 33
    },
    {
      "val": "101",
      "offset": 43
    }
  ],
  "location": "LoginStepDefinition.user_enters_data_and_and(String,String,String)"
});
formatter.result({
  "duration": 2917519785,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.browser_is_close()"
});
formatter.result({
  "duration": 636794555,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "service test scenario",
  "description": "",
  "id": "service-features;service-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Techfios",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "use enters \"techfiosdemo@gmail.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clik on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on product \u0026 service page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user move on new service",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters data \"Alaptop2\" and \"650\" and \"102\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "browser is close",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 3011223375,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Techfios()"
});
formatter.result({
  "duration": 7394175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 12
    },
    {
      "val": "abc123",
      "offset": 41
    }
  ],
  "location": "LoginStepDefinition.use_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 179904026,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clik_on_login_button()"
});
formatter.result({
  "duration": 1273391713,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 13135147,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_product_service_page()"
});
formatter.result({
  "duration": 79540331,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_move_on_new_service()"
});
formatter.result({
  "duration": 562369591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alaptop2",
      "offset": 18
    },
    {
      "val": "650",
      "offset": 33
    },
    {
      "val": "102",
      "offset": 43
    }
  ],
  "location": "LoginStepDefinition.user_enters_data_and_and(String,String,String)"
});
formatter.result({
  "duration": 2890809458,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.browser_is_close()"
});
formatter.result({
  "duration": 635068871,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "service test scenario",
  "description": "",
  "id": "service-features;service-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Techfios",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "use enters \"techfiosdemo@gmail.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clik on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on product \u0026 service page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user move on new service",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters data \"Alaptop3\" and \"700\" and \"103\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "browser is close",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 2928655256,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Techfios()"
});
formatter.result({
  "duration": 6825630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 12
    },
    {
      "val": "abc123",
      "offset": 41
    }
  ],
  "location": "LoginStepDefinition.use_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 168987028,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clik_on_login_button()"
});
formatter.result({
  "duration": 1424484981,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 13928336,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_product_service_page()"
});
formatter.result({
  "duration": 100424352,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_move_on_new_service()"
});
formatter.result({
  "duration": 664292415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alaptop3",
      "offset": 18
    },
    {
      "val": "700",
      "offset": 33
    },
    {
      "val": "103",
      "offset": 43
    }
  ],
  "location": "LoginStepDefinition.user_enters_data_and_and(String,String,String)"
});
formatter.result({
  "duration": 4419142401,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.browser_is_close()"
});
formatter.result({
  "duration": 622622558,
  "status": "passed"
});
});