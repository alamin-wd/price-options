import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "optionName": "Basic Plan",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "One group class per week",
                "Free Wi-Fi",
                "24/7 Gym Access"
            ]
        },
        {
            "id": 2,
            "optionName": "Standard Plan",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group classes",
                "Access to sauna and steam room",
                "Free Wi-Fi",
                "24/7 Gym Access",
                "Access to online workout programs",
                "Guest passes (2 per month)"
            ]
        },
        {
            "id": 3,
            "optionName": "Premium Plan",
            "price": 69.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group classes",
                "Access to sauna and steam room",
                "Free Wi-Fi",
                "24/7 Gym Access",
                "Access to online workout programs",
                "Guest passes (4 per month)",
                "Personal training sessions (2 per month)",
                "Free fitness assessment",
                "Nutrition consultation (1 per month)"
            ]
        },
    ];


    return (
        <div className="mx-auto text-center">

            <h2 className="text-6xl font-bold">Best Price</h2>

            <div className="md:grid md:grid-cols-3 gap-6 my-8">
                {
                    priceOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>
                    )
                }
            </div>

        </div>
    );
};

export default PriceOptions;