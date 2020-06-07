import { Component, OnInit } from '@angular/core';
import { ITodo } from '../model/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    todoList: Array<ITodo> = [];
    newTodo: ITodo = {
        text: '',
        deadline: new Date(),
        isComplete: false
    };
    showCompleted: boolean = false;

    constructor() { }

    ngOnInit(): void {
        this.getTodos();
    }

    getTodos() {
        if (localStorage.todos) {
            this.todoList = JSON.parse(localStorage.todos);
        }
    }

    addTodo() {
        this.todoList.push(this.newTodo);
        localStorage.todos = JSON.stringify(this.todoList);
        this.clearNewTodo();
    }

    updateTodo() {
        localStorage.todos = JSON.stringify(this.todoList);
    }

    clearNewTodo() {
        this.newTodo = {
            text: '',
            deadline: new Date(),
            isComplete: false
        };
    }

    getFormattedDate(date: Date) {
        return (new Date(date).getDate() + '/' + Number(new Date(date).getMonth() + 1) + '/' + new Date(date).getFullYear());
    }

}
