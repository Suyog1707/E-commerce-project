import dayjs from "dayjs";

function DeliveryDate({ selectDeliveryOption }) {
    return (
        <div className="delivery-date">
            Delivery date: {dayjs(selectDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
        </div>
    );
}

export default DeliveryDate;