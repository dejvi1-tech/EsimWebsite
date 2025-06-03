import { Link } from 'react-router-dom';
import { Wifi, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="pt-20">
      <div className="container-custom flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
          <Wifi size={48} className="text-primary" strokeWidth={1.5} />
        </div>
        <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mx-auto mb-8 max-w-md text-lg text-gray-600">
          Oops! It looks like the connection to this page was lost. The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary" className="inline-flex items-center">
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;