import React from 'react';
import { EconomyEvent } from './Types/EconomyEvent';
import { Button } from '../../Library/Button/Button';
import { FormikForm } from './EventForm';
import { Limiter } from '../../Library/Utility/Wrappers';

export const EditEventView: React.SFC<{
	item: EconomyEvent[];
	return: any;
}> = (props) => {
	return (
		<Limiter>
			<FormikForm
				item={props.item[0]}
				submitForm={(values) => console.log(values)}
				handleCancel={props.return}
			/>
		</Limiter>
	);
};
