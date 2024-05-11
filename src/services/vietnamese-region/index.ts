import instance, { TApiResponse } from "..";
import { TDistrict, TProvince, TWard } from "./vietnamese-region.type";

const URL: string = `/vietnamese-region`;

const vietnameseRegionService = {
  // GET/vietnamese-region/all-provinces
  allProvinces() {
    return instance.get<TApiResponse<TProvince[]>>(`${URL}/all-provinces`);
  },
  // GET/vietnamese-region/all-districts
  allDistricts() {
    return instance.get<TApiResponse<TDistrict[]>>(`${URL}/all-districts`);
  },
  // GET/vietnamese-region/find-district-by-province
  findDistrictByProvince(provinceCode: string) {
    return instance.get<TApiResponse<TDistrict[]>>(
      `${URL}/find-district-by-province`,
      {
        params: {
          provinceCode,
        },
      },
    );
  },
  // GET/vietnamese-region/find-wards-by-district
  findWardsByDistrict(districtCode: string) {
    return instance.get<TApiResponse<TWard[]>>(
      `${URL}/find-wards-by-district`,
      {
        params: {
          districtCode,
        },
      },
    );
  },
};

export default vietnameseRegionService;
