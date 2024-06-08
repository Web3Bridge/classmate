'use client'
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import { useMemo } from 'react';


const options: ApexOptions = {
    chart: {
        width: 380,
        type: 'pie',
    },
    labels: ['A', 'B', 'C', 'D', 'E'],
    colors: ['#725D1D', '#374151', '#f59e0b', '#557ab5', '#e4732c'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    legend: {
        position: 'bottom'
    },
}

const Piechart = () => {

    const data = useMemo(() => {
        return {
            series: [42, 47, 52, 58, 65]
        }
    }, [])
    return (
        <div className="w-full">
            <ReactApexChart options={options} series={data.series} type="pie" height={380} />
        </div>
    )
}

export default Piechart