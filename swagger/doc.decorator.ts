import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

interface SwaggerOptions {
    summary: string;
    request?: any;
    response?: any;
}

export function ApiDocPost(options: SwaggerOptions) {
    return applyDecorators(
        ApiOperation({ summary: options.summary }),
        ApiBody({ type: options.request }),
        ApiResponse({
            status: options.response.status || 200,
            description: options.response.description || '',
            type: options.response.dto,
        }),
    );
}

