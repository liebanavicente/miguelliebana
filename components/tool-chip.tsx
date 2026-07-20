import type { Tool } from "@/lib/data/tools"

export function ToolChip({ tool }: { tool: Tool }) {
  return (
    <span className="tool-chip">
      <span className="tool-chip__dot" style={{ background: tool.color }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={tool.icon} alt="" aria-hidden="true" />
      </span>
      {tool.name}
    </span>
  )
}
