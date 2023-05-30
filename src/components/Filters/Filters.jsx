import { Search } from "../Search/Search";
import { Select } from "../Select/Select";
import style from "./Filters.module.css";

export const Filters = ({ handleToggle, selectToggles,handleList, checkBox  }) => {

  return (
    <>
      <h1>¿Qué instrumento estás buscando?</h1>
      <div className={style.container}>
        <div className={style.filters_component}>
          <div className={style.filter_grid}>
            <Select
              title={"¿En qué quieres invertir?"}
              handleToggle={handleToggle}
              selectToggles={selectToggles}
              index={1}
              options={['Acciones,Depósitos a Plazo', 'Fondos de Inversión', 'Fondos Mutuos', 'Fondos Mutuos Internacionales']}
              handleList={handleList}
              checkBox={ checkBox }
            />
          </div>
          <div className={style.filter_grid}>
            <Select
              title={"¿En qué clase de activo?"}
              handleToggle={handleToggle}
              selectToggles={selectToggles}
              index={2}
              options={['Activos Alternativos', 'Balanceados', 'Renta Fija', 'Renta Variable']}
              handleList={handleList}
              checkBox={ checkBox }
            />
          </div>
          <div className={style.filter_grid}>
            <Select
              title={"¿En qué mercado?"}
              handleToggle={handleToggle}
              selectToggles={selectToggles}
              index={3}
              options={['Asia', 'Brasil', 'Chile', 'China', 'EE.UU', 'Emergente', 'Europa']}
              handleList={handleList}
              checkBox={ checkBox }
            />
          </div>
          <div className={style.filter_grid}>
            {" "}
            <Select
              title={"¿En qué sector?"}
              handleToggle={handleToggle}
              selectToggles={selectToggles}
              index={4}
              options={['Consumo Básico', 'Consumo Discrecional', 'Energia', 'Finanzas', 'Industrial', 'Materiales', 'Salud']}
              handleList={handleList}
              checkBox={ checkBox }
            />
          </div>
          <div className={style.filter_grid}>
            <Search
                placeholder={"Nombre o nemotécnico"}
                title={"Nombre"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
