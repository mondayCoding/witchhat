import React from 'react';
import { EconomyEvent } from './Types/EconomyEvent';
import {
	ResponsiveContainer,
	LineChart,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Line,
	CartesianGrid
} from 'recharts';
import { EventTypeConstant, EventType } from './Types/EconomyType';
import { defaultTheme } from '../../Library/theme';
import { Occurance } from './Types/EconomyOccurrance';
import { Heading } from '../../Library/Text/Heading';

const getMontlyValue = ({ repeat, value, type }: EconomyEvent) => {
	const annualRepeats = Occurance[repeat].annualRepeats;
	const modifier = EventType[type].modifier;
	return ((value * annualRepeats) / 12) * modifier;
};

const getRoundedValue = (val: number) => Math.round(val * 100) / 100;

const reduceToRoundedMonthly = (list: EconomyEvent[]) => {
	const monthly = list.reduce((acc, current) => acc + getMontlyValue(current), 0);
	return getRoundedValue(monthly);
};

export const BudjetGraphs: React.SFC<{ list: EconomyEvent[] }> = ({ list }) => {
	const expenses = list.filter((item) => item.type === EventTypeConstant.Expense);
	const expensePerMonth = reduceToRoundedMonthly(expenses);
	const incomes = list.filter((item) => item.type === EventTypeConstant.Income);
	const incomePerMoth = reduceToRoundedMonthly(incomes);

	const data = [
		{
			name: 'Monthly',
			loss: expensePerMonth,
			gain: incomePerMoth,
			balance: incomePerMoth + expensePerMonth
		},
		{
			name: 'Quarter Month',
			loss: expensePerMonth * 3,
			gain: incomePerMoth * 3,
			balance: incomePerMoth * 3 + expensePerMonth * 3
		},
		{
			name: 'Half',
			loss: expensePerMonth * 6,
			gain: incomePerMoth * 6,
			balance: incomePerMoth * 6 + expensePerMonth * 6
		},
		{
			name: 'Annual',
			loss: expensePerMonth * 12,
			gain: incomePerMoth * 12,
			balance: incomePerMoth * 12 + expensePerMonth * 12
		}
	];

	return (
		<>
			<Heading
				text="Balance Chart"
				hasUnderline={true}
				type="h3"
				isUpperCase={true}
				marginAfter={true}
				marginBefore={true}
			/>
			<ResponsiveContainer width={'100%'} height={250}>
				<LineChart
					width={600}
					height={300}
					data={data}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip
						formatter={(value) =>
							typeof value === 'number' ? Math.round(value) : value
						}
					/>
					<Legend />
					<Line
						type="monotone"
						dataKey="loss"
						stroke={defaultTheme.error_color}
						activeDot={{ r: 6 }}
					/>
					<Line
						type="monotone"
						dataKey="gain"
						stroke={defaultTheme.success_color}
						activeDot={{ r: 6 }}
					/>
					<Line
						type="monotone"
						dataKey="balance"
						stroke={defaultTheme.info_color}
						activeDot={{ r: 6 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);
};
