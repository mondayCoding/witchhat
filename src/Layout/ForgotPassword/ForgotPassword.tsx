import React, { Component, useState, useEffect } from 'react';
import { Limiter } from '../../Library/Utility/Wrappers';
import { useDocumentTitleSetter } from '../../Hooks/useDocumentTitleSetter';
import { Formik, Field, FormikProps } from 'formik';
import { FormikTextInput } from '../../Library/Formik/FormikField';
import { resetPassword } from '../../Firebase/auth';
import { Button } from '../../Library/Button/Button';
import * as Yup from 'yup';
import { Heading } from '../../Library/Text/Heading';
// import { useTranslation } from 'react-i18next/hooks';

export const ForgotPassword: React.SFC = () => {
	useDocumentTitleSetter('Forgot Password');
	// const [t, i18n] = useTranslation();

	const handleSubmit = ({ email }: { email: string }) => resetPassword(email);

	return (
		<Limiter centered={true}>
			<Heading
				type={'h3'}
				hasUnderline={true}
				text={'Forgot Password'}
				// text={t('Forgot password')}
				// ingress={t('forgot password ingress')}
			/>

			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				render={ForgotPasswordForm}
				validationSchema={validationShchema}
			/>
		</Limiter>
	);
};

const initialValues = {
	email: ''
};

const validationShchema = Yup.object().shape({
	email: Yup.string()
		.email()
		.required()
});

const ForgotPasswordForm = ({
	dirty,
	handleSubmit,
	handleReset
}: FormikProps<typeof initialValues>) => (
	<>
		<Field placeholder="Email" name={'email'} component={FormikTextInput} />
		<Button text="Submit" onClick={handleSubmit} disabled={!dirty} />
		<Button text="Reset" onClick={handleReset} disabled={!dirty} />
	</>
);
