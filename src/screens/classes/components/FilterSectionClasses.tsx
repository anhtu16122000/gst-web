"use client";
import MyInputNumberFormatter from "@/atomics/atoms/MyInputNumberFormatter";
import MySelectDistricts from "@/atomics/atoms/MySelectDistricts";
import MySelectProvinces from "@/atomics/atoms/MySelectProvinces";
import MySelectRequiredGender from "@/atomics/atoms/MySelectRequiredGender";
import MySelectSessionPerWeek from "@/atomics/atoms/MySelectSessionPerWeek";
import MySelectSubjects from "@/atomics/atoms/MySelectSubjects";
import MySelectTeachingClassType from "@/atomics/atoms/MySelectTeachingClassType";
import MySelectTeachingMethod from "@/atomics/atoms/MySelectTeachingMethod";
import MyCard from "@/bases/MyCard";
import MyForm from "@/bases/MyForm";
import MyFormItem from "@/bases/MyFormItem";
import { useForm, useWatch } from "antd/es/form/Form";
import { useQueryStates } from "nuqs";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { searchOptions } from "../commonClasses";

const FilterSectionClasses = () => {
  const [queryStates, setQueryStates] = useQueryStates(searchOptions, {
    shallow: false,
  });
  const {
    minSalary,
    maxSalary,
    teachingClassTypeCodes,
    gender,
    sessionPerWeeks,
    subjectCodes,
    provinceCode,
    teachingMethod,
    districtCodes,
  } = queryStates || {};

  const [minSalaryState, setMinSalaryState] = useState<number>(minSalary);
  const [maxSalaryState, setMaxSalaryState] = useState<number>(maxSalary);
  const [form] = useForm();
  const provinceCodeState = useWatch("provinceCode", form);
  const districtCode = useWatch("districtCode", form);

  useEffect(() => {
    setMinSalaryState(minSalary);
  }, [minSalary]);
  useEffect(() => {
    setMaxSalaryState(maxSalary);
  }, [maxSalary]);

  return (
    <MyCard title="Bộ lọc" className="col-span-2 h-fit">
      <MyForm form={form} id="filter-class-form">
        <MyFormItem label="Mức lương/giờ">
          <div className="flex gap-1 items-center">
            <MyInputNumberFormatter
              value={minSalaryState || null}
              placeholder="Thất nhất"
              onChange={(value) => {
                setMinSalaryState((value || 0) as number);
              }}
              onChangeDebounce={(value) => {
                setQueryStates({
                  minSalary: (value || 0) as number,
                });
              }}
            />
            <FaArrowRight className="flex-shrink-0" />
            <MyInputNumberFormatter
              value={maxSalaryState || null}
              onChange={(value) => {
                setMaxSalaryState((value || 0) as number);
              }}
              onChangeDebounce={(value) => {
                setQueryStates({
                  maxSalary: (value || 0) as number,
                });
              }}
              placeholder="Cao nhất"
            />
          </div>
        </MyFormItem>
        <MyFormItem label="Loại lớp">
          <MySelectTeachingClassType
            value={teachingClassTypeCodes}
            onChange={(values) => {
              setQueryStates({
                teachingClassTypeCodes: values,
              });
            }}
            className="w-full"
            allowClear
            mode="multiple"
            size="large"
          />
        </MyFormItem>
        <MyFormItem label="Giới tính yêu cầu">
          <MySelectRequiredGender
            value={gender}
            onChange={(values) => {
              setQueryStates({
                gender: values,
              });
            }}
            className="w-full"
            allowClear
            mode="multiple"
            size="large"
          />
        </MyFormItem>
        <MyFormItem label="Số buổi/tuần">
          <MySelectSessionPerWeek
            mode="multiple"
            // value={sessionPerWeeks}
            // onChange={(values) => {
            //   console.log("values", values);
            //   setQueryStates({
            //     sessionPerWeeks: values,
            //   });
            // }}
          />
        </MyFormItem>

        <MyFormItem label="Lọc theo hình thức giảng dạy">
          <MySelectTeachingMethod
            className="w-full"
            allowClear
            size="large"
            value={teachingMethod || null}
            onChange={(value) => {
              setQueryStates({
                teachingMethod: value || null,
              });
            }}
          />
        </MyFormItem>
        <MyFormItem label="Lọc theo môn học">
          <MySelectSubjects
            className="w-full"
            allowClear
            mode="multiple"
            size="large"
            value={subjectCodes}
            onChange={(values) => {
              setQueryStates({
                subjectCodes: values,
              });
            }}
          />
        </MyFormItem>
        <MyFormItem label="Chọn tỉnh/thành phố" name="provinceCode">
          <MySelectProvinces
            value={provinceCode}
            onChange={(value) => {
              setQueryStates({
                provinceCode: value,
              });
            }}
          />
        </MyFormItem>
        <MyFormItem label="Chọn phường/xã" name="districtCodes">
          <MySelectDistricts
            provinceCode={provinceCode}
            value={districtCodes}
            mode="multiple"
            onChange={(values) => {
              setQueryStates({
                districtCodes: values,
              });
            }}
          />
        </MyFormItem>
      </MyForm>
    </MyCard>
  );
};

export default FilterSectionClasses;
