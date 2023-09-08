import { generateReportData, storeData } from './data';
import log from './util/logger';

const data = generateReportData(log);
storeData(data);
