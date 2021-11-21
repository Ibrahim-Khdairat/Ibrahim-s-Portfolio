const React = require('react');
const { render } = require('react-dom');
const Index = require('./index');
const { ThemeProvider } = require('./contexts/theme');


const Index = () => {
    const [{ themeName }] = useContext(ThemeContext)
  
    return (
     <Index />
    )
  }

  