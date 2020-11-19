const get_yield_for_plant = (plant, environment_factors) => {
    let yield_with_environment_factors = 0

    // calculate additional yield due to 
    // environmental factors
    for (let factor in environment_factors) {
        let environment_factor_value = environment_factors[factor];
        let plant_environment_factor = plant.factors[factor];
        // additional yield in percentage from the environmental
        // factor
        let additional_yield = plant_environment_factor[environment_factor_value];
        // calculated additional yield 
        // (percentare/100) * yield
        yield_with_environment_factors += (additional_yield / 100) * plant.yield;
    }

    return plant.yield + yield_with_environment_factors;
}

const get_yield_for_crop = (crop, environment_factors) => {
    return crop.num_crops * get_yield_for_plant(crop.crop, environment_factors);
}

function get_total_yield({ crops }) {
    let total = 0
    crops.forEach(crop => {
        total += get_yield_for_crop(crop)
    });
    return total
}

const get_costs_for_crop = (crop) => {
    return crop.num_crops * 1
}

const get_revenue_for_crop = (crop, environment_factors) => {
    return get_yield_for_crop(crop, environment_factors) * crop.crop.sales_price
};

const get_profit_for_crop = (crop, environment_factors) => {
    return get_revenue_for_crop(crop, environment_factors) - get_costs_for_crop(crop)
}

const get_total_profit = ({ crops }, environment_factors) => {
    let total = 0
    crops.forEach(crop => {
        total += get_profit_for_crop(crop, environment_factors)
    });
    return total
}

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_revenue_for_crop,
    get_profit_for_crop,
    get_total_profit,
}

