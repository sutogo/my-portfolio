/// <reference path="../types/global.d.ts" />

import { useRef, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import gsap from 'gsap'

function Model() {
  const { nodes } = useGLTF('/born_knee.glb')
  const materialRef = useRef<any>(null)
  const meshRef = useRef<any>(null)

  useEffect(() => {
    if (materialRef.current) {
      gsap.to(materialRef.current.uniforms.uProgress, {
        value: 1,
        duration: 2.5,
        ease: 'power2.inOut',
      })
    }
    if (meshRef.current) {
      gsap.to(meshRef.current.rotation, {
        y: Math.PI * 2, // ★ Z軸からY軸に変更
        duration: 2.5,
        ease: 'power2.inOut',
      })
    }
  }, [])

  return (
    <mesh
      ref={meshRef}
      geometry={(nodes['tripo_node_19239756-3b32-4ebf-b5a8-a8ef441171cd'] as any).geometry}
    >
      <morphingMaterial ref={materialRef} />
    </mesh>
  )
}

function CameraAnimation() {
  const { camera } = useThree()

  useEffect(() => {
    // A案をベースに調整
    camera.position.set(0, 0, 12)
    camera.rotation.set(0, 0, 0)

    // カメラの寄り（Z軸）はそのまま
    gsap.to(camera.position, {
      z: 0.8, // Zoom in closer
      duration: 2.2,
      ease: 'power3.inOut',
    })

    // カメラの回転をY軸に変更
    gsap.to(camera.rotation, {
      y: -0.4, // ★ Z軸からY軸に変更（モデルの回転と逆方向で少し動きを出す）
      duration: 2.2,
      ease: 'power3.inOut',
    })
  }, [camera])

  return null
}

function KneeScene() {
  return (
    <Canvas style={{ width: '100vw', height: '80vh' }} camera={{ fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model />
      <OrbitControls />
      <CameraAnimation />
    </Canvas>
  )
}

export default KneeScene
