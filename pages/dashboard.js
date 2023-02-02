import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

export default function Dashboard() {
  //get current user
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  if (loading) return <h1>Loading....</h1>;
  //if no user , redirect to the login screen
  if (!user) router.push('/auth/login');
  //if there is already a user
  if (user)
    return (
      <div className=''>
        <h1 className=''>Welcome to your dashboard {user.displayName}</h1>
        {/* Sign out */}
        <button
          type='button'
          className='inline-block px-6 py-3 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out'
          onClick={() => auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    );
}
