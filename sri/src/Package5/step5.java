package Package5;

import cucumber.api.java.en.Given;

public class step5 {

	@Given ("^Say \"([a-zA-Z]+)\"")
	public void a1(String k)
	{
		System.out.println("Say "+k);
	}
}
