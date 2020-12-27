import { bindActionCreators, Dispatch } from "redux";
import loadUpAction from "./actionCreators/loadUpAction";
import addNewAction from "./actionCreators/addNewAction";
import loadPostDataAction from "./actionCreators/loadPostDataAction";
import { PostDataTypes } from "./types";


function mapDispatchToProps(component: string) {
    switch (component) {
        case "POSTS":
            return function (dispatch: Dispatch<any>) {
                return {
                    loadUp: bindActionCreators(loadUpAction, dispatch),
                };
            };
        case "ADD_NEW":
            return function (dispatch: Dispatch<any>) {
                return {
                    addNew: bindActionCreators(addNewAction, dispatch),
                };
            };
        case "POST":
            return function (dispatch: Dispatch<any>) {
                return {
                    loadPostData: bindActionCreators(
                        loadPostDataAction,
                        dispatch
                    ),
                };
            };
        default:
            return undefined;
    }
}

export default mapDispatchToProps;
