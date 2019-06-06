// Layout - fetches user (or receives from login)
  /* user: {id, name, isAdmin, image}
   */
// NavPanel - fetches data
  /* user: {id, name, email, isAdmin, image}
   * recentGoals: [{id, name, image}]
   * myChildren: [{id, name, image}]
   */
  // User
    /* user: {id, name, isAdmin, image}
     */
  // MyChildren
    /* myChildren: [{id, name, image}]
     */
  // RecentGoals
    /* recentGoals: [{id, name, image}]
     */
  // Search
    /* user: {id, name, email, isAdmin, image}
     */
// ViewPanel
  // BackButton // can I use action button?
    /* uses history api
     */
  // ActionButton (x7)
    /* user: {id, name, isAdmin, image}
     * currentChild: [{id, name, image}]
     * color: color
     * action: () => {}
     */
  // MainImage
    /* user: {id, name, isAdmin, image}
     * goal: {id, name, image}
     */
  // Name
    /* user: {name}
     * goal: {name}
     */
  // ProgressButton (small dynamic)
    /* isCoin: false (turns to true on money earned)
     */
  // Table (chores vs days)
    /* chores: [{id, name, value}]
     */
// Form
  // Input
  // FormButton
// ModalWindow
