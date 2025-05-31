const headers = [
    {name: 'id', text: 'Id', align: 'center'},
    {name: 'name', text: 'Tên'},
    {name: 'address', text: 'Địa chỉ'},
    {name: 'province', text: 'Thành Phố'},
    {name: 'age', text: 'Tuổi', align: 'right'},
    {name: 'action', text: 'Hành động', align: 'right'},
]

const employees = [
    {
        id: 1,
        name: 'Cong Pham Tin',
        address: 'Vinh Tuong',
        province: 'Vinh Phuc',
        age: 27,
        searchStr: '1|Cong Pham Tin|Vinh Tuong|Vinh Phuc|27'
    },
    {
        id: 2,
        name: 'Nguyen Nam Tao',
        address: 'Co Nhue',
        province: 'Ha Noi',
        age: 27,
        searchStr: '2|Nguyen Nam Tao|Co Nhue|Ha Noi|27'
    },
    {
        id: 3,
        name: 'Pham Xuan Bac',
        address: 'Duy Tien',
        province: 'Ha Nam',
        age: 27,
        searchStr: '3|Pham Xuan Bac|Duy Tien|Ha Nam|27'
    },
]

// Tạo dữ diệu từ drop-down
const provinces = [
    "Ha Noi",
    "Ha Nam",
    "Vinh Phuc",
    "Phu Tho",
    "Bac Blinh",
    "Bac Giang",
    "Ha Giang",
    "Nam Dinh",
    "Lao Cai",
    "Thai Binh"
]

export {headers, employees, provinces}