import React, { Component } from 'react';
import Calendar from '../../components/Calendar';
import EventCard from '../../components/EventCard';
import s from './CalendarPage.module.css';
import { ID } from '../../helpers';
import ModalPortal from '../../components/ModalPortal';

class CalendarPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			card: {
				isVisible: false,
				isEdit: false,
				selected: null
			},
			events: [
				{
					id: ID(),
					title: 'Go shop',
					start: new Date(),
					end: new Date()
				},
				{
					id: ID(),
					title: 'Get order',
					start: new Date(),
					end: new Date()
				}
			],
			mousePosition: {
				x: 0,
				y: 0
			}
		};
		this.refCalendarBlock = React.createRef();
		this.el = document.createElement('div');
	}
	componentDidMount() {
		this.refCalendarBlock.current.addEventListener(
			'mousemove',
			this.onMouseUpdate,
			false
		);
		this.refCalendarBlock.current.addEventListener(
			'mouseenter',
			this.onMouseUpdate,
			false
		);
	}
	componentWillUnmount() {
		this.refCalendarBlock.current.removeEventListener(
			'mousemove',
			this.onMouseUpdate
		);
		this.refCalendarBlock.current.removeEventListener(
			'mouseenter',
			this.onMouseUpdate
		);
	}
	handleSelect = ({ start }) => {
		if (!this.state.card.isVisible) {
			this.setState({
				card: {
					isVisible: true,
					date: start
				}
			});
		}
	};
	onClose = () => {
		this.setState({ card: { isVisible: false } });
	};
	onCreate = ({ title, start, note }) => {
		const newEvent = {
			title: title,
			start: start,
			end: start,
			note: note,
			id: ID()
		};
		this.setState(state => {
			return {
				...state,
				events: [...state.events, newEvent],
				card: {
					isVisible: false,
					isEdit: false,
					selected: null
				}
			};
		});
	};
	onChangeEvents = events => {
		this.setState({ events });
	};
	onRemove = id => {
		this.setState(state => {
			const index = state.events.findIndex(item => item.id === id);
			if (index !== -1) {
				const events = state.events;
				events.splice(index, 1);
				return {
					...state,
					events: events,
					card: {
						...state.card,
						isVisible: false,
						isEdit: false,
						selected: null
					}
				};
			}
		});
	};
	onChange = event => {
		this.setState(state => {
			const arr = [...state.events];
			const index = arr.findIndex(item => item.id === event.id);
			if (index !== -1) {
				arr.splice(index, 1, event);
				return {
					...state,
					events: arr,
					card: {
						isVisible: false,
						isEdit: false,
						selected: null
					}
				};
			}
		});
	};
	onMouseUpdate = e => {
		const x = e.pageX;
		const y = e.pageY;

		if (!this.state.card.isVisible) {
			this.setState({ mousePosition: { x, y: y + 20 } });
		}
	};

	onSelectEvent = (event, e) => {
		this.setState(state => {
			return {
				...state,
				card: {
					...state.card,
					isVisible: true,
					isEdit: true,
					selected: event,
					x: e.clientX + 1050,
					y: e.clientY
				}
			};
		});
	};
	render() {
		const {
			card: { isVisible, date, selected, isEdit },
			events,
			mousePosition: { x, y }
		} = this.state;
		return (
			<div>
				<div ref={this.refCalendarBlock} className={s.CalendarBlock}>
					<Calendar
						handleSelect={this.handleSelect}
						events={events}
						onChangeEvents={this.onChangeEvents}
						onSelectEvent={this.onSelectEvent}
					/>

					{isVisible && (
						<ModalPortal>
							<EventCard
								x={x}
								y={y}
								onClose={this.onClose}
								start={date}
								isEdit={isEdit}
								{...selected}
								onCreate={this.onCreate}
								onChange={this.onChange}
								onRemove={this.onRemove}
							/>
						</ModalPortal>
					)}
				</div>
			</div>
		);
	}
}
export default CalendarPage;
