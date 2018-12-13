import styled from '../theme';

export interface Props {
	maxWidth?: string;
	centered?: boolean;
}

export const ThemedLimiter = styled.div`
	max-width: ${(props: Props) => (props.maxWidth ? props.maxWidth : '32rem')};
	margin: ${(props: Props) => (props.centered ? '0 auto' : '0')};
`;
