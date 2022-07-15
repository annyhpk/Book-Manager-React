import React, { memo, useCallback, useEffect, useState } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const onClickDarkMode = useCallback(() => {
    document.body.classList.toggle('dark');
    setDarkMode((prev) => !prev);
  }, []);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
      document.querySelector('#default-toggle')?.setAttribute('checked', 'checked');
      setDarkMode((prev) => !prev);
    }
  }, []);

  return (
    <div className="flex flex-row-reverse absolute top-2 right-5 lg:right-24">
      <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" value="" id="default-toggle" className="sr-only peer" onClick={onClickDarkMode} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      <span id="dark-mode-text" className="ml-3 text-sm pr-2 font-medium text-gray-900 dark:text-gray-300">
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </span>
    </div>
  );
}

export default memo(DarkModeToggle);
