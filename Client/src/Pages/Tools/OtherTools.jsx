import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const OtherTools = () => {
    const data = [
        {
            title: 'Digital Slide Calipers',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/da605d602181b5d240b4b89fd130ab3a.webp',

        },
        {
            title: 'Screw Driver',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/9020aa3148e5a1bdd536d70b1350dc5f.webp',

        },
        {
            title: 'Glass Cutter',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/ca456000e994c1bfeece16bf022d89dc.webp',

        },
        {
            title: 'Cutting_mat',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/2c223c0decfb56268c1da5798ecf9d6b.webp',

        },
        {
            title: 'Hacksaw',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/099827a7a06a1ca504f39fbe07c3291e.webp',

        },
        {
            title: 'Knife set',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/63e4f97d2914b5a06b60d1ef956d81c7.webp',

        },
        {
            title: 'Needle files set',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/f74c9febb79b9f80017e4dd28f2f0ad0.webp',

        },
        {
            title: 'Plass',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/78d31754bdeecd9fffe64d7a1578ac75.webp',

        },
        {
            title: 'Hot Baded Spatula',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/a28f96b98c7f16ca19cd8f23c48bb6b8.webp',

        },
        {
            title: 'Waterproof abrasive paper',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/dcb03e1915acd6d0b74ce756266ad4b9.webp',

        },
        {
            title: 'Wire cutter',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/1c488dd1d1b20b33a7e166b1fc395718.webp',

        },

    ]
    return (
        <div className='my-10 px-10 flex justify-center'>
            <div className='grid grid-cols-3 gap-5'>
                {
                    data.map((item, index) => (
                        <div key={index} className="card w-96 bg-base-100 shadow-xl  border-slate-950 border-spacing-0.5 border">
                            <figure className="px-10 pt-10">
                                <PhotoProvider>
                                    <PhotoView src={item.img} >
                                        <img src={item.img} alt="Shoes" className="rounded-xl" />
                                    </PhotoView>
                                </PhotoProvider>

                            </figure>
                            <div className="card-body items-center text-center border-slate-950 border-spacing-0.5 border-t">
                                <h2 className="card-title">{item.title}</h2>


                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OtherTools;