// pages/add.js
import { useState } from "react";
import { db, collection, addDoc } from "../lib/firebase";
import { useRouter } from "next/router";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        name,
        email,
      });
      router.push("/"); // Redireciona para a página inicial
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
    }
  };

  return (
    <div>
      <h1>Adicionar Novo Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={Thiago}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={thiago@thiago.com}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <a href="/">Voltar</a>
    </div>
  );
}
