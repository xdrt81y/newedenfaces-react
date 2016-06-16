import React from 'react';
import LocationStore '../stores/LocationStore';

class Locations extends React.Component {
	getInitialState() {
		return LocationStore.getState();
	}

	componentDidMount(){
		LocationStore.listen(this.onChange);
	}

	componentWillUnmount(){
		LocationStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		return (
			<ul>
				{this.state.Locations.map((location) => {
					return (
						<li>{location.name}</li>
						);
				})}
			</ul>
			);
	}
}

export default Locations;  