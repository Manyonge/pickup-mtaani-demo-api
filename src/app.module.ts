import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsModule } from './locations/locations.module';
import { AgentsModule } from './agents/agents.module';

@Module({
  imports: [LocationsModule, AgentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
