import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SquareClient, SquareEnvironment } from 'square';
import * as crypto from 'node:crypto';

@Injectable()
export class PaymentsService {
    private readonly squareClient: SquareClient;

    constructor() {
        this.squareClient = new SquareClient({
            // Toggle Environment.Production when deploying live configurations
            environment: SquareEnvironment.Sandbox,
            token: process.env.SQUARE_ACCESS_TOKEN,
        });
    }

    async processPayment(sourceId: string, amount: number) {
        const idempotencyKey = crypto.randomUUID();
        try {
            const response = await this.squareClient.payments.create({
                sourceId,
                idempotencyKey,
                amountMoney: {
                    amount: BigInt(amount), // Square parses amounts as BigInt cents (e.g., 500 = $5.00)
                    currency: 'USD',
                },
            });

            // Safely serialize native BigInt properties into flat strings before response delivery
            return JSON.parse(
                JSON.stringify(response, (key, value) =>
                    typeof value === 'bigint' ? value.toString() : value,
                ),
            );
        } catch (error: any) {
            throw new InternalServerErrorException({
                message: 'Payment execution failed via Square gateway.',
                errors: error.errors || error.message,
            });
        }
    }
}
