interface IDateProvider {
  comparInHours(start_date: Date, end_date: Date): number;
  comparInDays(start_date: Date, end_date: Date): number;
  convertToUTC(date: Date): string;
  dateNow(): Date;
  isAfter(start_date: Date, start_date_find: Date): Promise<boolean>;
  isBefore(end_date: Date, end_date_find: Date): Promise<boolean>;
}

export { IDateProvider };
