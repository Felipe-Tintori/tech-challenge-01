"use client";
import ButtonComponent from "./components/ButtonComponent";

export default function Home() {
  const handleSubmit = () => {
    alert("Clicou no botão");
  };
  return (
    <div>
      <h1>teste</h1>
      <ButtonComponent
        text="Concluir transação"
        type="GREEN"
        outlined={true}
        sendSubmit={() => handleSubmit()}
      />
    </div>
  );
}
