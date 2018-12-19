import React, { Component, useState, useEffect, Suspense } from 'react';
import { EconomyEvent } from './Types/EconomyEvent';
import { database } from '../../Firebase/index';
import 'react-table/react-table.css';
import { Button } from '../../Library/Button/Button';
import { StyleList } from './EconomyCalcStyles';
import { EventTable } from './EventTable';
import { BudjetCalculations } from './SubComponents/BudjetCalculations';
import Icons from '../../UtilsUI/Icons';
import { BudjetGraphs } from './SubComponents/BudjetGraphs';
import { Heading } from '../../Library/Text/Heading';
import { useDocumentTitleSetter } from '../../Hooks/useDocumentTitleSetter';
import { Spring } from 'react-spring';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { Occurance, OccurranceConstant } from './Types/EconomyOccurrance';
import { EventTypeConstant } from './Types/EconomyType';
import { EconomicAffectForm } from './EventForm';
import Notify from '../../UtilsUI/Notification';

export const EconCalculator: React.SFC<RouteComponentProps> = () => {
	const [selected, setSelected] = useState(null as number);
	const [displayAddNewForm, setDisplayAddNewForm] = useState(false);
	useDocumentTitleSetter('Household Calculator');

	const [economyList, setEconomyList] = useState([] as EconomyEvent[]);
	useEffect(() => {
		// static (runs once)
		database
			.collection('events')
			.get()
			.then((collection) =>
				collection.docs.map((document) => ({
					id: document.id,
					...(document.data() as EconomyEvent)
				}))
			)
			.then((collection) => setEconomyList(collection));

		//listener (runs on events)
		// database.collection('events').onSnapshot((snapshot) => {
		// 	snapshot.docChanges().forEach((change) => {
		// 		if (change.type === 'added') {
		// 			// handle add
		// 		}
		// 		if (change.type === 'removed') {
		// 			//handle remove
		// 		}
		// 	});
		// });
	}, []);

	const doCreateNewEvent = (values: Partial<EconomyEvent>) => {
		console.log(values);

		const { name, value, repeat, type } = values;
		database.collection('events').add({ name, value, repeat, type });
	};

	const doUpdateEvent = (values: Partial<EconomyEvent>) => {
		console.log(values);

		const { name, value, repeat, type, id } = values;
		database
			.collection('events')
			.doc(id.toString())
			.update({ name, value, repeat, type });
	};

	const doRemoveEvent = (id: number) => {
		if (confirm(`Confirm deletion of item ${id}`)) {
			database
				.collection('events')
				.doc(id.toString())
				.delete()
				.then(
					(succes) => {
						Notify.success('Deleted succesfully');
					},
					(error) => {
						Notify.warn('Failed to delete document');
						console.log(error);
					}
				);
		}
	};

	return (
		<StyleList>
			<BudjetCalculations list={economyList} />

			<Heading
				text="Monthly Household Balance"
				hasUnderline={true}
				type="h3"
				isUpperCase={true}
				marginAfter={true}
			/>

			{selected ? (
				<Spring
					from={{ opacity: 0, position: 'relative', left: '100%' }}
					to={{ opacity: 1, position: 'relative', left: '0' }}
				>
					{(props: any) => (
						<div style={props}>
							<EconomicAffectForm
								item={economyList.find((event) => event.id === selected)}
								submitForm={(values) => doUpdateEvent(values)}
								handleCancel={() => setSelected(null)}
							/>
						</div>
					)}
				</Spring>
			) : (
				<EventTable
					dataList={economyList}
					onSelection={setSelected}
					onRemove={doRemoveEvent}
				/>
			)}

			{/* <h5>Currently Active: {selected}</h5> */}

			<BudjetGraphs list={economyList} />

			{displayAddNewForm ? (
				<Spring from={{ opacity: 0, scale: 0.1 }} to={{ opacity: 1, scale: 1 }}>
					{(props) => (
						<div style={props}>
							<h2>Add new</h2>
							<EconomicAffectForm
								item={{
									id: Math.random(),
									name: '',
									value: 0,
									repeat: OccurranceConstant.Monthly,
									type: EventTypeConstant.Expense
								}}
								submitForm={(values) => doCreateNewEvent(values)}
								handleCancel={() => setDisplayAddNewForm(false)}
							/>
						</div>
					)}
				</Spring>
			) : (
				<Button
					iconBeforeText={Icons.plus}
					text="Add new event"
					onClick={() => setDisplayAddNewForm(true)}
				/>
			)}
		</StyleList>
	);
};
