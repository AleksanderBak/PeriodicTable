import Element from "../Element/Element";
import { elements } from "../../data/elements";

const MainTable = () => {
  return (
    <div>
      <div className="grid gap-2 p-4 grid-cols-18">
        {Object.values(elements).map((element, index) => (
          <Element key={index} name={element.name} symbol={element.symbol} />
        ))}
      </div>
    </div>
  );
};

export default MainTable;
