WSX_WIDTH = 42

var total_sub_width = function(sub_width, sub_stacks){
  return (sub_width * sub_stacks);
};

var sub_spaces = function(sub_stacks){
  return (sub_stacks - 1)
};

var get_starting_point = function(sub_width){
  return (sub_width / 2)
};

var calculate_spacing = function(stage_width, sub_width, sub_stacks){
  var sub_spacing = sub_spaces(sub_stacks);
  var total_sub_width_val = total_sub_width(sub_width, sub_stacks);
  return (stage_width - total_sub_width_val) / sub_spacing;
};

var calculate_center_spacing = function(stage_width, sub_width, sub_stacks){
  var sub_spacing = sub_spaces(sub_stacks);
  var total_sub_width_val = total_sub_width(sub_width, sub_stacks);
  var rtn_val = ((stage_width - total_sub_width_val) / sub_spacing) + parseInt(sub_width);
  return isNaN(rtn_val) ? 0 : rtn_val
};

document.querySelector(".submit").addEventListener("click", function(e){
  e.preventDefault();
  var stage_width = document.querySelector("input[name='stage_width']").value;
  var sub_width = document.querySelector("input[name='sub_width']").value;
  var sub_stacks = document.querySelector("input[name='sub_stacks']").value;
  var spacing_val = calculate_spacing(stage_width, sub_width, sub_stacks);
  var center_spacing_val = calculate_center_spacing(stage_width, sub_width, sub_stacks);
  var starting_point = get_starting_point(sub_width);
  var output = spacing_val + "\""
      output += "<br/>"
      output += center_spacing_val + "\" (center to center)"
      output += "<br/>"
      output += "First center point " + starting_point +"\""
  document.querySelector(".answer").innerHTML = output;
});
