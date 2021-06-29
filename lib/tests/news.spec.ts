import { getNewsLinkList } from "../news";
import client from "../shared/sanityClient";

describe("News", () => {
  it("getNewsList", () => {
    const spy = jest.spyOn(client, "fetch");
    getNewsLinkList();
    expect(spy).toHaveBeenCalled();
  });
});
