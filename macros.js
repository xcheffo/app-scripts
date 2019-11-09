/** 
    Copy down one or more cells, depending on the current selection. Analog of Ctrl+Shift+' in MS Access.
    @OnlyCurrentDoc 
*/
function QuoteCopyRange() {
  var spreadsheet = SpreadsheetApp.getActive();
  var selected = spreadsheet.getActiveRange();
  if(!selected) {
    return;
  }
  if(selected.getRow() != selected.getLastRow()) {
    return;
  }
  
  var src = selected.getSheet().getRange(selected.getRow() - 1, selected.getColumn(), 1, selected.getLastColumn() - selected.getColumn() + 1);
  src.copyTo(selected);
}
