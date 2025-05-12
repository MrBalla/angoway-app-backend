import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { DriverModule } from 'src/driver/driver.module';

@Module({
  imports: [forwardRef(()=>UserModule), JwtModule.register({
    global: true,
    secret: process.env.SECRET,
    signOptions: { expiresIn: '1d' },
  }),forwardRef(()=> DriverModule)],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthService, AuthGuard],
})
export class AuthModule {}
