export type TAdministrativeRegion = {
    id: number;
    name: string;
    nameEn: string;
    codeName: string;
    codeNameEn: string;
};

export type TProvince = {
    code: string;
    name: string;
    nameEn: string;
    fullName: string;
    fullNameEn: string;
    codeName: string;
    administrativeRegion: TAdministrativeRegion;
};

export type TDistrict = {
    code: string;
    name: string;
    nameEn: string;
    fullName: string;
    fullNameEn: string;
    codeName: string;
    province: TProvince;
};

export type TWard = {
    code: string;
    name: string;
    nameEn: string;
    fullName: string;
    fullNameEn: string;
    codeName: string;
    district: TDistrict;
};
