import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BatteryModule } from './battery/battery.module';
import { BinService } from './bin/bin/bin.service';
import { BinController } from './bin/bin/bin.controller';

@Module({
  imports: [BatteryModule],
  controllers: [AppController, BinController],
  providers: [AppService, BinService],
})
export class AppModule {}
