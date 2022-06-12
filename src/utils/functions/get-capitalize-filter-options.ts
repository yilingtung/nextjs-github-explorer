import capitalizeFirstLetter from '@src/utils/functions/capitalize-first-letter';

const getCapitalizeFilterOptions = (typeArr: string[]) =>
  typeArr.map((type) => ({
    label: capitalizeFirstLetter(type),
    value: type,
  }));

export default getCapitalizeFilterOptions;
