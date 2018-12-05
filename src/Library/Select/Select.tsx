import * as React from 'react';
import SelectBase from 'react-select';
import { Props as reactSelectProps } from 'react-select/lib/Select';

export const Select: React.SFC<IProps> = (props) => (
	<SelectBase classNamePrefix="react-select" className="react-select" {...props} />
);

export interface IProps extends reactSelectProps<any> {
	id?: string;
	value?: string;
	placeholder?: string;
	checked?: boolean;
	required?: boolean;
	disabled?: boolean;
	onChange?(params?: any): void;
	onBlur?(params?: any): void;
	onKeyUp?(params?: any): void;
}
