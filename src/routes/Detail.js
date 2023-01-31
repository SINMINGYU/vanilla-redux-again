import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

function Detail({ toDos }) {
	const myId = useParams().id;
	const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));
	console.log(toDo);
	console.log(myId);
	return (
		<>
			<h1>{toDo?.text}</h1>
			<h5>Created at: {toDo?.id}</h5>
		</>
	);
}

function mapStateToProps(state) {
	return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
