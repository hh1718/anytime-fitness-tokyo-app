import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { TopPage, RankingPage, AreaPage, TrainLinePage } from './components/common/DashboadHOC';
import { gymData } from './data/gymData';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/top" render={(props) => <TopPage gymData={gymData} routerProps={props} />} />
          <Route exact path="/ranking" render={(props) => <RankingPage gymData={gymData} routerProps={props} />} />
          <Route exact path="/area" render={(props) => <AreaPage gymData={gymData} routerProps={props} />} />
          <Route exact path="/area/:id" render={(props) => <AreaPage gymData={gymData} routerProps={props} />} />
          <Route exact path="/train" render={(props) => <TrainLinePage gymData={gymData} routerProps={props} />} />
          <Route exact path="/train/:id" render={(props) => <TrainLinePage gymData={gymData} routerProps={props} />} />
          <Route render={(props) => <TopPage gymData={gymData} routerProps={props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
