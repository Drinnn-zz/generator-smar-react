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

  onSubmit(values) {
    this.props.<%= moduleName %>Actions.save(values);
  }

  render() {
    return <<%= objectName %>Form onSubmit={this.onSubmit} prefix="I" />;
  }
}

export default connect({
  actions: {
    <%= moduleName %>Actions
  }
})(Container);
