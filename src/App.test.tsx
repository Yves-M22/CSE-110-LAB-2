import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeContext, themes } from "./themeContext";
import { useState, useContext } from 'react';

test('renders learn react link', () => {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
    
    <ThemeContext.Provider value={currentTheme}>
        render(<App />);
    </ThemeContext.Provider>
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
