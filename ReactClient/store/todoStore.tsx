///<reference path="../typings/redux/redux.d.ts"/>
///<reference path="../typings/immutable/immutable.d.ts"/>
import {Map, List} from 'immutable';
import * as Redux from 'redux';

var _storeState = Map<string, any>();
var storeState = _storeState
    .set("Go to work", false)
    .set("Send email", false);


export var store = Redux.createStore(function(state: Map<string, boolean> = storeState, action: any) {
    return state;
}, storeState);


