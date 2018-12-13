import styled, { css } from '../theme';

export interface Props {
	hasUnderline?: boolean;
	isUpperCase?: boolean;
	isThemed?: boolean;
	marginAfter?: boolean;
	marginBefore?: boolean;
}

const shared = css`
	display: block;
	color: ${({ theme, isThemed }) => (isThemed ? theme.primary : theme.gray_light)};
	${(props: Props) =>
		props.hasUnderline &&
		css`
			border-bottom: 0.1rem solid ${({ theme }) => theme.primary};
		`};
	${(props: Props) =>
		props.isUpperCase &&
		css`
			text-transform: uppercase;
		`};
	${(props: Props) =>
		props.marginBefore &&
		css`
			margin-top: 1.5rem;
		`};
	${(props: Props) =>
		props.marginAfter &&
		css`
			margin-bottom: 1.5rem;
		`};
`;

export const Ingress = styled.span`
	display: block;
	margin-bottom: 1rem;
	margin-top: -0.25rem;
	font-style: italic;
`;

export const H1 = styled.h1`
	font-size: 2.1rem;
	${shared}
`;

export const H2 = styled.h2`
	font-size: 1.75rem;
	${shared}
`;

export const H3 = styled.h3`
	font-size: 1.35rem;
	${shared}
`;

export const H4 = styled.h4`
	font-size: 1.25rem;
	${shared}
`;

export const H5 = styled.h5`
	color: ${({ theme }) => theme.gray_light};
	font-size: 1rem;
	${shared}
`;
