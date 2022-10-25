
import React, { useContext } from 'react';
import { AppContext } from '../context';
import Item from './Item';

const ItemList = () => {
	const { items } = useContext(AppContext);
	return (
<>
			<h3>Available Users</h3>
      {items.map(item => <Item key={item.id} item={item} />)}
</>

	);
};

export default ItemList;