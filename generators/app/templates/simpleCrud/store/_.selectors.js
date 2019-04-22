export default {
    <%= moduleName %>: state => state.<%= domain.split("/").join(".") %>
};
