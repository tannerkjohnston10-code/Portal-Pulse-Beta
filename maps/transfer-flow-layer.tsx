import type { SpatialFlow } from "@/platform/maps/core/map-types";

export function TransferFlowLayer({ flows }: { flows: SpatialFlow[] }) {
  return (
    <svg className="absolute inset-0 h-full w-full" role="img" aria-label="Mock transfer and recruiting flows">
      {flows.map((flow, index) => {
        const startX = 18 + index * 9;
        const startY = 68 - index * 7;
        const endX = 64 + index * 4;
        const endY = 32 + index * 8;
        const stroke = flow.flowType === "high_school_to_college" ? "#34d399" : flow.confidence === "low" ? "#fbbf24" : "#22d3ee";
        return (
          <g key={flow.id}>
            <path d={`M ${startX}% ${startY}% C 38% ${startY - 20}%, 48% ${endY + 18}%, ${endX}% ${endY}%`} stroke={stroke} strokeWidth={Math.max(2, flow.strength / 24)} fill="none" strokeDasharray={flow.confidence === "low" ? "5 5" : "0"} opacity="0.8" />
            <circle cx={`${startX}%`} cy={`${startY}%`} r="6" fill={stroke} opacity="0.7" />
            <circle cx={`${endX}%`} cy={`${endY}%`} r="7" fill={stroke} opacity="0.95" />
          </g>
        );
      })}
    </svg>
  );
}

