import styled from '../../Library/theme';
import { NavLink } from 'react-router-dom';
import { transparentize } from 'polished';

export const ThemedLayout = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	min-height: 100vh;
	color: ${(props) => props.theme.text_primary};
	text-align: left;
	font-family: ${({ theme }) => theme.font_body};

	> nav.nav {
		flex: 0 0 20%;
		display: flex;
		flex-direction: column;
		background-color: ${({ theme }) => theme.nav_background_color};
		transition: background-color 0.35s ease-in-out;

		> .link--wrapper {
			position: sticky;
			top: 1rem;
		}
	}

	> main.main {
		flex: 0 0 80%;
		padding: 1rem;
		background-color: ${({ theme }) => theme.main_background_color};
		box-shadow: ${(props) => props.theme.global_shadow_inset};
		transition: background-color 0.35s ease-in-out;
		overflow: hidden;
	}
`;

export const ThemedLink = styled(NavLink)`
	display: flex;
	flex-direction: row;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	text-decoration: none;
	color: ${(props) => props.theme.text_primary};
	text-align: left;
	transition: background-color 0.2s ease-in-out;

	&:hover {
		background-color: ${(props) => props.theme.primary};
		color: #fff;
	}

	&.active {
		color: #fff;
		background-color: ${(props) => props.theme.primary};
	}

	> i {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0 0 1rem;
		margin-right: 0.5rem;
	}
`;

export const NaviSubHeading = styled.span`
	padding: .5rem 0.5rem 0.35rem;
	display: block;
	font-size: 0.85rem;
	color: ${({ theme }) => transparentize(0.65, theme.text_primary)};
	background-color: ${({ theme }) =>
		transparentize(0.65, theme.main_background_color)};
	border-top: 0.1rem solid ${({ theme }) => theme.gray_black};
	border-bottom: 0.1rem solid ${({ theme }) => theme.gray_black};
	font-style: italic;
	/* box-shadow: ${({ theme }) => theme.global_shadow_inset}; */
	text-align: left;
`;
