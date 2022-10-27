import { auth, googleAuthProvider } from '../lib/firebase';
import { signInWithPopup, signInAnonymously, signOut } from 'firebase/auth'
import Image from 'next/image'

// 1. user signed out <SignInButton />
// 2. user signed in, but missing username <UsernameForm />
// 3. user signed in, has username <SignOutButton />

export default function Enter(props) {
    const user = null;
    const username = null;

    return (
        <main>
            <h1>Sign up</h1>
            { user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton /> }
       </main>
    )
}

function SignInButton() {
    const signInWithGoogle = async () => {
      await signInWithPopup(auth, googleAuthProvider)
    };
  
    return (
      <>
        <button className="btn-google" onClick={signInWithGoogle}>
          <img src={'/google.png'} /> Sign in with Google
        </button>
        <button onClick={() => signInAnonymously(auth)}>
          Sign in Anonymously
        </button>
      </>
    );
  }

function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sign Out</button>
}


function UsernameForm() {
    return null;
}