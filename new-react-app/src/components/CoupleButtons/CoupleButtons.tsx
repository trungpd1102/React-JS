import { useState } from 'react';
import SingleButton from './SingleButton';

export default function CoupleButtons() {
    const [mainCount, setMainCount] = useState<number>(0)

    function handleClick() {
        setMainCount(mainCount + 1);
      }

    return (
        <>
            <h1> Click to set count</h1>
            <h1> Main Count: {mainCount}</h1>
            <SingleButton count={mainCount} onClick={handleClick}/> 
            <SingleButton count={mainCount} onClick={handleClick}/>
        </>
    );
  }