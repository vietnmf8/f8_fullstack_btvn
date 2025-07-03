import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';

// Dữ liệu câu hỏi
const questions = [
  {
    id: 1,
    question: "Thủ đô của Việt Nam là gì?",
    options: ["Hồ Chí Minh", "Đà Nẵng", "Hà Nội", "Huế"],
    answer: "Hà Nội"
  },
  {
    id: 2,
    question: "React là thư viện của ngôn ngữ nào?",
    options: ["Python", "Java", "JavaScript", "C#"],
    answer: "JavaScript"
  },
  {
    id: 3,
    question: "Loài hoa nào là quốc hoa của Việt Nam?",
    options: ["Hoa hồng", "Hoa sen", "Hoa mai", "Hoa đào"],
    answer: "Hoa sen"
  },
  {
    id: 4,
    question: "Ngôn ngữ lập trình nào được sử dụng để tạo trang web?",
    options: ["HTML", "CSS", "JavaScript", "Tất cả đều đúng"],
    answer: "Tất cả đều đúng"
  },
  {
    id: 5,
    question: "Việt Nam có bao nhiều tỉnh thành?",
    options: ["62", "63", "64", "65"],
    answer: "63"
  },
  {
    id: 6,
    question: "Hook nào dùng để quản lý state trong React?",
    options: ["useEffect", "useState", "useContext", "useMemo"],
    answer: "useState"
  },
  {
    id: 7,
    question: "Sông nào dài nhất Việt Nam?",
    options: ["Sông Hồng", "Sông Mê Kông", "Sông Đồng Nai", "Sông Cửu Long"],
    answer: "Sông Mê Kông"
  },
  {
    id: 8,
    question: "CSS là viết tắt của gì?",
    options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    id: 9,
    question: "Núi cao nhất Việt Nam là gì?",
    options: ["Núi Bà Đen", "Núi Fansipan", "Núi Chúa", "Núi Ngọc Linh"],
    answer: "Núi Fansipan"
  },
  {
    id: 10,
    question: "Thuộc tính nào để thay đổi màu chữ trong CSS?",
    options: ["background-color", "color", "font-color", "text-color"],
    answer: "color"
  }
];

// Khởi tạo state ban đầu
const initialState = {
  currentQuestion: 0,
  score: 0,
  selectedAnswer: null,
  showResult: false,
  isAnswered: false,
  isCompleted: false
};

console.log("state:", initialState);

// Tạo Context
const QuizContext = createContext(null);

/* Hook để sử dụng QuizContext */
function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider');
  }
  return context;
}

// Các action types
const actionTypes = {
  SELECT_ANSWER: 'SELECT_ANSWER',
  NEXT_QUESTION: 'NEXT_QUESTION',
  COMPLETE_QUIZ: 'COMPLETE_QUIZ',
  RESET_QUIZ: 'RESET_QUIZ'
};

/* Reducer function */
function quizReducer(state, action) {
  switch (action.type) {
    // SELECT_ANSWER
    case actionTypes.SELECT_ANSWER:
      // Tính điểm nếu đáp án đúng
      const isCorrect = action.payload === questions[state.currentQuestion].answer;

      return {
        ...state,
        selectedAnswer: action.payload,
        isAnswered: true,
        score: isCorrect ? state.score + 1 : state.score
      }

    // NEXT_QUESTION
    case actionTypes.NEXT_QUESTION:
      const nextQuestion = state.currentQuestion + 1;
      // Kiểm tra xem có còn câu hỏi nào không
      if (nextQuestion >= questions.length) {
        return {
          ...state,
          isCompleted: true,
          showResult: true
        };
      }
      return {
        ...state,
        currentQuestion: nextQuestion,
        selectedAnswer: null,
        isAnswered: false
      };

      // COMPLETE_QUIZ
    case actionTypes.COMPLETE_QUIZ:
      return {
        ...state,
        showResult: true,
        isCompleted: true
      };

      // RESET_QUIZ
    case actionTypes.RESET_QUIZ:
      console.log("RESET_QUIZ")
      return initialState;
    default:
      return state;
  }
}




/* QuizProvider */
function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    if (state.isAnswered) {
      const timer = setTimeout(() => {
        dispatch({ type: actionTypes.NEXT_QUESTION });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [state.isAnswered, dispatch]);

  return (
      <QuizContext.Provider value={{ state, dispatch, questions }}>
        {children}
      </QuizContext.Provider>
  );
}


/* Component: Question */
const Question = () => {
  const { state, dispatch } = useQuiz();

  const currentQ = questions[state.currentQuestion];
  console.log("currentQ:", currentQ);

  // Xử lý khi chọn đáp án
  const onSelectAnswer = (selectedOption) => {
      if (state.isAnswered) return; // Nếu đã trả lời thì không cho chọn nữa
      dispatch({
        type: actionTypes.SELECT_ANSWER,
        payload: selectedOption
      })

    console.log("Đáp án được chọn:", selectedOption);
  }

  // Lấy màu sắc của đáp án
  const getOptionColor = (option) => {
    if (!state.isAnswered) {
      return '#f5f5f5';
    }

    if (option === currentQ.answer) {
      return '#4caf50'
    }

    if (option === state.selectedAnswer && option !== currentQ.answer) {
      return '#f44336'
    }

    return '#f5f5f5';
  }

  return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid red' }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            padding: '15px',
            background: '#fad4d4',
            borderRadius: '8px'
          }}>
            <span>
              {/* Thứ tự câu hỏi hiện tại (dựa vào vị trí) */}
              Cau hỏi {state.currentQuestion + 1}/{questions.length}
            </span>

            <span>
              {state.score} Điểm
            </span>
          </div>

          {/* Câu hỏi */}
          <h2>
            {currentQ.question}
          </h2>

          {/* Đáp án */}
          <div style={{
            marginTop: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px'
          }}>
            {
              currentQ.options.map((option, index) => (
                  <div
                      key={index}
                      style={{
                        padding: '20px',
                        cursor: state.isAnswered ? 'default' : 'pointer',
                        backgroundColor: getOptionColor(option),
                        color: state.isAnswered && (option === currentQ.answer || option === state.selectedAnswer) ? 'white' : 'black',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        transition: 'all 0.3s ease',
                        fontSize: '16px',

                      }}
                      onClick={() => onSelectAnswer(option)}
                      onMouseEnter={(e) => {
                        if (!state.isAnswered) {
                          e.target.style.backgroundColor = '#e3f2fd';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!state.isAnswered) {
                          e.target.style.backgroundColor = '#f5f5f5';
                        }
                      }}
                  >
                      {/* Hiển thị các đáp án theo dạng A., B., C., D */}
                      {String.fromCharCode(65 + index)}. {option}
                  </div>
              ))
            }
          </div>

        {/* Thông báo trạng thái */}
        {state.isAnswered && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <p style={{
                color: state.selectedAnswer === currentQ.answer ? '#4caf50' : '#f44336',
                fontWeight: 'bold',
                fontSize: '18px',
                margin: '10px 0'
              }}>
                {state.selectedAnswer === currentQ.answer ? 'Chính xác!' : 'Sai rồi!'}
              </p>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Chuyển sang câu tiếp theo...
              </p>
            </div>
        )}

      </div>
  )
}



const Result = () => {
  const { state, dispatch } = useQuiz();

  const handleRestart = () => {
    dispatch({ type: actionTypes.RESET_QUIZ });
  };

  return (
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '40px',
        textAlign: 'center'
      }}>
        <h1 style={{
          marginBottom: '30px',
          fontWeight: 'bold',
          color: '#333'
        }}>
          Kết quả của bạn
        </h1>

        <h2 style={{
          marginBottom: '20px',
          color: '#4caf50',
          fontWeight: 'bold',
          fontSize: '48px'
        }}>
          {state.score}/{questions.length}
        </h2>

        <p style={{
          marginBottom: '40px',
          color: '#666',
          fontSize: '16px'
        }}>
          Bạn đã trả lời đúng {state.score} trên {questions.length} câu hỏi
          ({Math.round((state.score / questions.length) * 100)}%)
        </p>

        <button
            onClick={handleRestart}
            style={{
              padding: '12px 32px',
              fontSize: '18px',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1565c0';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#1976d2';
            }}
        >
          Làm lại
        </button>
      </div>
      )

}


/* Component: AppContent */
function AppContent() {
  const { state } = useQuiz();


  return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px'
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '40px',
          fontWeight: 'bold',
          color: '#1976d2',
          fontSize: '32px'
        }}>
          Quiz App
        </h1>

        {/* Hiển thị Question hoặc Result */}
        {state.showResult ? <Result /> : <Question />}
      </div>
  );
}




// Component chính App
function App() {
  console.log("App component rendered");
  return (
      <QuizProvider>
        <AppContent />
      </QuizProvider>
  );
}



export default App;