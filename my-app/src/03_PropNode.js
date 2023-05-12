import { Component } from "react";

class PropNode extends Component {

    render(){
        return(
            <div style={{padding:"0px"}}>
                {this.props.children} 
                {/* 부모 요소가 전달한 자식 노드가 들어가 있음 */}
            </div>
        )
    }
}

export default PropNode;