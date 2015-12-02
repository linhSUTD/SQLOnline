///<reference path="../../typings/immutable/immutable.d.ts"/>
///<reference path="../../typings/react-redux/react-redux.d.ts"/>

import {List, Map} from 'immutable';
import * as React from 'react';
import {connect} from 'react-redux';

interface IItemProps {
	key:number;
	title: string;
	description?: string;
	done:boolean;
}

export class Item extends React.Component<IItemProps, any>{
	
	
	public render(){
		return (
<li>
	<p><strong>{this.props.title}</strong></p>
	<p>{this.props.description}</p>
	<p>{this.props.done? "true": "false"}</p>
</li>
		);
	}
}