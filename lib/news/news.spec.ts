import { getNewsList } from ".";
import client from "../shared/sanityClient";

describe("News", () => {
  it("getNewsList", () => {
    const spy = spyOn(client, "fetch");
    getNewsList();
    expect(spy).toHaveBeenCalled();
  });
});
