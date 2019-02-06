import React from 'react';
import { EventType, EventTypeConstant } from './Types/EconomyType';
import { Occurance, OccurranceConstant } from './Types/EconomyOccurrance';
import { EconomyEvent } from './Types/EconomyEvent';
import { Button } from '../../Library/Button/Button';
import { Formik, FormikProps, Field } from 'formik';
import * as Yup from 'yup';
import Icons from '../../UtilsUI/Icons';
import { FieldContainer } from '../../Library/FieldContainer/FieldContainer';
import { Limiter } from '../../Library/Utility/Wrappers';
import { TextField } from '../../Library/TextInput/TextInputPlain';
import { SelectField } from '../../Library/Select/Select';

const Form = ({
	handleSubmit,
	handleReset,
	dirty,
	handleCancel
}: FormikProps<EconomyEvent> & { handleCancel(): any }) => (
	<div>
		<TextField label="Name" name="name" placeholder="Name" />
		<TextField label="Value" name="value" placeholder="Value" />

		<SelectField name="type" label="Type" options={TypeOptions} placeholder="Type" />

		<SelectField
			label="Occurrance"
			name="repeat"
			placeholder="Repeat"
			options={OccuranceOptions}
		/>

		<Button text="Submit" disabled={!dirty} onClick={handleSubmit} />

		<Button
			iconBeforeText={Icons.undo}
			text="Reset"
			disabled={!dirty}
			onClick={handleReset}
		/>

		{handleCancel && (
			<Button iconBeforeText={Icons.arrowLeft} text="Cancel" onClick={handleCancel} />
		)}
	</div>
);

export const EconomicAffectForm: React.SFC<{
	item: EconomyEvent;
	handleCancel?(): any;
	submitForm(x: Partial<EconomyEvent>): void;
}> = ({ handleCancel, submitForm, item }) => (
	<Limiter>
		<Formik
			// enableReinitialize={true}
			initialValues={item}
			render={(props) => <Form handleCancel={handleCancel} {...props} />}
			validationSchema={validationSchema}
			onSubmit={(values) =>
				submitForm({ ...values, value: parseFloat(values.value as any) })
			}
		/>
	</Limiter>
);

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.required()
		.min(2),
	value: Yup.string()
		.matches(/^\d{0,6}(?:[.,]\d{0,3})?$/)
		.required(),
	repeat: Yup.string(),
	type: Yup.string()
});

const TypeOptions = [
	{
		label: EventType[EventTypeConstant.Expense].label,
		value: EventTypeConstant.Expense
	},
	{
		label: EventType[EventTypeConstant.Income].label,
		value: EventTypeConstant.Income
	}
];

const OccuranceOptions = [
	{
		label: Occurance[OccurranceConstant.Monthly].label,
		value: OccurranceConstant.Monthly
	},
	{
		label: Occurance[OccurranceConstant.Annual].label,
		value: OccurranceConstant.Annual
	},
	{
		label: Occurance[OccurranceConstant.Quarterly].label,
		value: OccurranceConstant.Quarterly
	}
];
