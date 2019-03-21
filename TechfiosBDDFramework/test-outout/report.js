$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/patel/eclipse-workspace/TechfiosBDDFramework/src/main/java/features/service.feature");
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
  "duration": 3621617898,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Techfios()"
});
formatter.result({
  "duration": 10232281,
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
  "duration": 175545953,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clik_on_login_button()"
});
formatter.result({
  "duration": 1254427306,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 6910452,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_product_service_page()"
});
formatter.result({
  "duration": 81141657,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_move_on_new_service()"
});
formatter.result({
  "duration": 545831676,
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
  "duration": 2817053185,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.browser_is_close()"
});
formatter.result({
  "duration": 629541041,
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
  "duration": 2891526510,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Techfios()"
});
formatter.result({
  "duration": 6974710,
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
  "duration": 165936193,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clik_on_login_button()"
});
formatter.result({
  "duration": 1169000480,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 12217051,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_product_service_page()"
});
formatter.result({
  "duration": 92446772,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_move_on_new_service()"
});
formatter.result({
  "duration": 523587451,
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
  "duration": 2806164968,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.browser_is_close()"
});
formatter.result({
  "duration": 626498344,
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
  "duration": 2992229532,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Techfios()"
});
formatter.result({
  "duration": 6340365,
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
  "duration": 157460441,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clik_on_login_button()"
});
formatter.result({
  "duration": 1153149055,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 11805806,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_product_service_page()"
});
formatter.result({
  "duration": 79748051,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_move_on_new_service()"
});
formatter.result({
  "duration": 547655545,
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
  "duration": 2818420574,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.browser_is_close()"
});
formatter.result({
  "duration": 636470514,
  "status": "passed"
});
});