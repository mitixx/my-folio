import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

export default function Chart(data) {
    const options = {
        responsive: true,
        indexAxis: 'y' as const,
        plugins: {
        legend: {
            display:false,
            //position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
        },
    }
  return (
    <Bar options={options} data={data} />
  )
}