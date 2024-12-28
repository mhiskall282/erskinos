import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Mail, Lock, Chrome } from 'lucide-react'; // Changed from Google to Chrome
import toast from 'react-hot-toast';

// ... rest of the file remains the same, just update the icon component name
          <button
            onClick={handleGoogleSignUp}
            className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-300 p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Chrome className="w-5 h-5" /> {/* Changed from Google to Chrome */}
            <span>Sign up with Google</span>
          </button>