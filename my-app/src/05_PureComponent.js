import { Component, PureComponent} from "react";
import { shallowEqualArrays, shallowEqualObjects } from "shallow-equal";

/*
    1. PureComponent : class형 컴포넌트는 Component와 PureComponent가 있음

                       두 함수 모두 props와 state의 변경에 따라 render 함수를 호출하느데 변경에 대한 기준이 약간 다름

                       Component에서는 setState 함수 호출 시 내부적으로 변경하고자 하는 state의 값이 같더라도, 
                       변경으로 간주하고 render() 함수를 호출하였음

                       PureComponent에서는 바꿀 값 자체를 실제로 비교하여 값이 동일한 경우 변경되지 않았다고 간주하고
                       render 함수를 호출하지 않음

                       Component와 비교하여 불필요한 화면 변환을 실행하지 않으므로 페이지 성능을 향상시킬 수 있다.
*/

class Pure extends PureComponent {
    /* 1. PureComponent 테스트 */
    constructor(props) {
        super(props);
        this.state = {
            StateString : 'react',
            StateArray : ['react'],
            StateObject : {react : 'react'}
        }
    }

    stateChange = (flag) => {
        if (flag == 'string') {
            this.setState({StateString : 'react'}); // render 함수 호출하지 않음
        } else if (flag == 'array') {
            this.setState({StateArray : ['react']}) // render 함수 호출함
        } else {
            this.setState({StateObject : {react : 'react'}}); // render 함수 호출함
        }
    }

    /*
        객체의 경수 변수값이 아니라 객체의 주소값을 통해 비교를 수행하기 때문에
        기존 state에 담겨있던 StateObject나 StateArray는 서로 완전 다른값이라고
        판단하고 render 메서드 호출함
    */

    render() {
        console.log("render 호출됨");
        return(
            <div style={{padding:"0px"}}>
                <button onClick={() => this.stateChange('string')}>클릭</button>
                <button onClick={() => this.stateChange('array')}>클릭</button>
                <button onClick={() => this.stateChange('object')}>클릭</button>
                state ::: StateString : {this.state.StateString}
                state ::: StateArray : {this.state.StateArray.toString()}
                state ::: StateObject : {JSON.stringify(this.state.StateObject)}
            </div>
        )
    }
}

class Shallow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString : 'react',
            StateArray : ['react'],
            StateObject : {react : 'react'}
        }
    }
    /* 2. shallow-equal 테스트 */
    /*
        컴포넌트 라이프 사이클 중 변경과 관련된 메서드
        반환값에 따라 컴포넌트를 업데이트할지 말지 결정한다.
        (true 반환 시 render 함수 호출, false 반환 시 render 함수 미호출)
    */
    
    shouldComponentUpdate(nextProps, nextState) {
        // return !shallowEqualArrays(this.state.StateString, nextState.StateString);
        // return !shallowEqualArrays(this.state.StateArray, nextState.StateArray);
        return !shallowEqualObjects(this.state.StateObject, nextState.StateObject);
    
    }
    
    stateChange = (flag) => {
        if (flag == 'string') {
            this.setState({StateString : 'react2'}); // render 함수 호출하지 않음
        } else if (flag == 'array') {
            this.setState({StateArray : ['react2']}) // render 함수 호출함
        } else {
            this.setState({StateObject : {react : 'react2'}}); // render 함수 호출함
        }
    }
    
    render() {
        console.log("render 호출됨");
        return(
            <div style={{padding:"0px"}}>
                <button onClick={() => this.stateChange('string')}>클릭</button>
                <button onClick={() => this.stateChange('array')}>클릭</button>
                <button onClick={() => this.stateChange('object')}>클릭</button>
                state ::: StateString : {this.state.StateString}
                state ::: StateArray : {this.state.StateArray.toString()}
                state ::: StateObject : {JSON.stringify(this.state.StateObject)}
            </div>
        )
    }
}



export {Pure, Shallow};
