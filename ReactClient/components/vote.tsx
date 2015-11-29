///<reference path="../typings/immutable/immutable.d.ts"/>
///<reference path="../typings/react-redux/react-redux.d.ts"/>

import {List, Map} from 'immutable';
import * as React from 'react';
import {Winner} from './winner';
import {Voting} from './voting';
import {connect} from 'react-redux';
import {VoteStoreProvider} from '../store/voteStore';

export interface IVoteProps{
	winner:string;
}
const pair = List.of('Trainspotting', '28 Days Later', "mom");
export class Vote extends React.Component<IVoteProps,{}>{
	constructor(props:IVoteProps){
		super(props);
	}
	
	public render(){
		return(
		
<div>
	{this.props.winner?
	<Winner winner={this.props.winner}/>:
	<Voting pair={pair} />
	}
</div>	

		);
	}
}

export var VoteProvider = connect(function(state:Map<string, any>){
	var winner:string = null;
	var votedState = VoteStoreProvider.voted;
	votedState(state).forEach((value,key)=>{
		console.log(key);
		if(value){
			winner = key;
		}
	});
	
	var props: IVoteProps = {
		winner: winner
	};
	return props;
})(Vote);