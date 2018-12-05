import styled, { css } from 'styled-components';
import { themed, disableStyle } from '../theme';

export interface styleProps {
	isRounded: boolean;
	isWide: boolean;
	isSquare: boolean;
	isUpperCase: boolean;
}

type props = Partial<styleProps>;

export const ThemedButton = styled.button`
	background-color: ${themed.main_color};
	border: 0.15rem solid transparent;
	color: #fff;
	font-size: 1rem;
	font-weight: 700;
	line-height: 1.2;
	min-height: 1.8rem;
	min-width: 6rem;
	padding: 0.2rem 0.35rem;
	text-align: center;
	transition: background-color 0.2s;
	width: auto;
	cursor: pointer;
	border-radius: ${(props: props) =>
		props.isSquare ? '0' : themed.global_border_radius};
	${(props: props) =>
		props.isWide &&
		css`
			width: 100%;
			display: block;
		`}
	${(props: props) =>
		props.isUpperCase &&
		css`
			text-transform: uppercase;
		`}
      
   &:focus {
		border: 0.15rem solid white;

		&::-moz-focus-inner {
			border: 0;
		}
	}

	&:disabled {
		cursor: not-allowed;
		filter: grayscale(90%);
		opacity: 0.7;
		pointer-events: none;
	}

	&:hover {
		background-color: black;
		color: white;
	}

	& + & {
		margin-left: 0.5rem;
	}
`;
