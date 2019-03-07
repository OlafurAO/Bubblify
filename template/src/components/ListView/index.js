import React from 'react';
import { ListViewItem } from '../ListViewItem/index';
import { ListViewBundle } from '../ListViewItem/index';
import PropTypes from 'prop-types';
import { BubbleProductConsumer } from '../../context/BubbleProductContext';

const ListView = props => {
		const { list } = props;

		console.log(list)

		if(!(list == null)) {
				if(!(list[0].isBundle)) {
						return list.map(item => <ListViewItem key={ item.id } { ...item } /> );
				}

				else {
						return list.map(item => <ListViewBundle key={ item.id } { ...item } /> );
				}
		}

		else {
				return null;
		}
};

ListView.propTypes = {
		list: PropTypes.array.isRequired
};

export default ListView;
