import React, { Component, useState, useEffect } from 'react';
import { Formik, FormikProps, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../Library/Button/Button';
import { FormikTextInput } from '../../Library/Formik/FormikField';
import { Limiter } from '../../Library/Utility/Wrappers';
import * as routes from '../../Constants/Routes';
import { RouteComponentProps } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../../Firebase/index';

export const SignIn: React.SFC<RouteComponentProps> = ({ history }) => {
	const handleSubmit = (values: any, resetForm: () => void) => {
		auth
			.signInWithEmailAndPassword(values.email, values.password)
			.then((authe: any) => {
				history.push(routes.LANDING);
				console.log(authe);
				toast.success('Successfully signed in');
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
	};

	return (
		<div className="App">
			<Formik
				render={Form}
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
			/>
		</div>
	);
};

const Form = ({
	handleSubmit,
	values,
	dirty
}: FormikProps<typeof initialValues>) => (
	<Limiter>
		<h2>Sign In</h2>
		<Field name="email" type="email" component={FormikTextInput} />
		<Field name="password" type="password" component={FormikTextInput} />
		<Button text="Submit" disabled={!dirty} onClick={handleSubmit} />
		<div>{values.email}</div>
		<div>{values.password}</div>
	</Limiter>
);

const initialValues = {
	email: '',
	password: ''
};

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email()
		.required()
});
