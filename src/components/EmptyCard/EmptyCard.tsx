import {type ReactElement} from 'react';
import {Typography} from '@mui/material';

interface EmptyCardProps {
	message: string;
}

const EmptyCard = ({message}: EmptyCardProps): ReactElement => {
	return (
		<Typography variant="h4" align="center" color={'text.secondary'} sx={{mt: 5}}>
			{message}
		</Typography>
	);
};

export default EmptyCard;
