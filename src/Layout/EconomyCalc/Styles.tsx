import styled from '../../Library/theme';

export const EventTag = styled.span`
	cursor: pointer;
	padding: 0.1rem 0.5rem;
	transition: background-color 0.2s ease-in-out;
	color: ${({ theme }) => theme.text_primary};
	background-color: ${({ theme }) => theme.nav_background_color};
	border-radius: ${({ theme }) => theme.global_border_radius};

	&:hover {
		background-color: ${({ theme }) => theme.primary};
		color: white;
	}
`;
