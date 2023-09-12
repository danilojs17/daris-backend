"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareTime = exports.compareData = exports.validateDays = exports.compareHours = exports.stringToBool = void 0;
const stringToBool = (value) => {
    const parsed = value.toString().toLowerCase() === 'true'
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
exports.stringToBool = stringToBool;
const compareHours = (startTime, endTime) => {
    const parsedInitialTime = new Date(startTime);
    const parsedEndTime = new Date(endTime);
    const currentTime = new Date();
    const result = currentTime.getHours() >= parsedInitialTime.getHours() &&
        currentTime.getHours() <= parsedEndTime.getHours()
        ? true
        : false;
    return result;
};
exports.compareHours = compareHours;
const validateDays = (alertDays) => {
    const daysWeek = {
        1: 'monday',
        2: 'tuesday',
        3: 'wednesday',
        4: 'thursday',
        5: 'friday',
        6: 'saturday',
        7: 'sunday',
    };
    const getDay = new Date().getDay();
    const today = daysWeek[getDay];
    const dayCurrent = alertDays.find((day) => day === today);
    return dayCurrent;
};
exports.validateDays = validateDays;
const compareData = (condition, value, target) => {
    const comparationList = {
        '<': (a, b) => a < b,
        '>': (a, b) => a > b,
        '=': (a, b) => a === b,
        '!=': (a, b) => a != b,
    };
    const operation = comparationList[condition](+value, +target);
    const result = operation;
    return result;
};
exports.compareData = compareData;
const compareTime = (condition, target, startTime, endTime) => {
    const validateDay = (startDate, endDate, target) => {
        const calculateMillis = 24 * 3600 * 1000;
        const startDay = startDate.getDay() * calculateMillis;
        const endDay = endDate.getDay() * calculateMillis;
        const targetDay = target * calculateMillis;
        if (endDay - startDay === targetDay * calculateMillis)
            return true;
        return false;
    };
    const timeList = {
        S: (startDate, endDate, target) => {
            if (endDate.getMilliseconds() - startDate.getMilliseconds() >= target)
                return true;
            return false;
        },
        M: (startDate, endDate, target) => {
            const startMinutes = startDate.getMinutes() * 60000;
            const endMinutes = endDate.getMinutes() * 60000;
            if (endMinutes - startMinutes >= target * 60000)
                return true;
            return false;
        },
        H: (startDate, endDate, target) => {
            const calculateMillis = 3600 * 1000;
            const startHours = startDate.getHours() * calculateMillis;
            const endHours = endDate.getHours() * calculateMillis;
            if (endHours - startHours === target * calculateMillis)
                return true;
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
        if (startDate.getFullYear() !== endDate.getFullYear())
            return false;
        if (startDate.getMonth() !== endDate.getMonth())
            return false;
        if (startDate.getDay() !== endDate.getDay())
            return false;
    }
    if (['H'].includes(condition)) {
        if (startDate.getFullYear() !== endDate.getFullYear())
            return false;
        if (startDate.getMonth() !== endDate.getMonth())
            return false;
    }
    if (['D', 'W5', 'W7'].includes(condition)) {
        if (startDate.getFullYear() !== endDate.getFullYear())
            return false;
    }
    const operation = timeList[condition](startDate, endDate, +target);
    return operation;
};
exports.compareTime = compareTime;
//# sourceMappingURL=tools.library.js.map