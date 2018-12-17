import styled from '../../Library/theme';

export const MenuWrapper = styled.div`
	position: relative;

	.buttons {
		z-index: 1000;
		padding: 0.5rem 1rem;
		margin: 0 -0.5rem;
		background-color: ${({ theme }) => theme.main_background_color};
		transition: background-color 0.35s ease-in-out;
		display: flex;
		flex-direction: row;
		justify-content: start;
		position: sticky;
		top: 0;

		> div {
			margin-left: 1rem;
		}
	}
`;
