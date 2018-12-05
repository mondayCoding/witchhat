import * as React from 'react';
import { ThemedContent, ThemedLabel, ThemedWrapper } from './FieldStyles';

export interface IProps {
	id?: string;
	label: string;
	disabled?: boolean;
	error?: string;
}

export const Field: React.SFC<IProps> = ({
	id,
	label,
	error,
	disabled,
	children
}) => {
	return (
		<ThemedWrapper>
			<ThemedLabel htmlFor={id}>{label}</ThemedLabel>
			<ThemedContent>{children}</ThemedContent>
		</ThemedWrapper>
	);
};
