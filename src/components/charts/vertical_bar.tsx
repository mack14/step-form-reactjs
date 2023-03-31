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
import { faker } from '@faker-js/faker';

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
        color: '#fc4c4e', // Set the color of the y-axis labels to black
      },
    },
    x: {
      ticks: {
        color: '#1c1c1c1', // Set the color of the x-axis labels to black
      },
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#1c1c1c1'
      }
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
      color: '#1c1c1c1'
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

