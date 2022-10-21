
const Navbar = () => {
  
  const user = {
    id: 1,
    name: "John Doe",
  }

  const logout = () => {
    console.log("logout");
  }

  const login = () => {
    console.log("login");
  }

  return (
    <nav>
      <span>
        <h3>{user ? `Olá ${user.name}, bem-vindo!` : ""}</h3>
      </span>

      {user ? (
        <button onClick={logout}>Encerrar sessão</button>
      ) : (
        <button onClick={login}>Iniciar sessão</button>
      )}
    </nav>
  );
};

export default Navbar;
