import React from 'react';
import { EventTypeConstant } from './Types/EconomyType';
import { OccurranceConstant } from './Types/EconomyOccurrance';
import { Button } from '../../Library/Button/Button';
import { FormikForm } from './EventForm';
import { Limiter } from '../../Library/Utility/Wrappers';

interface IProps {
	onSubmit(x: any): void;
	onReset(): void;
}

export const CreateNewEventForm: React.SFC<IProps> = ({ onSubmit, onReset }) => (
	<Limiter>
		<h2>Add new</h2>
		<FormikForm
			item={{
				id: Math.random(),
				name: '',
				value: 0,
				repeat: OccurranceConstant.Monthly,
				type: EventTypeConstant.Expense
			}}
			submitForm={onSubmit}
			handleCancel={onReset}
		/>
	</Limiter>
);
