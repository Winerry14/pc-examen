import { useState } from "react";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onLogin = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      setMsg("Sesión iniciada correctamente");
    } catch (err) {
      setMsg(err.message);
    }
  };

  const onLogout = async () => {
    await signOut(auth);
    setMsg("Sesión cerrada");
  };

  return (
    <form onSubmit={onLogin} className="card p-3 mt-4">
      <h2 className="h4 mb-3">Iniciar Sesión</h2>
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} className="form-control mb-2" />
      <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={onChange} className="form-control mb-2" />
      <button className="btn btn-dark me-2">Ingresar</button>
      <button type="button" className="btn btn-outline-danger" onClick={onLogout}>Cerrar Sesión</button>
      {msg && <div className="mt-2">{msg}</div>}
    </form>
  );
}
