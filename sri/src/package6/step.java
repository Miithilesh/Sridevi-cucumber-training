package package6;

import cucumber.api.java.en.And;

public class step {

	@And ("^Say \"([a-zA-Z]+)\"")
	//@And ("Say Hi")
	public void a(String n)
	{
		System.out.println(n);
		//System.out.println("Say Hi");
	}
	
}
