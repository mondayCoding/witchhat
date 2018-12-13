import styled from '../../Library/theme';

export const EventTag = styled.span`
	cursor: pointer;
	padding: 0.1rem 0.5rem;
	transition: background-color 0.2s ease-in-out;
	color: ${({ theme }) => theme.gray_light};
	background-color: ${({ theme }) => theme.gray_black};
	border-radius: ${({ theme }) => theme.global_border_radius};

	&:hover {
		background-color: ${({ theme }) => theme.primary};
		color: white;
	}
`;
