import { UserIcon, Users, ArrowRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../lib/store";

export function Search() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const [intendedPath, setIntendedPath] = useState("");

  const handleActionClick = (path: string) => {
    if (user) {
      navigate(path);
    } else {
      setIntendedPath(path);
      setShowModal(true);
    }
  };

  return (
    <div className="space-y-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Search</h1>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Looking for Work Card */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white bg-opacity-10 rounded-lg">
                <UserIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Looking for Work?
                </h2>
                <p className="mt-1 text-blue-100">
                  Find your next opportunity and showcase your skills
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => handleActionClick("/work")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Browse Listings
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Looking to Hire Card */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white bg-opacity-10 rounded-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Looking to Hire?
                </h2>
                <p className="mt-1 text-purple-100">
                  Find talented professionals for your projects
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => handleActionClick("/services")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
              >
                Browse Candidates
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sign Up Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Create an Account
              </h3>
              <p className="text-gray-600">
                To{" "}
                {intendedPath === "/work"
                  ? "browse job listings"
                  : "view candidates"}
                , you'll need to create an account first.
              </p>

              <div className="space-y-3 pt-4">
                <button
                  onClick={() => navigate("/register")}
                  className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Create Account
                </button>
                <p className="text-sm text-gray-500">
                  Already have an account?{" "}
                  <button
                    onClick={() => navigate("/login")}
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
