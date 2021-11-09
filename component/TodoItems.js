import html from "../js/core.js";
import { connect } from "../js/store.js";

function TodoItems({ todo, index, editIndex }) {
  return html`
    <li
      class="${todo.completed && "completed"}
      ${editIndex === index && "editing"}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onchange="dispatch('toggle', ${index})"
        />
        <label ondblclick="dispatch('startEditing',${index})"
          >${todo.title}</label
        >
        <button
          class="destroy"
          onclick="dispatch('destroy', ${index})"
        ></button>
      </div>
      <input
        class="edit"
        value="${todo.title}"
        onkeyup="event.keyCode === 13 && dispatch('endEditing', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEditing')"
        onblur="dispatch('endEditing', this.value.trim())"
        autofocus
      />
    </li>
  `;
}

export default connect()(TodoItems);
