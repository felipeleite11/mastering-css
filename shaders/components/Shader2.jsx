import { LiquidMetal } from '@paper-design/shaders-react'

export function Shader() {
	return (
		<LiquidMetal
			width={120}
			height={120}
			image="assets/flower.svg"
			colorTint="#c735a7"
			repetition={2}
			softness={0.7}
			shiftRed={0.3}
			shiftBlue={0.3}
			distortion={0.07}
			contour={0.4}
			angle={0}
			speed={1}
			scale={0.9}
			fit="contain"
			colorBack="#1b1b1b"
			maxPixelCount={14400}
		/>
	)
}