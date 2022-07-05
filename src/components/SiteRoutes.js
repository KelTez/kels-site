import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Me from './Me/Me';
import Projects from './Projects/Projects';

const SiteRoutes = () =>{
    return (
        <Router>
            <div className='kels-site'>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/projectz' exact component={Projects} />
                    <Route path='/meeez' exact component={Me}/>
                </Switch>
            </div>
        </Router>
    )
}

export default SiteRoutes;