///<reference path="../typings/immutable/immutable.d.ts"/>

import {List} from 'immutable';
import * as React from 'react';
import {Winner} from './winner';
import {Voting} from './voting';

export interface IVoteProps{
	winner:string;
}
const pair = List.of('Trainspotting', '28 Days Later');
export class Vote extends React.Component<IVoteProps,{}>{
	constructor(props:IVoteProps){
		super(props);
	}
	
	public render(){
		return(
		
<div>
	{this.props.winner?
	<Winner winner={this.props.winner}/>:
	<Voting hasvoted={this.props.winner} pair={pair} />
	}
</div>	

		);
	}
}
