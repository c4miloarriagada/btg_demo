import { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import { Filters } from "../../components/Filters/Filters";
import { Charts } from "../../components/Charts/Charts";
import { getDataChart } from "../../db/data";
import { Details } from "../../components/Details/Details";
import { getResumen } from "../../db/detailsData";
import styles from "./Home.module.css";

export const Home = () => {
  const [selectToggles, setSelectToggles] = useState([
    true,
    true,
    true,
    true,
    true,
  ]);
  const [checkBox, setCheckBox] = useState({});
  const [chartData, setChartData] = useState({ chartData: [], options: [] });
  const [toggle, setToggle] = useState({
    graphToggle: false,
    detailToggle: false,
  });
  const [radarChart, setRadarChart] = useState({ radarChart: [], options: [] });
  const [resumen, setResumen] = useState([]);

  const handleToggle = (index) => {
    setSelectToggles((prevToggles) => {
      const newToggles = [...prevToggles];
      newToggles[index] = !newToggles[index];
      return newToggles;
    });
  };
  const handleList = (index, options) => {
    index === 1 &&
      setToggle({
        ...toggle,
        ["graphToggle"]: !toggle.graphToggle,
      });
    index === 2 &&
      setToggle({
        ...toggle,
        ["detailToggle"]: !toggle.detailToggle,
      });
    if (checkBox[index]?.includes(options)) {
      setCheckBox((prevCheckbox) => ({
        ...prevCheckbox,
        [index]: prevCheckbox[index].filter((o) => o !== options),
      }));
    } else {
      setCheckBox((prevCheckbox) => ({
        ...prevCheckbox,
        [index]: prevCheckbox[index]
          ? [...prevCheckbox[index], options]
          : [options],
      }));
    }
  };

  useEffect(() => {
    const { chartData, options } = getDataChart();
    setChartData({
      chartData,
      options,
    });
  }, [toggle.graphToggle]);

  useEffect(() => {
    const resumen = getResumen();
    setResumen(resumen);
    const { options, radarData } = getDataChart();
    setRadarChart({
      radarData,
      options,
    });
  }, [toggle.detailToggle]);

  return (
    <Container>
      <section className={styles.home_container}>
        <div className={styles.home_component}>
          <Filters
            handleList={handleList}
            checkBox={checkBox}
            handleToggle={handleToggle}
            selectToggles={selectToggles}
          />
        </div>
        <div className={styles.home_component}>
          <div className={styles.content}>
            <Charts
              chartData={chartData.chartData}
              options={chartData.options}
            />
          </div>
          <div className={styles.content}>
            <Details
              detailsResumen={resumen}
              chartData={radarChart.radarData}
            />
          </div>
        </div>
      </section>
    </Container>
  );
};
