import { createParamDecorator, ExecutionContext, BadRequestException } from '@nestjs/common';
import { ZodSchema } from 'zod';
import { applyDecorators, UseGuards, UsePipes } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

export function NeedAuth() {
  return applyDecorators(
        UseGuards(AuthGuard),
        ApiBearerAuth('access-token'),
    );
}

export const BodyValidate = (schema: ZodSchema) => {
  return createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const result = schema.safeParse(request.body);
    
    if (!result.success) {
      throw new BadRequestException({
        message: 'Validation failed',
        errors: result.error.format(),
      });
    }
    
    return result.data;
  })();
};
