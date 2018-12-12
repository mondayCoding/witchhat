// Event Type

export interface EventTypeAbstract {
	readonly modifier: number;
	readonly label: string;
	readonly class_basic: string;
	readonly class_interactive: string;
}

export enum EventTypeConstant {
	Expense = 'expense',
	Income = 'income'
}

const expense: EventTypeAbstract = Object.freeze({
	modifier: -1,
	label: 'Expense',
	class_basic: 'tag-expense',
	class_interactive: 'generic--expense'
});

const income: EventTypeAbstract = Object.freeze({
	modifier: 1,
	label: 'Income',
	class_basic: 'tag-income',
	class_interactive: 'generic--income'
});

export const EventType = {
	expense,
	income
};
