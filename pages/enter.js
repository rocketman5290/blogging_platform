import { auth, googleAuthProvider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth'
import Image from 'next/image'

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

//Sign in with google button
// Sign in with Google button
function SignInButton() {
    const signInWithGoogle = async () => {
      await signInWithPopup(auth, googleAuthProvider)
    };
  
    return (
      <>
        <button className="btn-google" onClick={signInWithGoogle}>
          <img src={'/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png'} />Sign in with Google
        </button>
        <button onClick={() => signInAnonymously(auth)}>
          Sign in Anonymously
        </button>
      </>
    );
  }

//Sign out button
function SignOutButton() {
    <button>SignOut Button</button>
}

//Username form
function UsernameForm() {
    <form>
        <label>username:</label>
        <input type="" value=""></input>
    </form>
}