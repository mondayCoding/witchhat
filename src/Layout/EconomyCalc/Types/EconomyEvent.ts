import { EventTypeConstant } from './EconomyType';
import { OccurranceConstant } from './EconomyOccurrance';

export interface EconomyEvent {
	readonly name: string;
	readonly id: number;
	readonly value: number;
	readonly type: EventTypeConstant;
	readonly repeat: OccurranceConstant;
}
