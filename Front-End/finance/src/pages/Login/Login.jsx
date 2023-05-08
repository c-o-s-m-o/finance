import './styleLogin.css';
const Login = () => {
    return (
            <section className='container-Login'>
                <div className='login'>
                    <div className='logo'>
                        <p>Logo</p>
                    </div>
                    <form action="">
                        <input type="text" placeholder="LOGIN" />
                        <input type="password" placeholder="PASSWORD"  />
                        <input type="submit" value="Entrar"/>
                        <p>Registrar</p>
                        <p>Recuperar senha</p>


                    </form>
                    

                </div>
                

           </section>
    );
}

export default Login