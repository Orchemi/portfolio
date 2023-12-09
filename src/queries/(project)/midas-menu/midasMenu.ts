import {
  getAllMidasMenu,
  getDailyMidasMenu,
  getWeeklyMidasMenu,
  postMidasMenu,
  updateMidasMenu,
} from '@/apis/(project)/midas-menu/midasMenu';
import { MenuTimeType } from '@/constants/project/midas-menu/common';
import { MidasMenuDateType } from '@/types/(project)/midasMenu/midasMenu';
import { UseQueryResult, useQuery, useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export interface IMidasMenu {
  date: MidasMenuDateType;
  menus: MidasMenusType;
}

export type MidasMenusType = Record<MenuTimeType, string>;

export const MidasMenuQueryKey = {
  all: ['midas-menu'] as const,
  week: (day: MidasMenuDateType) => [...MidasMenuQueryKey.all, 'week', day],
  day: (day: MidasMenuDateType) => [...MidasMenuQueryKey.all, 'day', day],
};

// GET (READ)
export interface IGetMidasMenuResponse {
  message: string;
  data: IMidasMenu[];
}

export function useQueryGetAllMidasMenu(): UseQueryResult<IGetMidasMenuResponse, AxiosError> {
  return useQuery({
    queryKey: MidasMenuQueryKey.all,
    queryFn: getAllMidasMenu,
  });
}

export function useQueryGetWeeklyMidasMenu(day: MidasMenuDateType): UseQueryResult<IGetMidasMenuResponse, AxiosError> {
  return useQuery({
    queryKey: MidasMenuQueryKey.week(day),
    queryFn: () => getWeeklyMidasMenu(day),
  });
}

interface IUseQueryGetDailyMidasMenu {
  day: MidasMenuDateType;
  enabled?: boolean;
}

export function useQueryGetDailyMidasMenu({
  day,
  enabled = true,
}: IUseQueryGetDailyMidasMenu): UseQueryResult<IGetMidasMenuResponse, AxiosError> {
  return useQuery({
    queryKey: MidasMenuQueryKey.day(day),
    queryFn: () => getDailyMidasMenu(day),
    enabled: enabled,
  });
}

// POST (CREATE)
export interface IPostMidasMenuRequest extends IMidasMenu {}
export interface IPostMidasMenuResponse {}

export function useMutationPostMidasMenu(): UseMutationResult<
  IPostMidasMenuResponse,
  AxiosError,
  IPostMidasMenuRequest
> {
  return useMutation({
    mutationFn: postMidasMenu,
  });
}

// PUT (UPDATE)
export interface IUpdateMidasMenuRequest extends IMidasMenu {}
export interface IUpdateMidasMenuResponse {}

export function useMutationUpdateMidasMenu(): UseMutationResult<
  IUpdateMidasMenuResponse,
  AxiosError,
  IUpdateMidasMenuRequest
> {
  return useMutation({
    mutationFn: updateMidasMenu,
  });
}
