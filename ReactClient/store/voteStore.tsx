///<reference path="../typings/redux/redux.d.ts"/>
///<reference path="../typings/immutable/immutable.d.ts"/>
import {Map, List} from 'immutable';
import * as Redux from 'redux';

var _storeState = Map<string, any>();
var storeState = _storeState
    .set("voted", Map<string, boolean>({ "voted": true }));

export interface IVoteAction {
    type: string;
    voted: Map<string, boolean>;
}

export class VoteStoreProvider {
    static voted(state: Map<string, any>): Map<string, boolean> {
        if (!state) {
            return Map<string, boolean>();
        }
        return (state.get("voted"));
    }
}


export var store = Redux.createStore(function(state: Map<string, any> = storeState, action: IVoteAction) {
    switch (action.type) {
        case "VOTE":
            var _state = state.update("voted", (voted: Map<string, boolean>) => {
                return voted.merge(action.voted);
            });
    }
    return _state;
}, storeState);


