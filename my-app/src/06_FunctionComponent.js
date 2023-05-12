/*
    함수형 컴포넌트
    return 값이 있는 function 과 동일한 구조의 컴포넌트
    
    state가 없고 , 생명주기함수(constructor, render, component...)를 사용할 수 없음
    부모 컴포넌트에 props와 context를 파라미터로 전달받아 사용하고
    render함수가 없기 때문에 return 만 사용하여 화면을 그려준다

    함수형 컴포넌트에서 state와 생명주기 함수의 기능을 사용해야하는 경우 hook을 추가한다

    대표적인 hook함수
    1) useState() : state변수 값을 선언하게 해주는 메서드
    2) useEffect() : 생명주기함수중 componentDidMount와 동일한 역할을 함
*/

import { useState, useEffect } from "react";

function FunctionComponent(props) {
  const [stateString, setString] = useState("react");

  /*
    useState메서드는 길이 2짜리 배열을 반환해줌. 
    이를 구조분해할당을 이용하여 반환된 값을 저장
    반환된 값을 담아줄 첫번째 인자(stateString) : state의 변수명(state.stateString)
    반환된 값을 담아줄 두번째 인자(setString) : stateString값을 변경해주는 함수를 저장(setState()와 비슷한 역할)
  */

  useEffect(() => {
    console.log("useEffect 테스트");
  });

  /*
    useEffect는 생명주기 함수중 componentDidMount와 동일한 기능을 수행함
    return되는 html코드들이 화면에 그려진 후 (랜더링완료된후) 실행됨
    최초 페이지 로딩될 때 한번 실행되고, setString() 함수로 state값이 변경되면
    다시한 번 랜더링 되면서 랜더링 완료후 재실행된다
  */

  return (
    <div style={{ padding: "0px" }}>
      <h2>{stateString}</h2>
      <button
        onClick={() => {
          setString("setContents 테스트");
        }}
      >
        클릭
      </button>
    </div>
  );
}

/*
  함수형 컴포넌트의 장점
  1. render함수가 없기 때문에 컴포넌트 마운트 속도가 class Component에 비해서 빠르다
  2. 가독성이 좋다
  3. this를 사용하지 않기 때문에 props값을 유지할 수가 있다
    - class Component 에서는 this.props를 통해 props에  접근했기 때문에 props의 값이 변경될 위험이 있었다
  4. 유일한 단점은 생명주기 함수나, state관리를 할수가 없다라는 점인데 , react hook의 등장으로 단점이 사라져버림

  리액트에서는 hook의 등장이후로 class Component방식보다 함수형 컴포넌트 방식으로 프로그래밍하는것을 권장한다
*/

export default FunctionComponent;
