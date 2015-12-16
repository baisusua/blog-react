//使用es6 开发
import React                from 'react';
import ReactDOM             from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Index    from './pages/index';
import About  from './pages/about';
import Concat from './pages/concat';
import List   from './pages/list';

import {Router, Route} from 'react-router';

const history = createBrowserHistory();

//定义路由
const router = (
    <Router history={history}>
        <Route path="/" component={Index}>
            <Route path="about" component={About} />
            <Route path="concat" component={Concat} />
            <Route path="list/:id" component={List} />
        </Route>
    </Router>
);

ReactDOM.render(
    router,
    document.getElementById('root')
);