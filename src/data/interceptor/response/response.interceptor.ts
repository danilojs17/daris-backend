import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResponse } from './interfaces/response.interface';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, IResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<IResponse<T>> {
    const response = next.handle().pipe(
      map(
        (data) =>
          ({
            status: data.status ?? 200,
            message:
              data.message ?? data.status === 401 ? 'UNAUTORIZED' : 'SUCCESS',
            result: data,
          } as IResponse<T>),
      ),
    );

    return response;
  }
}
