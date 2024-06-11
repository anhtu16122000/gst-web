import {
  GENDER,
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
  parseAsString as parseAsStringSv,
} from "nuqs/server";

export const searchOptions = {
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(PAGE_SIZE),
  teachingClassTypeCodes: parseAsArrayOf(
    parseAsStringEnum<TeachingClassType>(Object.values(TeachingClassType)),
    ",",
  ).withDefault([]),
  schoolId: parseAsArrayOf(parseAsString, ",").withDefault([]),
  gender: parseAsArrayOf(
    parseAsStringEnum<GENDER>(Object.values(GENDER)),
    ",",
  ).withDefault([]),
  subjectCodes: parseAsArrayOf(
    parseAsStringEnum<SUBJECT>(Object.values(SUBJECT)),
    ",",
  ).withDefault([]),
  teachingMethod: parseAsStringEnum<TEACHING_METHOD>(
    Object.values(TEACHING_METHOD),
  ),
  minSalary: parseAsFloat.withDefault(0),
  maxSalary: parseAsFloat.withDefault(0),
};

export const searchParamsCache = createSearchParamsCache({
  page: parseAsIntegerSv.withDefault(1),
  limit: parseAsIntegerSv.withDefault(PAGE_SIZE),
  teachingClassTypeCodes: parseAsArrayOfSv(
    parseAsStringEnumSv<TeachingClassType>(Object.values(TeachingClassType)),
    ",",
  ).withDefault([]),
  schoolId: parseAsArrayOfSv(parseAsStringSv, ",").withDefault([]),
  gender: parseAsArrayOfSv(
    parseAsStringEnumSv<GENDER>(Object.values(GENDER)),
    ",",
  ).withDefault([]),
  subjectCodes: parseAsArrayOfSv(
    parseAsStringEnumSv<SUBJECT>(Object.values(SUBJECT)),
    ",",
  ).withDefault([]),
  teachingMethod: parseAsStringEnumSv<TEACHING_METHOD>(
    Object.values(TEACHING_METHOD),
  ),
  minSalary: parseAsFloatSv.withDefault(0),
  maxSalary: parseAsFloatSv.withDefault(0),
});
