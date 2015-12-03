///<reference path="../../typings/immutable/immutable.d.ts"/>
///<reference path="../../typings/react-redux/react-redux.d.ts"/>
///<reference path="../../typings/react-router/react-router.d.ts"/>

import {List, Map} from 'immutable';
import * as React from 'react';
import {connect} from 'react-redux';
import {Header} from './header';
import {Item} from './item';
import {Link} from 'react-router';

interface ITodoItem {
	title: string;
	description?: string;
	done:boolean;
}

export interface ITodoFrameProp {
	todoItems: Map<string, boolean>;
}

export class ToDoFrame extends React.Component<ITodoFrameProp, {}>{
	constructor(props: any) {
		super(props);
	}

	public GetUndoneItems(): number {
		var undone = this.props.todoItems.filter((value, key) => {
			return value == false;
		}).count();
		return undone;
	}
	
	private getItemListFromState(): ITodoItem[]{
		var list: ITodoItem[] = [];
		this.props.todoItems.forEach((value,key)=>{
			var item: ITodoItem = {
				title:key,
				done:value,
				description: null
			};
			list.push(item);
		});
		return list;
	}

	public render() {
		return (
<div>
	<Header undone={this.GetUndoneItems()}/>
	<Link to={"something"} >Something else</Link>
	<ul>
	{this.getItemListFromState().map((item, index)=>{
		return <Item key={index} title={item.title} description={item.description} done={item.done}/>
	})}
	</ul>
</div>
		);
	}
}

export var ToDoFrameProvider = connect(function(state: Map<string, boolean>) {
	var props: ITodoFrameProp = {
		todoItems: state,
	};
	return props;
})(ToDoFrame);