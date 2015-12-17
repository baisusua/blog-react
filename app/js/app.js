//使用es6 开发
import React                from 'react';
import ReactDOM             from 'react-dom';
import createHashHistory    from 'history/lib/createHashHistory';

import Index  from './pages/index';
import About  from './pages/about';
import Concat from './pages/concat';
import List   from './pages/list';

import {Router, Route, Redirect} from 'react-router';

// const history = createBrowserHistory();	//访问地址 需要服务端配合：http://segmentfault.com/q/1010000004085545
const history = createHashHistory({queryKey: false});	//访问地址关闭参数 不需要服务端配合：http://segmentfault.com/q/1010000004085545

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