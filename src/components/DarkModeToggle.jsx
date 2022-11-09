import React, { useState, useEffect } from 'react';
import { LineMdLightDarkLoop } from './icons/LineMdLightDarkLoop';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className="rounded-full  " onClick={handleClick}>
      <LineMdLightDarkLoop width="24px" height="24px" />
    </button>
  );
};

export default DarkModeToggle;
