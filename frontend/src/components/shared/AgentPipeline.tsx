interface AgentPipelineProps {
  steps: string[]
  currentStep: number
  visible: boolean
}

export default function AgentPipeline({ steps, currentStep, visible }: AgentPipelineProps) {
  if (!visible) return null
  return (
    <div className="rounded-xl p-4 space-y-2" style={{ background: '#020122', border: '1.5px solid #EDD382' }}>
      <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#EDD382' }}>🤖 AI Agent Pipeline</p>
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{
            background: i < currentStep ? '#16A34A' : i === currentStep ? '#F4442E' : 'rgba(237,211,130,0.15)',
            color: i <= currentStep ? 'white' : '#6B6C8A',
          }}>
            {i < currentStep ? '✓' : i + 1}
          </div>
          <span className="text-sm" style={{
            color: i < currentStep ? '#16A34A' : i === currentStep ? '#FC9E4F' : '#6B6C8A',
            fontWeight: i === currentStep ? 600 : 400,
          }}>
            {step}
            {i === currentStep && <span className="loading-pulse ml-2" style={{ color: '#FC9E4F' }}>●</span>}
          </span>
        </div>
      ))}
    </div>
  )
}
