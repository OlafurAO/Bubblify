import React from 'react';
import ListView from '../ListView/index.js';

class Bundles extends React.Component {
		componentDidMount() {
				fetch('http://localhost:3500/api/bundles').then(resp => {
						if(resp.ok) {	return resp.json(); }
				}).then(data => {
						const bundleProducts = data.map(d => { return {
																											id: d.id,
																											name: d.name,
																											items: d.items,
																											isBundle: true
																									 }});
						this.setState({ bundleProducts });
				});
		};

		constructor(props) {
				super(props);
				this.state = {
						bundleProducts: []
				};
		}
		render() {
				if(this.state.bundleProducts.length > 0) {
						return (
								<div>
										<h2> Bundles </h2>
										<ListView list={ this.state.bundleProducts } />
								</div>
						);
				}

				else {
						return null;
				}
		}
}

export default Bundles;
