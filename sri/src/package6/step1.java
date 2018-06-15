package package6;

import cucumber.api.java.en.Given;

public class step1 {

	@Given ("^ISay \"([a-zA-Z]+)\"")
	//@Given ("Say Hello")
	public void a(String n)
	{
		System.out.println(n);
		//System.out.println("Say Hello");
	}
	
}
