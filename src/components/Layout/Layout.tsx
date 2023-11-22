import React, {type ReactElement} from 'react';
import {Header} from '@/components';
import './Layout.scss';

interface LayoutProps {
	children: ReactElement;
}

const Layout = ({children}: LayoutProps): ReactElement => {
	return (
		<div>
			<Header/>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
