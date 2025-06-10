// Import biến a từ file module-1
// biến default phải đặt lên đầu và ngăn cách bằng dấu ','
import defaultVariable, {a, b} from './module-1.js'

console.log(a, b, defaultVariable)