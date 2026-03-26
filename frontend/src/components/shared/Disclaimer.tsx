export default function Disclaimer() {
  return (
    <div className="rounded-xl px-4 py-3 flex gap-2 items-start" style={{ background: '#FFF7ED', border: '1.5px solid #FC9E4F' }}>
      <span className="shrink-0 text-sm">⚠️</span>
      <p className="text-xs leading-relaxed" style={{ color: '#020122' }}>
        <span className="font-semibold" style={{ color: '#F4442E' }}>SEBI Compliance Guardrail: </span>
        FinSage provides AI-generated educational guidance only. It is not a SEBI-registered investment advisor.
        All calculations are based on publicly available tax laws and financial principles.
        For major financial decisions, consult a certified financial planner or SEBI-registered advisor.
      </p>
    </div>
  )
}
