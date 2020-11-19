const {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_revenue_for_crop,
    get_profit_for_crop,
    get_total_profit,
} = require("./farm");

describe("get_yield_for_plant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(get_yield_for_plant(corn)).toBe(30);
    });
});

describe("get_yield_for_crop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            num_crops: 10,
        };
        expect(get_yield_for_crop(input)).toBe(30);
    });
});

describe("get_total_yield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
        ];
        expect(get_total_yield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, num_crops: 0 }];
        expect(get_total_yield({ crops })).toBe(0);
    });
});

describe("get_costs_for_crop", () => {
    test("Get costs for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            num_crops: 10,
        };
        expect(get_costs_for_crop(input)).toBe(10);
    });
});

describe("get_revenue_for_crop", () => {
    test("Get revenue for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            sales_price: 2,
        };
        const input = {
            crop: corn,
            num_crops: 10,
        };
        expect(get_revenue_for_crop(input)).toBe(60);
    });
});

describe("get_profit_for_crop", () => {
    test("Get profit for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            sales_price: 2,
        };
        const input = {
            crop: corn,
            num_crops: 10,
        };
        expect(get_profit_for_crop(input)).toBe(50);
    });
});

describe("get_total_profit", () => {
    test("Calculate total profit with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            sales_price: 2,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            sales_price: 5,
        };
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
        ];
        expect(get_total_profit({ crops })).toBe(63);
    });

    test("Calculate total profit with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
            sales_price: 2,
        };
        const crops = [{ crop: corn, num_crops: 0 }];
        expect(get_total_profit({ crops })).toBe(0);
    });
});

describe("get_yield_for_plant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        },
    };

    const environment_factors = {
        sun: "low",
    };

    test("Get yield for plant with environment factors", () => {
        expect(get_yield_for_plant(corn, environment_factors)).toBe(15);
    });
});

describe("get_yield_for_plant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            wind: {
                placid: 20,
                breeze: 0,
                storm: -50,
            },
        },
    };

    const environment_factors = {
        wind: "placid",
    };

    test("Get yield for plant with environment factors", () => {
        expect(get_yield_for_plant(corn, environment_factors)).toBe(36);
    });
});

describe("get_yield_for_crop", () => {
    test("Get yield for crop wit environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environment_factors = {
            sun: "low",
        };

        const input = {
            crop: corn,
            num_crops: 10,
        };
        expect(get_yield_for_crop(input, environment_factors)).toBe(15);
    });
});

describe("get_profit_for_crop", () => {
    test("Get profit for crop with environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            sales_price: 2,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environment_factors = {
            sun: "low",
        };

        const input = {
            crop: corn,
            num_crops: 10,
        };
        expect(get_profit_for_crop(input, environment_factors)).toBe(20);
    });
});

describe("get_total_profit", () => {
    test("Calculate total profit with multiple crops and environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            sales_price: 2,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            sales_price: 5,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environment_factors = {
            sun: "high",
        };

        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
        ];
        expect(get_total_profit({ crops }, environment_factors)).toBe(98);
    });

});

