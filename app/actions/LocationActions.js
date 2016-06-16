import alt from '../alt';

class LocationActions {
	updateLocations(locations) {
		return locations
	}

	favoriteLocation(locationId) {
  		this.dispatch(locationId);
	}

	module.exports = alt.createActions(LocationActions)
}