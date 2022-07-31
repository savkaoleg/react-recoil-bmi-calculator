import React from "react";
import { Card } from "antd";
import AppForm from "./AppForm";
import "./AppCard.less";

export default function AppCard() {
  return (
    <div className='site-card-border-less-wrapper'>
      <Card className='site-card' title='' style={{ width: 380 }}>
        <AppForm />
      </Card>
    </div>
  );
}
