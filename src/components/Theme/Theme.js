import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  useEffect(() => {
    if (theme == 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('darkMode', theme);
  }, [theme]);
  const toggleMode = () => {
    if (theme == 'light') {

      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }
  return (
    <div className='flex justify-end pt-4 mr-10'>
      <button

        onClick={toggleMode}
        className="
        w-12 
        h-6 
        rounded-full 
        p-1 
        bg-gray-400 
        dark:bg-gray-600 
        relative 
        transition-colors 
        duration-500 
        ease-in
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-700 
        dark:focus:ring-blue-600 
        focus:border-transparent
      ">
        <div
          className="
            rounded-full 
            w-4 
            h-4 
            bg-blue-600 
            dark:bg-blue-500 
            relative 
            ml-0 
            dark:ml-6 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
        ">
        </div>
      </button>
    </div>
  )
}

export default Theme