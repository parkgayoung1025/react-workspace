import './App.css';
import PropNode from './03_PropNode';
import StateAndEvent from './04_StateAndEvent';

/*
    자식 컴포넌트에게 node 전달하기

    node : HTML 문서를 구성하는 각 요소들을 Node라고 부름

    Document -> Document node
    각 요소(Html, head, body, p, div, ...) -> element node(Document의 자식 노드들)
    각 요소의 속성(id, class, name, ...) -> attribute node(element 요소의 자식 노드는 아님. 같은 레벨의 노드)
    텍스느 -> text node
    주석 -> comment node

    모두 노드이면서 계층 구조를 가지고 있음
    Document 아래 html 아래 head 아래 body 태그 아래 각 노드들이 계층적으로 존재함
*/

function App2() {
    return(
        // <div>
        //     <PropNode>
        //         <span id="attribute">node from App2.js</span>
        //         <span id="attribute">node2 from App2.js</span>
        //         {/* <span> -> element 노드, id -> attribute node, node from App2.js -> text */}
        //     </PropNode>
        // </div>
        // =========================================================================================
        <StateAndEvent></StateAndEvent>
    )
}

export default App2;