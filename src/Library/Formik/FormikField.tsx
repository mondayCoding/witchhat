import { TextInput } from '../TextInput/TextInput';
import { FieldProps } from 'formik';
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
