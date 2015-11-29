///<reference path="typings/react/react-global.d.ts"/>
///<reference path="typings/redux/redux.d.ts"/>
///<reference path="typings/immutable/immutable.d.ts"/>
///<reference path="typings/react-redux/react-redux.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {VoteProvider, IVoteProps} from './components/vote';
import {Provider} from 'react-redux';
import {store} from './store/voteStore';

function Hello(name:string){
    console.log(`Hello ${name}!`);
}

Hello("huy");

ReactDOM.render(
    <Provider store={store}>
        <VoteProvider winner={null} />
    </Provider>,
    document.getElementById('app')
);
