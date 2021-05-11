import { Line } from '@ant-design/charts'

const Chart = (props: { data: {minutes: number, memory: number, lib: string}[] }) => {
    return (
        <Line
            data={props.data}
            height={600}
            xField="minutes"
            yField="memory"
            seriesField='lib'
            smooth
            color={
                ['#1979C9', '#D62A0D', '#FAA219']
            }
            point ={{
                size: 2,
                shape: 'diamond',
                style: {
                    fill: 'white',
                    lineWidth: 1,
                }
            }}
            legend={ {
                position: 'top',
            }}
            label={{
                formatter: (text) => {
                    return `${text.memory.toFixed(2)} MB`
                },
            }}
            yAxis ={
                {
                    label: {
                        formatter: function formatter(v) {
                            return `${v} MB`;
                        },
                    },
                }
            }
            xAxis = {
                {
                    label: {
                        formatter: function formatter(v) {
                            return `${v}m`
                        }
                    }
                }
            }
        />
    )
}

export default Chart;
