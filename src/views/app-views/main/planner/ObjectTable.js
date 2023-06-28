import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useDrag, useDrop } from "react-dnd";

const ObjectTable = ({ item, tableType, index, onDropTable }) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: tableType,
      index,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropTable(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const cardStyle = {
    width: 100,
    borderRadius: "50%",
    margin: 0,
  };

  return (
    <Card ref={dragRef} hoverable style={cardStyle}>
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </Card>
  );
};

export default ObjectTable;
