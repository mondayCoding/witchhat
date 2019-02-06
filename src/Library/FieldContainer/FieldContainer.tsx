import * as React from 'react';
// import { TooltipCircle as Tooltip } from '../index';
import {
	Container,
	Content,
	FieldLabel,
	Star,
	ErrorContainer,
	IStyleProps
} from './FieldContainerStyle';

export interface IFieldContainerProps extends IStyleProps {
	required?: boolean;
	id?: string;
	label?: string;
	disabled?: boolean;
	className?: string;
	error?: any;
	hideErrorMessage?: boolean;
	hideLabel?: boolean;
	tooltip?: string;
	showMobileView?: boolean;
}

export const FieldContainer: React.SFC<IFieldContainerProps> = ({
	id,
	label,
	tooltip,
	error,
	disabled,
	children,
	hideErrorMessage,
	isSmall,
	hideLabel,
	showMobileView,
	required
}) => (
	<>
		<Container isDisabled={disabled} isMobile={showMobileView}>
			{!hideLabel && (
				<FieldLabel htmlFor={id} isMobile={showMobileView}>
					{label}
					{required && <Star>*</Star>}
				</FieldLabel>
			)}

			<Content isSmall={isSmall}>
				<div className="field--content">{children}</div>

				{tooltip && (
					<div className="field--tooltip">{/* <Tooltip content={tooltip} /> */}</div>
				)}
			</Content>
		</Container>

		{!hideErrorMessage && error && <ErrorContainer>{error}</ErrorContainer>}
	</>
);
