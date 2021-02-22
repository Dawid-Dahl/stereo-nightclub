import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {TestComp} from "./components/TestComp";
import styled from "styled-components";

const App = () => {
	return (
		<Root>
			<Switch>
				<Route exact path="/" component={TestComp} />
			</Switch>
		</Root>
	);
};

const Root = styled.div``;

ReactDOM.render(
	<Router>
		<Route path="/" component={App} />
	</Router>,
	document.getElementById("root")
);

export default App;
