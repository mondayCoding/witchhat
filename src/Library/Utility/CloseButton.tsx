import * as React from 'react';
import { CloseButton as CloseButtonWrap } from './CloseButtonStyles';

//*****************************************************************************************************************
// Close button component
//*****************************************************************************************************************

export const CloseButton: React.SFC<{ onClick: any }> = (props) => (
	<CloseButtonWrap {...props} />
);
