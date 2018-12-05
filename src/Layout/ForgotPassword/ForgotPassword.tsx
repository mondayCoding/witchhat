import React, { Component, useState, useEffect } from 'react';
import { Formik, FormikProps, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../Library/Button/Button';
import { FormikTextInput } from '../../Library/Formik/FormikField';
import { Limiter } from '../../Library/Utility/Wrappers';
import * as routes from '../../Constants/Routes';
import { RouteComponentProps } from 'react-router';
import { Select } from '../../Library/Select/Select';
import { auth } from '../../Firebase/index';
import SelectBase from 'react-select';
import { ChromePicker, ColorResult } from 'react-color';
import { themed } from '../../Library/theme';

export const ForgotPassword: React.SFC = () => {
	return (
		<Limiter>
			<h2>Forgot Password</h2>
		</Limiter>
	);
};
