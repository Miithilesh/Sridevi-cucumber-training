package Package3;

import cucumber.api.java.en.Given;

public class Step3 {
	@Given ("Say Hello")
	public static void a1()
	{
		System.out.println("Say Hello");
	}
	@Given ("Say Bye")
	public static void a2()
	{
	System.out.println("Say Bye");
}
}