import axios from 'axios';

interface ImageObject {
    id: number;
    subTitle: string;
    photo: string;
    link: string;
}

const fetch_images = async (): Promise<ImageObject[] | undefined> => {
    try {
        const formData = new FormData();
        formData.append("client_dir_name", "spearhead_243435432");
        formData.append("client_dir", "pages/pa_barbaraizziatelier");

        const response = await axios.post(
            'https://techfluxsolutions.com/web_shop/app/api/fetch_images.php',
            formData
        );

        if (response?.data) {
            const images = response.data as string[];
            
            const perfect_obj: ImageObject[] = images.map((img, index) => {
                const imgName = img.split('/').pop() || ''; // Fallback if `split` fails
                return {
                    id: index + 1,
                    subTitle: String(index + 1).padStart(2, '0'),
                    photo: img,
                    link: `https://www.instagram.com/p/${imgName}/?img_index=1`
                };
            });

            return perfect_obj;
        } else {
            console.error('Data not found for images.');
            return undefined;
        }
    } catch (err) {
        console.error('Failed to fetch images:', err);
        return undefined;
    }
};

export default fetch_images;
