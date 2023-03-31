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
        color: 'white', // Set the color of the y-axis labels to black
      },
    },
    x: {
      ticks: {
        color: 'white', // Set the color of the x-axis labels to black
      },
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: 'white'
      }
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
      color: 'white'
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Customers',
      data: [200, 300, 450, 440, 510, 550, 600],
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    {
      label: 'Revenue',
      data: [],
      backgroundColor: 'rgba(53, 162, 235, 1)',
    },
  ],
};

export const VerticalBarChart = () => {

  return (

    <Bar className='chart-background-colors' options={options} data={data} />
  );
};

