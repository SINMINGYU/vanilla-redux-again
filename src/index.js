import { legacy_createStore as createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

/* 데이터를 변경할 수 있는 유일한 부분(리듀서 함수) */
const countModifier = (count = 0, action) => {
	// console.log(count, action);
	if (action.type === 'ADD') {
		return count + 1;
	} else if (action.type === 'MINUS') {
		return count - 1;
	} else {
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

/* 디스패치 함수를 통해 리듀서 함수의 액션 객체에 접근할 수 있다. */
const handleAdd = () => {
	countStore.dispatch({ type: 'ADD' });
};

const handleMinus = () => {
	countStore.dispatch({ type: 'MINUS' });
};

/* 이벤트 리스너 함수 */
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
