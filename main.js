//유저가 값을 입력
// + 버튼 클릭 하면 , 할일 추가
// delete 버튼 을 누르면 할일 삭제

// check 버튼을 누르면 할일 끝나면서 밑줄..
//1. check 버튼을 클릭하는 순간 true false.
//2. true이면 끝난걸로 간주하고 밑줄 보여주기.
//3. false 이면 안끝난걸로 간주하고 그대로.

// 진행중 끝남 탭 을 누르면, 언더바가 이동
// 끝남탭은 , 끝난 아이탬만, 진행중 은 진행중탭에만.
//전체탭 누르면, 다시 전체아이템으로 돌아옴.

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];
addButton.addEventListener("click",addTask)

function addTask() {
        let task = {
        id:randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete:false, 
    };
    taskList.push(task);
    console.log(taskList);
    render(); // 변경된 taskList를 화면에 출력하기 위해 render() 함수 호출
}

function render() {
    let resultHTML = '';
    for (let i = 0; i < taskList.length; i++) {
        if(taskList[i].isComplete == true){
            resultHTML+=`<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
                <button onclick="deleteTask()">Delete</button>
            </div> 
       </div>`
        }else{
            resultHTML += `<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
            <button>Delete</button>
        </div> 
   </div>`;

        }

    }
    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id){
    console.log("id:",id);
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id ==id){
            taskList[i].isComplete= !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList);
}

function deleteTask() {
    console.log("삭제")
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}

