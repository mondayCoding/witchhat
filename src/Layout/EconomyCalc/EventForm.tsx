import React from 'react';
import { EventType, EventTypeConstant } from './Types/EconomyType';
import { Occurance, OccurranceConstant } from './Types/EconomyOccurrance';
import { EconomyEvent } from './Types/EconomyEvent';
import { Button } from '../../Library/Button/Button';
import { Formik, FormikProps, Field } from 'formik';
import { FormikSelect, FormikTextInput } from '../../Library/Formik/FormikField';
import * as Yup from 'yup';
import Icons from '../../UtilsUI/Icons';
import { Field as Wrapper } from '../../Library/Field/Field';

const Form = ({
	handleSubmit,
	handleReset,
	dirty,
	handleCancel
}: FormikProps<EconomyEvent> & { handleCancel(): any }) => (
	<div>
		<Wrapper label="Name">
			<Field name="name" placeholder="Name" component={FormikTextInput} />
		</Wrapper>

		<Wrapper label="Value">
			<Field name="value" placeholder="Value" component={FormikTextInput} />
		</Wrapper>

		<Wrapper label="Type">
			<Field
				name="type"
				options={TypeOptions}
				component={FormikSelect}
				placeholder="Type"
			/>
		</Wrapper>

		<Wrapper label="Occurrance">
			<Field
				name="repeat"
				placeholder="Repeat"
				options={OccuranceOptions}
				component={FormikSelect}
			/>
		</Wrapper>

		<Button text="Submit" disabled={!dirty} onClick={handleSubmit} />

		<Button
			iconBeforeText={Icons.undo}
			text="Reset"
			disabled={!dirty}
			onClick={handleReset}
		/>

		{handleCancel && (
			<Button
				iconBeforeText={Icons.arrowLeft}
				text="Cancel"
				onClick={handleCancel}
			/>
		)}
	</div>
);

export const FormikForm: React.SFC<{
	item: EconomyEvent;
	handleCancel?(): any;
	submitForm(x: Partial<EconomyEvent>): void;
}> = ({ handleCancel, submitForm, item }) => (
	<Formik
		// enableReinitialize={true}
		initialValues={item}
		render={(props) => <Form handleCancel={handleCancel} {...props} />}
		validationSchema={validationSchema}
		onSubmit={(values) => submitForm(values)}
	/>
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
