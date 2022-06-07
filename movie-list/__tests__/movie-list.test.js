const { Builder, Capabilities, By } = require("selenuim-webdriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

//127.0.0.1 is the same as local host
beforeEach(async () => {
  await driver.get("http://localhost:5500/movie-list/index.html");
});

afterAll(async () => {
  await driver.quit();
});

describe("tests for movie0list page", () => {
  test("sibmid adds a new movie", async () => {
    //we need the input field and the button
    await driver
      .findElement(By.xpath("//input"))
      .sendKeys("Back to the Future \n");
    // we need the button
    // await driver.findElement(By.xpath("//button")).click();
    // use the isDisplayed method
    const movie = await driver.findElement(By.xpath("//li"));
    //use the isDisplayed methos which evaluated to true or false
    const displayed = movie.isDisplayed();
    // expect result of isdisplayed to be true
    expect(displayed).toBeTruthy();
  });
});
