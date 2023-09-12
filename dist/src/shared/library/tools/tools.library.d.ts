export declare const stringToBool: (value: string) => boolean;
export declare const compareHours: (startTime: Date, endTime: Date) => boolean;
export declare const validateDays: (alertDays: string[]) => string;
export declare const compareData: (condition: '>' | '<' | '=' | '!=', value: number | string, target: number | string) => boolean;
export declare const compareTime: (condition: 'H' | 'M' | 'S' | 'D' | 'W5' | 'W7' | 'MO', target: string, startTime: string, endTime: string) => boolean;
