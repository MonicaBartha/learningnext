import { render } from "@testing-library/react";
import Layout from "./Layout"; 

const renderComponent = () => render(<Layout />);

describe("<Layout />", () => {
  test("LayoutContainer renders correctly", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId("LayoutContainer")).toBeDefined();
  });
  test("LayoutContainer to have data-testid attribute", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId("LayoutContainer")).toHaveAttribute("data-testid", "LayoutContainer");
  });
 
});
