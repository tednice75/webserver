import { Injectable } from '@nestjs/common';
import crypto from 'node:crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Membership } from './membership.entity';

@Injectable()
export class MembershipService {

    constructor(
        @InjectRepository(Membership)
        private readonly membershipRepository: Repository<Membership>,
    ) {

    }

    findAll(): Promise<Membership[]> {
        return this.membershipRepository.find();
    }

    // findOne(id: number): Promise<Membership | null> {
    //     return this.membershipRepository.findOneBy({ id });
    // }

    async remove(id: number): Promise<void> {
        await this.membershipRepository.delete(id);
    }

    createMember(formData: any): any {

        console.log(formData);
        //
        // this.membershipRepository.insert(formData);
        //     const memberId = crypto.randomUUID();
        //     console.log('Form Data ', formData);
        //     console.log('Creating member with id ', memberId);

    }
}
