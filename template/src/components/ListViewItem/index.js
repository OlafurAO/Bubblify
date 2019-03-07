import React from 'react';
import PropTypes from 'prop-types';
import { BubbleProductConsumer } from '../../context/BubbleProductContext';

const ListViewItem = props => {
		const { id, name, description, price, image} = props;

		return (
				<BubbleProductConsumer>
						{
								bubbleProductContext => {
											return (
													<div>

															<div className="card-header"> <h4> <a href={'/bubbles/' + id}> { name } </a> </h4> <i className="fa fa-2x fa-times" style={{ float: 'right'}}> </i> </div>
															<div className="card-body">
																	<div> <strong> Price: </strong> <span> { price } ISK </span> </div>
																	<div> <span> {description} </span> </div>

															</div>
													</div>
										);
								}
						}
				</BubbleProductConsumer>
		);
};

const ListViewBundle = props => {
		const { id, name, items} = props;

		return (
				<BubbleProductConsumer>
						{
								bubbleProductContext => {
											return (
													<div>

															<div className="card-header"> <h4>  <a href={'/bundles/' + id}> { name } </a> </h4> <i className="fa fa-2x fa-times" style={{ float: 'right'}}> </i> </div>
															<div className="card-body">
																	<div> <span> {items} </span> </div>
															</div>
													</div>
										);
								}
						}
				</BubbleProductConsumer>
		);
}

ListViewItem.propTypes = {
		id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired
};

ListViewBundle.propTypes = {
		id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
		name: PropTypes.string.isRequired,
		items: PropTypes.array.isRequired
};

export {
		ListViewItem,
		ListViewBundle
}
//export const ListViewItem = ListViewItem;
//export const ListViewBundle = ListViewBundle;
