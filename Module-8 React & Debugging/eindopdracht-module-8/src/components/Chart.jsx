import React from 'react'
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLegend,
} from "victory";

export default function chart({ data }) {
  
    return (
      <div>
        <VictoryChart  
          domain={{ y: [0, 5] }}
          domainPadding={15}
          padding={{ top: 10, bottom: 100, right: 20, left: 50}}
          width={1200}
            height={500}
          >
            <VictoryLegend
            x={80}
            y={20}
            orientation="horizontal"
            gutter={10}
            style={{
              labels: { fontSize: 10 },
            }}
            data={[
              { name: "Difficult", symbol: { fill: "#FF0000" } },
              { name: "Fun", symbol: { fill: "#01BF01" } },
            ]}
            />
            <VictoryGroup offset={4}>
            <VictoryBar
              color="#FF0000"
              data={data}
              barWidth={3}
              x="assignment"
              y="difficult"

            />

            <VictoryBar
              color="#01BF01"
              data={data}
              barWidth={3}
              x="assignment"
              y="fun"

            />
          </VictoryGroup>
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5]}
            style={{ axis: { stroke: '#000',  },
              axisLabel: { fontSize: 16, fill: '#000', },
              ticks: { stroke: '#000' },
              tickLabels: { fontSize: 14, fill: '#000', fontWeight: 'bold' },
            }} dependentAxis
          />
          <VictoryAxis
            style={{ axis: { stroke: '#000', },
              axisLabel: { fontSize: 16 },
              ticks: { stroke: '#ccc' },
              tickLabels: { fontSize: 12, fill: '#000', fontWeight: 'bold', angle: 90, padding: 30 },
            }}
          />
        </VictoryChart>

        </div>
    )
}
