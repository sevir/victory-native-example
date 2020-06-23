import React, { Component } from 'react';
import { VictoryPie, VictoryTooltip } from 'victory-native';
import Svg, { G } from "react-native-svg";

class CustomChartComponent extends Component {
    constructor(){
        super();
        this.state = {
            label : "total"
        };
    }

    changeLabel(labelText){
        this.setState({
            label: labelText
        });
    }

    render() {
        return (
            <G>
            <G>
                <VictoryPie
                    name="pie"
                    style={{ labels: { fill: "white" } }}
                    innerRadius={100}
                    labelRadius={110}
                    data={[
                        { x: 1, y: 5, label: "one" },
                        { x: 2, y: 4, label: "two" },
                        { x: 3, y: 2, label: "three" },
                        { x: 4, y: 3, label: "four" },
                        { x: 5, y: 1, label: "five" }
                    ]}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onPressIn: () => {
                                return [
                                    {
                                        target: "labels",
                                        mutation: (props) => {
                                            console.log(props);
                                            //alert("Clicked in " + props.datum.label);
                                            this.changeLabel(props.datum.label);
                                        }
                                    }
                                ];
                            }
                        }
                    }]}
                ></VictoryPie>
            </G>
            <G><VictoryTooltip

                active={true}
                text={this.state.label}
                style={{ fill: "white" }}
                events={{
                    onPressIn: (evt) => {
                        console.log(evt); alert("click tooltip");
                        return [
                            { target: "labels", mutation: () => ({ active: true }) },
                            { target: "data", mutation: () => ({ active: true }) }
                        ];
                    }
                }}
                x={197}
                y={274}
                orientation="top"
                pointerLength={0}
                cornerRadius={75}
                flyoutWidth={150}
                flyoutHeight={150}
                flyoutStyle={{ fill: 'black' }}
                renderInPortal={false}
            /></G>
            </G>
        );
    }
}

export default CustomChartComponent;
