
const Login = () => {
  return (
    <div className='form'>
      <div className='form_logo'>
        Lo<span>g</span>o
      </div>
      <div className='form_title'>
        Log<span>I</span>n
      </div>
      <form className='form_items'>
        <div className='form_inputs'>
          <input
            type='text'
            required
          />
          <label>username or email</label>
        </div>
        <div className='form_inputs'>
          <input
            type='password'
            required
          />
          <label>password</label>
        </div>
        <button className='form_button'>Log In</button>
      </form>
      <div className='form_other'>
        <a href='#'>forgot password?</a>
        <a href='#'>Join Now</a>
      </div>
    </div>
  );
}

export default Login;
