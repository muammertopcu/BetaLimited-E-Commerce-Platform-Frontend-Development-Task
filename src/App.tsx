import React, {type ReactElement} from 'react';
import {Router} from './router';
import {Provider} from 'react-redux';
import {store} from '@/redux/store';

function App(): ReactElement {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
}

export default App;
