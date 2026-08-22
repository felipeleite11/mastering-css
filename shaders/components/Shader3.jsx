import { Heatmap } from '@paper-design/shaders-react'

export function Shader() {
	return (
		<Heatmap
			width={120}
			height={120}
			image="assets/allef.svg"
			colors={["#112069", "#1f3ca3", "#3265e7", "#6bd8ff", "#ffe77a", "#ff9a1f", "#ff4d00"]}
			colorBack="#0c0749"
			contour={0.5}
			angle={0}
			noise={0}
			innerGlow={0.5}
			outerGlow={0.5}
			speed={1}
			scale={0.75}
			maxPixelCount={14400}
		/>
	)
}