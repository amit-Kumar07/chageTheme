import React from 'react'
import { useTheme } from '../ThemeContext';
import '../style/changeTheme.css'
const ChangethemComp = () => {
    const {isDarkMode} = useTheme();
    const themeClass = isDarkMode ? 'dark-theme':'light-them'
  return (
    <div className={`container ${themeClass}`}>
       <p>This component uses selected theme</p>
    </div>
  )
}

export default ChangethemComp;