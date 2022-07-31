import React from "react";
import { Form, InputNumber } from "antd";

import Measurements from "../static/measurements";
import measurement from "../recoil/measurement";
import { useRecoilValue } from "recoil";

import formatNumber from "../helpers/formatNumber";

export default () => {
  const measurementValue = useRecoilValue<Measurements>(measurement);

  let label;
  if (measurementValue === Measurements.metric) {
    label = "kg";
  } else {
    label = "pounds";
  }

  return (
    <Form.Item name='weight' label='Weight' className='mobile-one-row'>
      <InputNumber
        formatter={formatNumber}
        style={{ width: "100%" }}
        min={0}
        addonAfter={label}
      />
    </Form.Item>
  );
};
