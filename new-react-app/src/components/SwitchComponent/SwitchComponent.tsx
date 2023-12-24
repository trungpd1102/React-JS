import { useState } from "react";

import CusButton from '../CusButton/CusButton';
import Profile from '../Profile/Profile';

export default function SwitchComponent() {
    // let component
    let [isProfile, setIsProfile] = useState(false)

    // component = isProfile ? <Profile /> : <CusButton />

    return (

        <>
            <div style={{ display: 'flex' }}>
                <input
                    type="checkbox"
                    name="checkComponent"
                    id="checkComponent"
                    checked={isProfile}
                    onChange={e => onChange(e.target.checked)}
                />
                <label htmlFor="checkComponent"> Switch component</label>
            </div>
            {/* {component} */}

            {
                isProfile ? <Profile /> : <CusButton />
            }
        </>
    )

    function onChange(checked: boolean) {
        console.log({ checked });

        // TODO: how to await setIsProfile
        setIsProfile(checked)

        console.log({ isProfile });

    }
}