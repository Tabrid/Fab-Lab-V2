import  { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

const DashBoardOrder = () => {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fab-lab-server-production.up.railway.app/api/order/orders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching orders data:", error);
        setLoading(false); 
      });
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Order Details</h1>

        {loading ? (
          <div className="flex justify-center">
            <BounceLoader color="#2e3094" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-10">
            {orders ? (
              orders.map((order, index) => (
                <div
                  key={index}
                  className="w-full mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md"
                >
                  <h2 className="text-xl font-semibold mb-4">Orders</h2>
                  <div className="mb-4">
                    <p>
                      <strong className="text-blue-700">Name:</strong>{" "}
                      {order.name}
                    </p>
                    <p>
                      <strong className="text-blue-700">Phone:</strong>{" "}
                      {order.phone}
                    </p>
                    <p>
                      <strong className="text-blue-700">Email:</strong>{" "}
                      {order.email}
                    </p>
                    <p>
                      <strong className="text-blue-700">Amount:</strong>{" "}
                      {order.amount}
                    </p>
                    <p>
                      <strong className="text-blue-700">Design:</strong>{" "}
                      <a
                        href={order.design}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700"
                      >
                        View Design
                      </a>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No orders found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoardOrder;
