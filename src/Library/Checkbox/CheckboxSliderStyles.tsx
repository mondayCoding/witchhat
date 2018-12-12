import styled, { defaultTheme } from '../theme';
import { lighten } from 'polished';

interface StyleProps {}

const box_size = '1.3rem';
const slider_width = '2.8rem';
const slider_height = '1.6rem';

export const ThemedWrapper = styled.div`
	input[type='checkbox'] {
		left: -999rem;
		position: absolute;

		&:focus + label {
			box-shadow: 0 0 0.35rem black;
			outline: 0.1rem solid ${({ theme }) => theme.primary};

			&:hover {
				box-shadow: none;
				outline: none;
			}
		}

		&:disabled + label {
			color: ${lighten(0.8, 'black')};
			cursor: default;

			&::before {
				background-color: ${lighten(0.4, 'black')};
				border: 0.15rem solid ${lighten(0.4, 'black')};
			}

			&::after {
				background-color: ${lighten(0.8, 'black')};
				color: ${lighten(0.8, 'black')};
			}
		}
	}

	[type='checkbox'] + label {
		text-align: left;
		cursor: pointer;
		border-radius: ${({ theme }) => theme.global_border_radius};
		display: flex;
		flex-direction: column;
		font-size: 0.95rem;
		font-weight: 400;
		height: auto;
		justify-content: center;
		position: relative;
		user-select: none;
		min-height: 1.8rem;
		padding: 0.35rem 0.35rem 0.35rem 4rem;

		&:hover {
			background-color: ${({ theme }) => theme.gray_black};
		}

		&::before {
			background-color: ${({ theme }) => theme.gray_black};
			border: 0.2rem solid ${({ theme }) => theme.gray_medium};
			box-shadow: ${({ theme }) => theme.global_shadow};
			content: '';
			left: 0.35rem;
			position: absolute;
			transition: background-color 0.2s;
			border-radius: ${box_size};
			height: ${slider_height};
			width: ${slider_width};
		}

		&::after {
			background-color: ${({ theme }) => theme.primary};
			border-radius: ${box_size};
			width: ${box_size};
			height: ${box_size};
			content: '';
			font-size: 1.5rem;
			position: absolute;
			transition: left 0.2s, background-color 0.2s;
		}
	}

	[type='checkbox']:not(:checked) + label::after {
		background-color: ${({ theme }) => theme.gray_medium};
		left: 0.5rem;
	}

	[type='checkbox']:checked + label {
		&::after {
			background-color: ${({ theme }) => theme.primary};
			left: 1.65rem;
		}
	}
`;
