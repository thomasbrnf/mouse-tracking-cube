import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Cube = () => {
    const ref = useRef<Mesh>(null);
  
    useFrame(({ viewport, pointer }) => {
      const x = (pointer.x * viewport.width) / 2;
      const y = (pointer.y * viewport.height) / 2;
      if (ref.current) {
        // The cube will follow the mouse movement
        ref.current.position.set(x, y, 0);
        ref.current.rotation.set(-y, x, 0);
      }
    });
  
    return (
      <mesh ref={ref}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    );
  };
  
export default Cube;