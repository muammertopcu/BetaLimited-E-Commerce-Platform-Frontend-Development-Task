import React, {type ReactElement} from 'react';
import {Router} from './router';
import {Provider} from 'react-redux';
import {store} from '@/redux/store';
import {Layout} from '@/components';

function App(): ReactElement {
	return (
		<Provider store={store}>
			<Layout>
				<Router/>
			</Layout>
		</Provider>
	);
}

export default App;
