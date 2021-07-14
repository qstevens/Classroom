import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/pages/Home';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  }
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
        <main className={classes.content}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
