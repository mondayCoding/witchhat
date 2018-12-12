import * as React from 'react';
import SelectBase from 'react-select';
import { Props as reactSelectProps } from 'react-select/lib/Select';
// import { defaultTheme, themeContext } from '../theme';

export const Select: React.SFC<IProps> = (props) => {
	// const UITheme = React.useContext(themeContext) as typeof defaultTheme;

	return (
		<SelectBase
			classNamePrefix="react-select"
			className="react-select"
			// theme={(theme) => ({
			// 	...theme,
			// 	borderRadius: 5,
			// 	colors: {
			// 		...theme.colors,
			// 		neutral10: UITheme.gray_black,
			// 		neutral10: UITheme.gray_light,
			// 	}
			// })}
			{...props}
		/>
	);
};

export interface IProps extends reactSelectProps<any> {
	id?: string;
	value?: string;
	placeholder?: string;
	checked?: boolean;
	error?: any;
	required?: boolean;
	disabled?: boolean;
	onChange?(params?: any): void;
	onBlur?(params?: any): void;
	onKeyUp?(params?: any): void;
}
