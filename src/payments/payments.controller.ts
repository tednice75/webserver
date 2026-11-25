import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
    constructor(private paymentsService: PaymentsService) {

    }

    @Post('')
    async submitPayment(@Body() formData: any): Promise<any> {
        const paymentResponse = await this.paymentsService.processPayment(formData.token, formData.amount);
        return {
            status: 200,
            body: JSON.stringify(paymentResponse),
            message: 'Successfully submitted payment',
        }
    }
}
