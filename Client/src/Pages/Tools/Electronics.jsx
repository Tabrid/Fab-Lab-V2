import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Electronics = () => {
    const data = [
        {
            title: 'Adapter',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/da605d602181b5d240b4b89fd130ab3a.webp',

        },
        {
            title: 'DHT 22',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/0e1d574ffabcae9baa18be5d16292cea.webp',

        },
        {
            title: 'stepper motor',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/4963a06f625de4cacfb60943b696e3ff.webp',

        },
        {
            title: 'Raspberry PI',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/4d7af8844b372b602135d8918ddaa77e.webp',

        },
        {
            title: 'Memory Card',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/8787a7feec7eff7ea8f19929205f8c00.webp',

        },
        {
            title: 'Microchip',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/ba038c940a1f1ffc5c2c6a8a49ecd794.webp',

        },
        {
            title: 'Card Reader',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/e36396c6d8b23fff3b8758b2ce2331db.webp',

        },
        {
            title: 'Water Chiller',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/f3007a9ea71a4a6db243fcd3c0c10200.webp',

        },
        {
            title: 'Web Cam',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/a1a17344d4dc54699b17e3d50c4e7cb9.webp',

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

export default Electronics;