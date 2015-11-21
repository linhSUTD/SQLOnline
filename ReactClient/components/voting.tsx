///<reference path="../typings/react/react-global.d.ts"/>
import * as React from 'react';

export interface IVotingProps {
    pair: string[];
}

export interface IVotingState {

}

export class Voting extends React.Component<IVotingProps, IVotingState>{
    constructor(props: IVotingProps) {
        super(props);
    }

    public getPair(): string[] {
        return this.props.pair || [];
    }

    public render() {
        return (
            
<div className="voting">
    {this.getPair().map(entry => <button key={entry}><h1>{entry}</h1></button>) }
</div>
        
        );
    }
};