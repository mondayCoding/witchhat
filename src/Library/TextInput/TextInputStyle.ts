import styled, { defaultTheme } from '../theme';

export const ThemedInput = styled.input`
	background: none;
	color: ${({ theme }) => theme.text_primary};
	border: none;
	display: flex;
	flex: 1 1 auto;
	font-size: 1rem;
	outline: none;
	padding: 0.4rem 0.5rem;
	position: relative;
	width: 100%;

	:not(output):-moz-ui-invalid {
		box-shadow: none;
	}
`;

interface nom {
	error?: string;
}

export const ThemedWrapper = styled.div<nom>`
	border: 0.1rem solid;
	border-color: ${({ error, theme }) =>
		error ? theme.error_color : theme.primary};
	border-radius: ${defaultTheme.global_border_radius};
	box-shadow: ${defaultTheme.global_shadow};
	display: flex;
	flex-direction: column;
	max-width: 100%;
	position: relative;
	transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

	&:hover {
		box-shadow: 0 0 0.4rem ${({ theme }) => theme.primary};
	}

	& + & {
		margin-top: 0.5rem;
	}
`;

export const ThemePlainWrapper = styled.div<nom>`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	position: relative;
	border: 0.1rem solid transparent;
	transition: border-color 0.2s ease-in-out;

	&:hover {
		border: 0.1rem solid ${({ theme }) => theme.primary};
	}

	& + & {
		margin-top: 0.5rem;
	}
`;
