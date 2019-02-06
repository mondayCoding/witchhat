import React, { FC } from 'react';
import { ThemedInput, TextFieldStyleProps } from './TextInputStyle';
import { FieldProps, Field } from 'formik';
import { IFieldContainerProps, FieldContainer } from '../FieldContainer/FieldContainer';

interface IProps extends React.InputHTMLAttributes<{}> {
	error?: any;
	onChange?(params?: any): any;
	onBlur?(params?: any): any;
	onKeyUp?(params?: any): any;
}

export type TextfieldProps = React.InputHTMLAttributes<HTMLInputElement> &
	IFieldContainerProps &
	TextFieldStyleProps & {
		label?: string;
		name: string;
		onChange?(params?: any): void;
		onInput?(params?: any): void;
		onKeyDown?(params?: any): void;
		onBlur?(params?: any): void;
		onKeyUp?(params?: any): void;
	};

export const TextInput: React.SFC<IProps> = ({
	id,
	value,
	error,
	disabled,
	readOnly,
	...rest
}) => {
	return (
		<ThemedInput
			hasError={error}
			id={id}
			title={error}
			value={value}
			disabled={disabled}
			type={'text'}
			readOnly={readOnly}
			{...rest}
		/>
	);
};

export const TextField: FC<TextfieldProps> = ({
	id,
	label,
	tooltip,
	name,
	required,
	disabled,
	showMobileView,
	isSmall,
	hideErrorMessage,
	hideLabel,
	children,
	...rest
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
				id={`${field.name}_select_TID`}
				tooltip={tooltip}
				required={required}
				hideErrorMessage={hideErrorMessage}
				showMobileView={showMobileView}
				hideLabel={hideLabel}
				isSmall={isSmall}
			>
				<TextInput
					disabled={disabled}
					required={required}
					maxLength={300}
					id={`${field.name}_textinput_TID`}
					error={touched[field.name] && errors[field.name]}
					{...field}
					{...rest}
				/>
			</FieldContainer>
		)}
	/>
);
