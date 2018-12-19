import { TextInput } from '../TextInput/TextInput';
import { TextInputPlain } from '../TextInput/TextInputPlain';
import { FieldProps } from 'formik';
import { Select } from '../Select/Select';
import React from 'react';

export const FormikTextInput = ({
	field,
	form: { touched, errors },
	...props
}: FieldProps) => (
	<TextInput
		{...field}
		{...props}
		error={touched[field.name] && errors[field.name]}
	/>
);

export const FormikTextInputPlain = ({
	field,
	form: { touched, errors },
	...props
}: FieldProps) => (
	<TextInputPlain
		{...field}
		{...props}
		error={touched[field.name] && errors[field.name]}
	/>
);

export const FormikSelect = ({
	field,
	form: { errors, touched, setFieldValue },
	placeholder,
	options,
	...props
}: FieldProps & { placeholder: string; options: any }) => (
	<Select
		placeholder={placeholder}
		id={`${field.name}_select_ID`}
		name={field.name}
		error={touched[field.name] && errors[field.name]}
		options={options}
		onBlur={field.onBlur}
		value={
			options ? options.find((option: any) => option.value === field.value) : ''
		}
		onChange={(option) =>
			setFieldValue(field.name, (option && option.value) || null)
		}
		{...props}
	/>
);
