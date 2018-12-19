import React from 'react';
import { EventType, EventTypeConstant } from './Types/EconomyType';
import { Occurance, OccurranceConstant } from './Types/EconomyOccurrance';
import { EconomyEvent } from './Types/EconomyEvent';
import ReactTable, { CellInfo } from 'react-table';
import { Button } from '../../Library/Button/Button';
import { EventTag } from './Styles';
import { Heading } from '../../Library/Text/Heading';
import { CloseButton } from '../../Library/Utility/CloseButton';
import { Link } from 'react-router-dom';

export const EventTable: React.SFC<{
	dataList: EconomyEvent[];
	onSelection: React.Dispatch<React.SetStateAction<number>>;
	onRemove: (id: number) => void;
}> = ({ dataList, onSelection, onRemove }) => (
	<ReactTable
		data={dataList}
		showPagination={false}
		minRows={7}
		columns={[
			{
				Header: 'Name',
				accessor: 'name',
				Cell: (props) => {
					const id = props.original.id as number;
					return (
						<EventTag onClick={() => onSelection(id)}>{props.value}</EventTag>
					);
					// return <Link to={`${location.pathname}/${id}`}>{props.value}</Link>;
				}
			},
			{
				Header: 'Value',
				accessor: 'value',
				Cell: (props) => <span>{props.value.toLocaleString('FI-fi')}</span>
			},
			{
				Header: 'Event Type',
				accessor: (props) => props.type,
				id: 'EventType',
				Cell: (props) => {
					const value = EventType[props.value as EventTypeConstant];
					return <span className={value.class_basic}>{value.label}</span>;
				}
			},
			{
				Header: 'Occurrance',
				accessor: (props) => props.repeat,
				id: 'Event_Occurrance',
				Cell: (props) => {
					const value = Occurance[props.value as OccurranceConstant];
					return <span className={value.class_basic}>{value.label}</span>;
				}
			},
			{
				Header: '',
				width: 60,
				resizable: false,
				accessor: 'id',
				Cell: (props: any) => (
					<CloseButton onClick={() => onRemove(props.value)} />
				)
			}
		]}
	/>
);

export default EventTable;
