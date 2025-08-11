import { useState } from "react";

interface ProcurarEntrePrecosProps {
  onFiltrar: (min: number | null, max: number | null) => void;
}

function ProcurarEntrePrecos({ onFiltrar }: ProcurarEntrePrecosProps) {
  const [min, setMin] = useState<number | null>(null);
  const [max, setMax] = useState<number | null>(null);

  return (
    <div className="flex gap-2 items-center">
      <input
        type="number"
        placeholder="Preço mínimo"
        value={min ?? ""}
        onChange={(e) => setMin(e.target.value ? Number(e.target.value) : null)}
        className="border px-2 py-1 rounded"
      />
      <input
        type="number"
        placeholder="Preço máximo"
        value={max ?? ""}
        onChange={(e) => setMax(e.target.value ? Number(e.target.value) : null)}
        className="border px-2 py-1 rounded"
      />
      <button
        onClick={() => onFiltrar(min, max)}
        className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
      >
        Filtrar
      </button>
    </div>
  );
}

export default ProcurarEntrePrecos;
