
import { DataTable } from "@/components/table/data-table.tsx";

import {columns, Payment } from "@/components/table/ordercolumns.tsx";
import PageTitle from "@/components/ui/pagetitle.tsx";


type Props = {};



const data: Payment[] = [
  {
    order: "ORD001",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2023-01-15",
    method: "Credit Card"
  },
  {
    order: "ORD002",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2023-02-20",
    method: "PayPal"
  },
  {
    order: "ORD003",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2023-03-10",
    method: "Stripe"
  },
  {
    order: "ORD004",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2023-04-05",
    method: "Venmo"
  },
  {
    order: "ORD005",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2023-05-12",
    method: "Bank Transfer"
  },
  {
    order: "ORD006",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2023-06-18",
    method: "Apple Pay"
  },
  {
    order: "ORD007",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2023-07-22",
    method: "Google Pay"
  },
  {
    order: "ORD008",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2023-08-30",
    method: "Cryptocurrency"
  },
  {
    order: "ORD009",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2023-09-05",
    method: "Alipay"
  },
  {
    order: "ORD010",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2023-10-18",
    method: "WeChat Pay"
  },
  {
    order: "ORD011",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2023-11-25",
    method: "Square Cash"
  },
  {
    order: "ORD012",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2023-12-08",
    method: "Zelle"
  },
  {
    order: "ORD013",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2024-01-15",
    method: "Stripe"
  },
  {
    order: "ORD014",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2024-02-20",
    method: "PayPal"
  },
  {
    order: "ORD015",
    paymentStatus:"Completed",
    orderStatus: "Delivered",
    lastOrder: "2024-03-30",
    method: "Credit Card"
  }
];

export default function AdminOrders({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
