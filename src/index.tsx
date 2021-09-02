import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './containers/app';
import reportWebVitals from './reportWebVitals';

import { Store, StoreType } from './stores/store';

const store: StoreType = new Store();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App store={store} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
