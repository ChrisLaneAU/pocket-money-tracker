const newChild = {
  heading: "New Child",
  inputs: [
    {
      id: "child-name",
      label: "Name",
      type: "text",
      placeholder: "Child's name...",
      autoFocus: true,
      required: true
    },
    {
      id: "child-image",
      label: "Photo",
      type: "text",
      placeholder: "http://your-photo...",
      autoFocus: false,
      required: true
    }
  ]
};

export default newChild;
