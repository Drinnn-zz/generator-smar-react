import * as types from './<%= moduleName %>.actionTypes';
import * as commonActionType from "@common/store/common/common.actionsType";
import store from "@common/store/store";
import Immutable from "seamless-immutable";

const initialState = Immutable({
});

const reduce = (state = initialState, action = {}) => {
    let payload = action.payload || {};
    switch (action.type) {
        case types.<%= objectName.toUpperCase() %>_SET:
            return state.merge(payload);
        case commonActionType.RESET:
            return initialState;
        default:
            return state;
    }
};

store.registerDynamicModule('<%= domain.split("/").join(".") %>', reduce);