import type { Page } from 'playwright';

//check isVisible function
export async function isVisible(page: Page, locator: string): Promise<boolean> {
    await page.waitForSelector(locator);
    return await page.isVisible(locator);
}
//take screenshot function
export async function takeScreenshot(page: Page, name: string) {
    await page.screenshot({ path: `screenshots/${name}.png` });
}
// for each test data to execute with multiples data
// https://stackoverflow.com/questions/68115920/how-to-pass-different-test-data-to-a-test-in-playwright-test-runner?noredirect=1&lq=1

/*
export async function executeWithTestData(testData: any, testFunction: Function) {
    for (const data of testData) {
        await testFunction(data);
    }
}
*/
  // Multiple test data possible solution // v2
/*
const testData = [{
    name:"test1",
    url:"https://www.youtube.com"
},{
  name:"test2",
  url:"https://www.google.com"
},
{
  name:"test3",
  url:"https://www.bing.com"
}
]
// Execute test for each data
testData.forEach(data =>{
test(`MyTest ${data.name}`, async ({ page}) => {
  
    await page.goto(data.url);



    //Test assertion here
    }); 

})

*/