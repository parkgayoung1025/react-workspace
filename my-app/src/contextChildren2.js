import React from "react";
import { Consumer } from "./08_Context";
// 부모 컴포넌트의 데이터를 사용하기 위해 Consumer 임포트

class Children2 extends React.Component {
  render() {
    return (
      // 데이터를 전달하지 않고 후손 컴포넌트만 return
      // <div />
      <Consumer>
        {(contextValue) => <h3>{`contextValue : ${JSON.stringify(contextValue)}`}</h3>}
        {/* 부모 컴포넌트에서 value에 할당했던 데이터를 contextValue에 변수로 받아서 출력해 줌 */}
      </Consumer>
    );
  }
}

export default Children2;
