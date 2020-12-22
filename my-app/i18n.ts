import { NextComponentType, NextPageContext } from 'next';
import NextI18next from 'next-i18next';
import { useTranslation as originalUseTranslation } from 'react-i18next';

export const nextI18next = new NextI18next({
  browserLanguageDetection: false,
  defaultLanguage: 'en',
  fallbackLng: 'en',
  localePath: 'public/static/locales',
  otherLanguages: ['de'],
});

export const includeDefaultNamespaces = (namespaces: string[]) =>
  ['common', '_error'].concat(namespaces);

export const appWithTranslation = nextI18next.appWithTranslation;
export const Trans = nextI18next.Trans;
export const useTranslation = originalUseTranslation;
export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>;
