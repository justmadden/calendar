import { Component } from 'react';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('modal-portal');
export default class ModalPortal extends Component {
	constructor(props) {
		super(props);
		this.el = document.createElement('div');
	}

	componentDidMount() {
		modalRoot.appendChild(this.el);
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el);
	}

	render() {
		return ReactDOM.createPortal(this.props.children, this.el);
	}
}
