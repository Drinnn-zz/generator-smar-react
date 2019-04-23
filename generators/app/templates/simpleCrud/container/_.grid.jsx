import React, { Component } from "react";
import DataGrid from "@common/components/grid/dataGrid.component";
import DDados from "../<%= moduleName %>.ddados";
import { connect } from "@common/components/base.component";
import api from "../service/<%= moduleName %>.service";
import <%= moduleName %>Actions from "../store/<%= moduleName %>.actions";
import * as messages from "@/modules/common/app/helpers/common.messages";

class Container extends Component {
  constructor(props) {
    super(props);

    const { routerManager } = props;

    const columns = [];

    const actions = [
      {
        type: "view",
        onClick: dataItem =>
          routerManager.redirect({
            name: '<%= domain.split("/").join(".") %>.view',
            parameters: { id: dataItem.Id }
          }),
        route: '<%= domain.split("/").join(".") %>.view'
      },
      {
        type: "edit",
        onClick: dataItem =>
          routerManager.redirect({
            name: '<%= domain.split("/").join(".") %>.edit',
            parameters: { id: dataItem.Id }
          }),
        route: '<%= domain.split("/").join(".") %>.edit'
      },
      {
        type: "delete",
        onClick: async dataItem => {
          const result = await _alert.confirm(
            messages.CONFIRMA_DELETE,
            "Remover Registro Selecionado"
          );
          if (result) this.props.<%= moduleName %>Actions.remove(dataItem.Id);
        },
        url: "<%= domain %>/delete"
      }
    ];

    const order = [];

    const options = {
      recurso: DDados.Titulo,
      service: api.filter,
      filterVersion: 1,
      webStorage: "<%= domainNoDiacriticsArray[0] %>.<%= domainNoDiacriticsArray[1] %>.<%= objectName %>",
      backRoute: '<%= domain.split("/").join(".") %>',
      applySearchOnLoad: false
    };

    const toolbar = {
      title: DDados.Titulo,
      new: {
        onClick: () =>
          routerManager.redirect({
            name: '<%= domain.split("/").join(".") %>.new'
          }),
        route: '<%= domain.split("/").join(".") %>.new'
      },
      massDelete: { service: api.massDelete, url: "<%= domain %>/massdelete" }
    };

    this.config = {
      columns,
      order,
      actions,
      options,
      toolbar
    };
  }

  render() {
    return <DataGrid {...this.config} />;
  }
}

export default connect({
  actions: {
    <%= moduleName %>Actions
  }
})(Container);
