import * as React from 'react';
import { ThemedButton, StyleProps } from './ButtonStyle';

export interface IProps extends React.ButtonHTMLAttributes<{}> {
	autoFocus?: boolean;
	theme?: any;
	text?: React.ReactNode;
	iconBeforeText?: React.ReactNode;
	iconAfterText?: React.ReactNode;
	condition?: boolean;
	conditionSecond?: boolean;
	onClick?(params?: any): any;
}

export const Button: React.SFC<IProps & Partial<StyleProps>> = ({
	text,
	iconBeforeText,
	iconAfterText,
	theme,
	children,
	...rest
}) => {
	text = text || 'button';

	return (
		<ThemedButton type={'button'} {...rest}>
			{iconBeforeText && <span>{iconBeforeText}</span>}
			{children || (text && <span>{text}</span>)}
			{iconAfterText && <span>{iconAfterText}</span>}
		</ThemedButton>
	);
};
