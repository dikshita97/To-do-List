// VRoidCharacter.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const VRoidCharacter = () => {
  const [model, setModel] = React.useState(null);

  React.useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('"D:/php/htdocs/todolist/VRM_Addon_for_Blender-2_4_5.zip".glb', (gltf) => {
      setModel(gltf.scene);
    });
  }, []);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        {model && <primitive object={model} />}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default VRoidCharacter;
