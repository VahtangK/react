import React, { Component } from 'react';
import Header from './components/header/Header.js';
import Content from './components/content/Content.js';
import Footer from './components/footer/Footer.js';

export default class App extends Component {
	render() {
		return (
			<div className="page">
			<Header />
			<Content />
			<Footer />
			</div>
			);
		}
	}
