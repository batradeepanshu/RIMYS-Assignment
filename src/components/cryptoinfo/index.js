import React, { useEffect, useState, Fragment } from "react";
import { getCryptoListings } from "../../redux/actions";
import Loader from "../common/loader";
import { connect } from "react-redux";
import "./index.css";

const CryptoInfo = ({ getCryptoListings, loading, cryptoList }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCryptoListings();
  }, [getCryptoListings]);

  const nextPage = () => {
    setStartIndex((page + 1) * 10);
    setEndIndex((page + 1) * 10 + 10);
    setPage(page + 1);
  };

  const filterListings = (startIndex, EndIndex) => {
    return (
      cryptoList &&
      cryptoList
        .filter((item, index) => {
          return index >= startIndex && index < endIndex;
        })
        .map((item, index) => {
          return (
            <div key={item.name + index}>
              {item.name}
              {item.symbol}
            </div>
          );
        })
    );
  };
  return (
    <Fragment>
      <Loader />
      <div className="cryptolist-wrapper">
        <div className="cryptoList">{filterListings(startIndex, endIndex)}</div>
        {!loading ? <button onClick={nextPage}>Next Page</button> : ""}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    cryptoList: state.cryptoList,
    loading: state.loading
  };
};

const mapDispatchToProps = { getCryptoListings };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoInfo);
