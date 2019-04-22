import * as types from './<%= moduleName %>.actionTypes';

export default {
    save: data => ({
        type: types.<%= objectName.toUpperCase() %>_POST,
        payload: data
    }),
    getById: id => ({
        type: types.<%= objectName.toUpperCase() %>_GET,
        payload: id
    }),
    set<%= objectName %>: data => ({
        type: types.<%= objectName.toUpperCase() %>_SET,
        payload: data
    }),
    update: (id, data) => ({
        type: types.<%= objectName.toUpperCase() %>_PUT,
        payload: { data, id }
    }),
    remove: id => ({
        type: types.<%= objectName.toUpperCase() %>_DELETE,
        payload: id
    })
}