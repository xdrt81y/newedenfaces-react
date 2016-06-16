import alt from '../alt';

class LocationActions {
	updateLocations(locations) {
		return locations
	}

	favoriteLocation(locationId) {
  		this.dispatch(locationId);
	}
}

export default alt.createActions(LocationActions);