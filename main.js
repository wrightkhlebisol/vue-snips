Vue.config.devtools = true;

let app = new Vue({
  el: "#app",
  data: {
    tasks: [
      { description: "Go to the store", completed: true },
      { description: "Finish screencast", completed: false },
      { description: "Make Donation", completed: true },
      { description: "Clear Inbox", completed: false },
      { description: "Make dinner", completed: false },
      { description: "Clean room", completed: true },
    ],
  },
  methods: {
    toggleLoad() {
      this.isLoading = !this.isLoading;
    },
  },
  computed: {
    // reversedMessage(){
    //     return this.message.split('').reverse().join('')
    // },
    completedTasks() {
      return this.tasks.filter((task) => task.completed);
    },
    incompleteTasks() {
      return this.tasks.filter((task) => !task.completed);
    },
  },
});
