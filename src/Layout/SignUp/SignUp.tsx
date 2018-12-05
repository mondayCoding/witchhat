import React, { Component, useState, useEffect } from 'react';
import { Formik, FormikProps, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../Library/Button/Button';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { FormikTextInput } from '../../Library/Formik/FormikField';
import { Limiter } from '../../Library/Utility/Wrappers';
import { auth } from '../../Firebase/index';
import * as routes from '../../Constants/Routes';
import { ToastContainer, toast } from 'react-toastify';

export const SignUp: React.SFC<RouteComponentProps> = ({ history }) => {
	const handleSubmit = (values: any, resetForm: () => void) => {
		if (confirm('really?')) {
			auth
				.createUserWithEmailAndPassword(values.email, values.password)
				.then((authe: any) => {
					resetForm();
					history.push(routes.LANDING);
					console.log(authe);
					toast.success('Created new user');
				})
				.catch((error) => {
					console.log(error);
					toast.warn(error.message);
				});
		}
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
		<h2>Sign Up</h2>
		<Field
			name="email"
			type="email"
			component={FormikTextInput}
			placeholder="Email"
		/>
		<Field
			name="password"
			type="password"
			component={FormikTextInput}
			placeholder="Choose Password"
		/>
		<Field
			name="passwordConfirm"
			type="password"
			component={FormikTextInput}
			placeholder="Confirm Password"
		/>
		<Button text="Submit" disabled={!dirty} onClick={handleSubmit} />
		<div>{values.email}</div>
		<div>{values.password}</div>
		<div>{values.passwordConfirm}</div>
	</Limiter>
);

const initialValues = {
	email: '',
	password: '',
	passwordConfirm: ''
};

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email()
		.required(),
	password: Yup.string()
		.min(6)
		.required(),
	passwordConfirm: Yup.string()
		.oneOf([Yup.ref('password'), null], "Passwords don't match")
		.required()
});
