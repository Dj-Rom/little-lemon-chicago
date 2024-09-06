import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("Adds one", () => {
    // Render the App component
    render(<App />);

    // Simulate a user action (e.g., clicking a button) that triggers the "add one" functionality
    const addButton = screen.getByRole('button', { name: /add one/i });
    fireEvent.click(addButton);

    // Assert that the expected result occurs (e.g., a counter value is incremented)
    const counter = screen.getByRole('heading', { name: /counter/i });
    expect(counter).toHaveTextContent('1');
});