import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);

    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });

    // Assert
    expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text", () => {
    // Arrange
    render(<App />);

    // Act
    const img = screen.getByAltText("profile pic");

    // Assert
    expect(img).toBeInTheDocument();
});


test("displays a second-level heading with the text `About Me`", () => {
    // Arrange
    render(<App />);

    // Act
    const secondLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2,
    });

    // Assert
    expect(secondLevelHeading).toBeInTheDocument();
});

/*
test("displays a paragraph with a biography", () => {
    // Arrange
    render(<App />);

    // Act
    const secondLevelHeading = screen.getByRole("paragraph");

    // Assert
    expect(secondLevelHeading).toBeInTheDocument();
});
*/

test("displays a link that contains linkedin url", () => {
    // Arrange
    render(<App />);

    // Act
    const linkedInLink = screen.getByRole("link", {
        name: /linkedin/i
    });

    // Assert
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute("href", expect.stringContaining('linkedin'));
});

test("displays a link that contains github url", () => {
    // Arrange
    render(<App />);

    // Act
    const githubLink = screen.getByRole("link", {
        name: /github/i,
    });

    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", expect.stringContaining('github'));
});