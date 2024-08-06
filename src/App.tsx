import './App.css'
import { BellRing } from "lucide-react";

import Alert from './Components/UI/Alert'
import { TAlertType } from './Interfaces';

function App() {
  const alerts: {
    type: TAlertType;
    icon: JSX.Element;
    title: string;
    description: string;
  }[] = [
    {
      type: "alert-error",
      icon: <BellRing />,
      title: "Danger Alert",
      description: "This is a danger alert - check it out!",
    },
    {
      type: "alert-info",
      icon: <BellRing />,
      title: "Danger Alert",
      description: "This is a danger alert - check it out!",
    },
    {
      type: "alert-default",
      icon: <BellRing />,
      title: "Danger Alert",
      description: "This is a danger alert - check it out!",
    },
    {
      type: "alert-warning",
      icon: <BellRing />,
      title: "Danger Alert",
      description: "This is a danger alert - check it out!",
    },
    {
      type: "alert-success",
      icon: <BellRing />,
      title: "Danger Alert",
      description: "This is a danger alert - check it out!",
    },
  ];

  return (
    <>
    {
      alerts.map((alert, index) => <Alert key={index} {...alert}/>)
    }
    </>
  );
}

export default App
