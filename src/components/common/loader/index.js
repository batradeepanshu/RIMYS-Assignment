import React from "react";
import { connect } from "react-redux";
import "./index.css";

const Loader = ({ loading, loadingMsg = "loading..." }) => {
  return loading ? <div className="loader-wrapper">{loadingMsg}</div> : "";
};

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader);
