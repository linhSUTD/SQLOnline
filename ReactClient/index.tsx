///<reference path="typings/react/react-global.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Voting} from './components/voting';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
    <Voting pair={pair} />,
    document.getElementById('app')
);

