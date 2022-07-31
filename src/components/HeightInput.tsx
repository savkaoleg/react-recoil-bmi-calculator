import React from "react";
import { Form, InputNumber } from "antd";

import Measurements from "../static/measurements";
import measurement from "../recoil/measurement";
import height from "../recoil/height";
import { useRecoilState, useRecoilValue } from "recoil";

import formatNumber, { formatFeet } from "../helpers/formatNumber";
import { inchInFeet } from "../helpers/convert";

export default () => {
  const measurementValue = useRecoilValue(measurement);
  const [heightValue, setHeight] = useRecoilState(height);

  if (measurementValue === Measurements.metric) {
    return (
      <Form.Item name='height' label='Height' className='mobile-one-row'>
        <InputNumber
          formatter={formatNumber}
          style={{ width: "100%" }}
          min={0}
          addonAfter={<span>{"cm"}</span>}
        />
      </Form.Item>
    );
  } else {
    const feet = Math.floor(heightValue / inchInFeet);
    const inches = heightValue % inchInFeet;

    return (
      <Form.Item label='Height' className='mobile-one-row'>
        <InputNumber
          name='feet'
          formatter={formatFeet}
          style={{ width: "calc(50% - 5px)", marginRight: "5px" }}
          min={0}
          addonAfter={<span>{"ft"}</span>}
          value={feet}
          onChange={(newFeet) => {
            let newHeight = 0;

            if (typeof newFeet === "number") {
              newHeight = newFeet * inchInFeet + inches;
            }

            setHeight(newHeight);
          }}
        />
        <InputNumber
          name='inches'
          formatter={formatNumber}
          style={{ width: "50%" }}
          min={0}
          addonAfter={<span>{"in"}</span>}
          value={inches}
          onChange={(newInches) => {
            let newHeight = 0;

            if (typeof newInches === "number") {
              newHeight = feet * inchInFeet + newInches;
            }

            setHeight(newHeight);
          }}
        />
      </Form.Item>
    );
  }
};
