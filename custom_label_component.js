import React, {Component} from 'react';
import { VictoryLabel, VictoryTooltip } from 'victory-native';
import Svg, { G } from "react-native-svg";

class CustomLabel extends Component {
  render() {
    return (
        <G>
            <VictoryLabel {...this.props} />
            <VictoryTooltip
            {...this.props}
            {...this.defaultEvents}
            
            active={true}
                
            events={{ onPressIn: (evt) => {
              console.log(evt); alert("click tooltip");
              return [
                { target: "labels", mutation: () => ({ active: true }) },
                { target: "data", mutation: () => ({ active: true }) }
              ];
            } }}
            x={197}
            y={274}
            orientation="top"
            pointerLength={0}
            cornerRadius={75}
            flyoutWidth={150}
            flyoutHeight={150}
            flyoutStyle={{fill: 'black'}}
            renderInPortal={false}
            />
        </G>
    );
  }
}

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

export default CustomLabel;
