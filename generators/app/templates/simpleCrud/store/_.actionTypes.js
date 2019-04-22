export const <%= objectName.toUpperCase() %>_POST = '<%= domain.split("/").join(".") %>.<%= objectName.toUpperCase() %>_POST';
export const <%= objectName.toUpperCase() %>_GET = '<%= domain.split("/").join(".") %>.<%= objectName.toUpperCase() %>_GET';
export const <%= objectName.toUpperCase() %>_PUT = ' <%= domain.split("/").join(".") %>.<%= objectName.toUpperCase() %>_PUT';
export const <%= objectName.toUpperCase() %>_DELETE = '<%= domain.split("/").join(".") %>.<%= objectName.toUpperCase() %>_DELETE';
export const <%= objectName.toUpperCase() %>_SET = '<%= domain.split("/").join(".") %>.SET_<%= objectName.toUpperCase() %>';
