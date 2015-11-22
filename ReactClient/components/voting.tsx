///<reference path="../typings/react/react-global.d.ts"/>
///<reference path="../typings/immutable/immutable.d.ts"/>

import {List} from 'immutable';
import * as React from 'react';

export interface IVotingProps {
    //properties
    pair: List<string>;
    hasvoted: string;
    
    //methods
    
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
        console.log(this.state.votedIndex);
        this.state.votedIndex = this.props.pair.indexOf(entry);
    }
    
    public isDisabled():boolean{
        return this.props.pair.indexOf(this.props.hasvoted)>=0;
    }
    
    public hasVotedFor(entry:string){
        this.props.hasvoted === entry;
    }

    public render() {
        return (
<div>
    <div className="voting">{this.getPair().map(entry => 
        <button key={entry} onClick={() => this.vote(entry)} disabled={this.isDisabled()}>
            <h1>{entry}</h1>     
            {this.hasVotedFor(entry) ? <div className="label">Voted</div> :null}    
        </button>) 
    }</div>
</div>           
        );
    }
};