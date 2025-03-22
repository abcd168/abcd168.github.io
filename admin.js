// 模拟数据库
const knowledgeList = [
    { title: '春季养生要点', content: '春季是万物复苏的季节，中老年人在春季养生应注意养肝、防风、防寒。可以多吃一些具有养肝作用的食物，如菠菜、芹菜、枸杞等。' },
    { title: '中医按摩养生法', content: '中医按摩是一种简单有效的养生方法，通过按摩穴位可以调节身体机能、促进血液循环。例如，按摩足三里穴可以增强免疫力、改善消化功能。' }
];

const recipeList = [
    { name: '红枣桂圆粥', ingredients: '红枣、桂圆、大米', steps: '将红枣、桂圆和大米一起煮成粥，具有补血安神的功效。' },
    { name: '山药百合汤', ingredients: '山药、百合、冰糖', steps: '将山药、百合和冰糖一起煮成汤，具有润肺止咳的功效。' }
];

// 渲染养生知识表格
function renderKnowledgeTable() {
    const table = document.getElementById('knowledgeTable');
    const tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    knowledgeList.forEach((knowledge, index) => {
        const row = tbody.insertRow();
        const titleCell = row.insertCell(0);
        const contentCell = row.insertCell(1);
        const actionCell = row.insertCell(2);

        titleCell.textContent = knowledge.title;
        contentCell.textContent = knowledge.content;

        const editButton = document.createElement('button');
        editButton.textContent = '编辑';
        editButton.classList.add('editKnowledge');
        editButton.addEventListener('click', () => editKnowledge(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '删除';
        deleteButton.classList.add('deleteKnowledge');
        deleteButton.addEventListener('click', () => deleteKnowledge(index));

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
    });
}

// 渲染中医食谱表格
function renderRecipeTable() {
    const table = document.getElementById('recipeTable');
    const tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    recipeList.forEach((recipe, index) => {
        const row = tbody.insertRow();
        const nameCell = row.insertCell(0);
        const ingredientsCell = row.insertCell(1);
        const stepsCell = row.insertCell(2);
        const actionCell = row.insertCell(3);

        nameCell.textContent = recipe.name;
        ingredientsCell.textContent = recipe.ingredients;
        stepsCell.textContent = recipe.steps;

        const editButton = document.createElement('button');
        editButton.textContent = '编辑';
        editButton.classList.add('editRecipe');
        editButton.addEventListener('click', () => editRecipe(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '删除';
        deleteButton.classList.add('deleteRecipe');
        deleteButton.addEventListener('click', () => deleteRecipe(index));

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
    });
}

// 编辑养生知识
function editKnowledge(index) {
    const knowledge = knowledgeList[index];
    const newTitle = prompt('请输入新的标题', knowledge.title);
    const newContent = prompt('请输入新的内容', knowledge.content);

    if (newTitle && newContent) {
        knowledgeList[index] = { title: newTitle, content: newContent };
        renderKnowledgeTable();
    }
}

// 删除养生知识
function deleteKnowledge(index) {
    if (confirm('确定要删除这条养生知识吗？')) {
        knowledgeList.splice(index, 1);
        renderKnowledgeTable();
    }
}

// 编辑中医食谱
function editRecipe(index) {
    const recipe = recipeList[index];
    const newName = prompt('请输入新的食谱名称', recipe.name);
    const newIngredients = prompt('请输入新的材料', recipe.ingredients);
    const newSteps = prompt('请输入新的做法', recipe.steps);

    if (newName && newIngredients && newSteps) {
        recipeList[index] = { name: newName, ingredients: newIngredients, steps: newSteps };
        renderRecipeTable();
    }
}

// 删除中医食谱
function deleteRecipe(index) {
    if (confirm('确定要删除这条中医食谱吗？')) {
        recipeList.splice(index, 1);
        renderRecipeTable();
    }
}

// 添加新的养生知识
const addKnowledgeButton = document.getElementById('addKnowledgeButton');
addKnowledgeButton.addEventListener('click', () => {
    const title = prompt('请输入养生知识标题');
    const content = prompt('请输入养生知识内容');

    if (title && content) {
        knowledgeList.push({ title, content });
        renderKnowledgeTable();
    }
});

// 添加新的中医食谱
const addRecipeButton = document.getElementById('addRecipeButton');
addRecipeButton.addEventListener('click', () => {
    const name = prompt('请输入食谱名称');
    const ingredients = prompt('请输入材料');
    const steps = prompt('请输入做法');

    if (name && ingredients && steps) {
        recipeList.push({ name, ingredients, steps });
        renderRecipeTable();
    }
});

// 初始化表格
renderKnowledgeTable();
renderRecipeTable();    