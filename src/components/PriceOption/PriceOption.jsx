import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {

    const { id, optionName, features, price } = option;

    return (

        <div className='bg-lime-600 py-6 rounded-lg flex flex-col '>
            <h2 className="text-center">
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl'>/month</span>
            </h2>

            <h2 className='text-3xl font-semibold mt-4'>{optionName}</h2>

            <div className='m-4 flex-grow'>
                {
                    features.map((feature, index) => <Feature
                        key={index}
                        feature={feature}
                    ></Feature>)
                }
            </div>

            <button className='w-1/2 mx-auto text-white font-semibold bg-red-600 hover:bg-red-700 mt-6 py-2 rounded-3xl'>Buy Now</button>

        </div>

    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;