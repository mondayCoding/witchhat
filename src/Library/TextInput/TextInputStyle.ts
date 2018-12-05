import styled from 'styled-components';
import { themed } from '../theme';

export const ThemedInput = styled.input`
	background: none;
	color: ${themed.gray_light};
	border: none;
	display: flex;
	flex: 1 1 auto;
	font-size: 1rem;
	outline: none;
	padding: 0.4rem 0.5rem;
	position: relative;
	width: 100%;

	:not(output):-moz-ui-invalid {
		box-shadow: none;
	}
`;

interface nom {
	error: string;
}
type nam = Partial<nom>;

export const ThemedWrapper = styled.div`
	border: 0.1rem solid;
	border-color: ${(props: nam) =>
		props.error ? themed.error_color : themed.main_color};
	border-radius: ${themed.global_border_radius};
	box-shadow: ${themed.global_shadow};
	display: flex;
	flex-direction: column;
	max-width: 100%;
	position: relative;

	& + & {
		margin-top: 0.5rem;
	}
`;
