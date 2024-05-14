import PropTypes from 'prop-types';
import { IoCheckmarkCircle } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2 text-left'>
            <IoCheckmarkCircle className='text-red-600' />   {feature}
            </p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;