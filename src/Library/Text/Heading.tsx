import React from 'react';
import * as HeadingTag from './HeadingStyles';

interface IProps extends HeadingTag.Props {
	text: string;
	type?: string;
	ingress?: string;
	iconBeforeText?: React.ReactNode;
	iconAfterText?: React.ReactNode;
}

export const Heading: React.SFC<IProps> = ({
	iconAfterText,
	iconBeforeText,
	text,
	type,
	ingress,
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
				<>
					<HeadingTag.H1 {...rest}>
						<HeadingContent />
					</HeadingTag.H1>
					{ingress && <HeadingTag.Ingress>{ingress}</HeadingTag.Ingress>}
				</>
			);
		case 'h2':
			return (
				<div>
					<HeadingTag.H2 {...rest}>
						<HeadingContent />
					</HeadingTag.H2>
					{ingress && <HeadingTag.Ingress>{ingress}</HeadingTag.Ingress>}
				</div>
			);
		case 'h3':
			return (
				<div>
					<HeadingTag.H3 {...rest}>
						<HeadingContent />
					</HeadingTag.H3>
					{ingress && <HeadingTag.Ingress>{ingress}</HeadingTag.Ingress>}
				</div>
			);
		case 'h4':
			return (
				<div>
					<HeadingTag.H4 {...rest}>
						<HeadingContent />
					</HeadingTag.H4>
					{ingress && <HeadingTag.Ingress>{ingress}</HeadingTag.Ingress>}
				</div>
			);
		case 'h5':
			return (
				<div>
					<HeadingTag.H5 {...rest}>
						<HeadingContent />
					</HeadingTag.H5>
					{ingress && <HeadingTag.Ingress>{ingress}</HeadingTag.Ingress>}
				</div>
			);
		default:
			return (
				<div>
					<HeadingTag.H2 {...rest}>
						<HeadingContent />
					</HeadingTag.H2>
					{ingress && <HeadingTag.Ingress>{ingress}</HeadingTag.Ingress>}
				</div>
			);
	}
};
