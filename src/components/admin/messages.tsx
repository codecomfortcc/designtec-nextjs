"use client"
import { DataTable } from "../table/data-table";
import { Payment, columns } from "@/table/columns.tsx"
import { useEffect, useState } from "react";
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "10kma53ae",
      name:'Noah',
      model: "M720D",
      date: "2021-09-01",
      email: "Noah22@gmail.com",
      message:'Do you provide after-sales service?'
    },
    {
      id: "11kma53ae",
      name:'Lucas',
      model: "M720D",
      date: "2021-02-01",
      email: "Lucas22@gmail.com",
      message:'What are the payment options available?'
    },
    {
      id: "12kma53ae",
      name:'Mia',
      model: "M20D",
      date: "2021-09-02",
      email: "Mia22@gmail.com",
      message:'Do you provide installation service?'
    },
    {
      id: "13kma53ae",
      name:'Emma',
      model: "M30D",
      date: "2021-10-01",
      email: "Emma22@gmail.com",
      message:'Do you have any discounts?'
    },
    {
      id: "14kma53ae",
      name:'Oliver',
      model: "M40D",
      date: "2021-11-01",
      email: "Oliver22@gmail.com",
      message:'What is the warranty period?'
    },
    {
      id: "15kma53ae",
      name:'Sophia',
      model: "M50D",
      date: "2021-12-01",
      email: "Sophia22@gmail.com",
      message:'Do you provide free shipping?'
    },
    {
      id: "16kma53ae",
      name:'Ava',
      model: "M60D",
      date: "2022-01-01",
      email: "Ava22@gmail.com",
      message:'What is the return policy?'
    },
    {
      id: "17kma53ae",
      name:'Isabella',
      model: "M70D",
      date: "2022-02-01",
      email: "Isabella22@gmail.com",
      message:'Do you have any upcoming sales?'
    },
    {
      id: "18kma53ae",
      name:'Jackson',
      model: "M80D",
      date: "2022-03-01",
      email: "Jackson22@gmail.com",
      message:'What are the delivery options?'
    },
    {
      id: "19kma53ae",
      name:'Aiden',
      model: "M90D",
      date: "2022-04-01",
      email: "Aiden22@gmail.com",
      message:'Do you provide technical support?'
    },
    {
      id: "20kma53ae",
      name:'Lucy',
      model: "M100D",
      date: "2022-05-01",
      email: "Lucy22@gmail.com",
      message:'What are the financing options?'
    },
    {
      id: "21kma53ae",
      name:'Ethan',
      model: "M110D",
      date: "2022-06-01",
      email: "Ethan22@gmail.com",
      message:'Do you have any loyalty programs?'
    },
    {
      id: "22kma53ae",
      name:'Mason',
      model: "M120D",
      date: "2022-07-01",
      email: "Mason22@gmail.com",
      message:'What are the terms and conditions?'
    },
    {
      id: "23kma53ae",
      name:'Liam',
      model: "M130D",
      date: "2022-08-01",
      email: "Liam22@gmail.com",
      message:'Do you have any special offers?'
    },
    {
      id: "24kma53ae",
      name:'Charlotte',
      model: "M140D",
      date: "2022-09-01",
      email: "Charlotte22@gmail.com",
      message:'What is the process for returns?'
    }
  ]  
}
const Messages = () => {
  const [data, setData] = useState<Payment[]>([]);
  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);
  return (
  <div className="w-full">
  <DataTable columns={columns} data={data} />
  </div>
  )
};

export default Messages;
