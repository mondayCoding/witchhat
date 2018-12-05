import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { themed } from '../theme';

interface IProps {
	width?: string;
}

export const ThemedLimiter = styled.div`
	max-width: ${(props: IProps) => (props.width ? props.width : '32rem')};
	margin: 0 auto;
`;

export const Limiter: React.SFC<IProps> = ({ children, ...rest }) => (
	<ThemedLimiter {...rest}>{children}</ThemedLimiter>
);
