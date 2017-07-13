export const selectLibrary = (libraryid) => {
	return {
		type: 'select_library',
		payload: libraryid
	};
};