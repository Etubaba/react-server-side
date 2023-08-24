import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  test("to render", () => {
    const { getByTestId } = render(<Counter initial={0} />);
    const countComponent = getByTestId("count");
    expect(countComponent).toBeInTheDocument();
  });

  test("it should have count equals initial value", () => {
    const { getByTestId } = render(<Counter initial={0} />);
    const countValue = +getByTestId("count").textContent;
    expect(countValue).toBe(0);
  });

  test("Increment button increases count value by 1", () => {
    const { getByRole, getByTestId } = render(<Counter initial={0} />);
    const incrementbtn = getByRole("button", { name: "Increment" });
    fireEvent.click(incrementbtn);
    const countValue = +getByTestId("count").textContent;
    expect(countValue).toEqual(1);
  });
  test("Decrease button decreases count value by 1", () => {
    const { getByRole, getByTestId } = render(<Counter initial={2} />);
    const decrementbtn = getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementbtn);
    const countValue = +getByTestId("count").textContent;
    expect(countValue).toEqual(1);
  });
  it("reset count value to 0", () => {
    const { getByRole, getByTestId } = render(<Counter initial={2} />);
    const resetbtn = getByRole("button", { name: "Restart" });
    fireEvent.click(resetbtn);
    const countValue = +getByTestId("count").textContent;
    expect(countValue).toEqual(0);
  });
});
