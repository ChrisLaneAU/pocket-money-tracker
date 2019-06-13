const newGoal = {
  heading: "New Goal",
  inputs: [
    {
      id: "search-amazon",
      label: "Search Amazon",
      type: "text",
      placeholder: "Type your search...",
      autoFocus: true,
      required: false
    },
    {
      id: "goal-child",
      label: "Child",
      type: "text",
      placeholder: "Child's name...",
      autoFocus: false,
      required: true
    },
    {
      id: "goal-image",
      label: "Photo",
      type: "text",
      placeholder: "http://your-photo...",
      autoFocus: false,
      required: true
    },
    {
      id: "goal-name",
      label: "Name",
      type: "text",
      placeholder: "Enter the goal name...",
      autoFocus: false,
      required: true
    },
    {
      id: "goal-price",
      label: "Price",
      type: "number",
      placeholder: "Enter the price...",
      autoFocus: false,
      required: true
    }
  ]
};

module.exports = newGoal;
