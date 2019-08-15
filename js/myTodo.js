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
		inputValue : ''
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
		}
	}
})