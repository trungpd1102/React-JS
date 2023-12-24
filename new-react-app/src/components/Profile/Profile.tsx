import './Profile.css'

export default function Profile() {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    }

    return (
        <div
            style={{
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '20px'
        }}
        >
            <h1 style={{color: 'black'}}>{user.name}</h1>
            <img className="avatar" src={user.imageUrl}
                alt=""
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }} />
        </div>

    )
}