const newChore = {
  heading: "New Chore",
  inputs: [
    {
      id: "chore-name",
      label: "Name",
      type: "text",
      placeholder: "Enter the chore name...",
      autoFocus: true,
      required: true
    },
    {
      id: "goal-description",
      label: "Description",
      type: "text",
      placeholder: "Enter a description...",
      autoFocus: false,
      required: true
    },
    {
      id: "goal-value",
      label: "Value ($)",
      type: "number",
      placeholder: "Enter a number...",
      autoFocus: false,
      required: true
    }
  ]
};

module.exports = newChore;
