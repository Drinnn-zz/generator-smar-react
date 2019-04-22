import React, { Component } from "react";
import DDados from "../<%= moduleName %>.ddados";
import autoBind from "react-autobind";
import BaseComponent, { connect } from "@common/components/base.component";
import <%= moduleName %>Actions from "../store/<%= moduleName %>.actions";
import <%= objectName %>Form from "../components/<%= moduleName %>.form";

class Container extends BaseComponent {
  constructor(props) {
    super(props, DDados);
    autoBind(this);
  }

  componentDidMount() {
    const { routerManager } = this.props;
    const { id } = routerManager.params;
    this.props.<%= moduleName %>Actions.getById(id);
  }

  render() {
    return <<%= objectName %>Form prefix="V" />;
  }
}

export default connect({
  actions: {
    <%= moduleName %>Actions
  }
})(Container);
