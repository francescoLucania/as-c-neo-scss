import {CarOrderCard} from "./module/components/common/car-order-card/car-order-card";

export default { title: 'CarOrderCard' }

export const withText = () => ({
    component: CarOrderCard,
    props: {
        text: 'Hello Button',
    },
});
