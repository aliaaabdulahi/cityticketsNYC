import React from "react";
import { connect } from "react-redux";
import { fetchHistory } from "../store/order_history";
class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadHistory(this.props.auth.id);
  }

  render() {
    const history = this.props.orderHistory;
    console.log(history);
    return (
      <div>
        {history.map((product) => (
          <div key={product.id}> {product.name}</div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    orderHistory: state.orderHistory,
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadHistory: (id) => dispatch(fetchHistory(id)),
  };
};

export default connect(mapState, mapDispatch)(OrderHistory);
