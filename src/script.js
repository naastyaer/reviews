import { format} from 'date-fns'
const today = new Date ()
const formatDate = format (today, 'MM/dd/yyyy')
console.log(formatDate);
console.log(today);
