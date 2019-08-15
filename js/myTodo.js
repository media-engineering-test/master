var list = [
	{
		title : '吃饭',
		checked : true
	},
	{
		title : '睡觉',
		checked : false
	},
	{
		title : '跑步',
		checked : true
	}
]
var vm = new Vue({
	el : '.main',
	data : {
		list : list,
		inputValue : '',
		editingTodo : '',
		beforeEditing : ''
	},
	methods:{
		addTodo(){
			this.list.push({
				title : this.inputValue,
				checked : false
			})
			this.inputValue = ''
		},
		delectTodo(todo){
			var index = this.list.indexOf(todo);
			this.list.splice(index,1)
		},
		editTodo(todo){
			this.editingTodo = todo;
			this.beforeEditing = todo.title
		},
		editedTodo(){
			this.editingTodo = ''
		},
		cancelEdit(todo){
			todo.title = this.beforeEditing;
			this.beforeEditing = '';
			this.editingTodo = ''
		}
	},
	directives:{
		focus:{
			update(el,binding){
				if(binding.value){
					el.focus()
				}
			}
		}
	}
})