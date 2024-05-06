import { type CountryCode, getCountries, getCountryCallingCode, type Examples } from 'libphonenumber-js';
import type { Results } from './types';
declare function isCountryAvailable(locale: string): boolean;
declare function getPhoneNumberResults({ phoneNumber, countryCode, }: {
    phoneNumber?: string;
    countryCode?: CountryCode;
}): Results;
declare function getAsYouTypeFormat(countryCode?: CountryCode, phoneNumber?: string): string;
declare function getPhoneNumberExamplesFile(): Promise<Examples>;
declare function getPhoneNumberExample(examples: Examples, countryCode?: CountryCode): string | undefined;
export declare function useLibphonenumber(): {
    getAsYouTypeFormat: typeof getAsYouTypeFormat;
    getPhoneNumberResults: typeof getPhoneNumberResults;
    getPhoneNumberExamplesFile: typeof getPhoneNumberExamplesFile;
    getPhoneNumberExample: typeof getPhoneNumberExample;
    isSameCountryCallingCode: (countryCode: CountryCode, countryCode2: CountryCode) => boolean;
    isCountryAvailable: typeof isCountryAvailable;
    getCountries: typeof getCountries;
    getCountryCallingCode: typeof getCountryCallingCode;
};
export {};
