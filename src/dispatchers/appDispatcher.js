import { Dispatcher } from 'flux';
let appDispatcher = new Dispatcher();

appDispatcher.handleAction = function(action) {
	this.dispatch({
		source: 'VIEW_ACTION',
		action: action
	});
};
export default appDispatcher;
