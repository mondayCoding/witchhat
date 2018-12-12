import React, { Component, useState, useEffect, useContext } from 'react';
import { Button } from '../../Library/Button/Button';
import { Field as FieldWrapper } from '../../Library/Field/Field';
import { Select } from '../../Library/Select/Select';
import { ChromePicker, ColorResult } from 'react-color';
import { SliderCheckbox } from '../../Library/Checkbox/CheckboxSlider';
import { toast } from 'react-toastify';
import styled, { themeContext } from '../../Library/theme';
import { defaultTheme, themed_alt } from '../../Library/theme';
import { Heading } from '../../Library/Text/Heading';
import { Formik, FormikProps, Field } from 'formik';
import * as Yup from 'yup';
import Icons from '../../UtilsUI/Icons';
import { readableColor } from 'polished';

export const Account: React.SFC = () => {
	const [primaryUserColor, setPrimary] = useState('');
	const [secondaryUserColor, setSecondary] = useState('');
	const [themeColor3, setThemeColor3] = useState('');

	const setUITheme = useContext(themeContext) as any;

	const setNewThemeColor3 = (values: ColorResult) => {
		const newHexValue = values.hex;
		setThemeColor3(newHexValue);
	};

	const setGlobalTheme = () => {
		toast.success('setting new theme');
		setUITheme(themed_alt);
	};

	return (
		<div>
			<Heading
				text="User Customisation"
				hasUnderline={true}
				marginAfter={true}
				type={'h3'}
			/>

			<Formik
				initialValues={initialValues}
				render={Form}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			/>
			<Heading text="non interactice" hasUnderline={true} />
			<ChromePicker
				color={themeColor3}
				disableAlpha={true}
				onChangeComplete={(values) => setNewThemeColor3(values)}
			/>

			<Button onClick={setGlobalTheme} text="Set Global Color" />
			<SliderCheckbox label="label" id={'tesxt_cb'} />
			<SliderCheckbox disabled={true} label="label" id={'tesxt_cb2'} />
			{themeColor3 && <h2 style={{ color: themeColor3 }}>{themeColor3}</h2>}
		</div>
	);
};

const initialValues = defaultTheme;
const validationSchema = Yup.object().shape({});
const onSubmit = (values: any) => console.log(values);

const PickerWrapper = styled.div`
	display: flex;

	.chrome-picker {
		flex: 0.5 0.5 20rem;
		max-width: 20rem;

		& + .chrome-picker {
			margin-left: 1rem;
		}
	}
`;

const ColorSampleWrapper = styled.div`
	display: flex;
	padding: 1rem 0;

	.sampler {
		flex: 0.5 0.5 20rem;
      border-radius: ${({ theme }) => theme.global_border_radius};
      align-items: center;
      justify-content: center;      
      overflow: hidden;
      height: 2rem;
		max-width: 20rem;
      display: flex;

      .sample {
         flex; 1 1 auto;
         width: 100%;
         background-color: black;
         color: ${(props) => readableColor(props.color)};
         text-align: center;
         font-weight: 700;
      }

		& + .sampler {
			margin-left: 1rem;
		}
	}
`;

const Form = ({
	handleReset,
	handleSubmit,
	setFieldValue,
	setFieldTouched,
	values,
	touched,
	dirty
}: FormikProps<typeof initialValues>) => {
	return (
		<div>
			<PickerWrapper>
				<ChromePicker
					color={values.primary}
					disableAlpha={true}
					onChangeComplete={(value) => {
						setFieldValue('primary', value.hex);
						setFieldTouched('primary');
					}}
				/>
				<ChromePicker
					color={values.secondary}
					disableAlpha={true}
					onChangeComplete={(value) => {
						setFieldValue('secondary', value.hex);
						setFieldTouched('secondary');
					}}
				/>
			</PickerWrapper>
			<ColorSampleWrapper color={values.primary}>
				<div className="sampler">
					<div className="sample" style={{ backgroundColor: values.primary }}>
						<b>Primary</b>
					</div>
				</div>
				<div className="sampler">
					<div className="sample" style={{ backgroundColor: values.secondary }}>
						<b>Secondary</b>
					</div>
				</div>
			</ColorSampleWrapper>
			<Button
				iconBeforeText={Icons.reset}
				text="Reset"
				onClick={handleReset}
				disabled={!dirty}
			/>

			<Button
				iconBeforeText={Icons.arrowRight}
				onClick={handleSubmit}
				disabled={!dirty}
			/>
		</div>
	);
};

const nom = [
	{ label: 'nom', value: 'nam1' },
	{ label: 'nom3', value: 'nam2' },
	{ label: 'nom', value: 'nam3' },
	{ label: 'nom3', value: 'nam4' },
	{ label: 'nom', value: 'nam5' },
	{ label: 'nom3', value: 'nam6' },
	{ label: 'nom', value: 'nam7' },
	{ label: 'nom3', value: 'nam8' }
];
