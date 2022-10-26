import { auth, googleAuthProvider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth'
import Image from 'next/image'

// 1. user signed out <SignInButton />
// 2. user signed in, but missing username <UsernameForm />
// 3. user signed in, has username <SignOutButton />

export default function Enter(props) {
    const user = null;
    const username = null;

    return (
        <main>
            { user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton /> }
            <h1>Sign up</h1>
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
          <img src={'/google.png'} />Sign in with Google
        </button>
        <button onClick={() => signInAnonymously(auth)}>
          Sign in Anonymously
        </button>
      </>
    );
  }

function SignOutButton() {
    <button>SignOut Button</button>
}


function UsernameForm() {
    <form>
        <label>username:</label>
        <input type="" value=""></input>
    </form>
}