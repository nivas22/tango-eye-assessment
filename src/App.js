
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import NavBar from './components/NavBar';
import Breadcrumb from './components/Breadcrumb';
import './app.scss';
import Aux from "./hoc/_Aux";
import Home from './pages';
import PieChart from './pages/Pie';
import LineChart from './pages/LineChart1';
import ScatterChart from './pages/ScatterChart';

function App() {
  return (
    <Aux>
      <Navigation/>
      <NavBar/>
      <div className='pcoded-main-container'>
        <div className="pcoded-wrapper">
          <div className="pcoded-content">
            <div className="pcoded-inner-content">
                <Breadcrumb />
                <div className="main-body">
                    <div className="page-wrapper">
                      <Switch>
                      <Route path='/' exact component={Home} />
                      <Route path='/piechart' exact component={PieChart} />
                      <Route path='/linechart' exact component={LineChart} />
                      <Route path='/plotchart' exact component={ScatterChart} />
                      </Switch>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </Aux>
  );
}

export default withRouter(App);
