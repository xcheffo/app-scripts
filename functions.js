function FIX_MARK(r) {
  if(r.map) {
    return r.map(FIX_MARK);
  }
  
  var table = {};
  
  table['2.5'] = 3;
  table['3='] = 3;
  table['3-'] = 3;
  table['3'] = 3;
  table['3+'] = 3;
  table['3++'] = 3;
  table['3.5'] = 4;
  
  table['4='] = 4;
  table['4-'] = 4;
  table['4'] = 4;
  table['4+'] = 4;
  table['4++'] = 4;
  table['4.5'] = 5;

  table['5='] = 5;
  table['5-'] = 5;
  table['5'] = 5;
  table['5+'] = 5;
  table['5++'] = 5;
  table['5.5'] = 6;

  table['6='] = 6;
  table['6-'] = 6;
  table['6'] = 6;

  
  var res = table[r];
  if(!res) {
    res = r;
  }
  return res;
}
