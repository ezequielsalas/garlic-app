import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './common/components/Home';
import Header from './common/components/Header';
import Login from './common/components/Login';

ReactDOM.render(<Router>

			<App>
				<Route exact path="/" component={Login} />
				<Route path="/ingredients" component={Home} />
			</App>

			</Router>


	, document.getElementById('root'));
registerServiceWorker();
