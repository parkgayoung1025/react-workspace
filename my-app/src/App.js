
import './App.css';
import LifecycleUpdate from './01_Lifecycle';
import PropsDatatype from './02_PropsDatatype';
/*
  리액트 : 컴포넌트 == 리액트
  UI를 구축하는 JS 라이브러리 겸 프레임워크. 동적으로 사용자가 보게될 화면을 꾸밀 수 있다.

  컴포넌트 : UI 구성을 확장성있고 유연하게 만들어주기 위해 만들어짐
  -> 화면을 이루는 구성 요소 하나하나를 "컴포넌트"로 만들어서 재사용성을 늘렸다.

  리액트에서는 버튼, 폼, 다이얼로그, 화면의 모든 것들을 컴포넌트로 표현
*/

/*
  JSX(JavascriptXML)문법 : javascript의 문법 안에서 HTML 요소가 함께 들어가 있는 형태의 언어
  리액트에서 ui를 구성하기 위해 보편적으로 사용되는 문법.
  자바스크립트의 문법을 통해 HTML 요소를 생성하는 역할을 함.

  document.createElement("div") (명령적 방식)

  let body = document.querySelector("#body");
  let div = document.createElement("div");
  let h2 = document.createElement("h2");

  body.appendChile(div.appendChild(h2));

  따라서 개발자는 복잡한 자바스크립트 코드를 짤 필요없이 동적으로 추가되는 DOM 요소를 단순 코드 선언만으로 만들 수 있다.(선언적 방식)
  내가 작성한 JSX 코드가 실제로 실행될 때 리액트가 브라우저에서 구동되는 자바스크립트 코드로 자동으로 컴파일 되면서 구동이 된다.
*/

function App() {
  return ( // 반환값은 한 개만 가능함
    // <h2>start react</h2>
    <div>
      {/* js 문법 영역 안에서의 주석 사용하는 방법 */}
      {/* <h2>start react</h2>  */}
      {/* <h2>Hello World</h2> */}
      {/* <LifecycleUpdate prop_value="From App.js"></LifecycleUpdate> */}
      {/* 임포트해 온 컴포넌트 클래스를 그대로 태그(마크업)로써 사용하면 된다. */}
      <PropsDatatype 
        String="react" 
        Number={200} 
        Boolean
        Array={[0, 1, 8]}
        ObjectJson={{react:"리액트", today:20230510}}
        function={console.log("Function Props")}
        IsRequired>        
        </PropsDatatype>
      {/* props : 부모 컴포넌트가 자식 컴포넌트에 넘겨주는 "객체({key : value})" 형태의 데이터
                  자식 컴포넌트의 시작 태그에 작성하는 속성은 key값으로, 속성값은 value값의 형태로 넘어간다. */}
    </div>
  );
}

export default App;
