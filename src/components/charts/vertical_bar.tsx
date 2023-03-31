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
        color: '#F9F2E8', // Set the color of the y-axis labels to black
      },
    },
    x: {
      ticks: {
        color: '#1F9F2E8', // Set the color of the x-axis labels to black
      },
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#F9F2E8'
      }
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
      color: '#F9F2E8'
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
      backgroundColor: '#ffffff',
    },
    {
      label: 'Revenue',
      borderRadius: 5,
      data: [300, 400, 470, 540, 610, 750, 800],
      backgroundColor: '#bbb',
    },
  ],
};

export const VerticalBarChart = () => {

  return (

    <Bar className='chart-background-colors' options={options} data={data} />
  );
};

