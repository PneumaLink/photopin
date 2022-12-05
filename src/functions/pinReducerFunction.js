export const onInit = ({ pinDispatch }) => {
  pinDispatch({ type: "INIT" });
};

export const onCreate = ({ pinDispatch, id, tag, img, mainText, location }) => {
  const time = new Date();

  pinDispatch({
    type: "CREATE",
    data: {
      id,
      tag,
      img,
      mainText,
      createTime: time,
      editTime: time,
      location,
    },
  });
};

export const onEdit = ({
  pinDispatch,
  id,
  tag,
  img,
  mainText,
  createTime,
  location,
}) => {
  const editTime = new Date();

  pinDispatch({
    type: "EDIT",
    data: {
      id,
      tag,
      img,
      mainText,
      createTime,
      editTime,
      location,
    },
  });
};

export const onRemove = ({ pinDispatch, targetId }) => {
  pinDispatch({ type: "REMOVE", targetId: targetId });
};
