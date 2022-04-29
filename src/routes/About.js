import React from "react";
import "./About.css";

function About(props) {
	console.log(props);
	return (
		<div className="about__container">
			<span>
			&nbsp;자주 들어보긴 했지만 생소했던 리액트 수업을 하고 배운 것을 기반으로 구현한 페이지 입니다.<br/>
			&nbsp;
			<strong>다양한 컴포넌트와 props, map() 함수</strong> 등을 사용하면서 리액트에 대한 기초를 다졌습니다.
			<br/>&nbsp;인상깊었던 점은 mapping을 하는 부분에 배열의 각 요소마다 고유한 <strong>key값</strong>을 지정해줘야 한다는 것이었습니다. 어떤 아이템이 변화되거나, 추가, 삭제되었는지 알아차리기 위해 필요한 속성인 key를 왜 사용해야하는지 이해가 가지 않았지만 배열의 key값을 고유하게 넘겨주었을 경우, 배열의 전체를 리랜더링하지 않고 배열에 추가된 한가지 요소만 리랜더링하는 아주 유용한 속성이라는 것을 알게 된 후 잊지않고 key값을 넣고 있습니다.
			<br/>&nbsp;
			구현 작업은 API를 이용하여 외부 정보를 끌어와 state에 저장한 후 데이터의 레이아웃을 적절하게 배치하고 CSS를 작성하여 완성했습니다.
			</span>
			<span>신입 웹퍼블리셔, 강한나</span>
		</div>
	)
}

export default About