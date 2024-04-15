interface MiniMessagesViewerProps {
  user: string;
  message: string;
  model: string;
  time: string;
}
const MiniMessagesViewer = ({message,model,time,user}:MiniMessagesViewerProps) => {
  return (
    <div className="w-full px-2 py-1 hover:bg-gray-100">
      <div className="w-full flex justify-between items-center">
        <div className="grow">
          <p className="font-bold">{user}</p>
          <p className="text-sm">{message}</p>
        </div>
        <div className="font-bold ">
          <p>{model}</p>
          <p className="text-sm font-thin">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default MiniMessagesViewer;
