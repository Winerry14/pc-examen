import { useRef, useState, useEffect } from "react";
import SimpleReactValidator from "simple-react-validator";
import { saveLead } from "../../services/firestore";

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [sent, setSent] = useState(false);
  const [, setTick] = useState(false);
  const validator = useRef(new SimpleReactValidator({ autoForceUpdate: { forceUpdate: () => setTick(v => !v) } }));

  useEffect(() => () => validator.current.hideMessages(), []);
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (validator.current.allValid()) {
      await saveLead(form);
      setSent(true);
      setForm({ name: "", email: "", phone: "" });
      validator.current.hideMessages();
    } else {
      validator.current.showMessages();
      setTick(v => !v);
    }
  };

  return (
    <form onSubmit={onSubmit} className="card p-3 mt-4">
      <h2 className="h4 mb-3">Formulario</h2>

      <label>Nombre</label>
      <input name="name" value={form.name} onChange={onChange} className="form-control" />
      <div className="text-danger small">{validator.current.message("nombre", form.name, "required|min:3")}</div>

      <label className="mt-2">Email</label>
      <input name="email" value={form.email} onChange={onChange} className="form-control" />
      <div className="text-danger small">{validator.current.message("email", form.email, "required|email")}</div>

      <label className="mt-2">Teléfono</label>
      <input name="phone" value={form.phone} onChange={onChange} className="form-control" />
      <div className="text-danger small">{validator.current.message("teléfono", form.phone, "required|numeric|min:8")}</div>

      <button className="btn btn-dark mt-3">Enviar</button>
      {sent && <div className="text-success mt-2">Guardado en Firestore</div>}
    </form>
  );
}
