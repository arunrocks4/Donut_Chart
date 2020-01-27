import React, { Component } from "react";
import DonutChart from "react-donut-chart";

class Example1 extends Component {
  render() {
    return (
      <>
        <DonutChart
          legend={false}
          height={250}
          width={250}
          innerRadius={0.6}
          selectedOffset={0}
          emptyOffset={0}
          emptyColor="#0089cf"
          colors={["#0077B4"]}
          formatValues={value => console.log(value)}
          data={[
            {
              label: "+16 On USP",
              value: 25
            },
            {
              label: "",
              value: 75,
              isEmpty: true
            }
          ]}
        />
        <DonutChart
          legend={false}
          height={250}
          width={250}
          innerRadius={0.6}
          selectedOffset={0}
          emptyOffset={0}
          emptyColor="#0089cf"
          colors={["#0077B4"]}
          formatValues={value => console.log(value)}
          data={[
            {
              label: "+16 On USP",
              value: 25
            },
            {
              label: "",
              value: 75,
              isEmpty: true
            }
          ]}
        />
        <DonutChart
          legend={false}
          height={250}
          width={250}
          innerRadius={0.6}
          selectedOffset={0}
          emptyOffset={0}
          emptyColor="#0089cf"
          colors={["#0077B4"]}
          formatValues={value => console.log(value)}
          data={[
            {
              label: "+16 On USP",
              value: 25
            },
            {
              label: "",
              value: 75,
              isEmpty: true
            }
          ]}
        />
        <DonutChart
          legend={false}
          height={250}
          width={250}
          innerRadius={0.6}
          selectedOffset={0}
          emptyOffset={0}
          emptyColor="#0089cf"
          colors={["#0077B4"]}
          formatValues={value => console.log(value)}
          data={[
            {
              label: "+16 On USP",
              value: 25
            },
            {
              label: "",
              value: 75,
              isEmpty: true
            }
          ]}
        />
      </>
    );
  }
}
export default Example1;
