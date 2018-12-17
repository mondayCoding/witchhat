import styled from '../../Library/theme';
import { readableColor } from 'polished';

export const PickerWrapper = styled.div`
	width: auto;
	display: flex;
	flex-direction: column;
	max-width: 16rem;
	box-shadow: ${({ theme }) => theme.global_shadow};
	border-radius: ${({ theme }) => theme.global_border_radius};
	overflow: hidden;
	margin-bottom: 1rem;
	border: 0.1rem solid ${({ theme }) => theme.gray_light};
	padding: 0.25rem;
	cursor: pointer;
	user-select: none;
	transition: border-color 0.2s ease-in-out;

	&:hover {
		border-color: ${({ theme }) => theme.primary};
	}

	> div:first-child {
		border-top-left-radius: ${({ theme }) => theme.global_border_radius};
		border-top-right-radius: ${({ theme }) => theme.global_border_radius};
		overflow: hidden;
	}

	> div:last-child {
		border-bottom-left-radius: ${({ theme }) =>
			theme.global_border_radius} !important;
		border-bottom-right-radius: ${({ theme }) =>
			theme.global_border_radius} !important;
		overflow: hidden;
	}

	.chrome-picker {
		width: 100% !important;
		max-width: 16rem;
		border-radius: 0 !important;
		padding: 0 !important;
		font-family: ${({ theme }) => theme.font_body} !important;
	}
`;

export const ColorSampleWrapper = styled.div`
	display: flex;
	flex: 0 0 2rem;

	.sample {
		flex: 1 1 auto;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		display: flex;
		color: ${(props) => readableColor(props.color)};
		text-align: center;
		font-weight: 400;
	}
`;
