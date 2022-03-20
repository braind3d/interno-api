import { Module } from '@nestjs/common';
import { W2fpService } from './w2fp.service';
import { W2fpController } from './w2fp.controller';

@Module({
  providers: [W2fpService],
  controllers: [W2fpController],
})
export class W2fpModule {}
