import {ShippingOption} from '../../../enums';

const getShippingCost = (weight, shippingOption) => {
    const shippingRate = 0.40;
    return weight * shippingRate *
        (Number(shippingOption) === ShippingOption.ground ? 1 : 1.5);
};

export default getShippingCost;