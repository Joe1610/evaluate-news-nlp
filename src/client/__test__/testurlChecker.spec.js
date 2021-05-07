import { checkForUrl} from "./../js/urlChecker";

describe("Testing url checker", () => {
    test("Testing urlChecker()", () => {
        expect(checkForUrl).toBeDefined();
    }) ;
    test("In case of valid url, urlChecker returns true", () => {
        expect(checkForUrl(
            "https://news.sky.com/story/what-are-your-holiday-options-covid-19-infection-and-vaccination-rates-for-tourism-hotspots-revealed-12297588"
        )).toBeTruthy();
    }) ;
    test("In case of invalid url, urlChecker returns false", () => {
        expect(checkForUrl(
            "whatever"
        )).toBeFalsy();
    }) ;
})