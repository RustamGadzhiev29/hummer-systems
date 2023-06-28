import { DownloadOutlined } from "@ant-design/icons";
import { Button, Card, Input, Row } from "antd";
import { useState } from "react";
import tablesJSON from "assets/data/table-list.data.json";
import ObjectTable from "./ObjectTable";
import { DndProvider, useDrop } from "react-dnd";
import Board from "./Board";
import { HTML5Backend } from "react-dnd-html5-backend";

const Planner = () => {
  const [objects, setObjects] = useState(tablesJSON);
  const [board, setBoard] = useState([]);

  const [{ isOver }, addToBoardRef] = useDrop({
    accept: "object",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const [{ isOver: isTablerOver }, removeFromBoardRef] = useDrop({
    accept: "board",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const moveTable = (item) => {
    console.log("moveTable", item);
    if (item && item.type === "object") {
      setBoard((prevBoard) => [
        ...prevBoard,
        { ...objects[item.index], draggable: true },
      ]);
      setObjects((prevObjects) =>
        prevObjects.filter((_, idx) => idx !== item.index)
      );
    } else {
      setObjects((prevObjects) => [...prevObjects, board[item.index]]);
      setBoard((prevBoard) => prevBoard.filter((_, idx) => idx !== item.index));
    }
  };

  const download = (data, filename = "file") => {
    const json = JSON.stringify(data);

    const blob = new Blob([json], {
      type: "text/txt",
    });
    const link = document.createElement("a");

    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", `${filename}.txt`);
    link.click();
  };

  const handleSetPosition = (id, pos) => {
    console.log("pos", pos);
    setBoard((prevState) =>
      prevState.map((item) => (item.id === id ? { ...item, pos } : item))
    );
  };

  const resetDraggableItems = () => {
    setBoard([]);
    setObjects(tablesJSON);
  };

  const handleUploadPositions = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const json = event.target.result;
      const positionsList = JSON.parse(json);
      const updatedBoard = positionsList.map((item) => {
        const object = objects.find((obj) => obj.id === item.id);
        return { ...object, pos: item.pos, draggable: true };
      });
      const filteredObjects = objects.filter(
        (object) => !positionsList.some((item) => item.id === object.id)
      );
      setBoard(updatedBoard);
      setObjects(filteredObjects);
    };

    reader.readAsText(file);
  };

  const handleSavePositions = () => {
    const positionsList = board.map((item) => ({ id: item.id, pos: item.pos }));
    download(positionsList, "positions");
  };

  return (
    <>
      <Card bodyStyle={{ padding: "16px" }}>
        <div>
          {" "}
          <h4 className="font-weight-bold">Table list</h4>
        </div>
        <Row ref={removeFromBoardRef} style={{ height: 100 }}>
          {objects.map((object, idx) => {
            return (
              <ObjectTable
                key={object.id}
                item={object}
                tableType="object"
                onDropTable={moveTable}
                index={idx}
              />
            );
          })}
        </Row>
      </Card>
      <Card bodyStyle={{ padding: "16px" }}>
        <h4 className="font-weight-bold">Restaurant map</h4>
        <Board
          board={board}
          onSetPosition={handleSetPosition}
          addToBoardRef={addToBoardRef}
          tableType="board"
          onDropTable={moveTable}
        />
      </Card>
      <Row>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={() => handleSavePositions()}
        >
          Save
        </Button>
        <label htmlFor="upload" className={"ant-btn ant-btn-primary"}>
          Upload
        </label>
        <Input
          style={{ display: "none" }}
          name="upload"
          id="upload"
          type="file"
          onChange={handleUploadPositions}
        ></Input>
        <Button type="primary" onClick={resetDraggableItems}>
          Delete all
        </Button>
      </Row>
    </>
  );
};


const PlannerWithDndProvider = ({ match }) => (
  <DndProvider backend={HTML5Backend}>
    <Planner match={match} />
  </DndProvider>
);

export default PlannerWithDndProvider;
