import React, { useState } from "react";
import { Button, Card, message } from "antd";

const Counter = () => {
  const [number, setNumber] = useState(1);
  const increment =()=>{
    setNumber (number+ 1)
   devtools : true
  }
  const decrement =()=>{
    setNumber (number- 1)
    if (number < 1){
       message.error ('sorry ! number is less than 0')
        return setNumber(0)
    }
  }
  return (
    <div className="mt-[120px] flex justify-center w-full ">
      <Card
        title="Counter App"
        bordered={true}
        style={{
          width: 300,
        }}
        className="bg-[#e7b5b5]  text-blue-800   text-2xl "
      >
        <Button className="text-blue-900 font-bold  mb-5 ml-[30%] " onClick={increment}>
          {" "}
          Increment{" "}
        </Button>
        <h1 className="text-center font-bold">{number}</h1>
        <Button className="text-blue-900 font-bold mt-5  ml-[30%]" onClick={decrement}>
          {" "}
          Decrement{" "}
        </Button>
      </Card>
    </div>
  );
};
export default Counter;
