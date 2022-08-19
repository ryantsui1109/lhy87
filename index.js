var displayArray = [
  "Click on anywhere",
  "to edit text",
  "按任意處",
  "編輯訊息",
];
var displayIndex = 0;
var isModal = false;
function createInputGroup(inputID, optMode, calledBy) {
  const inputEl = `
    <div class="input-group mb-3">
  <input
    id="input-${inputID}"
    type="text"
    class="form-control msgToDisplay"
    placeholder="Enter text to display here"
    aria-label="Enter text to display with two button addons"
  />
  <button class="btn btn-primary" onclick="createInputGroup(999,'insert',this)" type="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-plus-circle"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path
        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
      />
    </svg>
  </button>
  <button class="btn btn-danger" onclick="detectRemoveInput(this)" type="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-dash-circle"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
    </svg>
  </button>
</div>
`;
  if (optMode == "append") {
    $("#messageQueueBody").append(inputEl);
  }
  if (optMode == "insert") {
    $(inputEl).insertAfter($(calledBy).parent());
  }
}
function detectRemoveInput(calledBy) {
  console.log("try to remove");
  if ($(".msgToDisplay").length > 1) {
    $(calledBy).parent().remove();
  }
}
function saveChanges() {
  msgToDisplay = $("body")
    .find(".msgToDisplay")
    .map((_, el) => el.value)
    .get();

  displayArray = msgToDisplay;
  displayIndex = 0;
}
$(document).ready(function () {
  const messageQueue = new bootstrap.Modal("#messageQueue", {});
  const msgQueueDOM = document.getElementById("messageQueue");
  function addText() {
    showInputs();
    messageQueue.show();
  }

  msgQueueDOM.addEventListener("show.bs.modal", (event) => {
    isModal = true;
  });
  msgQueueDOM.addEventListener("hide.bs.modal", (event) => {
    isModal = false;
  });
  function displayText() {
    if (displayArray == []) {
      addText();
    }
    $("h1").text(displayArray[displayIndex]);
    $("h3").text(displayIndex);
    $("title").text(displayArray[displayIndex]);
    if (displayIndex == displayArray.length - 1) {
      displayIndex = 0;
    } else {
      displayIndex++;
    }
    changeColor();
  }

  function changeColor() {
    r = randomNumber();
    g = randomNumber();
    b = randomNumber();
    $("body").css("background-color", `rgb(${r},${g},${b})`);
    if (r > 126 && g > 126 && b > 126) {
      $("h1,h3").css("color", "white");
    } else {
      $("h1,h3").css("color", "black");
    }
  }

  function randomNumber() {
    return Math.round(Math.random() * 255);
  }

  function showInputs() {
    if (displayArray.length) {
      $("#messageQueueBody").empty();
      for (x in displayArray) {
        createInputGroup(x, "append");
        $("body").find(`#input-${x}`).val(displayArray[x]);
      }
    } else {
      $("#messageQueueBody").empty();
      createInputGroup(0, "append");
    }
  }
  // while (!isModal) {
  $("body").click(function (e) {
    if (!isModal) {
      e.preventDefault();
      console.log("clicked");
      addText();
    }
  });
  // }

  setInterval(() => {
    displayText();
  }, 1000);
});
