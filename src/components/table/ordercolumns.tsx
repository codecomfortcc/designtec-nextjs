import { ColumnDef } from "@tanstack/react-table";
export type Payment = {
  order: string;
  paymentStatus: "Pending" | "Processing" | "Completed" | "Failed";
  orderStatus:
    | "Ordered"
    | "dispatched"
    | "Shipped"
    | "Delivered"
    | "Returned"
    | "Cancelled"
    | "Refunded"
    | "Rejected"
    | "Pending";
  lastOrder: string;
  method: string;
};
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
  },
  {
    accessorKey: "orderStatus",
    header: "Order Status",
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];
