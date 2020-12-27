type MapStateToPropsTypes = {
    dataReducer: any;
    loadingReducer: boolean;
    errorReducer: boolean;
    postDataReducer: boolean;
};

function mapStateToProps(component: string) {
    switch (component) {
        case "POSTS":
            return function (state: MapStateToPropsTypes) {
                return {
                    data: state.dataReducer,
                    loading: state.loadingReducer,
                    error: state.errorReducer,
                };
            };
        case "ADD_NEW":
            return function (state: MapStateToPropsTypes) {
                return {
                    loading: state.loadingReducer,
                    error: state.errorReducer,
                };
            };
        case "POST":
            return function (state: MapStateToPropsTypes) {
                return {
                    postData: state.postDataReducer,
                    loading: state.loadingReducer,
                    error: state.errorReducer,
                };
            };
        default:
            return undefined;
    }
}

export default mapStateToProps;
