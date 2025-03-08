import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function StepsTracker() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // Mock login for now
    setUser({ name: 'Friend', steps: 0 });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl overflow-hidden">
        <CardContent className="p-6">
          <motion.h1
            className="text-2xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Steps Tracker
          </motion.h1>

          {user ? (
            <div className="text-center">
              <p className="mb-4">Welcome, {user.name}!</p>
              <p className="mb-4">Steps: {user.steps}</p>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <div className="text-center">
              <p className="mb-4">Track your steps with your friends!</p>
              <Button onClick={handleLogin}>Login</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
