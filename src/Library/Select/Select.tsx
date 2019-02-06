import { Props as reactSelectProps } from 'react-select/lib/Select';
import React, { FC } from 'react';
import { FieldProps, Field } from 'formik';
import ReactSelect from 'react-select';
import { IFieldContainerProps, FieldContainer } from '../FieldContainer/FieldContainer';

type ISelectFieldProps = reactSelectProps<any> &
	IFieldContainerProps & {
		id?: string;
		label?: string;
		error?: any;
		placeholder?: string;
		tooltip?: string;
		checked?: boolean;
		hideErrorMessage?: boolean;
		required?: boolean;
		disabled?: boolean;
		onChange?(params?: any): void;
		onBlur?(params?: any): void;
		onKeyUp?(params?: any): void;
	};

export const SelectField: React.FC<ISelectFieldProps> = ({
	name,
	label,
	tooltip,
	required,
	hideLabel,
	options,
	showMobileView,
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
				id={`${field.name}_select_TID`}
				tooltip={tooltip}
				required={required}
				showMobileView={showMobileView}
				hideLabel={hideLabel}
			>
				<ReactSelect
					inputId={`${field.name}_select_TID`}
					error={touched[field.name] && errors[field.name]}
					options={options}
					name={field.name}
					value={
						options
							? options.find((option: any) => option.value === field.value)
							: ''
					}
					onBlur={() => setFieldTouched(field.name, true)}
					onChange={(option) =>
						setFieldValue(field.name, (option && option.value) || null)
					}
					classNamePrefix="react-select"
					className="react-select"
					{...props}
				/>
			</FieldContainer>
		)}
	/>
);

export const MultiSelectField: React.FC<ISelectFieldProps> = ({
	name,
	label,
	tooltip,
	required,
	options,
	hideLabel,
	showMobileView,
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
				id={`${field.name}_select_TID`}
				tooltip={tooltip}
				required={required}
				showMobileView={showMobileView}
				hideLabel={hideLabel}
			>
				<ReactSelect
					inputId={`${field.name}_select_TID`}
					error={touched[field.name] && errors[field.name]}
					options={options}
					name={field.name}
					isMulti={true}
					value={
						options &&
						options.filter((option) => field.value.includes(option.value))
					}
					onBlur={() => setFieldTouched(field.name, true)}
					onChange={(option) => {
						console.log(option);
						setFieldValue(
							field.name,
							option.map((item: any) => item.value) || null
						);
					}}
					classNamePrefix="react-select"
					className="react-select"
					{...props}
				/>
			</FieldContainer>
		)}
	/>
);
