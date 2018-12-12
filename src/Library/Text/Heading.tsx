import React from 'react';
import * as HeadingTag from './HeadingStyles';

interface IProps extends HeadingTag.Props {
	text: string;
	type?: string;
	iconBeforeText?: React.ReactNode;
	iconAfterText?: React.ReactNode;
}

export const Heading: React.SFC<IProps> = ({
	iconAfterText,
	iconBeforeText,
	text,
	type,
	...rest
}) => {
	const HeadingContent = () => (
		<React.Fragment>
			{iconBeforeText && <span>{iconBeforeText}</span>}
			{text && <span>{text}</span>}
			{iconAfterText && <span>{iconAfterText}</span>}
		</React.Fragment>
	);

	switch (type) {
		case 'h1':
			return (
				<HeadingTag.H1 {...rest}>
					<HeadingContent />
				</HeadingTag.H1>
			);
		case 'h2':
			return (
				<HeadingTag.H2 {...rest}>
					<HeadingContent />
				</HeadingTag.H2>
			);
		case 'h3':
			return (
				<HeadingTag.H3 {...rest}>
					<HeadingContent />
				</HeadingTag.H3>
			);
		case 'h4':
			return (
				<HeadingTag.H4 {...rest}>
					<HeadingContent />
				</HeadingTag.H4>
			);
		case 'h5':
			return (
				<HeadingTag.H5 {...rest}>
					<HeadingContent />
				</HeadingTag.H5>
			);
		default:
			return (
				<HeadingTag.H2 {...rest}>
					<HeadingContent />
				</HeadingTag.H2>
			);
	}
};
