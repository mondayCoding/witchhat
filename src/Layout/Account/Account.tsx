import React, { Component, useState, useEffect, useContext } from 'react';
import { Button } from '../../Library/Button/Button';
import Notify from '../../UtilsUI/Notification';
import { ThemeContext, ThemeContextVal } from '../../Library/theme';
import { defaultTheme, lightTheme } from '../../Library/theme';
import { Heading } from '../../Library/Text/Heading';
import { Formik, FormikProps, Field } from 'formik';
import * as Yup from 'yup';
import Icons from '../../UtilsUI/Icons';
import { MenuWrapper } from './AccountStyles';
import { LineDivider } from '../../Library/Utility/Divider';
import { ColorPicker } from './ColorPicker';
import { Select } from '../../Library/Select/Select';
import { database } from '../../Firebase';
import { useDocumentTitleSetter } from '../../Hooks/useDocumentTitleSetter';

export const Account: React.SFC = () => {
	const { setCurrentTheme, currentTheme } = useContext(
		ThemeContext
	) as ThemeContextVal;
	useDocumentTitleSetter('Account');

	const setCustomUserTheme = (newTheme: typeof defaultTheme) => {
		Notify.success('Setting New theme');
		setCurrentTheme(newTheme);

		database
			.collection('configuration')
			.doc('theme')
			.set(newTheme);
	};

	const setDefaultTheme = () => setCustomUserTheme(defaultTheme);
	const setLightTheme = () => setCustomUserTheme(lightTheme);

	return (
		<div>
			<Heading
				text="UI Theme Customisation"
				hasUnderline={true}
				marginAfter={true}
				type={'h3'}
			/>

			<Formik
				enableReinitialize={true}
				initialValues={currentTheme}
				onSubmit={(values: typeof currentTheme) => setCustomUserTheme(values)}
				validationSchema={validationSchema}
			>
				{({ handleReset, handleSubmit, dirty }) => (
					<MenuWrapper>
						<div className="buttons">
							<Button
								iconBeforeText={Icons.reset}
								text="Reset"
								onClick={handleReset}
								disabled={!dirty}
							/>

							<Button
								iconBeforeText={Icons.arrowRight}
								text="Apply Customization"
								onClick={handleSubmit}
								disabled={!dirty}
							/>

							<Button text="Night (Default)" onClick={setDefaultTheme} />

							<Button text="Light" onClick={setLightTheme} />
						</div>
						<LineDivider />

						<Heading
							text="Primary UI color"
							type="h5"
							ingress="Choose main themed color, used most prominently on input elements and in navigation"
						/>
						<Field
							name="primary"
							text={'Primary color'}
							component={ColorPicker}
						/>
						<LineDivider />

						<Heading
							text="Text Color"
							type="h5"
							ingress="Default text color used in most parts of the application"
						/>
						<Field
							name="text_primary"
							text={'Text color'}
							component={ColorPicker}
						/>
						<LineDivider />

						{/* <Heading
                     text="Secondary Theme color"
                     type="h5"
                     ingress="Secondary theme color used to highlight some elements"
                  />
                  <Field name="secondary" text={'Secondary color'} component={ColorPicker} />
                  <LineDivider /> */}

						<Heading
							text="Navigation Background"
							type="h5"
							ingress="Choose background color for Navigation Panel"
						/>
						<Field
							name="nav_background_color"
							text={'Navigation BG'}
							component={ColorPicker}
						/>
						<LineDivider />

						<Heading
							text="Page Background"
							type="h5"
							ingress="Choose background color for Page Content"
						/>
						<Field
							name="main_background_color"
							text={'Page BG'}
							component={ColorPicker}
						/>
					</MenuWrapper>
				)}
			</Formik>
		</div>
	);
};

const initialValues = { ...defaultTheme };
const validationSchema = Yup.object().shape({
	primary: Yup.string(),
	secondary: Yup.string()
});

const Form = ({
	handleReset,
	handleSubmit,
	dirty
}: FormikProps<typeof initialValues>) => {
	return (
		<MenuWrapper>
			<div className="buttons">
				<Button
					iconBeforeText={Icons.reset}
					text="Reset"
					onClick={handleReset}
					disabled={!dirty}
				/>

				<Button
					iconBeforeText={Icons.arrowRight}
					text="Apply"
					onClick={handleSubmit}
					disabled={!dirty}
				/>
				<Select options={ThemeOptions} />
			</div>
			<LineDivider />

			<Heading
				text="Primary UI color"
				type="h5"
				ingress="Choose main themed color, used most prominently on input elements and in navigation"
			/>
			<Field name="primary" text={'Primary color'} component={ColorPicker} />
			<LineDivider />

			<Heading
				text="Text Color"
				type="h5"
				ingress="Default text color used in most parts of the application"
			/>
			<Field name="text_primary" text={'Text color'} component={ColorPicker} />
			<LineDivider />

			{/* <Heading
				text="Secondary Theme color"
				type="h5"
				ingress="Secondary theme color used to highlight some elements"
			/>
			<Field name="secondary" text={'Secondary color'} component={ColorPicker} />
			<LineDivider /> */}

			<Heading
				text="Navigation Background"
				type="h5"
				ingress="Choose background color for Navigation Panel"
			/>
			<Field
				name="nav_background_color"
				text={'Navigation BG'}
				component={ColorPicker}
			/>
			<LineDivider />

			<Heading
				text="Page Background"
				type="h5"
				ingress="Choose background color for Page Content"
			/>
			<Field
				name="main_background_color"
				text={'Page BG'}
				component={ColorPicker}
			/>
		</MenuWrapper>
	);
};

const ThemeOptions = [
	{ label: 'Night (Default)', value: '1' },
	{ label: 'Day', value: '2' },
	{ label: 'Custom', value: '3' }
];
