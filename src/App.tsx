import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { TopPage, RankingPage, AreaPage, TrainLinePage, FavoritePage, MapPage } from './components/common/DashboadHOC';
import { gymData } from './data/gymData';
import { useCookies } from 'react-cookie';
import './App.scss';
import { cookieKey } from './common/constants';

function App() {
  const [cookies, setCookie] = useCookies([cookieKey]);
  const handleCookie = (gymKey: string) => {
    const values = cookies[cookieKey]
    const date = new Date()
    date.setMonth(date.getMonth() + 6)
    if (Array.isArray(values)) {
      const nextValue = values.includes(gymKey) ? values.filter((v) => v !== gymKey) : [gymKey].concat(values)
      setCookie(cookieKey, nextValue, { expires: date }) 
    } else {
      setCookie(cookieKey, [gymKey], { expires: date }) 
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/about" render={(props) => <TopPage gymData={gymData} routerProps={props} />} />
          <Route exact path="/ranking" render={(props) => <RankingPage gymData={gymData} routerProps={props} cookie={cookies} handleCookie={handleCookie} />} />
          <Route exact path="/area/:id?" render={(props) => <AreaPage gymData={gymData} routerProps={props} cookie={cookies} handleCookie={handleCookie} />} />
          <Route exact path="/train/:id?" render={(props) => <TrainLinePage gymData={gymData} routerProps={props} cookie={cookies} handleCookie={handleCookie} />} />
          <Route exact path="/favorite" render={(props) => <FavoritePage gymData={gymData} routerProps={props} cookie={cookies} handleCookie={handleCookie} />} />
          <Route exact path="/map" render={(props) => <MapPage gymData={gymData} routerProps={props} />} />
          <Route render={(props) => <TopPage gymData={gymData} routerProps={props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
