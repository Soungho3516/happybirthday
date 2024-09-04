import ImageGallery from 'react-image-gallery';
import csh1 from './csh1.jpg';
import csh2 from './csh2.jpg';
import csh3 from './csh3.jpg';
import csh4 from './csh4.jpg';
import csh5 from './csh5.jpg';
import csh6 from './csh6.jpg';
import csh7 from './csh7.jpg';
import csh8 from './csh8.jpg';

const images = [];
images.push({ original: csh1, thumbnail: csh1});
images.push({ original: csh2, thumbnail: csh2});
images.push({ original: csh3, thumbnail: csh3});
images.push({ original: csh4, thumbnail: csh4});
images.push({ original: csh5, thumbnail: csh5});
images.push({ original: csh6, thumbnail: csh6});
images.push({ original: csh7, thumbnail: csh7});
images.push({ original: csh8, thumbnail: csh8});

function MyGallery() {
    return(
        <ImageGallery items={images} />
    )
}

export default MyGallery;