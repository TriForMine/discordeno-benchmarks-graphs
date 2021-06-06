import { Line } from '@ant-design/charts'

const Chart = (props: { data: {minutes: number, rss: number, heapUsed: number, heapTotal: number, lib: string, guilds: number, members: number, messages: number, channels: number}[], field: string }) => {
    return (
        <Line
            data={props.data}
            height={600}
            xField="minutes"
            yField={props.field}
            seriesField='lib'
            smooth
            slider={{}}
            color={
                ['#795548','#1979C9', '#D62A0D', '#FAA219', '#388e3c']
            }
            padding="auto"
            tooltip = {
                {
                    formatter: (data) => {
                        return { name: data.lib, value: data[props.field] + 'MB' }
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
