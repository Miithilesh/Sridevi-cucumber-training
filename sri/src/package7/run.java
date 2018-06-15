package package7;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin= {"html:src/package7/output/cucumber-html-report",
		"json:src/package7/output/cucumber.json",
		"junit:src/package7/output/cucumber-results.xml"		
		}
		)


public class run {

}
