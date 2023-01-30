import { legacy_createStore as createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

/* 데이터를 변경할 수 있는 유일한 부분(리듀서 함수) 새로운 state를 리턴해야한다. 첫 매개변수로는 state, 두번째 매개변수로는 action 함수가 와야한다.*/
const countModifier = (count = 0, action) => {
	switch (action.type) {
		case ADD:
			return count + 1;
		case MINUS:
			return count - 1;
		default:
			return count;
	}
};
/* 스토어 함수는 리듀서를 매개변수로 받아야한다. */
const countStore = createStore(countModifier);

const onChange = () => {
	number.innerText = countStore.getState();
};

/* 스토어의 변경사항을 구독해준다. */
countStore.subscribe(onChange);

/* 디스패치 함수를 통해 리듀서 함수의 접근하여 current state와 내가 보낸 action을 더해 리듀서와 소통 할 수 있다. + 액션({type: 뭐시기})은 오브젝트여야한다. */
const handleAdd = () => {
	countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
	countStore.dispatch({ type: MINUS });
};

/* 이벤트 리스너 함수 */
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
