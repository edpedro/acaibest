import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

import { alertShowFalse } from "../../store/modules/alert/actions";

function Message() {
  const dispatch = useDispatch()
  const isShow = useSelector((state) => state.alert.showMessage);
  const { title, type, message } = useSelector((state) => state.alert.data);

  const notification = () => {
    store.addNotification({
      title: title,
      message: message,
      type: type, // 'default', 'success', 'info', 'warning'
      container: "top-right", // where to position the notifications
      insert: "top",
      icon: "success",
      animationIn: ["animate__animated", "animate__bounceIn"],
      animationOut: ["animate__animated", "animate__bounceOut"], // animate.css classes that's applied
      dismiss: {
        duration: 3000,
        onScreen: true,
        pauseOnHover: true,
        showIcon: true,
      },
    });
  };
  useEffect(() => {
    if (isShow) {
      notification();
      dispatch(alertShowFalse())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);
  return <></>;
}

export default Message;
