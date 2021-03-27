const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getAnswerYesNoQuestion = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = randomIntFromInterval(1, 2);
      if (value === 1) {
        resolve('YES');
      } else {
        resolve('NO');
      }
    }, 500);
  });
}

var vm = new Vue({
  el: '#app',
  data: {
    question: '',
    answer: 'Không thể reply nếu như chưa có câu hỏi !!!'
  },
  watch: {
    question: function(newQuestion, oldQuestion) {
      this.answer = 'Chờ đến khi gõ xong câu hỏi ...';
      setTimeout(() => {
        this.getAnswer();
      }, 500);
    }
  },
  methods: {
    getAnswer: async function() {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Câu hỏi thì phải có dấu ? ở cuối câu';
        return;
      }
      this.answer = 'Thinking ...';
      try {
        const res = await getAnswerYesNoQuestion();
        this.answer = res;
      } catch(err) {
        this.answer = 'Error! Could not reach the API';
      }
    }
  }
});
