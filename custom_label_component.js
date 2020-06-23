import React, {Component} from 'react';
import { VictoryLabel, VictoryTooltip } from 'victory-native';
import Svg, { G } from "react-native-svg";

class CustomLabel extends Component {
  render() {
    return (
        <G renderInPortal={false}>
            <VictoryLabel {...this.props} />
            <VictoryTooltip
            {...this.props}
            {...this.defaultEvents}
            active={true}
            activateData={true}
                events={{ onPressIn: (evt) => alert("x: jh") }}
            x={200}
            y={250}
            orientation="top"
            pointerLength={0}
            cornerRadius={50}
            flyoutWidth={100}
            flyoutHeight={100}
            flyoutStyle={{fill: 'black'}}
            />
        </G>
    );
  }
}

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

export default CustomLabel;
