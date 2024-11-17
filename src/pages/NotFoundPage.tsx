import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-[#FFFF] w-full ml-[380px]">
      <div className="text-center max-w-lg">
        <FileQuestion className="mx-auto h-24 w-24 text-muted-foreground" />
        <h1 className="mt-6 text-4xl font-bold">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button
          className="mt-8"
          onClick={() => navigate('/home')}
        >
          Go back home
        </Button>
      </div>
    </div>
  );
}
