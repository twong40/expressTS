import diaries from "../data/diaries";
import { NewDiaryEntry, NonSensitiveDiaryEntry, DiaryEntry } from "../types";

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

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...entry,
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  return entry;
};
export default {
  getEntries,
  addDiary,
  getNonSensitiveDiaryEntries,
  findById,
};
