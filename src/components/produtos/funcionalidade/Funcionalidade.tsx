import { useState } from "react";

interface Props {
  onFiltrar: (min?: number, max?: number) => void;
}

export default function ProcurarEntrePrecos({ onFiltrar }: Props) {
  const [min, setMin] = useState<string>("");
  const [max, setMax] = useState<string>("");

  function aplicar() {
    const nMin = min ? Number(min) : undefined;
    const nMax = max ? Number(max) : undefined;
    onFiltrar(nMin, nMax);
  }

  return (
    <div
      className="
        flex w-full sm:w-auto
        flex-col sm:flex-row gap-2
      "
    >
      <input
        type="number"
        placeholder="Preço mínimo"
        value={min}
        onChange={(e) => setMin(e.target.value)}
        className="
          w-full sm:w-52 rounded-md border border-slate-300 px-3 py-2
          focus:outline-none focus:ring-2 focus:ring-indigo-500
        "
      />
      <input
        type="number"
        placeholder="Preço máximo"
        value={max}
        onChange={(e) => setMax(e.target.value)}
        className="
          w-full sm:w-52 rounded-md border border-slate-300 px-3 py-2
          focus:outline-none focus:ring-2 focus:ring-indigo-500
        "
      />
      <button
        onClick={aplicar}
        className="
          w-full sm:w-auto px-4 py-2 rounded-md font-semibold text-white
          bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90
        "
      >
        Filtrar
      </button>
    </div>
  );
}
