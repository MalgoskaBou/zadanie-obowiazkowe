import { cleanup } from "@testing-library/react";
import { toRoman, toArabic } from "./helperFunctions";

describe("<toRoman()/>", () => {
  afterEach(cleanup);

  it.each([
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"]
  ])("converts %d to %s", (arabic, expectedRoman) => {
    expect(toRoman(arabic)).toEqual(expectedRoman);
  });

  it("converts 2019 to MMXIX", () => {
    expect(toRoman(2019)).toEqual("MMXIX");
  });
});

describe("<toArabic()/>", () => {
  afterEach(cleanup);

  it.each([["I", 1], ["IV", 4]])(
    "converts %d to %s",
    (roman, expectedArabic) => {
      expect(toArabic(roman)).toEqual(expectedArabic);
    }
  );
});
