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
        color: '#fff',
      },
    },
    x: {
      ticks: {
        color: '#fff',
      },
    },
  },
  labels: {
    fontColor: 'white'
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
      text: 'Sales Bar Chart',
      color: '#fff'
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      fontColor : "white"
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
  ],
};

export const VerticalBarChart = () => {

  return (

    <Bar className='chart-background-colors' options={options} data={data} />
  );
};

