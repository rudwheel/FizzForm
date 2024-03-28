import { hello } from "./main";

describe("main", function () {
  it("should work", () => {
    expect(1 + 2).toBe(3);
  });

  it("should fail", () => {
    expect(hello()).toBe("Hello world!");
  });
});
