import * as React from 'react';
import { FieldProps, Field } from 'formik';
import { TextAreaThemed } from './TextAreaStyles';
import { FieldContainer } from '../FieldContainer/FieldContainer';

// React.TextareaHTMLAttributes<HTMLTextAreaElement>
// TextareaAutosizeProps
export interface IProps {
	name: string;
	label: string;
	required?: boolean;
	disabled?: boolean;
	hideErrorMessage?: boolean;
	tooltip?: string;
}

export const TextAreaField: React.FC<IProps> = ({
	name,
	label,
	tooltip,
	hideErrorMessage,
	required,
	disabled,
	...props
}) => (
	<Field
		name={name}
		render={({
			field,
			form: { errors, touched, setFieldValue, setFieldTouched }
		}: FieldProps) => (
			<FieldContainer
				label={label}
				error={touched[field.name] && errors[field.name]}
				id={`${field.name}_textarea_TID`}
				disabled={disabled}
				required={required}
				hideErrorMessage={hideErrorMessage}
				tooltip={tooltip}
			>
				<TextAreaThemed
					required={required}
					disabled={disabled}
					id={`${field.name}_textarea_TID`}
					data-role="none"
					maxLength={3000}
					{...props}
					{...field}
				/>
			</FieldContainer>
		)}
	/>
);
