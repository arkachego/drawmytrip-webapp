import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type ModelName = keyof typeof prisma;

// Utility type to get the args type for `findMany`
type FindManyArgs<T extends ModelName> =
  T extends keyof PrismaClient
    ? Parameters<(typeof prisma)[T]['findMany']>[0]
    : never;

export type CountryFilterType = FindManyArgs<'country'>;
export type VehicleFilterType = FindManyArgs<'vehicle'>;
export type FilterType = CountryFilterType | VehicleFilterType;
