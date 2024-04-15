import { Switch } from "../ui/switch";

const AdminSettings = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-10 mt-4">Settings</h1>
      <div className="flex justify-between items-center px-3 border hover:bg-gray-100 py-5 gap-10">
        <p className="grow text-gray-500 ">
          Allow buyers to buy through with our website using stripe or razorpay
          payment system
        </p>
        <div className="">
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
