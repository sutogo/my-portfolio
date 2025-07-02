import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stage } from '@react-three/drei'

// モデルを読み込むコンポーネント
function Model() {
  // public/born_knee.glb を読み込む（ファイル名は適宜変更してください）
  const { scene } = useGLTF('/born_knee.glb')
  return <primitive object={scene} />
}

// 3Dシーン全体を定義するコンポーネント
function KneeScene() {
  return (
    <Canvas style={{ width: '100vw', height: '80vh' }} camera={{ fov: 45 }}>
      {/* Stageがよしなに照明と影を設定してくれる */}
      <Stage environment="city" intensity={0.6}>
        <Model />
      </Stage>
      {/* OrbitControlsでモデルをマウスでぐりぐり動かせるようにする */}
      <OrbitControls autoRotate />
    </Canvas>
  )
}

export default KneeScene