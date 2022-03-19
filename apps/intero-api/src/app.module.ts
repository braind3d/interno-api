import { Module } from '@nestjs/common';
import { W2fpController } from './w2fp/w2fp.controller';
import { W2fpModule } from './w2fp/w2fp.module';
import { W2fpService } from './w2fp/w2fp.service';

@Module({
  imports: [W2fpModule],
  controllers: [W2fpController],
  providers: [W2fpService],
})
export class AppModule {}
