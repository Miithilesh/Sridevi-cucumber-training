package package7;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class def {

	@Given ("I want to write a step with \"([a-zA-Z]+[0-9]+)\"")
	public void a1(String n)
	{
		System.out.println(n);
	}
	@When ("I check for the \"([0-9]+)\" in step")
	public void a2(int Num )
	{
		System.out.println(Num);
	}
	@Then ("I verify the \"([a-zA-Z]+)\" in step")
	public void a3(String l)
	{
		System.out.println(l);
	}
	
}
