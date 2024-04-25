
import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export const DiagramaLienaInvestigacion = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Seguridad en la nube', 'Redes de comunicacion', 'Ciberseguridad'],
            datasets: [
                {
                    data: [10, 8, 13],
                    backgroundColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                    ],
                    hoverBackgroundColor: [
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
    )
}
        