let defaultState = {
	loading: true,
	data: [],
	changeSidebar: false,
	sidebarPosition: false
}
export const drawerReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'CHANGE':
		return {
			...state,
			loading: false,
			changeSidebar: action.payload
		}
	case 'CHANGEPOSITION':
		return {
			...state,
			loading: false,
			changePosition: action.payload
		}
	default:
		return { ...state }
	}
}
