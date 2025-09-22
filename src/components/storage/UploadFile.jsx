import { useState } from "react";
import { storage } from "../../services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const onChange = e => setFile(e.target.files[0]);

  const onUpload = async () => {
    if (!file) return;
    const key = `uploads/${Date.now()}_${file.name}`;
    const fileRef = ref(storage, key);
    await uploadBytes(fileRef, file);
    const link = await getDownloadURL(fileRef);
    setUrl(link);
  };

  const copyUrl = async () => {
    if (!url) return;
    await navigator.clipboard.writeText(url);
    alert("URL copiada");
  };

  return (
    <div className="card p-3 mt-4">
      <h2 className="h4 mb-3">Subir archivo</h2>
      <input type="file" onChange={onChange} className="form-control mb-2" />
      <button onClick={onUpload} className="btn btn-dark">Subir</button>

      {url && (
        <div className="mt-3">
          <a href={url} target="_blank" rel="noopener noreferrer" className="me-3">Ver archivo</a>
          <button type="button" className="btn btn-link ms-3 p-0" onClick={copyUrl}>Copiar URL</button>
          <div className="mt-2">
            {file && file.type.startsWith("image/") && (
              <img src={url} alt="preview" style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
