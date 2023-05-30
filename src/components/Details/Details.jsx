import React, { memo, useId } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./Details.module.css";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const Details = memo(({ chartData, detailsResumen }) => {
  const id = useId();
  const rating = Array.from({ length: detailsResumen[0]?.rating });
  const iconOutline = Array.from({ length: 5 - rating.length });
  return (
    <div className={styles.container}>
      <div className={styles.details_container}>
        <div className={styles.detail_item}>
          <div className={styles.detail_data}>
            {detailsResumen[0]?.pill?.map((pill, index) => (
              <div key={index} className={styles.pill}>
                <p>{pill}</p>
              </div>
            ))}
          </div>
          <div className={styles.detail_data}>
            <h1>{detailsResumen[0]?.name}</h1>
          </div>
          <div className={styles.detail_data}>
            <p>
              Riesgo{" "}
              {rating?.map((_, index) => (
                <AiOutlineCheck key={index} style={{ color: "green" }} />
              ))}
              {iconOutline?.map((_, index) => (
                <AiOutlineCheck key={index} style={{ color: "red" }} />
              ))}
            </p>
          </div>
          {detailsResumen[0]?.totals.map(
            ({ price, varYear, varActual }, index) => (
              <div className={styles.detail_data} key={index}>
                <div>
                  <h3>{price}</h3>
                  <p>Precio</p>
                </div>
                <div>
                  <h3>{varYear}%</h3>
                  <p>Var. % anual</p>
                </div>
                <div>
                  <h3>{varActual}%</h3>
                  <p>Var. puntos actual</p>
                </div>
              </div>
            )
          )}
          <div className={styles.detail_data}>
            <div className={styles.grid_title}>
              {" "}
              Compra Valor
              <div className={styles.grid_detail}>
                {detailsResumen[0]?.price.map(
                  ({ buyPrice, sellPrice }, index) => (
                    <React.Fragment key={index}>
                      <div className={styles.grid_item}>
                        <p>Compra</p>
                      </div>
                      <div className={styles.grid_item}>
                        <p>Venta</p>
                      </div>
                      <div className={styles.grid_item}>
                        <p>
                          Valor: <strong>${buyPrice}</strong>
                        </p>
                      </div>
                      <div className={styles.grid_item}>
                        <p>
                          Valor: <strong>${sellPrice}</strong>
                        </p>
                      </div>
                    </React.Fragment>
                  )
                )}
                {detailsResumen[0]?.quantity.map(
                  ({ buyQty, sellQty }, index) => (
                    <React.Fragment key={index}>
                      <div className={styles.grid_item}>
                        <p>Cantidad: # {buyQty}</p>
                      </div>
                      <div className={styles.grid_item}>
                        <p>Cantidad: # {sellQty}</p>
                      </div>
                    </React.Fragment>
                  )
                )}
              </div>
            </div>
          </div>
          <div className={styles.chart}>
            {chartData && <Radar key={id} data={chartData} />}
          </div>
        </div>
        <div className={styles.detail_item}>
       
          <div className={styles.resumen_detail}>
            <h3>Descripción de la compañía</h3>
            <p>
            {detailsResumen[0]?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
