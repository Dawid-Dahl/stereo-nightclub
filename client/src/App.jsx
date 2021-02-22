import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProductsPage from "./components/ProductsPage";
import styled from "styled-components";

const App = () => {
	return (
		<Root>
			<Switch>
				<Route exact path="/" component={ProductsPage} />
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
