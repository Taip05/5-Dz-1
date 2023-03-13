import React, { useEffect, useState } from 'react';

function PortfolioPage(props) {

    const [photos, setPhotos] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [urlInfoState, setUrlInfoState] = useState(false);

    const urlInfo = (id) => {
        const info = photos.slice(0, 10).filter(photo =>
            photo.id === id
        )
        setUrlInfoState(info[0]?.url)
        console.log(id);
        setIsShow(prev => !prev)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => setPhotos(photos))
    }, [])


    return (
        <div>
            <h1>portfolio page</h1>

            <div style={{ display: 'flex' }}>
                <div>
                    {
                        photos.slice(0, 10).map(photo => <div>
                            <img src={photo.url} alt="" />
                            <p>{photo.title}</p>
                            <button onClick={() => { urlInfo(photo.id) }}>узнать url</button>

                            <p>------------------------------------------</p>
                        </div>)

                    }
                </div>


                <h2>Url картинки: </h2>
                <h2>
                    {
                        isShow
                        ?
                        urlInfoState
                        :
                        ""
                    }
                </h2>

            </div>

        </div>
    );
}

export default PortfolioPage;