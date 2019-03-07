import React from 'react';
import ListView from '../ListView/index.js';

class Bubbles extends React.Component {
		componentDidMount() {
				fetch('http://localhost:3500/api/bubbles').then(resp => {
						if(resp.ok) {	return resp.json(); }
				}).then(data => {
						const bubbleProducts = data.map(d => { return {
							 																		 		id: d.id,
																											name: d.name,
																											description: d.description,
																											price: d.price,
																											image: d.image,
																											isBundle: false
																									 }});
						this.setState({ bubbleProducts });
				});
		};

		constructor(props) {
				super(props);
				this.state = {
						bubbleProducts: []
				};
		}

		render() {
				console.log('rendering');

				if(this.state.bubbleProducts.length > 0) {
						return (
								<div>
										<h2> All Available Bubbles </h2>
										<ListView list={ this.state.bubbleProducts } />
								</div>
						);
				}

				else {
						return null;
				}
		}
}

export default Bubbles;
