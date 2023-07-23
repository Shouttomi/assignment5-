import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Checknew = () => {
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
   
  });

  const [toggle, setToggle] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleCheckboxChange1 = (e) => {
    if (e.target.checked === true) {
      setCheckedItems((previtems) => {
        const obj2 = {};
        for (let key in previtems) {
          if (previtems.hasOwnProperty(key)) {
            obj2[key] = true;
          }
        }
        return obj2;
      });
    } else {
      setCheckedItems((previtems) => {
        const obj2 = {};
        for (let key in previtems) {
          if (previtems.hasOwnProperty(key)) {
            obj2[key] = false;
          }
        }
        return obj2;
      });
    }
  };

  const helperToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const countAllSubitems = () => {
    let count = 0;
    for (let key in checkedItems) {
        
      if (key !== "item1" && checkedItems.hasOwnProperty(key)) {
        
        count++;
      }
    }
    return count;
  };

  return (
    <div>
      
      <ul style={{ listStyle: "none", padding: 0 }}>
        
        <FormGroup>
          <li>
          <button onClick={helperToggle}> {!toggle?<AddIcon></AddIcon>:<RemoveIcon></RemoveIcon>}</button>
            <FormControlLabel
              control={
                <Checkbox
                  id="item1"
                  name="item1"
                  value="Item 1"
                  checked={checkedItems.item1}
                  onChange={handleCheckboxChange1}
                />
              }
              label="Item 1"
            />
            <div style={{display:'inline', paddingTop:'2px'}}>{countAllSubitems()}</div>

            
            {toggle && (
              <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
                <li>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="subitem1"
                        name="item2"
                        value="Sub Item 1"
                        checked={checkedItems.item2}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Sub item1"
                  />
                </li>
                <li>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="subitem2"
                        name="item3"
                        value="Sub Item 2"
                        checked={checkedItems.item3}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Sub item2"
                  />
                </li>
                <li>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="subitem3"
                        name="item4"
                        value="Sub Item 3"
                        checked={checkedItems.item4}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Sub item3"
                  />
                </li>
              </ul>
            )}
          </li>
        </FormGroup>
      </ul>
    </div>
  );
};

export default Checknew;
