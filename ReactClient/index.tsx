///<reference path="typings/react/react-global.d.ts"/>
///<reference path="typings/redux/redux.d.ts"/>
///<reference path="typings/immutable/immutable.d.ts"/>
///<reference path="typings/react-redux/react-redux.d.ts"/>
///<reference path="typings/react-router/react-router.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import {Provider} from 'react-redux';
import {ToDoFrameProvider} from './components/todoList/todoFrame';
import {Something} from './components/st/thing';
import {store} from './store/todoStore';


(function Hello(name: string) {
    console.log(`Hello ${name}!`);
})("huy");

var router = (
<Router>
    <Route path="/" component={ToDoFrameProvider} />
    <Route path="/something" component= {Something}/>
</Router>
);

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('app')
);


