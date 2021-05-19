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
            slider={{}}
            color={
                ['#1979C9', '#D62A0D', '#FAA219', '#388e3c']
            }
            padding="auto"
            tooltip = {
                {
                    formatter: (data) => {
                        return { name: data.lib, value: data.memory + 'MB' }
                    },
                    title: 'minutes'
                }
            }
            legend={ {
                position: 'top',
                title: {
                    text: 'Memory Usage over Time'
                }
            }}
            yAxis ={
                {
                    label: {
                        formatter: function formatter(v) {
                            return `${v} MB`;
                        },
                    },
                    title: {
                        text: 'Memory Usage (MB)'
                    }
                }
            }
            xAxis = {
                {
                    label: {
                        formatter: function formatter(v) {
                            return `${v}m`
                        }
                    },
                    title: {
                        text: 'Time (Min)'
                    }
                }
            }
        />
    )
}

export default Chart;
