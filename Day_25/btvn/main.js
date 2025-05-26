/* Tạo Base */
class Base {
    #id;    //Private
    #name;    //Private

    // Khởi tạo Base {}
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }

    // Phương thức lấy ra Id
    getId() {
        return this.#id;
    }

    // Phương thức lấy ra Name
    getName() {
        return this.#name;
    }

    // Phương thức đặt Id -> có thể sửa đổi Id qua phương thức
    setId(id) {
        this.#id = id;
    }

    // Phương thức đặt name ->có thể sửa đổi Name qua phương thức
    setName(name) {
        this.#name = name;
    }

    // Phương thức toString
    toString() {
        return `ID: ${this.#id}, Name: ${this.#name}`;
    }
}

/* Tạo Customer */
// Customer kế thừa từ Base
class Customer extends Base {
    #email;           //private
    #phoneNumber;     //private

    // Khởi tạo đối tượng Customer {}
    constructor(id, name, email, phoneNumber) {
        super(id, name);    // Gọi constructor của lớp cha
        this.#email = email;
        this.#phoneNumber = phoneNumber;
    }
    /* Getter */
    // Phương thức gọi ra Email
    getEmail() {
        return this.#email;
    }

    // Phương thức gọi ra PhoneNumber
    getPhoneNumber() {
        return this.#phoneNumber;
    }

    /* Setter */
    // Phương thức đặt email -> có thể sửa đổi email qua phương thức
    setEmail(email) {
        this.#email = email;
    }

    // Phương thức đặt phoneNumber -> có thể sửa đổi phone qua phương thức này
    setPhoneNumber(number) {
        this.#phoneNumber = number;
    }

    // Phương thức in ra
    toString() {
        return `Khách hàng: ${this.getName()}, email: ${this.#email}, SĐT: ${this.#phoneNumber}`;
    }
}

/* Tạo Product */
// Customer kế thừa từ Base
class Product extends Base {
    #price  // Private

    constructor(id, name, price) {
        super(id, name);
        this.#price = price;
    }
    /* Getter */
    // Phương thức gọi Price
    getPrice() {
        return this.#price;
    }
    /* Setter */
    // Phương thức đặt Price -> có thể thay đổi price qua phương thức này
    setPrice(price) {
        this.#price = price;
    }

    // Phương thức chuỗi
    toString() {
        //toLocaleString('vi-VN') -> Định dạng số cho người Việt dễ đọc
        return `Sản phẩm: ${this.getName()}, giá: ${this.#price.toLocaleString('vi-VN')} VNĐ`;
    }
}

/* Tạo Order */
class Order {
    #id;            //private
    #customer;      //private
    #products;       //private
    #orderDate;     //private

    // Khởi tạo đối tượng Order {}
    constructor(id, customer, orderDate = new Date()) {
        this.#id = id;
        this.#customer = customer;
        this.#products = [];
        this.#orderDate = orderDate;
    }

    // Phương thức lấy ra id
    getId() {
        return this.#id;
    }
    /* Getter */
    // Phương thức lấy ra customer
    getCustomer() {
        return this.#customer;
    }

    // Phương thức lấy ra Products
    getProducts() {
        // Trả về mảng mới (bảo ve dữ liệu gốc - DeepCopy)
        return [...this.#products];
    }

    // Phương thức lấy ra OrderDate
    getOrderDate() {
        return this.#orderDate;
    }

    /* Setter */
    // Phương thức thay đổi id
    setId(id) {
        this.#id = id;
    }

    // Phương thức thay đổi customer
    setCustomer(customer) {
        this.#customer = customer;
    }

    // Phương thức thay đổi orderDate
    setOrderDate(orderDate) {
        this.#orderDate = orderDate;
    }

    /* Phương thức tính tổng giá trị đơn hang */
    calculateTotal() {
        return this.#products.reduce((total, product) => total + product.getPrice(), 0);
    }

    /* Phương thức thêm sản phẩm vào đơn hàng */
    addProduct(product) {
        // instanceof: Kiểm tra đối tượng có phải là thể hiện (instance) của một lớp/constructor không?
        // VD: product = new Product(); -> True
        if (product instanceof Product) {
            this.#products.push(product);
            // Trả về trạng thái đã thêm thành công!
            return true;
        }
        // Trả về trạng thái chưa thêm
        return false;
    }

    /* Phương thức xoá tất cả sản phẩm cùng loại */
    removeProduct(productId) {
        // Tìm ra chỉ số của sản phẩm tron Class nếu id của Product trùng với id cần xoá
        const index = this.#products.findIndex(product => product.getId() === productId);

        // Nếu chỉ số tồn tại trong mảng
        if (index !== -1) {
            // Cắt phần tử đó
            this.#products.splice(index, 1);
            // Trả về trạng thái đã xoá thành công!
            return true;
        }
        // Trả về trạng thái chưa xoá
        return false;
    }


    /* toString */
    toString() {
        return `Đơn hàng #${this.#id}, khách hàng: ${this.#customer.getName()}, ngày đặt: ${this.#orderDate.toLocaleDateString('vi-VN')}`;
    }

    /* Bổ sung */
    //Phương thức để xoá tất cả các sản phẩm cùng loại
    removeAllProducts(productId) {
        // Đếm độ dài trong mảng product
        const originalLength = this.#products.length;
        // Lọc ra những product có id khác với id muốn xoá -> Lọc trực tiếp, không tạo mảng mới vì đang ghi đè
        this.#products = this.#products.filter(product => product.getId() !== productId);
        // Trả về độ dài mảng mới !== mảng gốc
        return this.#products.length !== originalLength;
    }

    // Phương thức kiểm tra đơn hàng có trống không
    isEmpty() {
        return this.#products.length === 0;
    }

    // Phương thức đếm số lượng sản phẩm
    getProductCount() {
        return this.#products.length;
    }
}


/* Tạo hàm liệt kê đơn hàng theo khách hàng */
const listOrdersByCustomer = (customers, orders) => {
    // Tạo đối tượng đơn hàng theo khách hàng
    const ordersByCustomer = {};

    // Duyệt từng đối tượng khác hàng trong mảng khách hàng
    customers.forEach((customer) => {
        // Lọc Đơn hàng của khách hàng co id = id của customer
        const customerOrders = orders.filter(order => order.getCustomer().getId() === customer.getId())
        // Tính tong tiền của mỗi khách hàng
        const totalAmount = customerOrders.reduce((sum, order) => sum + order.calculateTotal(), 0);

        // Thêm vào đối tượng đơn hàng theo khách hàng
        ordersByCustomer[customer.getId()] = {
            customer: customer,
            orders: customerOrders,
            totalOrders: customerOrders.length,
            totalAmount: totalAmount
        }
    })
    return ordersByCustomer;
}

/* Tạo hàm hien thị từ hàm listOrdersByCustomer */
function displayOrdersByCustomer(ordersByCustomer) {
    // Duyệt từng value trong obj ordersByCustomer -> lấy customerData
    Object.values(ordersByCustomer).forEach(customerData  => {
        console.log(`\nKhách hàng: ${customerData.customer.toString()}`)
        console.log(`\nTổng số đơn hàng: ${customerData.totalOrders}`)
        console.log(`Tổng tiền: ${customerData.totalAmount.toLocaleString('vi-VN')} VNĐ`);
        // Nếu có đơn hàng
        if (customerData.orders.length > 0) {
            customerData.orders.forEach((order, index) => {
                console.log(`${index + 1}. ${order.toString()}`)
                console.log(`Giá trị: ${order.calculateTotal().toLocaleString('vi-VN')} VNĐ`)
            })
        } else {
            console.log(`Không có đơn hàng nào`)
        }
    })
}

/* Tạo hàm tìm đơn hàng có giá trị cao nhất */
function findHighestValueOrder(orders) {
    // Nếu order rỗng
    if (orders.length === 0) return null;
    // Nếu tổng đơn hàng hiện tại lớn tổng đơn hàng cao nhất
    return orders.reduce((highest, current) => {
        return current.calculateTotal() > highest.calculateTotal() ? current : highest;
    });
}
export { Customer, Product, Order, listOrdersByCustomer, displayOrdersByCustomer, findHighestValueOrder };

