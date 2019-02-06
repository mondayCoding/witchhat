import styled, { css } from '../theme';

export const TextAreaThemed = styled.div`
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
`;
