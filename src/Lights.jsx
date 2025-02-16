import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Lights()
{
    const light = useRef()
    
    useFrame((state) =>
    {
        light.current.position.z = state.camera.position.z + 1 - 4
        light.current.target.position.z = state.camera.position.z - 4
        light.current.target.updateMatrixWorld()
    })

    return <>
        <directionalLight
            ref={ light }
            castShadow
            position={ [ 3, 4, 3 ] }
            intensity={ 4.5 }
            shadow-mapSize={ [ 2048, 2048 ] }
            shadow-camera-near={ -30 }
            shadow-camera-far={ 30 }
            shadow-camera-top={ 30 }
            shadow-camera-right={ 30 }
            shadow-camera-bottom={ - 30 }
            shadow-camera-left={ - 30 }
        />
        <ambientLight intensity={ 1.5 } />
    </>
}