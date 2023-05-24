import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm'

const daisyMae = {
  textAlign: "center",
  width: "25vw",
  height: "35vh",
  padding: "2px",
  


};

export default function AuthPage({ setUser }) {
  return (
    <>
  <div style={daisyMae}><img src={`daisy-mae.png`}></img></div>
  
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
      
    </>
  );
}