import * as React from 'react';
import { ThemedInput, ThemedWrapper } from './TextInputStyle';

interface IProps extends React.InputHTMLAttributes<{}> {
	error?: any;
	onChange?(params?: any): any;
	onBlur?(params?: any): any;
	onKeyUp?(params?: any): any;
}

export const TextInput: React.SFC<IProps> = ({
	id,
	value,
	error,
	disabled,
	readOnly,
	...rest
}) => {
	return (
		<ThemedWrapper error={error}>
			<ThemedInput
				id={id}
				title={error}
				value={value}
				disabled={disabled}
				type={'text'}
				readOnly={readOnly}
				{...rest}
			/>
			<span className="bar" />
		</ThemedWrapper>
	);
};
