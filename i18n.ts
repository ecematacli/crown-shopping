import { NextComponentType, NextPageContext } from 'next';
import NextI18next from 'next-i18next';
import path from 'path';

export const nextI18next = new NextI18next({
  defaultLanguage: 'en',
  fallbackLng: 'en',
  otherLanguages: ['de'],
  localePath: path.resolve('./public/locales'),
});

export const includeDefaultNamespaces = (namespaces: string[]) =>
  ['common', '_error'].concat(namespaces);

export const { appWithTranslation, Trans, useTranslation } = nextI18next;

export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>;
