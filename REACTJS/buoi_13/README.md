# 📘 Buổi 13: useReducer - Quản lý state phức tạp

## 🎯 Mục tiêu học tập:
✅ Hiểu được useReducer là gì và khi nào nên sử dụng  
✅ Nắm vững cách viết reducer function và dispatch actions  
✅ Áp dụng useReducer thay thế useState trong các trường hợp phức tạp

## 🩹 Nỗi đau – Tại sao cần học bài này?

**Vấn đề thực tế:**
- Khi state phức tạp (nhiều thuộc tính liên quan), useState trở nên rối rắm
- Quản lý shopping cart với add/remove/update quantity → cần nhiều setState
- Form validation với nhiều field → code dài và khó maintain
- Counter với nhiều chức năng (tăng, giảm, reset, tăng 5, giảm 10) → quá nhiều function

**Hệ quả nếu không biết:**
- Code trở nên khó đọc, khó maintain
- Dễ xảy ra bug khi cập nhật state
- Performance không tối ưu do quá nhiều re-render

## 🧠 Khái niệm chính:

**useReducer** là một hook để quản lý state phức tạp thông qua việc "gửi hành động" (dispatch actions) thay vì trực tiếp thay đổi state.

**Ví dụ đời sống:** Giống như một máy bán nước tự động:
- Bạn bỏ tiền + chọn nút (action)
- Máy xử lý (reducer function)
- Máy trả về nước + tiền thừa (new state)

**So sánh với useState:**
- useState: Thay đổi trực tiếp → `setState(newValue)`
- useReducer: Gửi "lệnh" → `dispatch({type: 'ADD_ITEM'})`

## 📌 Cú pháp cơ bản:

```javascript
import { useReducer } from 'react';

// 1. Tạo reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'ACTION_TYPE':
      return { ...state, /* thay đổi gì đó */ };
    default:
      return state;
  }
}

// 2. Sử dụng trong component
function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // 3. Gửi action
  const handleClick = () => {
    dispatch({ type: 'ACTION_TYPE', payload: someData });
  };
  
  return <div>{/* JSX */}</div>;
}
```

## 🔍 Giải thích cú pháp:

**1. Reducer function:**
- Nhận 2 tham số: `state` hiện tại và `action` được gửi
- Trả về state mới dựa trên action.type
- Không được thay đổi trực tiếp state cũ (immutable)

**2. useReducer hook:**
- Tham số 1: reducer function
- Tham số 2: initial state
- Trả về: `[state, dispatch]`

**3. Dispatch function:**
- Gửi action đến reducer
- Action thường có `type` (bắt buộc) và `payload` (tùy chọn)

## 💻 Ví dụ minh họa:

```javascript
import { useReducer } from 'react';

// Initial state
const initialState = { count: 0 };

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET_COUNT':
      return { count: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'SET_COUNT', payload: 10 })}>
        Set to 10
      </button>
    </div>
  );
}
```

**Giải thích code:**
- `initialState`: Trạng thái ban đầu của counter
- `counterReducer`: Xử lý các action khác nhau
- `dispatch({ type: 'INCREMENT' })`: Gửi lệnh tăng 1
- `action.payload`: Dữ liệu kèm theo action (ví dụ: số 10)

## 🧪 Bài tập thực hành:

### Bài tập 1: Todo List với useReducer (Đáp án đầy đủ)

```javascript
import { useReducer, useState } from 'react';

// 1. Initial state
const initialTodos = [];

// 2. Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { 
        id: Date.now(), 
        text: action.payload, 
        completed: false 
      }];
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.payload 
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

// 3. Component hoàn chỉnh
function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [inputText, setInputText] = useState('');

  // Thêm todo mới
  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: inputText });
      setInputText(''); // Reset input sau khi thêm
    }
  };

  // Toggle completed status
  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  // Xóa todo
  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  // Xử lý Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>📝 Todo List với useReducer</h1>
      
      {/* Input section */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nhập công việc cần làm..."
          style={{ 
            padding: '10px', 
            width: '70%', 
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <button 
          onClick={handleAddTodo}
          style={{ 
            padding: '10px 20px', 
            marginLeft: '10px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Thêm
        </button>
      </div>

      {/* Todo list */}
      <div>
        {todos.length === 0 ? (
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            Chưa có công việc nào. Hãy thêm một công việc!
          </p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map((todo) => (
              <li 
                key={todo.id}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  padding: '10px',
                  margin: '5px 0',
                  backgroundColor: todo.completed ? '#f0f0f0' : 'white',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              >
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  style={{ marginRight: '10px' }}
                />
                
                {/* Todo text */}
                <span 
                  style={{
                    flex: 1,
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#666' : 'black'
                  }}
                >
                  {todo.text}
                </span>
                
                {/* Delete button */}
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  🗑️ Xóa
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Statistics */}
      {todos.length > 0 && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <p><strong>Thống kê:</strong></p>
          <p>📋 Tổng: {todos.length} công việc</p>
          <p>✅ Hoàn thành: {todos.filter(todo => todo.completed).length}</p>
          <p>⏳ Chưa hoàn thành: {todos.filter(todo => !todo.completed).length}</p>
        </div>
      )}
    </div>
  );
}

export default TodoApp;
```

**Giải thích chi tiết từng phần:**

**1. State Management:**
- `todos`: Quản lý bằng useReducer để xử lý các action phức tạp
- `inputText`: Quản lý bằng useState cho input đơn giản

**2. Reducer Actions:**
- `ADD_TODO`: Thêm todo mới với id unique (Date.now())
- `TOGGLE_TODO`: Đảo ngược trạng thái completed
- `DELETE_TODO`: Lọc bỏ todo theo id

**3. Event Handlers:**
- `handleAddTodo`: Kiểm tra input không rỗng trước khi thêm
- `handleToggleTodo`: Gửi action với id của todo
- `handleDeleteTodo`: Xóa todo theo id
- `handleKeyPress`: Cho phép thêm todo bằng phím Enter

**4. UI Features:**
- Input với placeholder và validation
- Checkbox để toggle completed
- Button xóa cho mỗi todo
- Styling cho todo đã hoàn thành (line-through, màu xám)
- Thống kê số lượng todo
```

### Bài tập 2: Shopping Cart
```javascript
const initialCart = { items: [], total: 0 };

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = action.payload;
      return {
        items: [...state.items, newItem],
        total: state.total + newItem.price
      };
    case 'REMOVE_ITEM':
      const itemToRemove = state.items.find(item => item.id === action.payload);
      return {
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - itemToRemove.price
      };
    default:
      return state;
  }
}
```

## 🔤 Từ khóa & khái niệm quan trọng:

- **useReducer**: Hook để quản lý state phức tạp
- **Reducer**: Function xử lý state dựa trến action
- **Action**: Object chứa type và payload
- **Dispatch**: Function để gửi action
- **Payload**: Dữ liệu kèm theo action
- **Immutable**: Không thay đổi trực tiếp state cũ

## ⚠️ Lưu ý & lỗi thường gặp:

**1. Quên return state mới:**
```javascript
// ❌ Sai - không return
case 'INCREMENT':
  state.count + 1; // Thiếu return

// ✅ Đúng
case 'INCREMENT':
  return { count: state.count + 1 };
```

**2. Thay đổi trực tiếp state:**
```javascript
// ❌ Sai - mutate state
case 'ADD_ITEM':
  state.items.push(newItem); // Thay đổi trực tiếp
  return state;

// ✅ Đúng - tạo state mới
case 'ADD_ITEM':
  return { ...state, items: [...state.items, newItem] };
```

**3. Quên default case:**
```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    // ❌ Thiếu default case
  }
}

// ✅ Luôn có default
default:
  return state;
```

## 🎯 Tóm tắt buổi học:

### Gạch đầu dòng:
- useReducer giúp quản lý state phức tạp tốt hơn useState
- Reducer function nhận (state, action) và trả về state mới
- Action là object có type và payload (tùy chọn)
- Dispatch function để gửi action đến reducer
- Luôn return state mới, không thay đổi trực tiếp state cũ
- Phù hợp cho shopping cart, form validation, todo list...

### Sơ đồ tư duy:
```
useReducer
├── Reducer Function
│   ├── Nhận (state, action)
│   ├── Switch case theo action.type
│   └── Return state mới
├── Initial State
│   └── Giá trị ban đầu
├── Dispatch
│   ├── Gửi action
│   └── Trigger re-render
└── Action
    ├── type (bắt buộc)
    └── payload (tùy chọn)
```

**Buổi tiếp theo:** Chúng ta sẽ học về React Router - cách tạo điều hướng giữa các trang trong ứng dụng React, giúp xây dựng Single Page Application (SPA) hoàn chỉnh.