import React from "react";
import { Consumer } from "./08_Context";

class Children3 extends React.Component {
  render() {
    return (
      // <div />
      <Consumer>
        {
          // contextValue = 08_Context의 content
          (contextValue) => 
            // 부모 컴포턴트의 stStateFunc 호출. 이 때 this에 들어가 있는 값은 부모 요소의 this로 바인딩해두었음
            <button onClick={() => contextValue.setStateFunc("부모 요소 변경 테스트")}>
                                        {/* setStateFunc("부모 요소 변경 테스트") = setStateFunc(value) {
                                                                                          this.setState({name : value});
                                                                                  }의 value */}
              contextValue.name ::: {contextValue.name} 
              {/* 객체 상태는 name을 불러야 value 값이 출력됨 */}
            </button>
        }
      </Consumer>
    );
  }
}

export default Children3;
