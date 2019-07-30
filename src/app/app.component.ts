import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/models/to-do-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MapleNotes';
  todoNotes: Array<ToDoItem> = [];
  addNoteText: string;
  searchText: string;
  matchCase: boolean;

  ngOnInit() {
    this.addNote('Example note');
  }

  submitNote() {
    this.addNote(this.addNoteText);
  }

  addNote(noteText) {
    if (!noteText) {
      // TODO: Error msg: "can't be blank, pal"
      return;
    }

    const example: ToDoItem = {
      text: noteText
    };

    this.todoNotes.push(example);
    this.addNoteText = null;
  }

  deleteNote(noteToDelete: ToDoItem) {
    if (!noteToDelete) {
      // TODO: Error msg "how you even doing this if it's falsy, pal"
      return;
    }

    this.todoNotes = this.todoNotes.filter(note => note !== noteToDelete);
  }

  filteredNotes() {
    if (this.matchCase) {
      return this.todoNotes.filter(note => note.text.includes(this.searchText));
    }

    const searchTerm = this.lowercaseText(this.searchText);
    return this.todoNotes.filter(note => this.lowercaseText(note.text).includes(searchTerm));
  }

  lowercaseText(text: string) {
    if (!text) {
      return;
    }

    return text.toLowerCase();
  }

  getNotes() {
    return this.searchText ? this.filteredNotes() : this.todoNotes;
  }
}
