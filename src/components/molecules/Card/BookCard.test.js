import { render, screen } from "@testing-library/react";
import BookCard from "./BookCard";

test("should have same book name", () => {
  render(
    <BookCard
      name="3 mistakes of my life"
      author="Chetan Bhagat Chetan Bhagat"
    />
  );
  const countParagraph = screen.getAllByRole("heading");
  expect(countParagraph.length).toBe(1);
});
test("should have same book names", () => {
  render(
    <BookCard
      author="Chetan"
      category="Drama"
      name="3 mistakes "
      id="1"
      url="http://www.google.com"
      status="Already in Library"
    />
  );
  const headingElement = screen.getByText(/mistakes/i);
  const countParagraph = screen.getAllByRole("heading");
  expect(headingElement).toBeInTheDocument();
  expect(countParagraph.length).toBe(1);
});
