import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';

export default function Nav() {
  //Get the user
  const [user, loading] = useAuthState(auth);
  return (
    <nav className='flex justify-between items-center py-10'>
      <Link href={'/'}>Logo</Link>
      <ul>
        {/* if no user display the join now btn */}
        {!user && (
          <Link
            legacyBehavior
            href={'/auth/login'}
          >
            <a
              id='link'
              className='py-2 px-2 text-lg bg-teal-500 text-white rounded-xl font-medium ml-8'
            >
              Join now
            </a>
          </Link>
        )}
        {/* if we have a user */}
        {user && (
          <div className=''>
            <Link href={'/dashboard'}>
              <img
                src={user.photoURL}
                alt='UserPicture'
                className='rounded-full w-12'
                referrerPolicy='no-referrer'
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
