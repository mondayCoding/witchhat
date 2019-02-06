import styled, { defaultTheme, ThemeInterface } from '../theme';

export interface TextFieldStyleProps {
	hasError?: boolean;
}

interface ExtraProps extends TextFieldStyleProps {
	theme: ThemeInterface;
}

export const ThemedInput = styled.input<TextFieldStyleProps>`
	background: none;
	color: ${(p) => p.theme.text_primary};
	border: 1px solid ${(p) => (p.hasError ? p.theme.error_color : p.theme.primary)};
	border-radius: ${(p) => p.theme.global_border_radius};
	display: flex;
	flex: 1 1 auto;
	font-size: 1rem;
	outline: none;
	padding: 0.2rem 0.5rem;
	position: relative;
	width: 100%;

	:not(output):-moz-ui-invalid {
		box-shadow: none;
	}
`;
