import { MeshGradient } from '@paper-design/shaders-react';

export function Shader() {
	return (
		<MeshGradient
			width={120}
			height={120}
			colors={["#e0eaff", "#241d9a", "#f75092", "#9f50d3"]}
			distortion={0.8}
			swirl={0.1}
			grainMixer={0}
			grainOverlay={0}
			speed={1}
			maxPixelCount={14400}
		/>
	)
}