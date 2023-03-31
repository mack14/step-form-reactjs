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
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        color: '#fc4c4e', 
        font: {
          size: 18
        }
      },
    },
    x: {
      ticks: {
        color: '#1c1c1c1', 
        font: {
          size: 18
        }
      },
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#1c1c1c1',
        font: {
          size: 18
        }
      }
    },
    title: {
      display: true,
      text: 'Summary Chart',
      color: '#1c1c1c1',
      font: {
        size: 18
      }

    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Customers',
      borderRadius: 10,
      data: [200, 300, 450, 440, 510, 550, 600],
      backgroundColor: '#4284F3',
    },
    {
      label: 'Revenue',
      borderRadius: 10,
      data: [300, 400, 470, 540, 610, 750, 800],
      backgroundColor: '#fc4c4e',
    },
  ],
};

export const VerticalBarChart = () => {

  return (

    <Bar className='chart-background-colors' options={options} data={data} />
  );
};

