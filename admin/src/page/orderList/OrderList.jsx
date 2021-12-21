import React, { useEffect, useState } from "react";
import "./OrderList.css";

import { useDispatch, useSelector } from "react-redux";
import { updateOrder, getCustomerOrders } from "../../actions/order.actions";
import Card from "../../components/ui/Card";

function OrderList() {
  const order = useSelector((state) => state.order);
  const [type, setType] = useState("");
  const dispatch = useDispatch();

  const onOrderUpdate = (orderId) => {
    const payload = {
      orderId,
      type,
    };
    dispatch(updateOrder(payload));
  };

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };

  const orderList = order;
  console.log("OrderList [.] orderList", orderList);

  return (
    <div className="orderList">
      <div className="orderListTop">
        <h1 className="topTitle">Orders</h1>
      </div>
      <div>
        {orderList.orders.map((orderItem, index) => (
          <Card
            style={{
              margin: "10px 0",
            }}
            key={index}
            headerLeft={orderItem._id}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "50px 50px",
                alignItems: "center",
              }}
            >
              <div>
                <div className="title">Items</div>
                {orderItem.items.map((item, index) => (
                  <div className="value" key={index}>
                    {item.productId.name}
                  </div>
                ))}
              </div>
              <div>
                <span className="title">Total Price</span>
                <br />
                <span className="value">{orderItem.totalAmount}</span>
              </div>
              <div>
                <span className="title">Payment Type</span> <br />
                <span className="value">{orderItem.paymentType}</span>
              </div>
              <div>
                <span className="title">Payment Status</span> <br />
                <span className="value">{orderItem.paymentStatus}</span>
              </div>
            </div>
            <div
              style={{
                boxSizing: "border-box",
                padding: "100px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="orderTrack">
                {orderItem.orderStatus.map((status) => (
                  <div
                    className={`orderStatus ${
                      status.isCompleted ? "active" : ""
                    }`}
                  >
                    <div
                      className={`point ${status.isCompleted ? "active" : ""}`}
                    ></div>
                    <div className="orderInfo">
                      <div className="status">{status.type}</div>
                      <div className="date">{formatDate(status.date)}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  padding: "0 50px",
                  boxSizing: "border-box",
                }}
              >
                <select onChange={(e) => setType(e.target.value)}>
                  <option value={""}>select status</option>
                  {orderItem.orderStatus.map((status) => {
                    return (
                      <>
                        {!status.isCompleted ? (
                          <option key={status.type} value={status.type}>
                            {status.type}
                          </option>
                        ) : null}
                      </>
                    );
                  })}
                </select>
              </div>
              <div>
                <button
                  className="orderUpdateButton"
                  onClick={() => onOrderUpdate(orderItem._id)}
                >
                  confirm
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default OrderList;
