import React from "react";
import { Form, Radio } from "antd";
import type { RadioChangeEvent } from "antd";

import {
  // useRecoilState,
  // useSetRecoilState,
  useRecoilTransaction_UNSTABLE,
} from "recoil";
import capitalizeFirstLowercaseRest from "../helpers/capitalizeFirstLowercaseRest";
import Measurements from "../static/measurements";
import measurement from "../recoil/measurement";
import weight from "../recoil/weight";
import height from "../recoil/height";

import { cmToInch, inchToCm, kgToPound, poundToKg } from "../helpers/convert";

export default () => {
  const update = useRecoilTransaction_UNSTABLE(({ get, set }) => (value) => {
    const weightValue = get(weight);
    const heightValue = get(height);

    let newHeightValue = 0;
    let newWeightValue = 0;

    if (value === Measurements.standard) {
      // conver from metric to standard
      if (weightValue) {
        newWeightValue = kgToPound(weightValue);
      }

      if (heightValue) {
        newHeightValue = cmToInch(heightValue);
      }
    }

    if (value === Measurements.metric) {
      // conver from standard to metric
      if (weightValue) {
        newWeightValue = poundToKg(weightValue);
      }

      if (heightValue) {
        newHeightValue = inchToCm(heightValue);
      }
    }

    set(measurement, value);
    set(weight, newWeightValue);
    set(height, newHeightValue);
  });

  const onRadioGroupChange = (e: RadioChangeEvent) => {
    const value = e.target.value as Measurements;

    update(value);
  };

  return (
    <Form.Item
      label='Measurement'
      name='measurement'
      className='mobile-one-row pull-right-measurement'
      data-testid='measurement'
    >
      <Radio.Group onChange={onRadioGroupChange}>
        {Object.keys(Measurements).map((measurement) => (
          <Radio.Button key={measurement} value={measurement}>
            {capitalizeFirstLowercaseRest(measurement)}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};
