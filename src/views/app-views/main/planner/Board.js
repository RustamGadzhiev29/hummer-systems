
import React from "react";
import Draggable from "react-draggable";
import ObjectTable from "./ObjectTable";

const Board = ({
  onSetPosition,
  addToBoardRef,
  tableType,
  board,
  onDropTable,
}) => {
  const handleDrag = (item, pos) => {
    console.log("item", item);
    console.log("pos", pos);
    const { id } = item;

    onSetPosition(id, {
      x: pos.x,
      y: pos.y,
    });
  };
  console.log("board", board);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        height: "200px",
        width: "100%",
        position: "relative",
      }}
      ref={addToBoardRef}
    >
      {board.map((item, idx) => (
        <Draggable
          id={item.id}
          onStop={(e, ui) => handleDrag(item, ui)}
          key={item.id}
          position={item.pos}
          bounds="parent"
          // defaultPosition={item.pos ? item.pos : { x: 0, y: 0 }}
        >
          <div
            style={{
              ...(item.draggable &&  {
                position: "absolute",
                top: 0,
                left: 0,
              })
            }}
          >
            <ObjectTable
              tableType={tableType}
              item={item}
              onDropTable={onDropTable}
              index={idx}
            />
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Board;
