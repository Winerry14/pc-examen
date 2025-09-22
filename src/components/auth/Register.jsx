import { useState } from "react";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      setMsg("Usuario registrado correctamente");
    } catch (err) {
      setMsg(err.message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="card p-3 mt-4">
      <h2 className="h4 mb-3">Registro</h2>
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} className="form-control mb-2" />
      <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={onChange} className="form-control mb-2" />
      <button className="btn btn-dark">Registrar</button>
      {msg && <div className="mt-2">{msg}</div>}
    </form>
  );
}
