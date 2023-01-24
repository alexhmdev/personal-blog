import React, { useState, useEffect, useRef } from 'react';
import '../styles/switch.css';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');
  const toggleRef = useRef(null);
  useEffect(() => {
    console.log(theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      toggleRef.current.checked = false;
    } else {
      document.documentElement.classList.add('dark');
      toggleRef.current.checked = true;
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleClick = () => {
    console.log('change');
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={handleClick} ref={toggleRef} />
      <span className="slider"></span>
    </label>
  );
};

export default DarkModeToggle;
