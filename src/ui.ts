import "figma-plugin-ds/dist/figma-plugin-ds.css";

document.getElementById("copy").onclick = () => {
  parent.postMessage({ pluginMessage: { type: "copy" } }, "*");
};

document.getElementById("generate").onclick = () => {
  // Clear errors
  const errorBox = document.getElementById("msg");
  errorBox.classList.remove("flex");
  errorBox.classList.add("hidden");

  const textbox = <HTMLTextAreaElement>document.getElementById("theme");

  // Check if theme is empty before sending
  if (textbox?.value !== "") {
    parent.postMessage(
      { pluginMessage: { type: "generate", theme: textbox.value } },
      "*"
    );
  } else {
    const errorBox = document.getElementById("msg");
    errorBox.classList.remove("hidden");
    errorBox.classList.add("flex");
    const errorText = document.getElementById("msg-text");
    errorText.innerHTML =
      "No theme found. Please copy your theme inside the text box.";
  }
};

onmessage = (event) => {
  const textbox = <HTMLTextAreaElement>document.getElementById("theme");

  textbox.value = event.data.pluginMessage;

  textbox.select();
  textbox.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
};
