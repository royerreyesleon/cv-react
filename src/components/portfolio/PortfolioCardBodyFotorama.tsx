import type { File } from '../../interfaces/file.interface';
import Fotorama from 'fotorama-react';
import 'fotorama-react/dist/index.css';

type Props = {
  images: File[];
};

export const PortfolioCardBodyFotorama = ({ images }: Props) => {
  // Convertimos tus imágenes al formato que requiere Fotorama
  // ?.sort((a, b) => a.order - b.order) // opcional: mantener el orden correcto
  const items = images?.map((img) => ({
    img: img.src, // imagen principal
    thumb: img.src, // miniatura
    caption: `#${img.order}`,
  }));

  return (
    <Fotorama
      items={items}
      width="100%"
      nav="thumbs"
      allowfullscreen={false}
      loop={true}
      keyboard={true}
      fit="scale-down"
    />
  );
};
