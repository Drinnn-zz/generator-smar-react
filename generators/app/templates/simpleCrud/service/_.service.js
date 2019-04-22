import baseService from "@common/services/base.service";
import store from "@common/store/store";

const tbRoute = window.api_routes.smarAPD_Tributario_Domain;

let http = baseService(store, tbRoute);

const apiDef = {
    filter(data, headers) {
        return http.post('/<%= objectName %>/filter', data, headers);
    },
    save(data) {
        return http.post(`/<%= objectName %>/`, data);
    },
    getById(id) {
        return http.get(`/<%= objectName %>/${id}`);
    },
    update({ id, data }) {
        return http.put(`/<%= objectName %>/${id}`, data);
    },
    remove(id) {
        return http.delete(`/<%= objectName %>/${id}`);
    },
    massDelete(data) {
        return http.delete(`/<%= objectName %>/massdelete`, data);
    }
};

export default apiDef;
