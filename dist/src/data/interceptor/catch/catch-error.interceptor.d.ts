import { NotAcceptableException } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';
import { BadRequestException, HttpException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CannotCreateEntityIdMapError, EntityNotFoundError, EntityPropertyNotFoundError, QueryFailedError, UpdateValuesMissingError } from 'typeorm';
import { ICatchBodyResponse } from './interfaces/catch.interfaces';
declare const CatchErrorsList: {
    BadRequestException: (exception: BadRequestException) => ICatchBodyResponse;
    HttpException: (exception: HttpException) => ICatchBodyResponse;
    QueryFailedError: (exception: QueryFailedError) => ICatchBodyResponse;
    EntityNotFoundError: (exception: EntityNotFoundError) => ICatchBodyResponse;
    CannotCreateEntityIdMapError: (exception: CannotCreateEntityIdMapError) => ICatchBodyResponse;
    UpdateValuesMissingError: (exception: UpdateValuesMissingError) => ICatchBodyResponse;
    UnauthorizedException: (exception: UnauthorizedException) => ICatchBodyResponse;
    Error: (exception: unknown) => ICatchBodyResponse;
    NotFoundException: (exception: NotFoundException) => ICatchBodyResponse;
    ForbiddenException: (exception: ForbiddenException) => ICatchBodyResponse;
    EntityPropertyNotFoundError: (exception: EntityPropertyNotFoundError) => ICatchBodyResponse;
    NotAcceptableException: (exception: NotAcceptableException) => ICatchBodyResponse;
};
export default CatchErrorsList;
