///<reference path="typings/react/react-global.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Vote, IVoteProps} from './components/vote';


ReactDOM.render(
    <Vote winner="Trainspotting" />,
    document.getElementById('app')
);

