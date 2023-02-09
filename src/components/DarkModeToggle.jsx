import React, { useState, useEffect, useRef } from 'react';
import '../styles/switch.css';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');
  const [isChecked, setIsChecked] = useState(theme === 'dark');
  const toggleRef = useRef(null);
  useEffect(() => {
    console.log(theme, isChecked);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsChecked(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsChecked(true);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => {
    console.log('change');
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={handleChange}
        ref={toggleRef}
        checked={isChecked}
      />
      <span className="slider"></span>
    </label>
  );
};

export default DarkModeToggle;
