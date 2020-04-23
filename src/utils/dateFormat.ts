import { format } from 'date-fns';

const dateFormat = (value: Date): string => format(value, 'MM-DD-YYYY');

export default dateFormat;
