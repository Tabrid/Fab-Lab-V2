import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PowerTools = () => {
    const data = [
        {
            title: 'Glue gun',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/35d85594d0366f3bed1cd0d7aa47b188.webp',

        },
        {
            title: 'Hot Air Gun',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/b3d68013704a141afe4f657d44b54f6d.webp',

        },
        {
            title: 'Drill',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/92891b33d9ec9701b7dc6a031629a85a.webp',

        },
        {
            title: 'Air Blower',
            img: 'https://daffodilvarsity.edu.bd/images/lab-tool/f5b099a1e61a961e7c6da24e438f2fa9.webp',

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

export default PowerTools;