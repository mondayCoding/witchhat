import * as React from 'react';
import { ThemedWrapper } from './CheckboxSliderStyles';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	label: string;
	id: string;
	disabled?: boolean;
}

export const SliderCheckbox: React.SFC<IProps> = ({ id, label, ...rest }) => {
	return (
		<ThemedWrapper>
			<input type="checkbox" id={id} {...rest} />
			<label htmlFor={id}>{label}</label>
		</ThemedWrapper>
	);
};
