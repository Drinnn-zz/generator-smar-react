import api from "../service/<%= moduleName %>.service";
import * as types from "./<%= moduleName %>.actionTypes";
import formActions from "@common/store/form/form.actions";
import { takeEvery, call, put } from "redux-saga/effects";
import <%= moduleName %>Actions from "./<%= moduleName %>.actions";

export default workSaga;

function* workSaga() {
    yield takeEvery(types.<%= objectName.toUpperCase() %>_POST, save);
    yield takeEvery(types.<%= objectName.toUpperCase() %>_GET, getById);
    yield takeEvery(types.<%= objectName.toUpperCase() %>_PUT, update);
    yield takeEvery(types.<%= objectName.toUpperCase() %>_DELETE, remove);
}

function* getById(action) {
    const { payload } = action;

    const result = yield call(api.getById, payload);
    yield put(<%= moduleName %>Actions.set<%= objectName %>(result.data));
    yield put(formActions.setInitialValuesOnEdit(result.data));
}

function* save(action) {
    const { payload } = action;

    yield call(api.save, payload);
    yield put(formActions.inserted());
    yield put(formActions.reload());
}

function* update(action) {
    const { payload } = action;

    yield call(api.update, payload);
    yield put(formActions.updated());
    yield put(formActions.redirect('<%= domain.split("/").join(".") %>'));
}

function* remove(action) {
    const { payload } = action;

    yield call(api.remove, payload);
    yield put(formActions.deleted());
    yield put(formActions.gridReload());
}