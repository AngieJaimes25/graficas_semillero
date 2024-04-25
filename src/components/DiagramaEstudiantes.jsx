import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export const DiagramaEstudiantes = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
  
    useEffect(() => {
      const data = {
        labels: ['Semestre1', 'Semestre1', 'Semestre3', 'Semestre4', 'Semestre5', 'Semestre6', 'Semestre7', 'Semestre8'],
        datasets: [
          {
            label: 'Estudiantes',
            data: [0, 2, 1, 4, 2, 1, 3, 5],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgb(255, 159, 64)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)'
            ],
            borderWidth: 1
          }
        ]
      };
      const options = {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1, // Esto asegura que los pasos entre ticks sean de 1
              callback: function(value) {
                if (value % 1 === 0) { // Solo muestra el tick si es un número entero
                  return value;
                }
              }
            }
          }
        }
      };
  
      setChartData(data);
      setChartOptions(options);
    }, []);
  
    return (
      <Chart type="bar" data={chartData} options={chartOptions} />
    )
}
