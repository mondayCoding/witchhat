import { defaultTheme } from '../Library/theme';
import styled from '../Library/theme';
import { NavLink } from 'react-router-dom';

export const ThemedLayout = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	min-height: 20rem;
	background-color: ${(props) => props.theme.gray_heavy};
	min-height: 100vh;
	color: ${(props) => props.theme.gray_light};
	text-align: left;
	font-family: ${({ theme }) => theme.font_body};

	> nav.nav {
		flex: 0 0 20%;
		display: flex;
		flex-direction: column;
		background-color: ${({ theme }) => theme.gray_black};

		> .link--wrapper {
			position: sticky;
			top: 1rem;
		}
	}

	> main.main {
		flex: 0 0 80%;
		padding: 1rem;
		box-shadow: ${(props) => props.theme.global_shadow_inset};
	}
`;

export const ThemedLink = styled(NavLink)`
	display: flex;
	flex-direction: row;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	text-decoration: none;
	color: ${(props) => props.theme.gray_light};
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
