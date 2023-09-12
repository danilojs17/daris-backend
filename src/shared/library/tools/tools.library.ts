export const stringToBool = (value: string): boolean => {
  const parsed: boolean =
    value.toString().toLowerCase() === 'true'
      ? true
      : value.toString().toLowerCase() === 'false'
      ? false
      : value === '1'
      ? true
      : value == '0'
      ? false
      : false;
  return parsed;
};

export const compareHours = (startTime: Date, endTime: Date): boolean => {
  const parsedInitialTime: Date = new Date(startTime);
  const parsedEndTime: Date = new Date(endTime);
  const currentTime: Date = new Date();

  const result: boolean =
    currentTime.getHours() >= parsedInitialTime.getHours() &&
    currentTime.getHours() <= parsedEndTime.getHours()
      ? true
      : false;

  return result;
};

export const validateDays = (alertDays: string[]) => {
  const daysWeek: { [key: string]: string } = {
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
    7: 'sunday',
  };

  const getDay: number = new Date().getDay();
  const today: string = daysWeek[getDay];
  const dayCurrent: string = alertDays.find((day) => day === today);
  return dayCurrent;
};

export const compareData = (
  condition: '>' | '<' | '=' | '!=',
  value: number | string,
  target: number | string,
) => {
  const comparationList: {
    [key: string]: (a: number, b: number) => boolean;
  } = {
    '<': (a, b) => a < b,
    '>': (a, b) => a > b,
    '=': (a, b) => a === b,
    '!=': (a, b) => a != b,
  };

  const operation = comparationList[condition](+value, +target);
  const result = operation;
  return result;
};

export const compareTime = (
  condition: 'H' | 'M' | 'S' | 'D' | 'W5' | 'W7' | 'MO',
  target: string,
  startTime: string,
  endTime: string,
) => {
  const validateDay = (startDate: Date, endDate: Date, target: number) => {
    const calculateMillis = 24 * 3600 * 1000;

    const startDay = startDate.getDay() * calculateMillis;
    const endDay = endDate.getDay() * calculateMillis;
    const targetDay = target * calculateMillis;

    if (endDay - startDay === targetDay * calculateMillis) return true;

    return false;
  };

  const timeList: {
    [key: string]: (startDate: Date, endDate: Date, target: number) => boolean;
  } = {
    S: (startDate, endDate, target) => {
      if (endDate.getMilliseconds() - startDate.getMilliseconds() >= target)
        return true;

      return false;
    },
    M: (startDate, endDate, target) => {
      const startMinutes: number = startDate.getMinutes() * 60000;
      const endMinutes: number = endDate.getMinutes() * 60000;

      if (endMinutes - startMinutes >= target * 60000) return true;

      return false;
    },
    H: (startDate, endDate, target) => {
      const calculateMillis = 3600 * 1000;
      const startHours: number = startDate.getHours() * calculateMillis;
      const endHours: number = endDate.getHours() * calculateMillis;

      if (endHours - startHours === target * calculateMillis) return true;

      return false;
    },
    D: (startDate, endDate, target) => {
      return validateDay(startDate, endDate, target);
    },
    W5: (startDate, endDate, target) => {
      return validateDay(startDate, endDate, target);
    },
    W7: (startDate, endDate, target) => {
      return validateDay(startDate, endDate, target);
    },
    MO: (a) => {
      return true;
    },
  };

  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  if (['M', 'S'].includes(condition)) {
    if (startDate.getFullYear() !== endDate.getFullYear()) return false;
    if (startDate.getMonth() !== endDate.getMonth()) return false;
    if (startDate.getDay() !== endDate.getDay()) return false;
  }

  if (['H'].includes(condition)) {
    if (startDate.getFullYear() !== endDate.getFullYear()) return false;
    if (startDate.getMonth() !== endDate.getMonth()) return false;
  }

  if (['D', 'W5', 'W7'].includes(condition)) {
    if (startDate.getFullYear() !== endDate.getFullYear()) return false;
  }

  const operation = timeList[condition](startDate, endDate, +target);
  return operation;
};
