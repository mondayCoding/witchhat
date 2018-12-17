import React, { Component, useState, useEffect, Suspense } from 'react';
import { EconomyEvent } from './Types/EconomyEvent';
import { database } from '../../Firebase/index';
import 'react-table/react-table.css';
import { Button } from '../../Library/Button/Button';
import { StyleList } from './EconomyCalcStyles';
import { EventTable } from './EventTable';
import { BudjetCalculations } from './BudjetCalculations';
import { CreateNewEventForm } from './CreateNewEventForm';
import { EditEventView } from './EditEventView';
import Icons from '../../UtilsUI/Icons';
import { BudjetGraphs } from './BudjetGraphs';
import { Heading } from '../../Library/Text/Heading';
import { useDocumentTitleSetter } from '../../Hooks/useDocumentTitleSetter';

export const EconCalculator: React.SFC = () => {
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

	const doRemoveEvent = (id: number) => {
		alert(id);
	};

	return (
		<StyleList>
			<Heading
				text="Monthly Household Balance"
				hasUnderline={true}
				type="h3"
				isUpperCase={true}
				marginAfter={true}
			/>

			{selected ? (
				<EditEventView return={() => setSelected(null)} item={economyList} />
			) : (
				<EventTable
					dataList={economyList}
					onSelection={setSelected}
					onRemove={doRemoveEvent}
				/>
			)}

			{/* <h5>Currently Active: {selected}</h5> */}

			<BudjetCalculations list={economyList} />

			<BudjetGraphs list={economyList} />

			{displayAddNewForm ? (
				<CreateNewEventForm
					onSubmit={(values) => doCreateNewEvent(values)}
					onReset={() => setDisplayAddNewForm(false)}
				/>
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
