import React, {useState} from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import Home from './Home';
import Spain from './Countries/Spain';
import './App.css';
import ThemeContext from './ThemeContext';
import {darkTheme,lightTheme} from './styles/theme';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
`;

export default function App(){
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleChangeTheme = event => {
      setIsDarkTheme(!isDarkTheme);
      console.log(isDarkTheme);
    };

    const currentTheme = isDarkTheme ? darkTheme : lightTheme;

    return (
      <ThemeContext.Provider value={currentTheme}>
        <MainContainer theme={currentTheme}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/spain">Spain</Link>
                </li>
                <li>
                  <button onClick={handleChangeTheme}>Change Theme</button>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/spain">
                <Spain />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        </MainContainer>
      </ThemeContext.Provider>
      );
}