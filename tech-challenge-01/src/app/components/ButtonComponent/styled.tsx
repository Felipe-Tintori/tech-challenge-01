import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

// Definir as props corretamente
interface CustomButtonProps {
  orange?: string; // Agora as props são opcionais
  green?: string;
  black?: string;
  neutral?: string;
}

// Usando styled com as props tipadas
export const CustomButton = styled(Button)<CustomButtonProps>`
  background-color: ${({ orange, green, black, neutral }) => {
    if (orange) return "#FFA500";
    if (green) return "#008000"; // Cor para o botão verde
    if (black) return "#000000"; // Cor para o botão preto
    if (neutral) return "#1976d2"; // Cor para o botão neutro
    return "#1976d2"; // Valor padrão (pode ser qualquer cor que você preferir)
  }};
  color: white;

  &:hover {
    background-color: ${({ orange, green, black, neutral }) => {
      if (orange) return "#FFA500";
      if (green) return "#008000"; // Cor para o botão verde
      if (black) return "#000000"; // Cor para o botão preto
      if (neutral) return "#1976d2"; // Cor para o botão neutro
      return "#125ea8"; // Hover padrão
    }};
  }
`;
