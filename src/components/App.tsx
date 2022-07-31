import React from "react";
import { RecoilRoot } from "recoil";
import AppLayout from "./AppLayout";
import AppCard from "./AppCard";

export default function App() {
  return (
    <RecoilRoot>
      <AppLayout>
        <AppCard />
      </AppLayout>
    </RecoilRoot>
  );
}

// if (module.hot) {
//   module.hot.accept();
// }
