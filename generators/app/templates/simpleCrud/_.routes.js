import Grid from './container/<%= moduleName %>.grid';
import New from './container/<%= moduleName %>.new';
import Edit from './container/<%= moduleName %>.edit';
import View from './container/<%= moduleName %>.view';

const routes = [{
    name: '<%= domain.split("/").join(".") %>',
    path: '/<%= domain %>',
    component: Grid,
    accessControl: false,
    breadCrumb: [
        { text: '<%= domainArray[0] %>' },
        { text: '<%= domainArray[1] %>' },
        { text: '<%= domainArray[2] %>' }
    ]
},
{
    name: '<%= domain.split("/").join(".") %>.new',
    path: '/<%= domain %>/new',
    component: New,
    accessControl: false,
    breadCrumb: [
        { text: '<%= domainArray[0] %>' },
        { text: '<%= domainArray[1] %>' },
        { text: '<%= domainArray[2] %>', link: '<%= domain.split("/").join(".") %>' },
        { text: 'Inclusão' }
    ]
},
{
    name: '<%= domain.split("/").join(".") %>.edit',
    path: '/<%= domain %>/edit/:id',
    component: Edit,
    accessControl: false,
    breadCrumb: [
        { text: '<%= domainArray[0] %>' },
        { text: '<%= domainArray[1] %>' },
        { text: '<%= domainArray[2] %>', link: '<%= domain.split("/").join(".") %>' },
        { text: 'Edição' }
    ]
},
{
    name: '<%= domain.split("/").join(".") %>.view',
    path: '/<%= domain %>/view/:id',
    component: View,
    accessControl: false,
    breadCrumb: [
        { text: '<%= domainArray[0] %>' },
        { text: '<%= domainArray[1] %>' },
        { text: '<%= domainArray[2] %>', link: '<%= domain.split("/").join(".") %>' },
        { text: 'Visualização' }
    ]
}];

export default routes;
