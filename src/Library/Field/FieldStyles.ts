import styled, { defaultTheme } from '../theme';
import { transparentize } from 'polished';

export const ThemedWrapper = styled.div`
	border: 0.1rem solid ${transparentize(0.5, 'black')};
	border-radius: ${({ theme }) => theme.global_border_radius};
	display: flex;
	flex-direction: row;
	font-size: 1rem;
	margin-bottom: 0.5rem;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

export const ThemedLabel = styled.label`
	align-items: center;
	/* background-color: ${transparentize(0.5, 'black')}; */
	background-color: ${({ theme }) => theme.nav_background_color};
	border-bottom-left-radius: ${({ theme }) => theme.global_border_radius};
	border-top-left-radius: ${({ theme }) => theme.global_border_radius};
	color: ${({ theme }) => theme.text_primary};
	cursor: pointer;
	display: flex;
	flex: 0 0 10rem;
	font-weight: 500;
	padding: 0 0.3rem;
	padding-right: 0.5rem;
	text-align: left;

	@media (max-width: 900px) {
		border-bottom-left-radius: 0 !important;
		border-top-left-radius: ${({ theme }) => theme.global_border_radius} !important;
		border-top-right-radius: ${({ theme }) => theme.global_border_radius} !important;
		flex: 0 0 auto !important;
	}
`;

export const ThemedContent = styled.div`
	display: flex;
	flex: 1 1 auto;

	> div {
		flex: 1 1 auto;
	}
`;
