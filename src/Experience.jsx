

import { useMemo, useEffect, useState, useRef } from 'react'
import { InstancedRigidBodies, CylinderCollider, BallCollider, CuboidCollider, RigidBody, Physics } from '@react-three/rapier'
import Lights from './Lights.jsx'
import Player from './Player.jsx'
import useGame from './stores/useGame.jsx'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Float, Text, useGLTF , OrbitControls } from '@react-three/drei'


export default function Experience()
{
    const [ hitSound ] = useState(() => new Audio('./hit.mp3'))
    const twister = useRef()
    const cube = useRef()
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey' })
    let posx= 4;
    let posy=0;
    const oldDoor= useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/door-old/model.gltf')
      oldDoor.scene.children.forEach((mesh) =>
    {
        mesh.castShadow = true
    })
   
    {/*const instances = useMemo(() =>
    useFrame((state) =>
    {
        const time = state.clock.getElapsedTime()
        
        const eulerRotation = new THREE.Euler(0, time * 3, 0)
        const quaternionRotation = new THREE.Quaternion()
        quaternionRotation.setFromEuler(eulerRotation)
        twister.current.setNextKinematicRotation(quaternionRotation)

        const angle = time * 0.5
        const x = Math.cos(angle) * 2
        const z = Math.sin(angle) * 2
        twister.current.setNextKinematicTranslation({ x: x, y: - 0.8, z: z })
    })
    const cubeJump = () =>
    {
        const mass = cube.current.mass()
        
        cube.current.applyImpulse({ x: 0, y: 5 * mass, z: 0 })
        cube.current.applyTorqueImpulse({ x: Math.random() - 0.5, y: Math.random() - 0.5, z: Math.random() - 0.5 })
    }

*/}
    const cubesCount = 100
    {/*const instances = useMemo(() =>
    {
        const instances = [];

        for(let i = 0; i < cubesCount; i++)
        {
            instances.push({
                key: 'instance_' + i,
                position:
                [
                    (Math.random() - 0.5) * 8,
                    6 + i * 0.2,
                    (Math.random() - 0.5) * 8,
                ],
                rotation: [ Math.random(), Math.random(), Math.random() ],
            })
        }

        return instances;
    }, [])
*/}
    return <>

        <Physics  gravity={ [ 0, - 9.08, 0 ] }>
{/*        <Perf position="top-left" /> */}
        <Lights /> 

           {/* <RigidBody
                ref={ cube }
                position={ [ 1.5, 2, 0 ] }
                gravityScale={ 1 }
                restitution={ 0 }
                friction={ 0.7 }
                colliders={ false }
                // onCollisionEnter={ collisionEnter }
                // onCollisionExit={ () => { console.log('exit') } }
                // onSleep={ () => { console.log('sleep') } }
                // onWake={ () => { console.log('wake') } }
            >
                <mesh castShadow onClick={ cubeJump }>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
                <CuboidCollider mass={ 2 } args={ [ 0.5, 0.5, 0.5 ] } />
            </RigidBody>
            */}
            <RigidBody
                type="fixed"
                restitution={ 0 }
                friction={ 0.7 }
            >
                     <mesh receiveShadow position-y={ - 1.25 }>
                    <boxGeometry args={ [ 45, 0.5, 50 ] } />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </RigidBody>
{/*
            <RigidBody
                ref={ twister }
                position={ [ 0, - 0.8, 0 ] }
                friction={ 0 }
                type="kinematicPosition"
            >
                <mesh castShadow scale={ [ 0.4, 0.4, 3 ] }>
                    <boxGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>
            </RigidBody>

            <RigidBody colliders={ false } position={ [ 0, 4, 0 ] }
            >                
                <primitive object={ hamburger.scene } scale={ 0.25 } />
                 <CylinderCollider args={ [ 0.5, 1.25 ] } />
            </RigidBody>
 */}

 //#region middle plus one line
    {/*bottom 8_1 -b*/}
    <RigidBody type="fixed"><mesh position={ [-20  , -0.25, -1 +24] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
    {/*bottom 8_1 -t*/}
    <RigidBody type="fixed"><mesh position={ [-16  , -0.25, -5+24 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>

        <Text
            scale={ 1 }
            position={ [ -20 + 2.15 , 0.42, -2+20 ] }
            rotation = {[-Math.PI/2,0,0]}
        >
            START
            <meshBasicMaterial toneMapped={ false } />
        </Text>
    {/*bottom 8_1 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -20 + 2.15 , -0.25, -2+24 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    {/*bottom 8_1 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-20 + 2.15 , -0.25, -4+24 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

    {/*bottom 8_2 -b*/}
    <RigidBody type="fixed"><mesh position={ [-10  , -0.25, -1+24 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,8 ] } castShadow />
    </RigidBody>

    {/*bottom 8_2 -t*/}
    <RigidBody type="fixed"><mesh position={ [-12  , -0.25, -5+24 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
    

    {/*bottom 8_3 -lb*/}
  <RigidBody type="fixed"><mesh position={ [-4 - 2.15 , -0.25, -2+24 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

    {/*bottom 8_3 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ -4 - 2.15 , -0.25, -4+24 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 8_3 -ob*/}

        {/*bottom 8_3 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-4  , -0.25, -5+24 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>

        {/*bottom 8_3 -rb*/}
        {/*bottom 8_3 -rt*/}


        {/*bottom 8_4 -lb*/}
    <RigidBody type="fixed"><mesh position={ [posx - 2.15 , -0.25, -2+24] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 8_4 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ posx - 2.15 , -0.25, -4+24 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>

        {/*bottom 8_4 -ob*/}
    <RigidBody type="fixed"><mesh position={ [posx  , -0.25, -1+24 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
    
        {/*bottom 8_4 -ot*/}
    <RigidBody type="fixed"><mesh position={ [posx  , -0.25, -5+24 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>

        {/*bottom 8_4 -rb*/}
        {/*bottom 8_4 -rt*/}
        {/*bottom 8_5 -lb*/}
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -2+24 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 8_5 -lt*/}
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -4+24 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>

        {/*bottom 8_5 -ob*/}
    <RigidBody type="fixed"><mesh position={ [12  , -0.25, -1+24 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>

        {/*bottom 8_5 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ 12 + 2.15 , -0.25, -2+24 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

        {/*bottom 8_5 -rt*/}
    <RigidBody type="fixed"><mesh position={ [12 + 2.15 , -0.25, -4+24 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>


        {/*bottom 8_6 -lb*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -2+24 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 8_6 -lt*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -4+24 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 8_6 -ob*/}
    <RigidBody type="fixed"><mesh position={ [20  , -0.25, -1+24 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 8_6 -ot-d*/}
        {/*bottom 8_6 -rb-d*/}
        {/*bottom 8_6 -rt-d*/}
//#endregion




        {/*bottom 7 startleft*/}
 //#region middle+18 line
        {/*bottom 7_1 -lb-d*/}
        {/*bottom 7_1 -lt-d*/}
        {/*bottom 7_1 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-20  , -0.25, -1 +18] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>

        {/*bottom 7_1 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-20 +2  , -0.25, -5+18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,8 ] } castShadow />
    </RigidBody>
        {/*bottom 7_1 -rb-d*/}
        {/*bottom 7_1 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-20 + 2.15 , -0.25, -4+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

        {/*bottom 7_2 -lb*/}
<RigidBody type="fixed"><mesh position={ [-12 - 2.15 , -0.25, -2 +18] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 7_2 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ -12 - 2.15 , -0.25, -4+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 7_2 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-12  , -0.25, -1+18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 7_2 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-12  , -0.25, -5+18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 7_2 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -12 + 2.15 , -0.25, -2+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 7_2 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-12 + 2.15 , -0.25, -4+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    

        {/*bottom 7_3 -lb-d*/}
        {/*bottom 7_3 -lt-d*/}
        {/*bottom 7_3 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-4  , -0.25, -1+18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 7_3 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-4  , -0.25, -5+18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 7_3 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -4 + 2.15 , -0.25, -2+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>
        {/*bottom 7_3 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-4 + 2.15 , -0.25, -4+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>


        {/*bottom 7_4 -lb*/}
    <RigidBody type="fixed"><mesh position={ [posx - 2.15 , -0.25, -2+18] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 7_4 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ posx - 2.15 , -0.25, -4+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 7_4 -ob*/}
    <RigidBody type="fixed"><mesh position={ [posx  , -0.25, -1+18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 7_4 -ot*/}
    <RigidBody type="fixed"><mesh position={ [posx  , -0.25, -5+18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 7_4 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ posx + 2.15 , -0.25, -2+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 7_4 -rt*/}
    <RigidBody type="fixed"><mesh position={ [posx + 2.15 , -0.25, -4+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

        {/*bottom 7_5 -lb*/}
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -2+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 7_5 -lt*/}
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -4+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 7_5 -ob*/}
    <RigidBody type="fixed"><mesh position={ [12  +2  , -0.25, -1+18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,8 ] } castShadow />
    </RigidBody>
        {/*bottom 7_5 -ot-d*/}
        {/*bottom 7_5 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ 12 + 1.15 , -0.25, -2+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 7_5 -rt*/}
    <RigidBody type="fixed"><mesh position={ [12 + 1.15 , -0.25, -4+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>


        {/*bottom 7_6 -lb*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -2+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 7_6 -lt*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -4+18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 7_6 -ob-d*/}
        {/*bottom 7_6 -ot -d*/}
        {/*bottom 7_6 -rb-d*/}
        {/*bottom 7_6 -rt-d*/}
//#endregion


 //#region middle+12 line
        {/*bottom 6_1 -lb-d*/}
        {/*bottom 6_1 -lt-d*/}
        {/*bottom 6_1 -ob-d*/}
        {/*bottom 6_1 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-20  , -0.25, -5+12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 6_1 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -20 + 2.15 , -0.25, -2+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 6_1 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-20 + 2.15 , -0.25, -4+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

        {/*bottom 6_2 -lb*/}
<RigidBody type="fixed"><mesh position={ [-12 - 2.15 , -0.25, -2 +12] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 6_2 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ -12 - 2.15 , -0.25, -4+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 6_2 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-12  , -0.25, -1+12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 6_2 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-12  +2, -0.25, -5+12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,9 ] } castShadow />
    </RigidBody>
        {/*bottom 6_2 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -12 + 2.15 , -0.25, -2+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 6_2 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-12 + 2.15 , -0.25, -4+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    

        {/*bottom 6_3 -lb*/}
  <RigidBody type="fixed"><mesh position={ [-4 - 2.15 , -0.25, -2+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>
        {/*bottom 6_3 -lt-d*/}
        {/*bottom 6_3 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-4  , -0.25, -1+12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 6_3 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-4  , -0.25, -5+12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 6_3 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -4 + 2.15 , -0.25, -2+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 6_3 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-4 + 2.15 , -0.25, -4+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>


        {/*bottom 6_4 -lb*/}
    <RigidBody type="fixed"><mesh position={ [posx - 2.15 , -0.25, -2+12] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 6_4 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ posx - 2.15 , -0.25, -4+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 6_4 -ob*/}
    <RigidBody type="fixed"><mesh position={ [posx  , -0.25, -1+12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>

        {/*bottom 6_4 -ot*/}
    <RigidBody type="fixed"><mesh position={ [posx  , -0.25, -5+12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 6_4 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ posx + 2.15 , -0.25, -2+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 6_4 -rt*/}
    <RigidBody type="fixed"><mesh position={ [posx + 2.15 , -0.25, -4+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

        {/*bottom 6_5 -lb*/}
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -2+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 6_5 -lt*/}
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -4+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 6_5 -ob*/}
    <RigidBody type="fixed"><mesh position={ [12  , -0.25, -1+12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 6_5 -rb-d*/}
        {/*bottom 6_5 -rt*/}
    <RigidBody type="fixed"><mesh position={ [12 + 2.15 , -0.25, -4+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>


        {/*bottom 6_6 -lb*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -2+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 6_6 -lt*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -4+12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 6_6 -ob*/}
    <RigidBody type="fixed"><mesh position={ [20  , -0.25, -1+12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 6_6 -ot-d*/}
        {/*bottom 6_6 -rb-d*/}
        {/*bottom 6_6 -rt-d*/}
//#endregion


 



 //#region middle+6 line
        {/*bottom 5_1 -lb-d*/}
        {/*bottom 5_1 -lt-d*/}
        {/*bottom 5_1 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-20  +2, -0.25, -1 +6] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,8 ] } castShadow />
    </RigidBody>
        {/*bottom 5_1 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-20  , -0.25, -5+6 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 5_1 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -20 + 2.15 , -0.25, -2+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 5_1 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-20 + 2.15 , -0.25, -4+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

        {/*bottom 5_2 -lb*/}
<RigidBody type="fixed"><mesh position={ [-12 - 2.15 , -0.25, -2 +6] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 5_2 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ -12 - 2.15 , -0.25, -4+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 5_2 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-12  , -0.25, -1+6 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 5_2 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-12  , -0.25, -5+6 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 5_2 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -12 + 2.15 , -0.25, -2+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 5_2 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-12 + 2.15 , -0.25, -4+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    

        {/*bottom 5_3 -lb*/}
  <RigidBody type="fixed"><mesh position={ [-4 - 2.15 , -0.25, -2+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 5_3 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ -4 - 2.15 , -0.25, -4+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 5_3 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-4  +2, -0.25, -1+6 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,8 ] } castShadow />
    </RigidBody>
        {/*bottom 5_3 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-4  , -0.25, -5+6 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 5_3 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -4 + 2.15 , -0.25, -2+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 5_3 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-4 + 2.15 , -0.25, -4+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>


        {/*bottom 5_4 -lb-d*/}
        {/*bottom 5_4 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ posx - 2.15 , -0.25, -4+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>
        {/*bottom 5_4 -ob*/}
    <RigidBody type="fixed"><mesh position={ [posx  , -0.25, -1+6 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 5_4 -ot-d*/}
        {/*bottom 5_4 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ posx + 2.15 , -0.25, -2+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 5_4 -rt*/}
    <RigidBody type="fixed"><mesh position={ [posx + 2.15 , -0.25, -4+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

        {/*bottom 5_5 -lb-d*/}
        {/*bottom 5_5 -lt*/}
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -4+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>
        {/*bottom 5_5 -ob*/}
    <RigidBody type="fixed"><mesh position={ [12  +2, -0.25, -1+6 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,8 ] } castShadow />
    </RigidBody>
        {/*bottom 5_5 -ot-d*/}
        {/*bottom 5_5 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ 12 + 2.15 , -0.25, -2+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 5_5 -rt*/}
    <RigidBody type="fixed"><mesh position={ [12 + 2.15 , -0.25, -4+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>


        {/*bottom 5_6 -lb*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -2+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 5_6 -lt*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -4+6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 5_6 -ob-d*/}
        {/*bottom 5_6 -ot-d*/}
        {/*bottom 5_6 -rb-d*/}
        {/*bottom 5_6 -rt-d*/}
//#endregion


 

 //#region middle line
        {/*bottom 4_1 -lb*/}
<RigidBody type="fixed"><mesh position={ [-20 - 2.15 , -0.25, -2 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_1 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ -20 - 2.15 , -0.25, -4 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_1 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-20  +3, -0.25, -1 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>

        {/*bottom 4_1 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-20  , -0.25, -5 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 4_1 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -20 + 2.15 , -0.25, -2 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_1 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-20 + 2.15 , -0.25, -4 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

        {/*bottom 4_2 -lb*/}
<RigidBody type="fixed"><mesh position={ [-12 - 2.15 , -0.25, -2 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_2 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ -12 - 2.15 , -0.25, -4 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_2 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-12  , -0.25, -1 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 4_2 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-12  , -0.25, -5 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 4_2 -rb-d*/}
        {/*bottom 4_2 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-12 + 2.15 , -0.25, -4 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>
    

        {/*bottom 4_3 -lb*/}
  <RigidBody type="fixed"><mesh position={ [-4 - 2.15 , -0.25, -2 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_3 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ -4 - 2.15 , -0.25, -4 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_3 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-4  , -0.25, -1 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 4_3 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-4  +3, -0.25, -5 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>
        {/*bottom 4_3 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -4 + 2.15 , -0.25, -2 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_3 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-4 + 2.15 , -0.25, -4 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>


        {/*bottom 4_4 -lb*/}
    <RigidBody type="fixed"><mesh position={ [posx - 2.15 , -0.25, -2 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_4 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ posx - 2.15 , -0.25, -4 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_4 -ob*/}
    <RigidBody type="fixed"><mesh position={ [posx  , -0.25, -1 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 4_4 -ot-d*/}
        {/*bottom 4_4 -rb-d*/}
        {/*bottom 4_4 -rt*/}
    <RigidBody type="fixed"><mesh position={ [posx + 2.15 , -0.25, -4 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>

    
        {/*bottom 4_5 -lb*/}
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -2 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_5 -lt*/}
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -4 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_5 -ob*/}
    <RigidBody type="fixed"><mesh position={ [12  , -0.25, -1 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 4_5 -ot*/}
    <RigidBody type="fixed"><mesh position={ [12  , -0.25, -1 -4] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 4_5 -rb-d*/}
        {/*bottom 4_5 -rt*/}
    <RigidBody type="fixed"><mesh position={ [12 + 2.15 , -0.25, -4  ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>


        <Text
            scale={ 1 }
            position={  [20 - 2.15 , 3.25, 2 ]}
            rotation = {[-Math.PI/2,0,0]}
            maxWidth={3}
         >  I love automation and Vim both are major lifechanger
            <meshBasicMaterial toneMapped={ false } />
        </Text>

        {/*bottom 4_6 -lb*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -2 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_6 -lt*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -4 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 4_6 -ob*/}
    <RigidBody type="fixed"><mesh position={ [20  , -0.25, -1 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 4_6 -ot-d*/}
        {/*bottom 4_6 -rb-d*/}
        {/*bottom 4_6 -rt-d*/}
//#endregion



        <Text
            scale={ 1 }
            position={  [-20  , 3.25, -1 -12]}
            rotation = {[-Math.PI/2,0,0]}
         >            Big Fan of Arijit Singh
            <meshBasicMaterial toneMapped={ false } />
        </Text>

 //#region m-1-1  one line
        {/*bottom 2_1 -lb-d*/}
        {/*bottom 2_1 -lt-d*/}
        {/*bottom 2_1 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-20  , -0.25, -1 -12] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 2_1 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-20  , -0.25, -5-12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 2_1 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -20 + 2.15 , -0.25, -2-12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 2_1 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-20 + 2.15 , -0.25, -4-12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>


        {/*bottom 2_2 -lb*/}
<RigidBody type="fixed"><mesh position={ [-12 - 2.15 , -0.25,  -12] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>
        {/*bottom 2_2 -lt-d*/}
        {/*bottom 2_2 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-12  , -0.25, -1-12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 2_2 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-12  , -0.25, -5-12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 2_2 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -12 + 2.15 , -0.25, -2-12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 2_2 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-12 + 2.15 , -0.25, -4-12 -1 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,5 ] } castShadow />
    </RigidBody>
    

        {/*bottom 2_3 -lb*/}
  <RigidBody type="fixed"><mesh position={ [-4 - 2.15 , -0.25, -2-12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>
        {/*bottom 2_3 -lt-d*/}
        {/*bottom 2_3 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-4  +2, -0.25, -1-12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,8 ] } castShadow />
    </RigidBody>
        {/*bottom 2_3 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-4  , -0.25, -5-12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 2_3 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -4 + 2.15 , -0.25, -2-12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 2_3 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-4 + 2.15 , -0.25, -4-12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>


        {/*bottom 2_4 -lb*/}
    <RigidBody type="fixed"><mesh position={ [posx - 2.15 , -0.25, -2-12] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 2_4 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ posx - 2.15 , -0.25, -4-12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 2_4 -ob*/}
    <RigidBody type="fixed"><mesh position={ [posx  , -0.25, -1-12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 2_4 -ot-d*/}
        {/*bottom 2_4 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ posx + 2.15 , -0.25, -2-12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 2_4 -rt*/}
    <RigidBody type="fixed"><mesh position={ [posx + 2.15 , -0.25, -4-12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

        {/*bottom 2_5 -lb-d*/}
        {/*bottom 2_5 -lt*/}
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -4-12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>
        {/*bottom 2_5 -ob*/}
    <RigidBody type="fixed"><mesh position={ [12  , -0.25, -1-12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 2_5 -ot-d*/}
        {/*bottom 2_5 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ 12 + 2.15 , -0.25, -2-12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>
        {/*bottom 2_5 -rt-d*/}



        {/*bottom 2_6 -lb*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -2-12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 2_6 -rt*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -4-12 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 2_6 -ob*/}
    <RigidBody type="fixed"><mesh position={ [20  , -0.25, -1-12 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 2_6 -ot-d*/}
        {/*bottom 2_6 -rb-d*/}
        {/*bottom 2_6 -rt-d*/}
//#endregion





 //#region m-1-1  one line
        {/*bottom 1_1 -lb-d*/}
        {/*bottom 1_1 -lt-d*/}
        {/*bottom 1_1 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-20  , -0.25, -1 -18] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 1_1 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-20  , -0.25, -5-18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 1_1 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -20 + 2.15 , -0.25, -2-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_1 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-20 + 2.15 , -0.25, -4-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,8 ] } castShadow />
    </RigidBody>


        {/*bottom 1_2 -rb*/}
<RigidBody type="fixed"><mesh position={ [-11 - 2.15 , -0.25, -2 -18] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_2 -rt*/}
    <RigidBody type="fixed"><mesh position={ [ -11 - 2.15 , -0.25, -4-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_2 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-12  , -0.25, -1-18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 1_2 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-12 +2 , -0.25, -5-18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,8 ] } castShadow />
    </RigidBody>
        {/*bottom 1_2 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -18 + 2.15 , -0.25, -2-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_2 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-18 + 2.15 , -0.25, -4-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    

        <Text
            scale={ 1 }
            position={  [   -4 - 2.15 , 3.25, -2-18 ]}
            rotation = {[-Math.PI/2,0,0]}
        > I have worked in e-commerce and CAD development
            <meshBasicMaterial toneMapped={ false } />
        </Text>

        {/*bottom 1_3 -lb*/}
  <RigidBody type="fixed"><mesh position={ [-4 - 2.15 , -0.25, -2-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_3 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ -4 - 2.15 , -0.25, -4-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_3 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-4  , -0.25, -1-18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>

        {/*bottom 1_3 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-4  , -0.25, -5-18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 1_3 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -4 + 2.15 , -0.25, -2-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_3 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-4 + 2.15 , -0.25, -4-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>


        {/*bottom 1_4 -lb*/}
    <RigidBody type="fixed"><mesh position={ [posx - 2.15 , -0.25, -2-18] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_4 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ posx - 2.15 , -0.25, -4-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_4 -ob*/}
    <RigidBody type="fixed"><mesh position={ [posx  , -0.25, -1-18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 1_4 -ot-d*/}
        {/*bottom 1_4 -rb-d*/}
        {/*bottom 1_4 -rt*/}
    <RigidBody type="fixed"><mesh position={ [posx + 2.15 , -0.25, -4-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>


        {/*bottom 1_5 -lb*/}
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -2-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_5 -lt*/}
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -4-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_5 -ob*/}
    <RigidBody type="fixed"><mesh position={ [12  +1, -0.25, -1-18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,6 ] } castShadow />
    </RigidBody>
        {/*bottom 1_5 -ot-d*/}
        {/*bottom 1_5 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ 12 + 2.15 , -0.25, -2-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_5 -rt*/}
    <RigidBody type="fixed"><mesh position={ [12 + 2.15 , -0.25, -4-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

        <Text
            scale={ 1 }
            position={  [20 - 1.11 , 3.25, -2-22 ]}
            rotation = {[-Math.PI/2,0,0]}
        >
           FINISH 
            <meshBasicMaterial toneMapped={ false } />
        </Text>
        <RigidBody colliders="trimesh" position={ [22 - 0.025 , 0.05, -2-21.75] }  restitution = {0.1} friction={ 2}
         >
            <primitive object={ oldDoor.scene } scale={[1,0.9,1]} rotation = {[0,Math.PI/2,0]} />
        </RigidBody>
        {/*bottom 1_6 -lb*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -2-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_6 -lt*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -4-18 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 1_6 -ob*/}
    <RigidBody type="fixed"><mesh position={ [20  , -0.25, -1-18 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 1_6 -ot-d*/}
        {/*bottom 1_6 -rb*/}
//#endregion
// #region for models
  
//#endregion
        <Text
            scale={ 1 }
            position={  [20 - 1.11 , 3.25, -2-1 ]}
            rotation = {[-Math.PI/2,0,0]}
        >Hi I am Inder
            <meshBasicMaterial toneMapped={ false } />
        </Text>

 //#region m-1-6  one line
        {/*bottom 3_1 -lb*/}
<RigidBody type="fixed"><mesh position={ [-20 - 2.15 , -0.25, -2-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 3_1 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ -20 - 2.15 , -0.25, -4-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 3_1 -ob*/}
    <RigidBody type="fixed"><mesh position={ [-20  , -0.25, -1 -6] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 3_1 -ot*/}
    <RigidBody type="fixed"><mesh position={ [-20  , -0.25, -5-6 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
        {/*bottom 3_1 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -20 + 2.15 , -0.25, -2-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 3_1 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-20 + 2.15 , -0.25, -4-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

        <Text
            scale={ 1 }
            position={  [-12 - 2.15 ,3.25, -2 -6]}
            rotation = {[-Math.PI/2,0,0]}
         > I also like some data sorting, and know how to write excel vba 
            <meshBasicMaterial toneMapped={ false } />
        </Text>

        {/*bottom 3_2 -lb*/}
<RigidBody type="fixed"><mesh position={ [-12 - 2.15 , -0.25, -2 -6] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 3_2 -lt*/}
    <RigidBody type="fixed"><mesh position={ [ -6 - 2.15 , -0.25, -4-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 3_2 -ob-d*/}
        {/*bottom 3_2 -ot-d*/}
        {/*bottom 3_2 -rb*/}
    <RigidBody type="fixed"><mesh position={ [ -6 + 2.15 , -0.25, -2-6 ] } rotation={[0,Math.PI / 2,0]} 
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 3_2 -rt*/}
    <RigidBody type="fixed"><mesh position={ [-6 + 2.15 , -0.25, -4-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    

        {/*bottom 3_3 -lb*/}
  <RigidBody type="fixed"><mesh position={ [-4 - 2.15 , -0.25, -2-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    <RigidBody type="fixed"><mesh position={ [ -4 - 2.15 , -0.25, -4-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    <RigidBody type="fixed"><mesh position={ [-4  , -0.25, -1-6 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>

    <RigidBody type="fixed"><mesh position={ [-4  , -0.25, -5-6 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
    <RigidBody type="fixed"><mesh position={ [ -4 + 2.15 , -0.25, -2-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    <RigidBody type="fixed"><mesh position={ [-4 + 2.15 , -0.25, -4-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>


        {/*bottom 3_4 -lb*/}
    <RigidBody type="fixed"><mesh position={ [posx - 2.15 , -0.25, -2-6] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    <RigidBody type="fixed"><mesh position={ [ posx - 2.15 , -0.25, -4-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    <RigidBody type="fixed"><mesh position={ [posx  , -0.25, -1-6 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
    <RigidBody type="fixed"><mesh position={ [ posx + 2.15 , -0.25, -2-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    <RigidBody type="fixed"><mesh position={ [posx + 2.15 , -0.25, -4-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>

        <Text
            scale={ 1 }
            position={  [   12 - 2.15 , 3.25, -2-6 ]}
            rotation = {[-Math.PI/2,0,0]}
        >I can write some magice with c#, C++ Python and typescript
            <meshBasicMaterial toneMapped={ false } />
        </Text>

        {/*bottom 3_5 -lb*/}
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -2-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    <RigidBody type="fixed"><mesh position={ [12 - 2.15 , -0.25, -4-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    <RigidBody type="fixed"><mesh position={ [12  , -0.25, -1-6 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,4 ] } castShadow />
    </RigidBody>
    <RigidBody type="fixed"><mesh position={ [ 12 + 2.15 , -0.25, -2-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    <RigidBody type="fixed"><mesh position={ [12 + 2.15 , -0.25, -4-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>



        <Text
            scale={ 1 }
            position={ [ 20-2.4, 0.25, 0.0 ] }
        >
           hi welcome
            <meshBasicMaterial toneMapped={ false } />
        </Text>
        {/*bottom 3_6 -lb*/}
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -2-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
    <RigidBody type="fixed"><mesh position={ [20 - 2.15 , -0.25, -4-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
        {/*bottom 3_4 -ob-d*/}
        {/*bottom 3_4 -ot-d*/}
    <RigidBody type="fixed"><mesh position={ [ 20 + 2.15 , -0.25, -2-6 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,2 ] } castShadow />
    </RigidBody>
//#endregion




//#region boundaries

    {/*for the right boundary */}
    <RigidBody type="fixed"><mesh position={ [20 + 2.15 , -0.25, 0 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,45 ] } castShadow />
    </RigidBody>

    {/*for the left boundary */}
    <RigidBody type="fixed"><mesh position={ [-22.15, -0.25, 0 ] }
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,50 ] } castShadow />
    </RigidBody>



    <RigidBody type="fixed"><mesh position={ [0  , -0.25, 2+23 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,44 ] } castShadow />
    </RigidBody>

    <RigidBody type="fixed"><mesh position={ [0  , -0.25, -2-23 ] }  rotation={[0,Math.PI / 2,0]}
        geometry={ boxGeometry } material={ wallMaterial }
        scale={ [ 0.3, 1.5,44 ] } castShadow />
    </RigidBody>
//#endregion
{/*  <mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
  <sphereGeometry args={[1, 16, 16]} />
  <meshStandardMaterial color="hotpink" transparent />
</mesh>

            <CuboidCollider
                type="fixed"
                args={ [ 0.3, 1.5, 4 * 2 ] }
                position={ [ 3.0, 0, - (2 * 2) + 2 ] }
                restitution={ 0.2 }
                friction={ 1 }
            />
            </RigidBody>

            <RigidBody type="fixed">
                <CuboidCollider args={ [ 5, 2, 0.5 ] } position={ [ 0, 1, 11 ] } />
                <CuboidCollider args={ [ 0.5, 2, 5 ] } position={ [ 11, 1, 0 ] } />
                <CuboidCollider args={ [ 0.5, 2, 5 ] } position={ [ -11, 1, 0 ] } />
            </RigidBody>

            <RigidBody type="fixed">
                <CuboidCollider args={ [ 5, 2, 0.5 ] } position={ [ 0, 1, 22 ] } />
                <CuboidCollider args={ [ 0.5, 2, 5 ] } position={ [ 22, 1, 0 ] } />
                <CuboidCollider args={ [ 0.5, 2, 5 ] } position={ [ -22, 1, 0 ] } />
            </RigidBody>
*/}
            {/*<InstancedRigidBodies instances={ instances }>
                <CuboidCollider args={ [ 5, 2, 0.5 ] } position={ [ 0, 1, - 5.5 ] } >
                <instancedMesh castShadow receiveShadow args={ [ null, null, cubesCount ] }>
                    <boxGeometry />
                    <meshStandardMaterial color="tomato" />
                </instancedMesh>
            </InstancedRigidBodies>
            
            */}
<Player />
        </Physics>
    </>
}