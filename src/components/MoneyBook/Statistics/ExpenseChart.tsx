import { end_date, start_date } from "../MoneyBookNav"

import { ResponsiveLine } from "@nivo/line"
import { useGetChartData } from "../../../react-query/Expense/ExpenseChartData"

const ExpenseChart = () => {
    const { data: flow_data } = useGetChartData({ start_date, end_date })
    const chart_data = [
        {
            "id": "지출",
            "color": 'hsl(331, 70%, 50%)',
            "data": flow_data?.data.length ? flow_data?.data : [{ "x": 0, "y": 0 }]
        },
    ]
    return (
        <div className='h-[30rem] w-full'>
            <ResponsiveLine
                data={chart_data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: flow_data?.data[flow_data?.data.length - 1]?.y + 500000,
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '지출 날짜',
                    legendOffset: 36,
                    legendPosition: 'middle',
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendOffset: -40,
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 10,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}

export default ExpenseChart