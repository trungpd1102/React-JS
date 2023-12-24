
export default function CusButton() {

    const name = 'Trung'

    function handleButton() {
        alert("Button is clicked")
    }

    return (
        <>
            <button onClick={handleButton}> Custom Button by {name}</button>
        </>
    )
}