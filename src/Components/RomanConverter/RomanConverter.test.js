import { cleanup, render, fireEvent } from "@testing-library/react";
import React from "react";
import RomanConverter from "./RomanConverter";

describe("<RomanCOnverter/>", () => {
  afterEach(cleanup);

  it("has an input file", () => {
    const { getByLabelText } = render(<RomanConverter />);
    expect(() => {
      getByLabelText(/arabic/i);
    }).not.toThrow();
  });

  it("show no roman number from default", () => {
    const { getByText } = render(<RomanConverter />);
    expect(() => {
      getByText("Roman: none");
    }).not.toThrow();
  });

  it("show no roman number for 0", () => {
    const { getByLabelText, getByText } = render(<RomanConverter />);
    fireEvent.change(getByLabelText(/arabic/i), { target: { value: "0" } });
    expect(() => {
      getByText("Roman: none");
    }).not.toThrow();
  });
});
