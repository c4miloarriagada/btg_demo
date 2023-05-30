export const getResumen = () => {
  const randomNumber = Math.floor(Math.random() * 5);
  const detailsResumen = [
    {
      name: "Fondo X",
      pill: ["Acciones", "Renta Variable", "Internacional"],
      rating: 4,
      totals: [{ price: 150, varYear: 0.02, varActual: 0.08 }],
      price: [{ buyPrice: 500, sellPrice: 750 }],
      quantity: [{ buyQty: 1000, sellQty: 500 }],
      description:
        "El Fondo X es una opción de inversión que se enfoca en acciones de empresas internacionales en el mercado de renta variable. Este fondo ha obtenido una calificación de 4 estrellas. Durante el último año, ha mostrado un rendimiento del 2%, mientras que el rendimiento actual es del 8%. El precio de compra actual del fondo es de $500 y el precio de venta es de $750. Si decides invertir en el Fondo X, recibirás una cantidad de 1000 unidades al comprar y podrás vender 500 unidades.",
    },
    {
      name: "Fondo Y",
      pill: ["Bonos", "Renta Fija", "Local"],
      rating: 3,
      totals: [{ price: 120, varYear: 0.01, varActual: 0.05 }],
      price: [{ buyPrice: 800, sellPrice: 900 }],
      quantity: [{ buyQty: 2000, sellQty: 1500 }],
      description:
        "El Fondo Y es una opción de inversión que se enfoca en bonos de empresas locales en el mercado de renta fija. Este fondo ha obtenido una calificación de 3 estrellas. Durante el último año, ha mostrado un rendimiento del 1%, mientras que el rendimiento actual es del 5%. El precio de compra actual del fondo es de $800 y el precio de venta es de $900. Si decides invertir en el Fondo Y, recibirás una cantidad de 2000 unidades al comprar y podrás vender 1500 unidades.",
    },
    {
      name: "Fondo Z",
      pill: ["Acciones", "Renta Variable", "Estados Unidos"],
      rating: 5,
      totals: [{ price: 200, varYear: 0.03, varActual: 0.12 }],
      price: [{ buyPrice: 1000, sellPrice: 1100 }],
      quantity: [{ buyQty: 3000, sellQty: 2000 }],
      description:
        "El Fondo Z es una opción de inversión que se enfoca en acciones de empresas estadounidenses en el mercado de renta variable. Este fondo ha obtenido una calificación de 5 estrellas. Durante el último año, ha mostrado un rendimiento del 3%, mientras que el rendimiento actual es del 12%. El precio de compra actual del fondo es de $1000 y el precio de venta es de $1100. Si decides invertir en el Fondo Z, recibirás una cantidad de 3000 unidades al comprar y podrás vender 2000 unidades.",
    },
    {
      name: "Fondo W",
      pill: ["Bonos", "Renta Fija", "Internacional"],
      rating: 4,
      totals: [{ price: 180, varYear: 0.015, varActual: 0.09 }],
      price: [{ buyPrice: 700, sellPrice: 850 }],
      quantity: [{ buyQty: 2500, sellQty: 1800 }],
      description:
        "El Fondo W es una opción de inversión que se enfoca en bonos de empresas internacionales en el mercado de renta fija. Este fondo ha obtenido una calificación de 4 estrellas. Durante el último año, ha mostrado un rendimiento del 1.5%, mientras que el rendimiento actual es del 9%. El precio de compra actual del fondo es de $700 y el precio de venta es de $850. Si decides invertir en el Fondo W, recibirás una cantidad de 2500 unidades al comprar y podrás vender 1800 unidades.",
    },
    {
      name: "Fondo V",
      pill: ["Acciones", "Renta Variable", "Brasil"],
      rating: 3,
      totals: [{ price: 170, varYear: 0.012, varActual: 0.07 }],
      price: [{ buyPrice: 600, sellPrice: 800 }],
      quantity: [{ buyQty: 1800, sellQty: 1200 }],
      description:
        "El Fondo V es una opción de inversión que se enfoca en acciones de empresas brasileñas en el mercado de renta variable. Este fondo ha obtenido una calificación de 3 estrellas. Durante el último año, ha mostrado un rendimiento del 1.2%, mientras que el rendimiento actual es del 7%. El precio de compra actual del fondo es de $600 y el precio de venta es de $800. Si decides invertir en el Fondo V, recibirás una cantidad de 1800 unidades al comprar y podrás vender 1200 unidades.",
    },
  ];

  return [detailsResumen[randomNumber]];
};
