import React, { forwardRef, useImperativeHandle, useState } from "react";

const Child = (props, ref) => {
  const [isShow, setIsShow] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useImperativeHandle(ref, () => ({
    showMessage: (value) => setIsShow(value),
    userDetails: (value) => setUserDetails(value),
  }));

  const hideMessage = () => {
    setIsShow(false);
  };

  return (
    <>
      <h4>{isShow && "I Love ReactJs"}</h4>
      <button type="button" onClick={() => hideMessage()}>
        Hide Message
      </button>
      <p>{userDetails?.firstName}</p>
      <p>{userDetails?.lastName}</p>
    </>
  );
};
export default forwardRef(Child);
