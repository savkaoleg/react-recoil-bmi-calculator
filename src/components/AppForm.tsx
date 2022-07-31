import React, { useEffect } from "react";
import { Form } from "antd";
import MeasurementSwitcher from "./MeasurementSwitcher";
import HeightInput from "./HeightInput";
import WeightInput from "./WeightInput";
import BMIInput from "./BMIInput";

import { useRecoilState } from "recoil";
import measurement from "../recoil/measurement";
import weight from "../recoil/weight";
import height from "../recoil/height";

import Measurements from "../static/measurements";
import { Height } from "../recoil/height/type";
import { Weight } from "../recoil/weight/type";

import "./AppForm.less";

export type FormFields = {
  measurement: Measurements;
  height: Height;
  weight: Weight;
};

export default () => {
  const [form] = Form.useForm<FormFields>();
  const [measurementValue, setMeasurement] = useRecoilState(measurement);
  const [weightValue, setWeigh] = useRecoilState(weight);
  const [heightValue, setHeight] = useRecoilState(height);

  const onValuesChange = (changedValues: FormFields) => {
    if (changedValues.measurement) {
      setMeasurement(changedValues.measurement);
    }
    if (changedValues.height) {
      setHeight(changedValues.height);
    }

    if (changedValues.weight) {
      setWeigh(changedValues.weight);
    }
  };

  // Update data reactively
  useEffect(() => {
    form.setFieldsValue({
      measurement: measurementValue,
      height: heightValue,
      weight: weightValue,
    });
  }, [measurementValue, heightValue, weightValue]);

  return (
    <Form {...layout} form={form} onValuesChange={onValuesChange}>
      <MeasurementSwitcher />
      <HeightInput />
      <WeightInput />
      <BMIInput />
    </Form>
  );
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
