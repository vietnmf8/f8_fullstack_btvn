import { useState, useMemo } from 'react'

function App() {
  const products = [
    { id: 1, name: 'Áo thun thể thao', price: 350000, category: 'Áo', brand: 'Nike' },
    { id: 2, name: 'Quần jogger', price: 750000, category: 'Quần', brand: 'Adidas' },
    { id: 3, name: 'Nón lưỡi trai', price: 250000, category: 'Phụ kiện', brand: 'Puma' },
    { id: 4, name: 'Áo hoodie', price: 1200000, category: 'Áo', brand: 'Nike' },
  ];

  // State cho các bộ lọc
  const [priceFilter, setPriceFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [brandFilter, setBrandFilter] = useState('all');

  const filteredProducts = useMemo(() => {

    return products.filter(product => {
      // Lọc theo giá
      let priceMatch = true;
      if (priceFilter === 'under500k') {
        priceMatch = product.price < 500000;
      } else if (priceFilter === '500k-1m') {
        priceMatch = product.price >= 500000 && product.price <= 1000000;
      } else if (priceFilter === 'over1m') {
        priceMatch = product.price > 1000000;
      }

      // Lọc theo loại sản phẩm
      const categoryMatch = categoryFilter === 'all' || product.category === categoryFilter;

      // Lọc theo thương hiệu
      const brandMatch = brandFilter === 'all' || product.brand === brandFilter;

      // Trả về true nếu thỏa mãn tất cả điều kiện
      return priceMatch && categoryMatch && brandMatch;
    });
  }, [priceFilter, categoryFilter, brandFilter]);

  // Hàm format giá tiền
  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + ' VND';
  };

  return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Danh sách sản phẩm</h1>

        {/* Bộ lọc */}
        <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {/* Lọc theo giá */}
          <div>
            <label>Giá: </label>
            <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                style={{ padding: '5px' }}
            >
              <option value="all">Tất cả</option>
              <option value="under500k">Dưới 500K</option>
              <option value="500k-1m">500K - 1 triệu</option>
              <option value="over1m">Trên 1 triệu</option>
            </select>
          </div>

          {/* Lọc theo loại sản phẩm */}
          <div>
            <label>Loại: </label>
            <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                style={{ padding: '5px' }}
            >
              <option value="all">Tất cả</option>
              <option value="Áo">Áo</option>
              <option value="Quần">Quần</option>
              <option value="Phụ kiện">Phụ kiện</option>
            </select>
          </div>

          {/* Lọc theo thương hiệu */}
          <div>
            <label>Thương hiệu: </label>
            <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                style={{ padding: '5px' }}
            >
              <option value="all">Tất cả</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
            </select>
          </div>
        </div>

        {/* Hiển thị số lượng sản phẩm tìm thấy */}
        <p style={{ color: '#666' }}>
          Tìm thấy {filteredProducts.length} sản phẩm
        </p>

        {/* Danh sách sản phẩm đã lọc */}
        <div>
          {filteredProducts.length > 0 ? (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {filteredProducts.map(product => (
                    <li
                        key={product.id}
                        style={{
                          padding: '10px',
                          margin: '5px 0',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          backgroundColor: '#f9f9f9'
                        }}
                    >
                      {product.name} - {formatPrice(product.price)} - {product.category} - {product.brand}
                    </li>
                ))}
              </ul>
          ) : (
              <p style={{ color: '#999', fontStyle: 'italic' }}>
                Không tìm thấy sản phẩm nào phù hợp với bộ lọc
              </p>
          )}
        </div>
      </div>
  )
}

export default App