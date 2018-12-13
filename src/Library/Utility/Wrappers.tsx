import * as React from 'react';
import { ThemedLimiter, Props } from './WrapperStyles';

export const Limiter: React.SFC<Props> = ({ children, ...rest }) => (
	<ThemedLimiter {...rest}>{children}</ThemedLimiter>
);
