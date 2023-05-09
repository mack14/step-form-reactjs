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
        color: '#fff', 
        font: {
          size: 18
        }
      },
    },
    x: {
      ticks: {
        color: '#fff', 
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
        color: '#fff',
        font: {
          size: 18
        }
      }
    },
    title: {
      display: true,
      text: '6 Months Chart',
      color: '#FFF',
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

