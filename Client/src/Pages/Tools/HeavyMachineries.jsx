import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const HeavyMachineries = () => {
    const data = [
        {
            title: 'Original PRUSA i3',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/c86f9cd48c587522d7d37699f70c094d.webp',

        },
        {
            title: 'Laser Cutter',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/7320db243ed138f4c6a143fb7e6974d5.webp',

        },
        {
            title: 'Photon-Resing Printer',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/d97803eb8d0c9b9b65ce38175d97faf0.webp',

        },
        {
            title: 'Creality-CR-10S Pro',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/5a4d1a12acd4b6c774db0694e845bfc3.webp',

        },
        {
            title: 'Creality-CR-10 Max',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/b6a413a54c4faaa08365d19890b85390.webp',

        }

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

export default HeavyMachineries;