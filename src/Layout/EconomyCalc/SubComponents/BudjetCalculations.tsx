import React from 'react';
import { EventType } from '../Types/EconomyType';
import { Occurance } from '../Types/EconomyOccurrance';
import { EconomyEvent } from '../Types/EconomyEvent';
import { Heading } from '../../../Library/Text/Heading';

export const BudjetCalculations: React.SFC<{ list: EconomyEvent[] }> = ({
	list
}) => {
	const calculateAnnualBalance = (list: EconomyEvent[], m: number) => {
		return list
			.reduce(
				(accumulator, current) =>
					accumulator +
					(Occurance[current.repeat].annualRepeats *
						EventType[current.type].modifier *
						current.value) /
						m,
				0
			)
			.toLocaleString('FI-fi', { style: 'currency', currency: 'EUR' });
	};

	const annualBalance = calculateAnnualBalance(list, 1);
	const monthlyBalance = calculateAnnualBalance(list, 12);

	return (
		<div>
			<Heading
				text="Balance Estimate"
				hasUnderline={true}
				type="h3"
				isUpperCase={true}
				marginAfter={true}
			/>
			<Heading text={`Monthly: ${monthlyBalance}`} type="h5" />
			<Heading text={`Annual: ${annualBalance}`} type="h5" />
		</div>
	);
};
