package StepDefinitions;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


//data table with maps : for parameterization of test cases


public class ServiceStepWithMapDefinition {
	WebDriver driver;
	 @Given("^user is on login page$")
	 public void user_is_on_login_page() {
		
		 System.setProperty("webdriver.chrome.driver","C:\\Driver\\chromedriver.exe" );
			 driver = new ChromeDriver();
			 driver.get("http://www.techfios.com/test/billing/?ng=login");
			 driver.manage().timeouts().pageLoadTimeout(20,TimeUnit.SECONDS);
			 driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
	 }
	 @When("^title of login page is Techfios$")
	 public void title_of_login_page_is_Techfios() {
		 String title = driver.getTitle();
		 System.out.println(title);
		 Assert.assertEquals("Login - TechFios Test Application - Billing", title); 
	 }
	 
	 //Reg Exp:
	 //1. \"([^\"]*)\"
	 //2. \"(.*)\"
	 
	 
	 @Then("^user enters username and password$")
	 public void user_enters_username_and_password(DataTable credential) {
		 
	for(Map<String,String> data : credential.asMaps(String.class, String.class)) {
		 driver.findElement(By.xpath("//input[@id='username']")).sendKeys(data.get("username"));
		 driver.findElement(By.xpath("//input[@id='password']")).sendKeys(data.get("password"));
	}	 
	 }
	 @And("^user clik on login button$")
	 public void user_clik_on_login_button() {
		 driver.findElement(By.xpath("//button[@name='login']")).click(); 
	 }
	 @Then("^user is on home page$")
	 public void user_is_on_home_page() {
		 String title = driver.getTitle();
		 System.out.println("Home page title is:: "+title);
		 Assert.assertEquals("Dashboard- TechFios Test Application - Billing", title);
	 }
	 @Then("^user click on product & service page$")
	 public void user_click_on_product_service_page() {
	    driver.findElement(By.xpath("//span[contains(text(),'Products & Services')]")).click();
	    
	 }
	 @Then("^user move on new service$")
	 public void user_move_on_new_service() {
	  driver.findElement(By.xpath("//a[contains(.,'New Service')]")).click();
	  
	 }
	 
	 @Then("^user enters service data$")
	 public void user_enters_data(DataTable serviceData) {
		
		 for(Map<String,String> data : serviceData.asMaps(String.class, String.class)) {
			
			 
		
	 
	    driver.findElement(By.xpath("//input[@id='name']")).sendKeys(data.get("name"));
	    driver.findElement(By.xpath("//input[@id='sales_price']")).sendKeys(data.get("salePrice"));
	    driver.findElement(By.xpath("//input[contains(@id,'number')]")).sendKeys(data.get("itemNo"));
	    driver.findElement(By.xpath("//button[@id='submit']")).click();
	   
	    driver.findElement(By.xpath("//span[contains(text(),'Products & Services')]")).click();
	    driver.findElement(By.xpath("//a[contains(.,'New Service')]")).click();
		 } 
	 }
	 @Then("^browser is close$")
	 public void browser_is_close()  {
	  driver.quit();   


	 }

}
