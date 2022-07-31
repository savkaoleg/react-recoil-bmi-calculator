import React from "react";
import { Form, InputNumber } from "antd";

import { useRecoilValue } from "recoil";
import measurementAtom from "../recoil/measurement";
import weightAtom from "../recoil/weight";
import heightAtom from "../recoil/height";
import formatNumber from "../helpers/formatNumber";
import {
  calculateBMI,
  calculateNormalBMI,
  NORMAL_BMI_MIN,
  NORMAL_BMI_MAX,
} from "../helpers/calculateBMI";

export default () => {
  const measurement = useRecoilValue(measurementAtom);
  const weight = useRecoilValue(weightAtom);
  const height = useRecoilValue(heightAtom);
  const bmiValue = calculateBMI({
    measurement,
    weight,
    height,
  });
  const recomendedBmi = calculateNormalBMI({ measurement, height });

  let label;

  if (bmiValue) {
    if (bmiValue < NORMAL_BMI_MIN) {
      label = "UW";
    } else if (bmiValue > NORMAL_BMI_MIN && bmiValue < NORMAL_BMI_MAX) {
      label = "IW";
    } else {
      // > 25
      label = "OW";
    }
  }

  return (
    <>
      <Form.Item label='BMI' className='mobile-one-row'>
        <InputNumber
          value={bmiValue}
          formatter={formatNumber}
          style={{ width: "100%" }}
          disabled
          addonAfter={label}
        />
      </Form.Item>
      {recomendedBmi && (
        <span className='pull-right'>
          Healthy weight range for your height:
          <InputNumber
            value={recomendedBmi[0]}
            formatter={formatNumber}
            style={{ width: "75px", margin: "0px 5px" }}
            disabled
          />
          <InputNumber
            value={recomendedBmi[1]}
            formatter={formatNumber}
            style={{ width: "75px", marginLeft: "5px" }}
            disabled
          />
        </span>
      )}
    </>
  );
};
