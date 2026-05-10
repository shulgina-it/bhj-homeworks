const editor = document.getElementById('editor');
const clearButton = document.getElementById('clear');

editor.value = localStorage.getItem('editorText') || '';

editor.addEventListener('input', () => {
    localStorage.setItem('editorText', editor.value);
});

clearButton.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('editorText');
});