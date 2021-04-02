import { StyledPaymentMethodIcons } from './PaymentMethodIcons.styles';
import Master from '../../../../../public/images/master.svg';
import Ideal from '../../../../../public/images/ideal.svg';
import Paypal from '../../../../../public/images/paypal.svg';
import Visa from '../../../../../public/images/visa.svg';
import Ipay from '../../../../../public/images/ipay.svg';

const PaymentMethodIcons = () => (
  <StyledPaymentMethodIcons>
    <Master />
    <Ideal />
    <Ipay />
    <Paypal />
    <Visa />
  </StyledPaymentMethodIcons>
);


export default PaymentMethodIcons;
