///<reference path="../../typings/immutable/immutable.d.ts"/>
///<reference path="../../typings/react-redux/react-redux.d.ts"/>

import {List, Map} from 'immutable';
import * as React from 'react';
import {connect} from 'react-redux';

export interface IHeaderProp{
	undone: number;
}

export class Header extends React.Component<IHeaderProp,{}>{
	constructor(props: IHeaderProp){
		super(props);
	}
	
	
	public render(){
		return (
<div>
	<h3>TO DO LIST</h3>	
	<h4>{this.props.undone} things undone</h4>	
</div>
		);
	}
}