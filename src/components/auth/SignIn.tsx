import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Mail, Lock, Chrome } from 'lucide-react'; // Correct import of the Chrome icon
import toast from 'react-hot-toast';
import { isAdminUser } from '../../utils/auth';

const SignIn = () => {
  // Your existing SignIn logic and state
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic
  };

  return (
    <div>
      {/* Your sign-in form and other JSX */}
      <button
        onClick={handleGoogleSignIn}
        className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-300 p-2 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Chrome className="w-5 h-5" /> {/* Chrome icon */}
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default SignIn;  // Ensure it's the default export
