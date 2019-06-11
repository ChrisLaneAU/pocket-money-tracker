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
    }
  ]
};

export default newChore;
