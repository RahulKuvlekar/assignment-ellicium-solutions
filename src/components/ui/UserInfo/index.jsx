import { Card } from "@/components/ui/card";

const JSON = {
  name: "Guest User",
  address: "Flat - 37, Guest Aparment, GuestCity, GuestState, India, 44966.",
  phone: "7777777777",
};
const UserInfo = () => {
  return (
    <Card className="max-w-[360px] flex flex-col items-start relative text-neutral-600 p-4 cursor-default my-4">
      <h1 className="text-lg font-medium">Name: {JSON.name}</h1>
      <h3 className="text-md font-medium">Address: {JSON.address}</h3>
      <h3 className="text-md font-medium">Phone: {JSON.phone}</h3>
    </Card>
  );
};

export default UserInfo;
