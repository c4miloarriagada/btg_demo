import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import * as styled from "./Select.module.css";


export const Select = ({
  title,
  name,
  handleToggle,
  selectToggles,
  index,
  options,
  handleList,
  checkBox,
}) => {

  return (
    <div className={styled.container}>
      <h3>{title}</h3>
      <div
        onClick={() => handleToggle(index)}
        className={
          selectToggles[index] ? `${styled.select}` : `${styled.select_active}`
        }
      >
        {selectToggles[index] ? (
          !checkBox[index]?.length ? (
            <p>Selecciona...</p>
          ) : (
            <p>Seleccionados ({checkBox[index]?.length}) </p>
          )
        ) : (
          <p style={{ animation: "fadeIn 3s" }}>
            Seleccionado ({checkBox[index]?.length})
          </p>
        )}
        {selectToggles[index] ? (
          <span>
            {" "}
            <IoIosArrowDown />
          </span>
        ) : (
          <span style={{ animation: "fadeIn 3s" }}>
            <IoIosArrowBack />
          </span>
        )}
      </div>

      <div  className={selectToggles[index] ? "hidden" : "options"}>
        <ul style={{ left : index === 1 ? '-5px' : '0' }} className={styled.options_check}>
          {options?.map((options, i) => (
            <li key={options} onClick={() => handleList(index, i)}>
              <label>{options}</label>
              <span
                className={
                  checkBox[index]?.includes(i) ? `${styled.active}` : ""
                }
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
