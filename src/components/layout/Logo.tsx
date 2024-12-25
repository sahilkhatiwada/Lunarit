import { Moon } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Moon className="w-8 h-8 text-blue-600" />
      <span className="text-2xl font-bold text-blue-800">
        Lunar I.T. Solution
      </span>
    </div>
  );
}
