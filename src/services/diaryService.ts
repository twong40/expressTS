import diaries from "../data/diaries";
import {
  DiaryEntry,
  NonSensitiveDiaryEntry,
  Visibility,
  Weather,
} from "../types";

const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

const getNonSensitiveDiaryEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};
const addEntry = () => {
  return null;
};

const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  return entry;
};
export default {
  getEntries,
  addEntry,
  getNonSensitiveDiaryEntries,
  findById,
};
