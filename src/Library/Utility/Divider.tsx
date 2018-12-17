import styled from '../theme';

export interface StyleProps {
	isSmall?: boolean;
}

export const Divider = styled.div`
	display: block;
	height: 1px;
	margin-bottom: ${(props: StyleProps) => (props.isSmall ? '1rem' : '2rem')};
`;

export const LineDivider = styled.div`
	display: block;
	height: 1px;
	margin-bottom: 1rem;
	margin-top: 1rem;
	border-bottom: 0.1rem solid ${({ theme }) => theme.gray_black};
`;
