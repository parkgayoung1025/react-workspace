import React, { Component } from 'react';
/*
    Ref : reference의 약자. 참조 변수(주소값)
    자바스크립트에서 html 요소를 선택해 올 때
    document.getElementById("아이디값");와 같은 선택 함수와 같이 요소를 가져온 후 조작하였음

    React에서는 위 요소에 더해서 Ref를 통해 html 요소를 참조하여 조작할 수 있도록 지원한다.
*/

class ReactRef extends Component {
    constructor(props) {
        super(props);
        this.InputRef = React.createRef(); // Ref 변수 생성
    }

    RefFocus = () => {
        // 요소에 대한 정보가 current에 할당되어 있다.
        this.InputRef.current.focus();
        console.log(this.InputRef, this.InputRef.current);
    }

    // 자바스크립트 방식 요소 선택
    JavascriptFocus() {
        document.getElementById("id1").focus();
    }

    render() {
        return(
            <>
                {
                    // input 요소에 ref 속성을 추가하고 생성자 함수 내부에 선언한 InputRef 변수 할당 시
                    // 현재 input 요소에 대한 정보를 InputRef를 통해 참조할 수 있다.
                }                            
                <input id='id1' type='text' ref={this.InputRef}/> 
                <input type='button' value="REF" onClick={this.RefFocus}/>
                <input type='button' value="Javascript Focus" onClick={this.JavascriptFocus}/>
            </>
        )
    }
}

export default ReactRef;