import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

interface SwaggerOptions {
    summary: string;
    example?: any;
}

export function SwaggerPost(options: SwaggerOptions) {
    return applyDecorators(
        ApiOperation({ summary: options.summary }),
        ApiBody({ type: options.example }),
    );
}

