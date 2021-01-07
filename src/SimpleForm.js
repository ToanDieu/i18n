import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

const SimpleForm = props => {
  const { changeLocale } = props;
  return (
    <form>
      <div>
        <label>
          <FormattedMessage id="name" defaultMessage="Name" />
        </label>
        <div>
          <Field name="name" component="input" type="text" placeholder="Name" />
        </div>
      </div>
      <div>
        <button type="button" onClick={changeLocale}>
          Change locale
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = () => ({
  initialValues: {
    name: "test"
  }
});

export default connect(mapStateToProps)(
  reduxForm({
    form: "simple",
    enableReinitialize: true
  })(SimpleForm)
);
