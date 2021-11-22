import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  comparInHours(start_date: Date, end_date: Date): number {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);

    return dayjs(end_date_utc).diff(start_date_utc, "hours");
  }

  async isAfter(start_date: Date, start_date_find: Date): Promise<boolean> {
    const startDate = dayjs(start_date)
    const startDateFind = dayjs(start_date_find)

    if (startDate.isAfter(startDateFind)) {
      return true
    }

    return false
  }

  async isBefore(end_date: Date, end_date_find: Date): Promise<boolean> {
    const endDate = dayjs(end_date)
    const endDateFind = dayjs(end_date_find)

    if (endDate.isBefore(endDateFind)) {
      return true
    }

    return false
  }

  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  dateNow(): Date {
    return dayjs().toDate();
  }

  comparInDays(start_date: Date, end_date: Date): number {
    const end_date_utc = this.convertToUTC(end_date);
    const start_date_utc = this.convertToUTC(start_date);

    return dayjs(end_date_utc).diff(start_date_utc, "days");
  }
}

export { DayjsDateProvider };
