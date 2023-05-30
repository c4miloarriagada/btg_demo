import { faker }   from '@faker-js/faker'


export const getDataChart = () => {
   const chartData = Array.from({ length: 10 }, () => ({
    labels: [' ', ' ', ' ', ' ', ' '],
    datasets: [
      {
        label: '',
        data: Array.from({ length: 5 }, () => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        name: faker.person.lastName(),
        percentage: Array.from({ length: 1 }, () => faker.number.int({ min: -30, max: 30 })),
        total: Array.from({ length: 1 }, () => faker.number.int({ min: 0, max: 800 })),
        initials: faker.person.lastName().substring(0,4)
      }
    ],
  }));

   const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
    scales: {
      y: {
        grid: {
          display: false, 
        },
      },
      x: {
        grid: {
          display: false, 
        },
      },
    },
    elements: {
      line: {
        borderWidth: 1, 
      },
      point: {
        radius: 0,
      },
    },
  };

  const radarData = {
    labels: ['Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [
      {
        label: ' Proyeccion ',
        data: Array.from({ length: 6 }, () => faker.number.int({ min: 0, max: 800 })),
        backgroundColor: '#195ab6',
        borderColor: '#195ab6',
        borderWidth: 1,
      },
    ],
  };



  return {
    chartData, 
    options,
    radarData
  }
}



