import React from 'react';

const Register = () => {
    return (
        <>
            <body className="body-login">
                <div className="mayn-layout">
                    <div className="header">
                        <div className="header-login">
                            <div className="logo">
                                <a href="#">
                                    <img src="./public/images/cine.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="login_body">
                        <div className="login_box">
                            <h2>Registrar-se</h2>
                            <form method="post" action="/fazRegistro">
                                <div className="input_box">
                                    <input required type="user" placeholder="Usuário" />
                                </div>

                                <div className="input_box">
                                    <input
                                        required
                                        type="email"
                                        id="usuario"
                                        name="usuario"
                                        placeholder="E-mail"
                                    />
                                </div>

                                <div className="input_box">
                                    <input
                                        required
                                        type="password"
                                        id="senha"
                                        name="senha"
                                        placeholder="Senha"
                                    />
                                </div>

                                <div>
                                    <button className="submit">Entrar</button>
                                </div>
                            </form>

                            <div className="support">
                                <div className="remember">
                                    <span>
                                        <input
                                            type="checkbox"
                                            style={{ margin: 0, padding: 0, height: '13px' }}
                                        />
                                    </span>
                                    <span>Lembre-se de mim</span>
                                </div>
                                <div className="help">
                                    <a href="#">Precisa de ajuda?</a>
                                </div>
                            </div>

                            <div className="login_footer">
                                <div className="sign_up">
                                    <p>
                                        Já possui uma conta?{' '}
                                        <a href="/login">Entre agora.</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
};

export default Register;
