import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGif(category);

    // useEffect(() => {
    //     getGifs(category).then(setImages);
    // }, [category]);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated flash">Loading</p>}
            {
                <div className="card-grid">
                    {images.map((img) => (
                        <GifGridItem key={img.id} {...img} />
                    ))}
                </div>
            }
        </>
    );
};
