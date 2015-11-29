///<reference path="../typings/react/react-global.d.ts"/>
///<reference path="../typings/immutable/immutable.d.ts"/>

import {List, Map} from 'immutable';
import {store} from '../store/voteStore';
import * as React from 'react';

export interface IVotingProps {
    //properties
    pair: List<string>;
}

export interface IVotingState {
    votedIndex: number;
}

export class Voting extends React.Component<IVotingProps, IVotingState>{
    constructor(props: IVotingProps) {
        super(props);
        
        this.state = {
            votedIndex: -1,
        };
    }

    public getPair(): List<string> {
        return this.props.pair || List.of<string>();
    }
    
    public vote(entry: string){
        alert("voted " + entry);
        store.dispatch({
            type: "VOTE",
            voted: Map<string,boolean>().set(entry,true) 
        });
    }
    
    public render() {
        return (
<div>
    <div className="voting">{this.getPair().map(entry => 
        <button key={entry} onClick={() => this.vote(entry)} >
            <h1>{entry}</h1>   
        </button>) 
    }</div>
</div>           
        );
    }
};