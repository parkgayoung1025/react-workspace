import React, { Component } from "react";

/*
    Fragments?
    return 되는 컴포넌트를 감싸는 틀

    컴포넌트 단위로 요소를 return 할때는 반드시 1개의 요소만 반환할 수 있기 때문에
    여러개의 태그요소를 반환하고 싶다면 반드시 하나의 html요소 태그로 감싸주어야 한다
    
    반환되는 값이 여러개의 태그요소인 경우 에러가 발생할 수 있다

    이때 Fragments태그를 활용하면 불필요한 html코드를 없애고 여러개의 요소를 반환할 수 있다
*/

class Fragments extends Component {
  render() {
    return (
      /* 에러를 해결하기 위해 div 태그로 감싸는건 좋지 못한 방법임 - 쓸데없는 태그가 추가되기 때문*/
      // <React.Fragment>
      //   <td>리액트 Fragments</td>
      //   <td>리액트 Fragments</td>
      //   <td>리액트 Fragments</td>
      // </React.Fragment>
      // 위를 아래처럼 사용해도 동일한 결과가 나옴
      <>
        <td>리액트 Fragments</td>
        <td>리액트 Fragments</td>
        <td>리액트 Fragments</td>
      </>
    );
  }
}

export default Fragments;
