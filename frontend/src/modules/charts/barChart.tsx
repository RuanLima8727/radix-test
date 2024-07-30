import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { getEquipmentData } from '../../services/getEquipmentData';
import { ButtonContainerStyle, ButtonStyle } from './styles';


const BarChart: React.FC = () => {
  const [equipmentDataState, setEquipmentData] = useState<number[]>([]);
  const [sensorLabelsState, setSensorLabels] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("oneDay");


  const filters = [
    "oneDay",
    "twoDays",
    "week",
    "month"
  ]

  const UILabel = [
    "24 Hours",
    "48 Hours",
    "Week",
    "Month"
  ]

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { equipmentData, sensorLabelData } = await getEquipmentData(filter)
        setEquipmentData(equipmentData);
        setSensorLabels(sensorLabelData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [filter]); 

  const data: ChartData<'bar'> = {
    labels: sensorLabelsState,
    datasets: [
      {
        label: filter,
        data: equipmentDataState, 
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };


  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: true
  };


  return (
    <>
      <div style={{ height: '10vh', width: '100vw' }}>
        <ButtonContainerStyle>
            {
              filters.map((filter, index) => {
                return (
                    <ButtonStyle onClick={() => setFilter(filter)}>
                      {UILabel[index]}
                    </ButtonStyle>
                )
              })
            }
        </ButtonContainerStyle>
      </div>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;
