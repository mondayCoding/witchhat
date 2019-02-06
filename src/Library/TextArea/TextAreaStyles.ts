import styled, { css } from '../theme';

export const TextAreaThemed = styled.textarea`
	flex: 1 1 auto;
	width: 100%;
	padding: 6px 8px;
	border-radius: ${(p) => p.theme.global_border_radius};
	transition: border-color 0.2s ease-in-out;
	border: 0.1px solid #ccc;
	resize: vertical;
	max-height: 20rem;
	min-height: 4rem;
	font-family: ${(p) => p.theme.font_body};
	font-size: ${(p) => p.theme.global_font_size};

	&:hover {
		border-color: ${(p) => p.theme.primary};
	}

	&:focus {
		box-shadow: 0 0 4px ${(p) => p.theme.secondary};
	}

	&:disabled {
		opacity: 0.5;
		cursor: default;
		pointer-events: none;
		resize: none;

		&:hover {
			border-color: #ccc;
		}
	}
`;

export const TooltipWrap = styled.div`
	position: relative;
	flex: 0 0 50px;
	align-self: center;
`;
