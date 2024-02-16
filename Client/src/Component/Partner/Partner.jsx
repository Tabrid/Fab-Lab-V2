const Partner = () => {

     const data = [
        {
            id: 1,
            image: 'https://i.ibb.co/YQgxNXJ/5300ce4ecfacd652e48acd91f710ad86.jpg',
        },
        {
            id: 2,
            image: 'https://i.ibb.co/mFHJtpc/ed6b46689338fa7609debe4f0a209cdd.jpg',
        },
        {
            id: 3,
            image: 'https://i.ibb.co/S3vwMzz/84052bfc0cfc7bcfb4ac2f6e00d8f687.jpg',
        },
     ]

    return (
        <div className=" w-full bg-base-100 flex flex-col justify-center items-center py-16">
            <div className="flex-col flex justify-center items-center">
                <h2 className="text-5xl font-bold uppercase">Our Partners</h2>
                <p className="text-lg py-3">We have some supporting and media partners.</p>    
            </div>
            <div className="flex flex-row justify-center items-center gap-5">
                {
                    data.map((item) => (
                        <div key={item.id} >
                            <img src={item.image} />
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Partner;