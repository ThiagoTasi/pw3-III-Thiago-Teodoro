// pages/delete/[id].js
import { useEffect } from "react";
import { db, doc, deleteDoc } from "../../lib/firebase";
import { useRouter } from "next/router";

export default function DeleteUser() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const deleteUser = async () => {
        try {
          await deleteDoc(doc(db, "users", id));
          router.push("/"); // Redireciona para a página inicial
        } catch (error) {
          console.error("Erro ao deletar usuário:", error);
        }
      };

      deleteUser();
    }
  }, [id, router]);

  return <div>Deletando usuário...</div>;
}
