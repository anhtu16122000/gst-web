import {
  REQUIRED_GENDER,
  SUBJECT,
  TEACHING_METHOD,
  TeachingClassType,
} from "@/constants/enum";
import { PAGE_SIZE } from "@/constants/variable-internal";
import {
  parseAsArrayOf,
  parseAsFloat,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
} from "nuqs";

import {
  createSearchParamsCache,
  parseAsArrayOf as parseAsArrayOfSv,
  parseAsFloat as parseAsFloatSv,
  parseAsInteger as parseAsIntegerSv,
  parseAsStringEnum as parseAsStringEnumSv,
} from "nuqs/server";

export const searchOptions = {
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(PAGE_SIZE),
  minSalary: parseAsFloat.withDefault(0),
  maxSalary: parseAsFloat.withDefault(0),
  teachingClassTypeCodes: parseAsArrayOf(
    parseAsStringEnum<TeachingClassType>(Object.values(TeachingClassType)),
    ",",
  ).withDefault([]),
  gender: parseAsArrayOf(
    parseAsStringEnum<REQUIRED_GENDER>(Object.values(REQUIRED_GENDER)),
    ",",
  ).withDefault([]),
  sessionPerWeeks: parseAsArrayOf(parseAsInteger).withDefault([]),
  teachingMethod: parseAsStringEnum(Object.values(TEACHING_METHOD)),
  subjectCodes: parseAsArrayOf(
    parseAsStringEnum<SUBJECT>(Object.values(SUBJECT)),
    ",",
  ).withDefault([]),
  provinceCode: parseAsString.withDefault(""),
  districtCodes: parseAsArrayOf(parseAsString).withDefault([]),
};

export const searchParamsCached = createSearchParamsCache({
  page: parseAsIntegerSv.withDefault(1),
  limit: parseAsIntegerSv.withDefault(PAGE_SIZE),
  minSalary: parseAsFloatSv.withDefault(0),
  maxSalary: parseAsFloatSv.withDefault(0),
  teachingClassTypeCodes: parseAsArrayOfSv(
    parseAsStringEnumSv<TeachingClassType>(Object.values(TeachingClassType)),
    ",",
  ).withDefault([]),
  gender: parseAsArrayOfSv(
    parseAsStringEnumSv<REQUIRED_GENDER>(Object.values(REQUIRED_GENDER)),
    ",",
  ).withDefault([]),
  sessionPerWeeks: parseAsArrayOfSv(parseAsIntegerSv).withDefault([]),
  teachingMethod: parseAsStringEnumSv(Object.values(TEACHING_METHOD)),
  subjectCodes: parseAsArrayOfSv(
    parseAsStringEnumSv<SUBJECT>(Object.values(SUBJECT)),
    ",",
  ).withDefault([]),
  provinceCode: parseAsString.withDefault(""),
  districtCodes: parseAsArrayOfSv(parseAsString).withDefault([]),
});
