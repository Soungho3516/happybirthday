import ImageGallery from 'react-image-gallery';
import day1 from './galleryImg/1day.jpg';
import day10 from './galleryImg/10day.jpg';
import day50 from './galleryImg/50day.jpg';
import day100 from './galleryImg/100day.jpg';
import day150 from './galleryImg/150day.jpg';
import day200 from './galleryImg/200day.jpg';
import day250 from './galleryImg/250day.jpg';
import day300 from './galleryImg/300day.jpg';
import day350 from './galleryImg/350day.jpg';

const images = [];
images.push({ original: day1, thumbnail: day1});
images.push({ original: day10, thumbnail: day10});
images.push({ original: day50, thumbnail: day50});
images.push({ original: day100, thumbnail: day100});
images.push({ original: day150, thumbnail: day150});
images.push({ original: day200, thumbnail: day200});
images.push({ original: day250, thumbnail: day250});
images.push({ original: day300, thumbnail: day300});
images.push({ original: day350, thumbnail: day350});

function MyGallery() {
    return(
        <ImageGallery items={images} />
    )
}

export default MyGallery;