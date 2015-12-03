///<reference path="../typings/redux/redux.d.ts"/>
///<reference path="../typings/immutable/immutable.d.ts"/>
import {Map, List} from 'immutable';
import * as Redux from 'redux';

var _todoStoreState = Map<string, any>();
var todoStoreState = _todoStoreState
    .set("Go to work", false)
    .set("Send email", false);

var baseStore = Map<any,any>();

/**
 * Register a store with a key. Returns false if the key exists
 * @param key The key used for the store
 * @param subStore The store object
 */
export function registerStore(key:string, subStore:any): boolean {
    return false;
}

export var todoStore = Redux.createStore(function(state: Map<string, boolean> = todoStoreState, action: any) {
    return state;
}, todoStoreState);


