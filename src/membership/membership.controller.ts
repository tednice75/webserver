import { Controller, Post, Body } from '@nestjs/common';
import {MembershipService} from "./membership.service";

@Controller('membership')
export class MembershipController {

    constructor(private membershipService: MembershipService) {

    }

    @Post('')
    createMember(@Body() formData: any): any {
        this.membershipService.createMember(formData);
        return {
            status: 200,
            body: JSON.stringify(formData),
            message: 'Successfully submitted membership',
        }
    }
}
