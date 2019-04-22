import React, { Component, Fragment } from "react";
import { connect } from "@common/components/base.component";
import Form from "@common/components/validation/form.validation";
import DDadosItem from "@common/components/ddados/ddados.item";
import <%= moduleName %>Selector from "../store/<%= moduleName %>.selectors";
import DDados from "../<%= moduleName %>.ddados";
import { Row, Col } from "react-bootstrap";
import autoBind from "react-autobind";

class Container extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    get initialValues() {
        return {
        };
    }

    onCancel() {
        const { routerManager } = this.props;
        routerManager.redirect({ name: '<%= domain.split("/").join(".") %>' });
    }

    render() {
        const { Titulo, Campos } = DDados;
        const { onSubmit, onCancel, prefix } = this.props;
        const { <%= moduleName %> } = this.props.<%= moduleName %>Selector;
        const isView = prefix == "V";

        return (
            <Form onSubmit={onSubmit} boxForm onCancel={onCancel || this.onCancel} initialValues={this.initialValues} prefix={prefix} title={Titulo}>
                {form => (
                    <Fragment>
                       
                    </Fragment>
                )}
            </Form>
        );
    }
}

export default connect({
    selectors: {
        <%= moduleName %>Selector
    }
})(Container);
