import React, { FC } from 'react';
import { Button } from '../Button/Button';

interface ITabButton {
	title: string;
	tabIndex?: number;
	isActive?: boolean;
	onClick?(number: number): void;
}

interface IState {
	activeTab: number;
}

interface IProps {
	defaultTabIndex?: number;
}

export const Tab: FC<ITabButton> = (props) => {
	const { onClick, tabIndex, isActive, title } = props;

	return (
		<Button
			className={isActive ? '' : 'link-btn'}
			onClick={onClick && (() => onClick(tabIndex!))}
			title={title}
			text={title}
		/>
	);
};

export class Tabs extends React.Component<IProps, IState> {
	state: IState = { activeTab: this.props.defaultTabIndex || 0 };

	setActiveTab = (activeTab: number) => this.setState({ activeTab });

	renderTabButtons() {
		return React.Children.map(this.props.children, (child, index) => {
			// null check, since there are "optional" children
			if (child) {
				return React.cloneElement(child as any, {
					onClick: this.setActiveTab,
					tabIndex: index,
					isActive: this.state.activeTab === index
				});
			} else {
				return null;
			}
		});
	}

	renderActiveContent() {
		const { children } = this.props as any;
		const { activeTab } = this.state;

		if (children[activeTab]) {
			return children[activeTab].props.children;
		}
	}

	render() {
		return (
			<div className="tabs">
				<div className="tab-titles">{this.renderTabButtons()}</div>
				<div className="tab-content">{this.renderActiveContent()}</div>
			</div>
		);
	}
}
