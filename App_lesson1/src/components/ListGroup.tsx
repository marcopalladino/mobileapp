
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type ListGroupProps = {
  items: string[];
  onSelect: (item: string) => void;
};

const ListGroup: React.FC<ListGroupProps> = ({ items, onSelect }) => {
  return (
    <ul className="list-group">
      
      {items.length===0 && <p>no item passato</p>}

      {items.map((item, index) => (
        <li
          key={index}
          className="list-group-item list-group-item-action"
          onClick={() => onSelect(item)}
          style={{ cursor: "pointer" }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
