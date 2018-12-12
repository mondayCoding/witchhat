import styled from '../../Library/theme';

//****************************************************************************
// Component | Close button (animated x-mark)
//****************************************************************************

export const CloseButton = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.gray_black};
	border: 0.1rem solid ${({ theme }) => theme.gray_black};
	border-radius: ${({ theme }) => theme.global_border_radius};
	display: flex;
	flex-direction: column;
	height: 1.5rem;
	justify-content: center;
	min-width: 2rem;
	position: relative;
	transition: background-color 0.6s;
	width: auto;

	&:hover {
		background-color: $alt;
	}

	&::before,
	&::after {
		background-color: ${({ theme }) => theme.gray_light};
		content: '';
		display: block;
		height: 0.3rem;
		position: absolute;
		transform: rotate(-45deg);
		transition: all 0.4s ease-out;
		width: 1.2rem;
	}

	&::after {
		transform: rotate(45deg);
	}

	&:hover::before,
	&:hover::after {
		background-color: $white;
		transform: rotate(0deg);
	}
`;
