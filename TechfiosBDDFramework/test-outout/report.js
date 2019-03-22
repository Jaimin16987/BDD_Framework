$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/patel/git/BDD_Framework/TechfiosBDDFramework/src/main/java/features/serviceMap.feature");
formatter.feature({
  "line": 1,
  "name": "service features",
  "description": "",
  "id": "service-features",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "service test scenario",
  "description": "",
  "id": "service-features;service-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clik on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on product \u0026 service page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user move on new service",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters service data",
  "rows": [
    {
      "cells": [
        "name",
        "salePrice",
        "itemNo"
      ],
      "line": 14
    },
    {
      "cells": [
        "Alaptop1",
        "500",
        "101"
      ],
      "line": 15
    },
    {
      "cells": [
        "Alaptop2",
        "650",
        "102"
      ],
      "line": 16
    },
    {
      "cells": [
        "Alaptop3",
        "700",
        "103"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "browser is close",
  "keyword": "Then "
});
formatter.match({
  "location": "ServiceStepWithMapDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 3704307014,
  "status": "passed"
});
formatter.match({
  "location": "ServiceStepWithMapDefinition.title_of_login_page_is_Techfios()"
});
formatter.result({
  "duration": 10274429,
  "status": "passed"
});
formatter.match({
  "location": "ServiceStepWithMapDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 173416130,
  "status": "passed"
});
formatter.match({
  "location": "ServiceStepWithMapDefinition.user_clik_on_login_button()"
});
formatter.result({
  "duration": 1566231176,
  "status": "passed"
});
formatter.match({
  "location": "ServiceStepWithMapDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 15697715,
  "status": "passed"
});
formatter.match({
  "location": "ServiceStepWithMapDefinition.user_click_on_product_service_page()"
});
formatter.result({
  "duration": 98505897,
  "status": "passed"
});
formatter.match({
  "location": "ServiceStepWithMapDefinition.user_move_on_new_service()"
});
formatter.result({
  "duration": 641121361,
  "status": "passed"
});
formatter.match({
  "location": "ServiceStepWithMapDefinition.user_enters_data(DataTable)"
});
formatter.result({
  "duration": 2129329697,
  "status": "passed"
});
formatter.match({
  "location": "ServiceStepWithMapDefinition.browser_is_close()"
});
formatter.result({
  "duration": 624165238,
  "status": "passed"
});
});