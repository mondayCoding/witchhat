import styled, { css } from '../theme';

const label_width = '10rem';

export interface IStyleProps {
	isDisabled?: boolean;
	isSmall?: boolean;
	isMobile?: boolean;
	hasError?: boolean;
}

export const Container = styled.div<IStyleProps>`
	display: flex;
	flex-direction: row;
	margin-bottom: 0.5rem;
	font-size: 1rem;

	@media (max-width: 768px) {
		flex-direction: column;
	}

	${(p) => p.isDisabled && disabledStyle}
	${(p) => p.isMobile && containerMobileCSS}
`;

const disabledStyle = css`
	opacity: 0.75;
	color: gray;
`;

const containerMobileCSS = css`
	flex-direction: column;
`;

const labelMobileCSS = css`
	flex: 0 0 auto;
	text-align: left;
	align-self: flex-start;
`;

const smallInputSizeCSS = css`
	max-width: 140px;
`;

export const FieldLabel = styled.label`
	flex: 0 0 ${label_width};
	text-align: left;
	padding-right: 0.5rem;
	align-self: center;

	@media (max-width: 768px) {
		flex: 0 0 auto;
		text-align: left;
		align-self: flex-start;
	}

	${(p: IStyleProps) => p.isMobile && labelMobileCSS}
`;

export const Content = styled.div`
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	min-height: 29px;

	.field--content {
		flex: 1 1 auto;
		${(p: IStyleProps) => p.isSmall && smallInputSizeCSS}
	}

	.field--tooltip {
		flex: 0 0 2rem;
		display: flex;
		justify-content: center;

		svg {
			color: ${(p) => p.theme.primary};
			font-size: 1.25rem;
		}
	}
`;

export const ErrorContainer = styled.div`
	color: ${(p) => p.theme.error_color};
	font-size: 0.95rem;
	font-weight: 600;
	padding: 0.2rem;
	margin-bottom: 0.5rem;
	margin-top: -0.75rem;
	margin-left: ${label_width};

	@media (max-width: 768px) {
		margin-left: 0;
	}
`;

export const Star = styled.span`
	font-weight: 700;
	padding-left: 0.5rem;
`;
