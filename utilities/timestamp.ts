// Libraries
import DayJS from "dayjs";
import UTCPlugin from "dayjs/plugin/utc";

DayJS.extend(UTCPlugin);

export default {
  Timestamp: DayJS,
};
