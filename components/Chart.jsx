import { Line } from '@ant-design/charts'

const Chart = (props) => {
    return (
        <Line
            data={props.data}
            height={600}
            xField="minutes"
            yField="memory"
            seriesField='lib'
            smooth
            start={1}
            point ={{
                size: 1,
                shape: 'diamond',
                style: {
                    fill: 'white',
                    stroke: '#5B8FF9',
                    lineWidth: 1,
                }
            }}
            legend={ {
                position: 'top',
            }}
            title="Memory usage over time"
            showTitle
            background={{
                style: {
                    backgroundColor: 'white'
                }
            }}
            theme="dark"
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
