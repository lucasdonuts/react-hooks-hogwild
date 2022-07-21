import React from "react";
import Nav from "./Nav";
import HogHolder from "./HogHolder";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
      <HogHolder hogs={ hogs } />
		</div>
	);
}

export default App;
