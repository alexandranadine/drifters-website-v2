import swal from "sweetalert";
import { setAttributes } from "../setAttribute";

function createResForm() {
  const resContent = document.querySelector(".content");
  resContent.classList.add("res-input");
  const inputGroup = document.createElement("div");
  inputGroup.classList.add("input-group");
  const form = document.createElement("form");
  resContent.appendChild(form);

  const nameInput = document.createElement("input");
  const nameLabel = document.createElement("label");
  setAttributes(nameInput, {
    name: "name",
    label: "name",
    placeholder: "Your Name",
    required: "true",
  });
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name: ";
  form.appendChild(nameLabel);
  nameLabel.appendChild(nameInput);

  const emailInput = document.createElement("input");
  const emailLabel = document.createElement("label");
  setAttributes(emailInput, {
    name: "email",
    label: "email",
    placeholder: "Email",
    required: "true",
  });
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email: ";
  form.appendChild(emailLabel);
  emailLabel.appendChild(emailInput);

  const phoneInput = document.createElement("input");
  const phoneLabel = document.createElement("label");
  setAttributes(phoneInput, {
    name: "phone",
    label: "phone",
    placeholder: "Phone Number",
    required: "true",
  });
  phoneLabel.setAttribute("for", "phone");
  phoneLabel.textContent = "Phone #: ";
  form.appendChild(phoneLabel);
  phoneLabel.appendChild(phoneInput);
  form.appendChild(inputGroup);

  const dateInput = document.createElement("input");
  const dateLabel = document.createElement("label");
  setAttributes(dateInput, {
    name: "date",
    label: "date",
    type: "date",
    required: "true",
  });
  dateLabel.setAttribute("for", "date");
  dateLabel.textContent = "Requested date: ";
  inputGroup.appendChild(dateLabel);
  dateLabel.appendChild(dateInput);

  const groupSizeInput = document.createElement("input");
  const groupSizeLabel = document.createElement("label");
  setAttributes(groupSizeInput, {
    name: "size",
    label: "size",
    type: "number",
    required: "true",
    min: "2",
    max: "20",
    placeholder: "5",
  });
  groupSizeLabel.setAttribute("for", "size");
  groupSizeLabel.textContent = "Size of group: ";
  inputGroup.appendChild(groupSizeLabel);
  groupSizeLabel.appendChild(groupSizeInput);

  const commentField = document.createElement("textarea");
  const commentLabel = document.createElement("label");
  setAttributes(commentField, {
    name: "comment",
    label: "comment",
    required: "true",
    placeholder:
      "Please give us a short description about your party, and whether you'd like to be called or recieve a text!",
  });
  commentLabel.setAttribute("for", "comment");
  commentLabel.textContent = "Additional info: ";
  form.appendChild(commentLabel);
  commentLabel.appendChild(commentField);

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    swal("Request Submitted!");
    loadResForm();
  });
  form.appendChild(submitButton);
}

export default function loadResForm() {
  const resContent = document.querySelector(".content");
  resContent.textContent = "";
  resContent.appendChild(createResForm());
}
