///<reference path="../typings/react/react-global.d.ts"/>
import * as React from 'react';

export interface IWinnerProps{
    winner: string;
}

export class Winner extends React.Component<IWinnerProps, {}>{
    constructor(props:IWinnerProps){
        super(props);
    }
    
    public render(){
        return (
            
<div className="winner">
    Winner is {this.props.winner}!
</div>   
            
        );
    }
}

