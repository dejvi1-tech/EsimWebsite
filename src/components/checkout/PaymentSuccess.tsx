import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Check, Download } from 'lucide-react';
import Button from '../ui/Button';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      // Fetch order details from your backend
      fetchOrderDetails(sessionId);
    }
  }, [sessionId]);

  const fetchOrderDetails = async (sessionId: string) => {
    try {
      const response = await fetch(`/api/order-details?session_id=${sessionId}`);
      const data = await response.json();
      setOrderDetails(data);
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-12">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl bg-white p-8 text-center shadow-soft">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
              <Check size={32} className="text-success" />
            </div>

            <h1 className="mb-2 text-2xl font-bold">Payment Successful!</h1>
            <p className="mb-8 text-gray-600">
              Thank you for your purchase. Your eSIM has been generated and is ready for activation.
            </p>

            {orderDetails && (
              <div className="mb-8 rounded-lg bg-gray-50 p-6 text-left">
                <h2 className="mb-4 text-lg font-semibold">Order Details</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-medium">{orderDetails.orderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Plan:</span>
                    <span className="font-medium">{orderDetails.planName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="font-medium">€{orderDetails.amount}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <Button variant="primary" fullWidth>
                <Download size={18} className="mr-2" />
                Download eSIM QR Code
              </Button>

              <Link to="/account">
                <Button variant="secondary" fullWidth>
                  View Order Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;