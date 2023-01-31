import React,{Component} from "react";
import EnhancedComponent from './Hoc'

class HocMain extends Component {
render() {
	
	return <h1>{this.props.name}</h1>
}
}

export default EnhancedComponent(HocMain);