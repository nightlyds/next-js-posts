export type InitialStateTypes = {
    data: Object;
    postData: Object;
    loading: boolean;
    error: boolean;
};

const initialState: InitialStateTypes = {
    data: {},
    postData: {},
    loading: false,
    error: false,
};

export default initialState;
