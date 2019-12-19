import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Pages from './pages';
function App() {
	return (
		<>
			<Router>
				<Switch>
					<Pages />
				</Switch>
			</Router>
		</>
	);
}

export default App;
