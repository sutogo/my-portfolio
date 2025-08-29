import * as THREE from 'three'
import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'

// シェーダーコード（GLSL）
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uProgress;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec2 vUv;

  void main() {
    // ワイヤーフレームのパターンを生成
    float grid = max(step(0.9, fract(vUv.x * 10.0)), step(0.9, fract(vUv.y * 10.0)));
    
    // uProgressに応じて色を混ぜる
    vec3 color = mix(uColorA, uColorB, uProgress);
    
    // uProgressに応じてワイヤーフレームからソリッドに変化させる
    float alpha = mix(grid, 1.0, uProgress);

    gl_FragColor = vec4(color, alpha);
  }
`

// Reactコンポーネントとして使えるようにする
const MorphingMaterial = shaderMaterial(
  {
    uProgress: 0,
    uColorA: new THREE.Color('#00aaff'), // ★ ワイヤーフレームの色を少し暗めの青に変更
    uColorB: new THREE.Color('#cccccc'), // ★ ソリッドの色を少し暗めのグレーに変更
  },
  vertexShader,
  fragmentShader
)

extend({ MorphingMaterial })

export default MorphingMaterial