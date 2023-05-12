/* 
    Context?
    기존에 props를 이용하여 부모컴포넌트에서 자식 컴포넌트로 데이터를 전달할 수 있었음

    단, 해당 데이터를 자식 컴포넌트가 아니라 후손 컴포넌트에서만 필요로 하는 데이터라면 
    자식 컴포넌트에서는 불필요하게 코드를 작성해줘야 하는데, 이때 Context를 사용하면
    데이터 공급자(Provider)와 소비자(Consumer)를 정의하여 데이터가 필요한 컴포넌트만 사용할 수 있게 구현할 수 있다

    컨텍스트를 사용하면 하위 컴포넌트가 여러개인 구조에서 유용하게 사용할 수 있음
    몇번째 하위 컴포넌트인지 상관없이 필요한 하위컴포넌트에서 소비자를 임포트해 필요한 데이터를 사용할 수 있음

    props vs Context
    props는 부모컴포넌트에서 자식컴포넌트에게만 전달되는 데이터라면
    Context는 모든 컴포넌트에 전반적으로 영향을 끼칠 수 있다
*/
import React from "react";
import Children from "./contextChildren1";

const {Provider, Consumer} = React.createContext();
// 공급자, 소비자 변수를 할당

class ContextApi extends React.Component {

    // 컨텍스트 이용하여 자식 컴포넌트에서 부모 컴포넌트의 데이터를 변경하기
    constructor(props) {
        super(props);
        this.setStateFunc = this.setStateFunc.bind(this);
    }

    setStateFunc(value) {
        this.setState({name : value});
    }

    render() {
        const content = {
            ...this.state,
            setStateFunc : this.setStateFunc
            /*
                자식에게 넘겨줄 데이터에 부모의 상태값과 상태값(state)을 변경해 줄 수 있는 함수(setState)를 넘겨줬다.
            */
        }

        return(
            // 자식태그(Children)를 Provider로 감싸고 전달할 데이터를 value값으로 할당
            <Provider value={content}>
                <Children/>
            </Provider>
        )
    }
}

export {Consumer, ContextApi};
// 하위 컴포넌트에서 Consumer 사용 가능