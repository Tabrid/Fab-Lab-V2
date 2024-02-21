import { useEffect, useState } from "react";


const DashBoardOrder = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/order/orders')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders data:', error));
  }, []);
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <div className="container mx-auto px-4 grid grid-cols-2 gap-10">


        {orders ? (
          orders.map((order, index) => (
            <div key={index} className="w-full mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Orders</h2>
              <div className="mb-4">
                <p><strong className="text-blue-700">Name:</strong> {order.name}</p>
                <p><strong className="text-blue-700">Phone:</strong> {order.phone}</p>
                <p><strong className="text-blue-700">Email:</strong> {order.email}</p>
                <p><strong className="text-blue-700">Amount:</strong> {order.amount}</p>
                <p><strong className="text-blue-700">Design:</strong> <a href={order.design} target="_blank" rel="noopener noreferrer" className="text-blue-700">View Design</a></p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>

    </div>
  )
}

export default DashBoardOrder