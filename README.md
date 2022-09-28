Q. Explain what the simple List component does.
-> The List component is basically WrappedListComponent with memo. Memo prevents any unnecessary re-rendering of a component if the props have not changed.
   The List component is an unordered list which has SingleListItem component as its list item. When a listitem is clicked the background color changes from
   default green to red.
   
Q. What problems / warnings are there with code?
-> In WrappedListComponent the proptype.shapeOf is incorrect and instead we use PropTypes.shape, and instead of PropTypes.array, we use PropTypes.arrayOf.
